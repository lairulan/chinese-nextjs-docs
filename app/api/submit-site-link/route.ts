import { NextResponse } from 'next/server';
// import whois from 'whois-json';
import { Resend } from 'resend';
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';
import { headers } from 'next/headers';

const REDIS_SITE_LINK_KEY = 'site-link';
const REDIS_SITE_LINK_RATE_LIMIT_KEY = 'site-link-ratelimit';
const DAY_MAX_SUBMISSIONS = parseInt(process.env.DAY_MAX_SUBMISSIONS || '5');

// 初始化 Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// 初始化 Redis
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// 创建速率限制器
const limiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(DAY_MAX_SUBMISSIONS, '24h'), // 每24小时最多2次请求
  prefix: REDIS_SITE_LINK_RATE_LIMIT_KEY,
});

// URL 验证正则
const URL_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
// 邮箱验证正则
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 垃圾链接检查
const SPAM_KEYWORDS = ['casino', 'poker', 'viagra', 'loan', 'crypto', 'sex', 'xxx'];

// 更新网站分类验证
const VALID_CATEGORIES = ['tech-blog', 'templates', 'tech-docs', 'component-libs'];

export async function POST(request: Request) {
  try {
    const headersList = headers();
    const ip = headersList.get('x-real-ip') ||
      headersList.get('x-forwarded-for') ||
      'unknown';

    // 1. 速率限制检查
    const { success: rateLimitSuccess } = await limiter.limit(ip);
    if (!rateLimitSuccess) {
      return NextResponse.json(
        { error: '提交太频繁，请稍后再试' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { siteName, siteCategory, siteUrl, description, tags, email } = body;

    // 2. 基础验证
    if (!siteName?.trim() || !siteUrl?.trim() || !description?.trim() ||
      !siteCategory?.trim()) {
      return NextResponse.json(
        { error: '必填字段不能为空' },
        { status: 400 }
      );
    }

    // 3. 分类验证
    if (!VALID_CATEGORIES.includes(siteCategory)) {
      return NextResponse.json(
        { error: '无效的网站分类' },
        { status: 400 }
      );
    }

    // 4. URL 格式验证
    if (!URL_REGEX.test(siteUrl)) {
      return NextResponse.json(
        { error: '请输入有效的网站链接' },
        { status: 400 }
      );
    }

    // 5. 邮箱格式验证
    if (email && !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: '请输入有效的邮箱地址' },
        { status: 400 }
      );
    }

    // 6. 内容长度限制
    if (siteName.length > 50 || description.length > 200 ||
      email.length > 50 || (tags && tags.length > 100)) {
      return NextResponse.json(
        { error: '输入内容超出长度限制' },
        { status: 400 }
      );
    }

    // 7. 垃圾内容检查
    const contentToCheck = (siteName + siteUrl + description + email + tags).toLowerCase();
    if (SPAM_KEYWORDS.some(keyword => contentToCheck.includes(keyword))) {
      return NextResponse.json(
        { error: '提交内容包含不允许的关键词' },
        { status: 400 }
      );
    }

    // 8. 检查是否重复提交
    const submissionKey = `${REDIS_SITE_LINK_KEY}:${siteUrl}`;
    const existingSubmission = await redis.get(submissionKey);
    if (existingSubmission) {
      return NextResponse.json(
        { error: '该网站已经提交过了' },
        { status: 400 }
      );
    }

    // // 9. 检查域名年龄（可选）
    // try {
    //   const domainAge = await checkDomainAge(siteUrl);
    //   if (domainAge < 30) { // 域名注册少于30天
    //     return NextResponse.json(
    //       { error: '网站域名太新，请等待一段时间后再提交' },
    //       { status: 400 }
    //     );
    //   }
    // } catch (error) {
    //   console.error('Domain age check failed:', error);
    // }

    // 9. 记录提交信息到Redis
    await redis.setex(submissionKey, 86400 * 30, JSON.stringify({
      siteName,
      siteCategory,
      siteUrl,
      description,
      tags,
      email,
      submittedAt: new Date().toISOString(),
      ip
    }));

    // 10. 发送邮件通知
    await resend.emails.send({
      from: 'hi@nextjscn.org',
      to: process.env.ADMIN_EMAIL!,
      subject: '新的网站申请',
      html: `
        <h2>收到新的网站申请</h2>
        <p><strong>网站名称：</strong> ${siteName}</p>
        <p><strong>网站分类：</strong> ${siteCategory}</p>
        <p><strong>网站链接：</strong> ${siteUrl}</p>
        <p><strong>网站描述：</strong> ${description}</p>
        <p><strong>网站标签：</strong> ${tags || '无'}</p>
        <p><strong>联系邮箱：</strong> ${email}</p>
        <hr>
        <p><strong>提交IP：</strong> ${ip}</p>
        <p><strong>提交时间：</strong> ${new Date().toLocaleString()}</p>
        <p><a href="${siteUrl}" target="_blank">点击访问申请网站</a></p>
        <p>快速操作：</p>
        <ul>
          <li><a href="${process.env.ADMIN_URL}/approve?url=${encodeURIComponent(siteUrl)}">批准申请</a></li>
          <li><a href="${process.env.ADMIN_URL}/reject?url=${encodeURIComponent(siteUrl)}">拒绝申请</a></li>
        </ul>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('网站提交失败:', error);
    return NextResponse.json(
      { error: '服务器处理请求失败' },
      { status: 500 }
    );
  }
}
