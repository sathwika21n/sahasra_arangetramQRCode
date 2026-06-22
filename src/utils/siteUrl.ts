/** Public URL guests land on when they scan the printed QR code. */
export function getProgramUrl(): string {
  const configured = import.meta.env.VITE_SITE_URL?.trim()
  if (configured) {
    const url = configured.replace(/\/$/, '')
    return url.endsWith('/program') ? url : `${url}/program`
  }

  if (typeof window !== 'undefined') {
    return `${window.location.origin}/program`
  }

  return '/program'
}
