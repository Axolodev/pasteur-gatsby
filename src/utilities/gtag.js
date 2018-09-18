export function gtag() {
  if(!window) return;

  if(!window.dataLayer) {
    window.dataLayer = window.dataLayer || [];
  }

  dataLayer.push(arguments);
}