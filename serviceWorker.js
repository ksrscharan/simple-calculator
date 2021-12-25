const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "./index.html",
  "./css/style.css",
  "./js/script.js",
  "./img/favicon.png",
  "./manifest.json",
  
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })