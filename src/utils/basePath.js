export function getBasePath() {
  if (typeof window === 'undefined') return './'

  const { pathname } = window.location
  if (!pathname) return './'

  return pathname.endsWith('/')
    ? pathname
    : pathname.replace(/\/[^/]*$/, '/')
}

export function assetUrl(relativePath) {
  const base = getBasePath()
  const clean = String(relativePath).replace(/^\/+/, '')
  return `${base}${clean}`
}

