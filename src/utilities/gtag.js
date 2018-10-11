export function gtag() {
  if (typeof window !== undefined || !window) return;

  if (!window.dataLayer) {
    window.dataLayer = window.dataLayer || [];
  }

  window.dataLayer.push(arguments);
}
