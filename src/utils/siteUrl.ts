/** Public URL guests land on when they scan the printed QR code. */
export function getProgramUrl(): string {
  const configured = import.meta.env.VITE_SITE_URL?.trim()
  if (configured) {
    return configured.replace(/\/$/, '')
  }

  if (typeof window !== 'undefined') {
    return window.location.href.split('#')[0].replace(/\/$/, '')
  }

  return '/'
}
