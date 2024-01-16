const NEW_DOMAIN = 'https://data.beeldengeluid.nl'
const PREFIX_REWRITES = new Map([
  ['/apis', '/apis'],
  ['/blogs', '/showcases'],
  ['/datasets', '/datasets'],
])

export default defineNuxtRouteMiddleware((to) => {
  // path without locale
  const canonicalPath = to.fullPath.replace(/^\/nl/, '')

  // rewrite path using all prefix rewrites
  const rewrittenPath = Array.from(PREFIX_REWRITES.keys()).reduce(
    (prev, cur) =>
      prev.replace(RegExp(`^${cur}`), PREFIX_REWRITES.get(cur) || cur),
    canonicalPath
  )

  // check if we need to redirect this rewritten path
  const needsRedirect =
    canonicalPath == '/' ||
    [...PREFIX_REWRITES.keys()].some((prefix) =>
      canonicalPath.startsWith(prefix)
    )

  return needsRedirect
    ? navigateTo(new URL(rewrittenPath, NEW_DOMAIN).href, {
        redirectCode: 301,
        external: true,
      })
    : undefined
})
