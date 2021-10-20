const version = 2;
let STATIC_CACHE = "static_cache_v" + version;
let DYNAMIC_CACHE = "dynamic-cache";

let staticFiles = [
  "/",
  "/index.html",
  "/images/logo_fav.png",
  "/images/loader.gif",
  "/images/BIT-Mesra-logo.jpg",
  "/static/js/0.chunk.js",
  "/static/js/main.chunk.js",
  "/static/js/bundle.js",
  "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
  "https://code.jquery.com/jquery-3.2.1.slim.min.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(staticFiles);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => {
            return key !== STATIC_CACHE && key != DYNAMIC_CACHE;
          })
          .map((key) => {
            return caches.delete(key);
          })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // add response in cache
        let responseClone = response.clone();
        caches.open(DYNAMIC_CACHE).then((cache) => {
          cache.put(event.request, responseClone).catch((err) => {});
        });
        return response;
      })
      .catch(() => {
        // if cache exist send it or send new response
        return caches
          .match(event.request)
          .then((cached) => {
            if (cached) return cached;
            throw new Error();
          })
          .catch(() => {
            return new Response("<h1>Service Unavailable</h1>", {
              status: 503,
              statusText: "Service Unavailable",
              headers: new Headers({
                "Content-Type": "text/html",
              }),
            });
          });
      })
  );
});
