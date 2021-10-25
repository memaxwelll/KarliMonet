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
        }
      })());
    }
  });
  