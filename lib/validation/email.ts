const DISPOSABLE_EMAIL_DOMAINS = [
  'tempmail.com',
  'throwawaymail.com',
  'tempmail100.com'
];

export type EmailValidationError =
  | 'invalid_email_format'
  | 'email_part_too_long'
  | 'disposable_email_not_allowed'
  | 'invalid_characters';

const EMAIL_REGEX = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;

export function validateEmail(email: string): {
  isValid: boolean;
  error?: string;
} {
  // 基础格式验证
  if (!EMAIL_REGEX.test(email)) {
    return {
      isValid: false,
      error: 'invalid_email_format'
    };
  }

  // 检查域名长度
  const [localPart, domain] = email.split('@');
  if (domain.length > 255 || localPart.length > 64) {
    return {
      isValid: false,
      error: 'email_part_too_long'
    };
  }

  // 检查是否是一次性邮箱
  if (DISPOSABLE_EMAIL_DOMAINS.includes(domain.toLowerCase())) {
    return {
      isValid: false,
      error: 'disposable_email_not_allowed'
    };
  }

  // 检查特殊字符
  if (/[<>()[\]\\.,;:\s@"]+/.test(localPart)) {
    return {
      isValid: false,
      error: 'invalid_characters'
    };
  }

  return { isValid: true };
}

// 电子邮件验证（包括别名检测）
export function normalizeEmail(email: string): string {
  if (!email) return '';

  // 转换为小写
  let normalizedEmail = email.toLowerCase();

  // 分离邮箱的本地部分和域名部分
  const [localPart, domain] = normalizedEmail.split('@');

  // 处理不同邮箱服务商的别名规则
  switch (domain) {
    case 'gmail.com':
      // 移除点号和+后缀
      const gmailBase = localPart
        .replace(/\./g, '')
        .split('+')[0];
      return `${gmailBase}@${domain}`;

    case 'outlook.com':
    case 'hotmail.com':
    case 'live.com':
      // 移除+后缀
      const microsoftBase = localPart.split('+')[0];
      return `${microsoftBase}@${domain}`;

    case 'yahoo.com':
      // 移除-后缀
      const yahooBase = localPart.split('-')[0];
      return `${yahooBase}@${domain}`;

    default:
      // 对于其他邮箱,仅移除+后缀
      const baseLocalPart = localPart.split('+')[0];
      return `${baseLocalPart}@${domain}`;
  }
}