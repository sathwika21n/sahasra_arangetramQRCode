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
  const configuredBase = import.meta.env.VITE_SITE_URL?.trim()
  const baseUrl = configuredBase || import.meta.env.BASE_URL?.trim() || '/'

  let resolvedBase = baseUrl

  if (!configuredBase && typeof window !== 'undefined') {
    const currentPath = window.location.pathname.replace(/\/$/, '')
    const pathnameBase = currentPath && currentPath !== '/' ? currentPath : '/'
    resolvedBase = baseUrl === '/' && pathnameBase !== '/' ? pathnameBase : baseUrl
  }

  if (/^https?:\/\//i.test(resolvedBase)) {
    return new URL(normalizedPath, resolvedBase.endsWith('/') ? resolvedBase : `${resolvedBase}/`).toString()
  }

  const sanitizedBase = resolvedBase === '/' ? '' : resolvedBase.replace(/\/$/, '')
  return `${sanitizedBase}/${normalizedPath}`.replace(/\/\/+/g, '/')
}
