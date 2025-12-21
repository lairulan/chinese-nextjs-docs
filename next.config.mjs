import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nextjs.org",
      },
      {
        protocol: "https",
        hostname: "assets.nextjscn.org",
      },
    ],
  },
  // 添加 redirects 配置
  async redirects() {
    return [
      {
        source: "/docs/app/getting-started/images-and-fonts",
        destination: "/docs/app/getting-started/images",
        permanent: true,
      },
      {
        source:
          "/docs/app/building-your-application/routing/linking-and-navigating",
        destination: "/docs/app/getting-started/linking-and-navigating",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/routing/route-handlers",
        destination: "/docs/app/getting-started/route-handlers",
        permanent: true,
      },
      {
        source: "/docs/app/deep-dive/caching",
        destination: "/docs/app/guides/caching",
        permanent: true,
      },
      {
        source:
          "/docs/app/building-your-application/data-fetching/incremental-static-regeneration",
        destination: "/docs/app/guides/incremental-static-regeneration",
        permanent: true,
      },
      {
        source:
          "/docs/app/building-your-application/routing/internationalization",
        destination: "/docs/app/guides/internationalization",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/routing/redirecting",
        destination: "/docs/app/guides/redirecting",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/routing/dynamic-routes",
        destination: "/docs/app/api-reference/file-conventions/dynamic-routes",
        permanent: true,
      },
      {
        source:
          "/docs/app/building-your-application/routing/intercepting-routes",
        destination:
          "/docs/app/api-reference/file-conventions/intercepting-routes",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/routing/parallel-routes",
        destination: "/docs/app/api-reference/file-conventions/parallel-routes",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/file-conventions/middleware",
        destination: "/docs/app/api-reference/file-conventions/proxy",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/routing/route-groups",
        destination: "/docs/app/api-reference/file-conventions/route-groups",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/config/next-config-js/dynamicIO",
        destination: "/docs/app",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/config/next-config-js/eslint",
        destination: "/docs/app/api-reference/config/eslint",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/config/next-config-js/ppr",
        destination: "/docs/app",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/config/next-config-js/useCache",
        destination: "/docs/app",
        permanent: true,
      },
      {
        source:
          "/docs/app/building-your-application/routing/layouts-and-templates",
        destination: "/docs/app",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/routing/error-handling",
        destination: "/docs/app/getting-started/error-handling",
        permanent: true,
      },
      {
        source:
          "/docs/app/building-your-application/routing/loading-ui-and-streaming",
        destination: "/docs/app",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/routing/middleware",
        destination: "/docs/app/api-reference/file-conventions/proxy",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/routing",
        destination: "/docs/app",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/data-fetching/fetching",
        destination: "/docs/app/getting-started/fetching-data",
        permanent: true,
      },
      {
        source:
          "/docs/app/building-your-application/data-fetching/server-actions-and-mutations",
        destination: "/docs/app",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/data-fetching",
        destination: "/docs/app",
        permanent: true,
      },
      {
        source:
          "/docs/app/building-your-application/rendering/server-components",
        destination: "/docs/app",
        permanent: true,
      },
      {
        source:
          "/docs/app/building-your-application/rendering/client-components",
        destination: "/docs/app",
        permanent: true,
      },
      {
        source:
          "/docs/app/building-your-application/rendering/composition-patterns",
        destination: "/docs/app",
        permanent: true,
      },
      {
        source:
          "/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes",
        destination: "/docs/app",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/rendering",
        destination: "/docs/app",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/styling/css",
        destination: "/docs/app/getting-started/css",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/styling/tailwind-css",
        destination: "/docs/app/getting-started/css",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/styling",
        destination: "/docs/app",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/optimizing/images",
        destination: "/docs/app/getting-started/images",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/optimizing/fonts",
        destination: "/docs/app/getting-started/fonts",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/optimizing/metadata",
        destination: "/docs/app/getting-started/metadata-and-og-images",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/optimizing",
        destination: "/docs/app",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application",
        destination: "/docs/app",
        permanent: true,
      },
      {
        source: "/docs/app/deep-dive/caching",
        destination: "/docs/app/guides/caching",
        permanent: true,
      },
      {
        source: "/docs/app/deep-dive",
        destination: "/docs/app",
        permanent: true,
      },
      {
        source: "/docs/pages/guides/amp",
        destination: "/docs/pages",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/data-fetching",
        destination: "/docs/app/getting-started/fetching-data",
        permanent: true,
      },
      {
        source: "/docs/pages/api-reference/functions/use-amp",
        destination: "/docs/pages",
        permanent: true,
      },
      {
        source: "/docs/pages/api-reference/config/next-config-js/eslint",
        destination: "/docs/pages",
        permanent: true,
      },
      {
        source:
          "/docs/pages/api-reference/config/next-config-js/runtime-configuration",
        destination: "/docs/pages",
        permanent: true,
      },
      {
        source: "/docs/pages/api-reference/config/next-config-js/turbo",
        destination:
          "/docs/pages/api-reference/config/next-config-js/turbopack",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/styling",
        destination: "/docs/pages",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/optimizing",
        destination: "/docs/pages",
        permanent: true,
      },
      {
        source:
          "/docs/pages/building-your-application/data-fetching/incremental-static-regeneration",
        destination: "/docs/pages/guides/incremental-static-regeneration",
        permanent: true,
      },
      {
        source:
          "/docs/pages/building-your-application/rendering/edge-and-nodejs-runtimes",
        destination: "/docs/pages",
        permanent: true,
      },
      {
        source:
          "/docs/pages/building-your-application/routing/internationalization",
        destination: "/docs/app/guides/internationalization",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/routing/redirecting",
        destination: "/docs/app/guides/redirecting",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/routing/middleware",
        destination: "/docs/pages/api-reference/file-conventions/proxy",
        permanent: true,
      },
      // old
      {
        source: "/learn/:path*",
        destination: "https://nextjs.org/learn/:path*",
        permanent: false,
      },
      {
        source: "/blog/:path*",
        destination: "https://nextjs.org/blog/:path*",
        permanent: false,
      },
      {
        source: "/docs/app/examples",
        destination: "/docs/app/guides",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/caching",
        destination: "/docs/app/deep-dive/caching",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/styling/sass",
        destination: "/docs/app/guides/sass",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/styling/css-in-js",
        destination: "/docs/app/guides/css-in-js",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/optimizing/videos",
        destination: "/docs/app/guides/videos",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/optimizing/scripts",
        destination: "/docs/app/guides/scripts",
        permanent: true,
      },
      {
        source:
          "/docs/app/building-your-application/optimizing/package-bundling",
        destination: "/docs/app/guides/package-bundling",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/optimizing/lazy-loading",
        destination: "/docs/app/guides/lazy-loading",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/optimizing/analytics",
        destination: "/docs/app/guides/analytics",
        permanent: true,
      },
      {
        source:
          "/docs/app/building-your-application/optimizing/instrumentation",
        destination: "/docs/app/guides/instrumentation",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/optimizing/open-telemetry",
        destination: "/docs/app/guides/open-telemetry",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/optimizing/static-assets",
        destination: "/docs",
        permanent: true,
      },
      {
        source:
          "/docs/app/building-your-application/optimizing/third-party-libraries",
        destination: "/docs/app/guides/third-party-libraries",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/optimizing/memory-usage",
        destination: "/docs/app/guides/memory-usage",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/configuring",
        destination: "/docs",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/environment-variables",
        destination: "/docs/app/guides/environment-variables",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/configuring/mdx",
        destination: "/docs/app/guides/mdx",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/configuring/src-directory",
        destination: "/docs/app/api-reference/file-conventions/src-folder",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/configuring/custom-server",
        destination: "/docs/pages/guides/custom-server",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/configuring/draft-mode",
        destination: "/docs/app/guides/draft-mode",
        permanent: true,
      },
      {
        source:
          "/docs/app/building-your-application/configuring/content-security-policy",
        destination: "/docs/app/guides/content-security-policy",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/configuring/debugging",
        destination: "/docs/app/guides/debugging",
        permanent: true,
      },
      {
        source:
          "/docs/app/building-your-application/configuring/progressive-web-apps",
        destination: "/docs/app/guides/progressive-web-apps",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/testing",
        destination: "/docs/app/guides/testing",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/testing/vitest",
        destination: "/docs/app/guides/testing/vitest",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/testing/jest",
        destination: "/docs/app/guides/testing/jest",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/testing/playwright",
        destination: "/docs/app/guides/testing/playwright",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/testing/cypress",
        destination: "/docs/app/guides/testing/cypress",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/authentication",
        destination: "/docs/app/guides/authentication",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/deploying",
        destination: "/docs/app/getting-started/deploying",
        permanent: true,
      },
      {
        source:
          "/docs/app/building-your-application/deploying/production-checklist",
        destination: "/docs/app/guides/production-checklist",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/deploying/static-exports",
        destination: "/docs/app/guides/static-exports",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/deploying/multi-zones",
        destination: "/docs/app/guides/multi-zones",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/upgrading",
        destination: "/docs/app/getting-started/upgrading",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/upgrading/codemods",
        destination: "/docs/app/guides/upgrading/codemods",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/upgrading/canary",
        destination: "/docs",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/upgrading/version-14",
        destination: "/docs/app/guides/upgrading/version-14",
        permanent: true,
      },
      {
        source:
          "/docs/app/building-your-application/upgrading/app-router-migration",
        destination: "/docs/app/guides/migrating/app-router-migration",
        permanent: true,
      },
      {
        source:
          "/docs/app/building-your-application/upgrading/from-create-react-app",
        destination: "/docs/app/guides/migrating/from-create-react-app",
        permanent: true,
      },
      {
        source: "/docs/app/building-your-application/upgrading/from-vite",
        destination: "/docs/app/guides/migrating/from-vite",
        permanent: true,
      },
      {
        source:
          "/docs/app/building-your-application/upgrading/single-page-applications",
        destination: "/docs/app/guides/single-page-applications",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/config/next-config-js/turbo",
        destination: "/docs/app/api-reference/turbopack",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/styling/sass",
        destination: "/docs/pages/guides/sass",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/optimizing/scripts",
        destination: "/docs/pages/guides/scripts",
        permanent: true,
      },
      {
        source:
          "/docs/pages/building-your-application/optimizing/static-assets",
        destination: "/docs",
        permanent: true,
      },
      {
        source:
          "/docs/pages/building-your-application/optimizing/package-bundling",
        destination: "/docs/pages/guides/package-bundling",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/optimizing/analytics",
        destination: "/docs/pages/guides/analytics",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/optimizing/lazy-loading",
        destination: "/docs/pages/guides/lazy-loading",
        permanent: true,
      },
      {
        source:
          "/docs/pages/building-your-application/optimizing/instrumentation",
        destination:
          "/docs/pages/api-reference/file-conventions/instrumentation",
        permanent: true,
      },
      {
        source:
          "/docs/pages/building-your-application/optimizing/open-telemetry",
        destination: "/docs/pages/guides/open-telemetry",
        permanent: true,
      },
      {
        source:
          "/docs/pages/building-your-application/optimizing/third-party-libraries",
        destination: "/docs/pages/guides/third-party-libraries",
        permanent: true,
      },
      {
        source:
          "/docs/pages/building-your-application/configuring/environment-variables",
        destination: "/docs/pages/guides/environment-variables",
        permanent: true,
      },
      {
        source:
          "/docs/pages/building-your-application/configuring/src-directory",
        destination: "/docs/pages/api-reference/file-conventions/src-folder",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/configuring/mdx",
        destination: "/docs/pages/guides/mdx",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/configuring/amp",
        destination: "/docs/pages/guides/amp",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/configuring/babel",
        destination: "/docs/pages/guides/babel",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/configuring/post-css",
        destination: "/docs/pages/guides/post-css",
        permanent: true,
      },
      {
        source:
          "/docs/pages/building-your-application/configuring/custom-server",
        destination: "/docs/pages/guides/custom-server",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/configuring/draft-mode",
        destination: "/docs/pages/guides/draft-mode",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/upgrading/version-9",
        destination: "/docs/pages/guides/upgrading/version-9",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/upgrading/version-10",
        destination: "/docs/pages/guides/upgrading/version-10",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/upgrading/version-11",
        destination: "/docs/pages/guides/upgrading/version-11",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/upgrading/version-12",
        destination: "/docs/pages/guides/upgrading/version-12",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/upgrading/version-13",
        destination: "/docs/pages/guides/upgrading/version-13",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/upgrading/version-14",
        destination: "/docs/pages/guides/upgrading/version-14",
        permanent: true,
      },
      {
        source:
          "/docs/pages/building-your-application/upgrading/from-create-react-app",
        destination: "/docs/pages/guides/migrating/from-create-react-app",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/upgrading/from-vite",
        destination: "/docs/pages/guides/migrating/from-vite",
        permanent: true,
      },
      {
        source:
          "/docs/pages/building-your-application/configuring/preview-mode",
        destination: "/docs/pages/guides/preview-mode",
        permanent: true,
      },
      {
        source:
          "/docs/pages/building-your-application/configuring/content-security-policy",
        destination: "/docs/pages/guides/content-security-policy",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/configuring/debugging",
        destination: "/docs/pages/guides/debugging",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/testing",
        destination: "/docs/pages/guides/testing",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/testing/vitest",
        destination: "/docs/pages/guides/testing/vitest",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/testing/jest",
        destination: "/docs/pages/guides/testing/jest",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/testing/playwright",
        destination: "/docs/pages/guides/testing/playwright",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/testing/cypress",
        destination: "/docs/pages/guides/testing/cypress",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/authentication",
        destination: "/docs/pages/guides/authentication",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/deploying",
        destination: "/docs/pages/getting-started/deploying",
        permanent: true,
      },
      {
        source:
          "/docs/pages/building-your-application/deploying/production-checklist",
        destination: "/docs/pages/guides/production-checklist",
        permanent: true,
      },
      {
        source:
          "/docs/pages/building-your-application/deploying/static-exports",
        destination: "/docs/pages/guides/static-exports",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/deploying/multi-zones",
        destination: "/docs/pages/guides/multi-zones",
        permanent: true,
      },
      {
        source:
          "/docs/pages/building-your-application/deploying/ci-build-caching",
        destination: "/docs/pages/guides/ci-build-caching",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/upgrading",
        destination: "/docs/pages/guides/upgrading",
        permanent: true,
      },
      {
        source: "/docs/pages/building-your-application/upgrading/codemods",
        destination: "/docs/pages/guides/upgrading/codemods",
        permanent: true,
      },
      {
        source:
          "/docs/pages/building-your-application/upgrading/app-router-migration",
        destination: "/docs/pages/guides/migrating/app-router-migration",
        permanent: true,
      },
      {
        source: "/docs/getting-started/installation",
        destination: "/docs/app/getting-started/installation",
        permanent: true,
      },
      {
        source: "/docs/getting-started/project-structure",
        destination: "/docs/app/getting-started/project-structure",
        permanent: true,
      },
      {
        source: "/docs/building-your-application/routing/defining-routes",
        destination:
          "/docs/app/building-your-application/routing/defining-routes",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/appDir",
        destination: "/docs/app/api-reference/config/next-config-js/appDir",
        permanent: true,
      },
      {
        source: "/docs/pages/api-reference/next-config-js/appDir",
        destination: "/docs/pages/api-reference/config/next-config-js/appDir",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/assetPrefix",
        destination:
          "/docs/app/api-reference/config/next-config-js/assetPrefix",
        permanent: true,
      },
      {
        source: "/docs/pages/api-reference/next-config-js/assetPrefix",
        destination:
          "/docs/pages/api-reference/config/next-config-js/assetPrefix",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/basePath",
        destination: "/docs/app/api-reference/config/next-config-js/basePath",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/crossOrigin",
        destination:
          "/docs/app/api-reference/config/next-config-js/crossOrigin",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/compress",
        destination: "/docs/app/api-reference/config/next-config-js/compress",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/cssChunking",
        destination:
          "/docs/app/api-reference/config/next-config-js/cssChunking",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/devIndicators",
        destination:
          "/docs/app/api-reference/config/next-config-js/devIndicators",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/distDir",
        destination: "/docs/app/api-reference/config/next-config-js/distDir",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/dynamicIO",
        destination: "/docs/app/api-reference/config/next-config-js/dynamicIO",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/env",
        destination: "/docs/app/api-reference/config/next-config-js/env",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/eslint",
        destination: "/docs/app/api-reference/config/next-config-js/eslint",
        permanent: true,
      },
      {
        source: "/docs/pages/api-reference/next-config-js/eslint",
        destination: "/docs/pages/api-reference/config/next-config-js/eslint",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/expireTime",
        destination: "/docs/app/api-reference/config/next-config-js/expireTime",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/exportPathMap",
        destination:
          "/docs/app/api-reference/config/next-config-js/exportPathMap",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/generateBuildId",
        destination:
          "/docs/app/api-reference/config/next-config-js/generateBuildId",
        permanent: true,
      },
      {
        source: "/docs/pages/api-reference/next-config-js/generateBuildId",
        destination:
          "/docs/pages/api-reference/config/next-config-js/generateBuildId",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/generateEtags",
        destination:
          "/docs/app/api-reference/config/next-config-js/generateEtags",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/headers",
        destination: "/docs/app/api-reference/config/next-config-js/headers",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/httpAgentOptions",
        destination:
          "/docs/app/api-reference/config/next-config-js/httpAgentOptions",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/images",
        destination: "/docs/app/api-reference/config/next-config-js/images",
        permanent: true,
      },
      {
        source:
          "/docs/app/api-reference/next-config-js/incrementalCacheHandlerPath",
        destination:
          "/docs/app/api-reference/config/next-config-js/incrementalCacheHandlerPath",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/logging",
        destination: "/docs/app/api-reference/config/next-config-js/logging",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/mdxRs",
        destination: "/docs/app/api-reference/config/next-config-js/mdxRs",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/onDemandEntries",
        destination:
          "/docs/app/api-reference/config/next-config-js/onDemandEntries",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/optimizePackageImports",
        destination:
          "/docs/app/api-reference/config/next-config-js/optimizePackageImports",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/output",
        destination: "/docs/app/api-reference/config/next-config-js/output",
        permanent: true,
      },
      {
        source: "/docs/pages/api-reference/next-config-js/output",
        destination: "/docs/pages/api-reference/config/next-config-js/output",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/pageExtensions",
        destination:
          "/docs/app/api-reference/config/next-config-js/pageExtensions",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/poweredByHeader",
        destination:
          "/docs/app/api-reference/config/next-config-js/poweredByHeader",
        permanent: true,
      },
      {
        source: "/docs/pages/api-reference/next-config-js/poweredByHeader",
        destination:
          "/docs/pages/api-reference/config/next-config-js/poweredByHeader",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/ppr",
        destination: "/docs/app/api-reference/config/next-config-js/ppr",
        permanent: true,
      },
      {
        source:
          "/docs/app/api-reference/next-config-js/productionBrowserSourceMaps",
        destination:
          "/docs/app/api-reference/config/next-config-js/productionBrowserSourceMaps",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/reactCompiler",
        destination:
          "/docs/app/api-reference/config/next-config-js/reactCompiler",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/reactMaxHeadersLength",
        destination:
          "/docs/app/api-reference/config/next-config-js/reactMaxHeadersLength",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/reactStrictMode",
        destination:
          "/docs/app/api-reference/config/next-config-js/reactStrictMode",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/redirects",
        destination: "/docs/app/api-reference/config/next-config-js/redirects",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/rewrites",
        destination: "/docs/app/api-reference/config/next-config-js/rewrites",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/sassOptions",
        destination:
          "/docs/app/api-reference/config/next-config-js/sassOptions",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/staticGeneration",
        destination:
          "/docs/app/api-reference/config/next-config-js/staticGeneration",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/serverActions",
        destination:
          "/docs/app/api-reference/config/next-config-js/serverActions",
        permanent: true,
      },
      {
        source:
          "/docs/app/api-reference/next-config-js/serverComponentsHmrCache",
        destination:
          "/docs/app/api-reference/config/next-config-js/serverComponentsHmrCache",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/staleTimes",
        destination: "/docs/app/api-reference/config/next-config-js/staleTimes",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/serverExternalPackages",
        destination:
          "/docs/app/api-reference/config/next-config-js/serverExternalPackages",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/trailingSlash",
        destination:
          "/docs/app/api-reference/config/next-config-js/trailingSlash",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/transpilePackages",
        destination:
          "/docs/app/api-reference/config/next-config-js/transpilePackages",
        permanent: true,
      },
      {
        source: "/docs/pages/api-reference/next-config-js/transpilePackages",
        destination:
          "/docs/pages/api-reference/config/next-config-js/transpilePackages",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/turbo",
        destination: "/docs/app/api-reference/config/next-config-js/turbo",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/typedRoutes",
        destination:
          "/docs/app/api-reference/config/next-config-js/typedRoutes",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/typescript",
        destination: "/docs/app/api-reference/config/next-config-js/typescript",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/urlImports",
        destination: "/docs/app/api-reference/config/next-config-js/urlImports",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/useLightningcss",
        destination:
          "/docs/app/api-reference/config/next-config-js/useLightningcss",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/webpack",
        destination: "/docs/app/api-reference/config/next-config-js/webpack",
        permanent: true,
      },
      {
        source: "/docs/pages/api-reference/next-config-js/webpack",
        destination: "/docs/pages/api-reference/config/next-config-js/webpack",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/webVitalsAttribution",
        destination:
          "/docs/app/api-reference/config/next-config-js/webVitalsAttribution",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/logging",
        destination: "/docs/app/api-reference/config/next-config-js/logging",
        permanent: true,
      },
      {
        source: "/docs/app/api-reference/next-config-js/trailingSlash",
        destination:
          "/docs/app/api-reference/config/next-config-js/trailingSlash",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig);
