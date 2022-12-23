const h = [
  "/_app/immutable/assets/_layout-e78bfeea.css",
  "/_app/immutable/modules/pages/_layout.ts-9cbb603b.js",
  "/_app/immutable/chunks/_layout-da46b06b.js",
  "/_app/immutable/chunks/1-882115c2.js",
  "/_app/immutable/components/error.svelte-5cd9e4f7.js",
  "/_app/immutable/chunks/singletons-705c0dc0.js",
  "/_app/immutable/chunks/0-3db39ee3.js",
  "/_app/immutable/chunks/2-e0d19f07.js",
  "/_app/immutable/components/pages/_layout.svelte-870ae768.js",
  "/_app/immutable/chunks/index-d7640e14.js",
  "/_app/immutable/components/pages/_page.svelte-70ef388f.js",
  "/_app/immutable/start-fd8307f5.js"
], u = [
  "/180.png",
  "/favicon.png",
  "/manifest.json"
], o = "1671641906759", a = self, i = `cache${o}`, p = `offline${o}`, m = ["/"], f = [
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap",
  "https://unpkg.com/ress/dist/ress.min.css",
  "https://fonts.gstatic.com/s/inter/v11/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2"
], d = (s) => s.map((t) => self.location.origin + t), _ = d([
  ...u.filter((s) => !/\/icons\/(apple.*?|original.png)/.test(s)),
  ...h,
  ...m
]), r = [..._, ...f], b = new Set(r);
a.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(i).then((t) => t.addAll(r)).then(() => {
      a.skipWaiting();
    })
  );
});
a.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (t) => {
      for (const e of t)
        e !== i && e !== p && await caches.delete(e);
      a.clients.claim();
    })
  );
});
async function g(s) {
  const t = await caches.open(p);
  try {
    const e = await fetch(s);
    return t.put(s, e.clone()), e;
  } catch (e) {
    const c = await t.match(s);
    if (c)
      return c;
    throw e;
  }
}
a.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const t = new URL(s.request.url), e = t.protocol.startsWith("http"), c = t.hostname === self.location.hostname && t.port !== self.location.port, n = b.has(t.href), l = s.request.cache === "only-if-cached" && !n;
  e && !c && !l && s.respondWith(
    (async () => n && await caches.match(s.request) || g(s.request))()
  );
});
