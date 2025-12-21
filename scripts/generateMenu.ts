const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

interface MenuItem {
  label: string
  href: string
  isGroup?: boolean
  children?: MenuItem[]
  version?: string
}

function removeNumberPrefix(str: string): string {
  return str.replace(/^\d+-/, '')
}

function formatLabel(str: string): string {
  // 先移除数字前缀
  str = removeNumberPrefix(str)
  // 将横杠分隔的单词转换为空格分隔，并将每个单词首字母大写
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function getMdxFiles(dir: string, parentPath: string = ''): MenuItem[] {
  const items: MenuItem[] = []
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      // 检查目录内容
      const subFiles = fs.readdirSync(filePath)
      const hasMdxFiles = subFiles.filter(f => f.endsWith('.mdx'))
      const hasSubDirs = subFiles.filter(f => fs.statSync(path.join(filePath, f)).isDirectory())

      // 获取 index.mdx 的 slug 作为目录的 href
      let href = ''
      let version = undefined
      const indexPath = path.join(filePath, 'index.mdx')
      if (fs.existsSync(indexPath)) {
        const indexContents = fs.readFileSync(indexPath, 'utf-8')
        const { data } = matter(indexContents)
        if (data.slug) {
          href = data.slug
          version = data.version
        } else {
          console.warn(`Missing slug in ${indexPath}`)
          continue
        }
      }

      // 如果目录只包含一个 index.mdx 文件且没有子目录
      if (hasMdxFiles.length === 1 && hasMdxFiles[0] === 'index.mdx' && hasSubDirs.length === 0) {
        items.push({
          label: formatLabel(file),
          href,
          version
        })
        continue
      }

      // 处理其他情况
      let label = formatLabel(file)
      try {
        const metaPath = path.join(filePath, '_meta.json')
        if (fs.existsSync(metaPath)) {
          const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'))
          label = meta.title || label
        }
      } catch (e) {
        console.warn(`Failed to read _meta.json for ${file}`)
      }

      const children = getMdxFiles(filePath, href)
      if (children.length) {
        items.push({
          label,
          href,
          isGroup: true,
          children,
          version
        })
      }
    } else if (file.endsWith('.mdx') && file !== 'index.mdx') {
      const fileContents = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(fileContents)

      if (!data.title || !data.slug) {
        console.warn(`Missing title or slug in ${filePath}`)
        continue
      }

      items.push({
        label: data.nav_title || data.title,
        href: data.slug,
        version: data.version
      })
    }
  }

  return items
}

function generateMenuFiles(baseDir: string) {
  // 生成不同的链接组
  // const docsLinks = getMdxFiles(path.join(baseDir))
  const appStartedLinks = getMdxFiles(path.join(baseDir, '01-app/01-getting-started'))
  const appGuidesLinks = getMdxFiles(path.join(baseDir, '01-app/02-guides'))
  const appApiLinks = getMdxFiles(path.join(baseDir, '01-app/05-api-reference'))
  const pagesStartedLinks = getMdxFiles(path.join(baseDir, '02-pages/01-getting-started'))
  const pagesGuidesLinks = getMdxFiles(path.join(baseDir, '02-pages/02-guides'))
  const pagesBuildLinks = getMdxFiles(path.join(baseDir, '02-pages/03-building-your-application'))
  const pagesApiLinks = getMdxFiles(path.join(baseDir, '02-pages/04-api-reference'))
  const architectureLinks = getMdxFiles(path.join(baseDir, '03-architecture'))
  const communityLinks = getMdxFiles(path.join(baseDir, '04-community'))

  // 生成各个链接组的配置文件
  let content = `// npx ts-node scripts/generateMenu.ts` + '\n'
  content += `// This file is auto-generated. Do not edit manually.` + '\n'
  content += `
  export const docsLink = ${JSON.stringify({
    label: "Docs",
    href: "/docs",
    isGroup: true,
    children: []
  }, null, 2)};

  export const appStartedLinks = ${JSON.stringify({
    label: "Getting Started",
    href: "/docs/app/getting-started",
    isGroup: true,
    children: appStartedLinks
  }, null, 2)};

export const appGuidesLinks = ${JSON.stringify({
    label: "Guides",
    href: "/docs/app/guides",
    isGroup: true,
    children: appGuidesLinks
  }, null, 2)};

export const appApiLinks = ${JSON.stringify({
    label: "API Reference",
    href: "/docs/app/api-reference",
    isGroup: true,
    children: appApiLinks
  }, null, 2)};

export const pagesStartedLinks = ${JSON.stringify({
    label: "Getting Started",
    href: "/docs/pages/getting-started",
    isGroup: true,
    children: pagesStartedLinks
  }, null, 2)};

export const pagesGuidesLinks = ${JSON.stringify({
    label: "Getting Started",
    href: "/docs/pages/guides",
    isGroup: true,
    children: pagesGuidesLinks
  }, null, 2)};

export const pagesBuildLinks = ${JSON.stringify({
    label: "Building Your Application",
    href: "/docs/pages/building-your-application",
    isGroup: true,
    children: pagesBuildLinks
  }, null, 2)};

export const pagesApiLinks = ${JSON.stringify({
    label: "API Reference",
    href: "/docs/pages/api-reference",
    isGroup: true,
    children: pagesApiLinks
  }, null, 2)};

export const architectureLinks = ${JSON.stringify({
    label: "Architecture",
    href: "/docs/architecture",
    isGroup: true,
    children: architectureLinks
  }, null, 2)};

export const communityLinks = ${JSON.stringify({
    label: "Community",
    href: "/docs/community",
    isGroup: true,
    children: communityLinks
  }, null, 2)};`

  fs.writeFileSync(
    path.join(process.cwd(), 'config/menuLink.ts'),
    content
  )
}

// 执行生成
const contentDir = path.join(process.cwd(), 'content')
generateMenuFiles(contentDir)