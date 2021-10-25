const CACHE_NAME = 'offline';

self.addEventListener('activate', (event) => {
  console.log('[SW] Active');
  event.waitUntil((async () => {
    // Enable navigation preload if it's supported.
    // See https://developers.google.com/web/updates/2017/02/navigation-preload
    if ('navigationPreload' in self.registration) {
      await self.registration.navigationPreload.enable();
    }
  })());

  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    console.log('[SW] grab', event.request.url);
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResponse = await event.preloadResponse;
        if (preloadResponse) {
          return preloadResponse;
        }

        const networkResponse = await fetch(event.request);
        return networkResponse;
      } catch (error) {
        console.log('[SW] grab failed', error);

        const cache = await caches.open(CACHE_NAME);
        return cachedResponse;
      }
    })());
  }
});
