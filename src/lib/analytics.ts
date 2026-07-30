type AnalyticsParams = Record<string, string | number | boolean | undefined>;

/**
 * Безопасная отправка аналитического события.
 * Не блокирует основной поток.
 */
export function track(eventName: string, params?: AnalyticsParams): void {
  if (typeof window === 'undefined') return;

  const payload = { event: eventName, ...params };

  // Plausible / custom endpoint пример:
  // navigator.sendBeacon('/api/event', JSON.stringify(payload));

  // Yandex Metrika (если подключена):
  // window.ym?.(XXXXXX, 'reachGoal', eventName, params);

  // Пока — только console в dev
  if (import.meta.env.DEV) {
    console.info('[analytics]', payload);
  }

  // sendBeacon как заготовка под реальный endpoint
  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/analytics', JSON.stringify(payload));
    }
  } catch {
    // тихо игнорируем
  }
}