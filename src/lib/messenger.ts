export type UTM = Record<string, string | undefined>;

function appendUTM(url: URL, utm?: UTM): void {
  if (!utm) return;
  for (const [key, value] of Object.entries(utm)) {
    if (value) url.searchParams.set(key, value);
  }
}

/**
 * Собирает deep-link в WhatsApp с предзаполненным текстом и UTM.
 * @param 77055606066 — номер в формате 77001234567 (без +)
 * @param text — Здравствуйте! Кратко опишите суть вашего обращения (потом сделать анкету по е-отыншы)
 * @param utm — TG
 */
export function buildWhatsAppLink(
  phone: string,
  text: string,
  utm?: UTM
): string {
  const url = new URL(`https://wa.me/${phone.replace(/\D/g, '')}`);
  url.searchParams.set('text', text);
  appendUTM(url, utm);
  return url.toString();
}

/**
 * Собирает ссылку на Telegram.
 */
export function buildTelegramLink(usernameOrUrl: string, text?: string): string {
  const base = usernameOrUrl.startsWith('http')
    ? usernameOrUrl
    : `https://t.me/${usernameOrUrl.replace(/^@/, '')}`;

  const url = new URL(base);
  if (text) url.searchParams.set('text', text);
  return url.toString();
}