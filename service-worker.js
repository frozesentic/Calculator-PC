// service-worker.js
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('app-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/main.js',
          /* Add more assets to cache */
          '/icons/icon-48x48.png',
          '/icons/icon-96x96.png',
          '/icons/icon-192x192.png',
          '/icons/icon-512x512.png',
          /* Add more icon sizes if needed */
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });  