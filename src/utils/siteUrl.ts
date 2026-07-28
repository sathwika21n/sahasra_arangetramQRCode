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

export function getPublicAssetUrl(path: string): string {
  const normalizedPath = path.replace(/^\/+/, '')
  const base = import.meta.env.BASE_URL?.trim() || '/'

  if (/^https?:\/\//i.test(base)) {
    return new URL(normalizedPath, base.endsWith('/') ? base : `${base}/`).toString()
  }

  const resolvedBase = base === '/' ? '' : base.replace(/\/$/, '')
  return `${resolvedBase}/${normalizedPath}`.replace(/\/\/+/g, '/')
}
