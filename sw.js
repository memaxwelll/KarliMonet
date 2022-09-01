const cacheName = 'offline';
CacheData = ["./","./manifest.json","./index.html","./site.css","./site.js","./assets/windowdipper.mp3","./assets/sound.png","./assets/mute.png","./assets/git.png","./assets/cur.png","./assets/set.png","./assets/close.png","./assets/icons/icon.png","./assets/icons/icon192.png","./assets/icons/icon512.png","./assets/icons/iconmask.png","./assets/FG/1.gif","./assets/FG/2.gif","./assets/FG/3.gif","./assets/FG/4.gif","./assets/FG/5.gif","./assets/FG/6.gif","./assets/FG/7.gif","./assets/FG/8.gif","./assets/FG/9.gif","./assets/FG/10.gif","./assets/FG/11.gif","./assets/FG/12.gif","./assets/FG/13.gif","./assets/FG/14.gif","./assets/FG/15.gif","./assets/FG/16.gif","./assets/FG/17.gif","./assets/FG/18.gif","./assets/FG/19.gif","./assets/FG/20.gif","./assets/FG/21.gif","./assets/FG/22.gif","./assets/FG/23.gif","./assets/FG/24.gif","./assets/FG/25.gif","./assets/FG/26.gif","./assets/FG/27.gif","./assets/FG/28.gif","./assets/FG/29.gif","./assets/FG/30.gif","./assets/FG/31.gif","./assets/FG/32.gif","./assets/FG/33.gif","./assets/FG/34.gif","./assets/FG/35.gif","./assets/FG/36.gif","./assets/FG/37.gif","./assets/FG/38.gif","./assets/FG/39.gif","./assets/FG/40.gif","./assets/FG/41.gif","./assets/FG/42.gif","./assets/FG/43.gif","./assets/FG/44.gif","./assets/FG/45.gif","./assets/FG/46.gif","./assets/FG/47.gif","./assets/FG/48.gif","./assets/FG/49.gif","./assets/FG/50.gif","./assets/FG/51.gif","./assets/FG/52.gif","./assets/FG/53.gif","./assets/FG/54.gif","./assets/FG/55.gif","./assets/FG/56.gif","./assets/FG/57.gif","./assets/FG/58.gif","./assets/FG/59.gif","./assets/FG/60.gif","./assets/FG/61.gif","./assets/FG/62.gif","./assets/FG/63.gif","./assets/FG/64.gif","./assets/FG/65.gif","./assets/FG/66.gif","./assets/FG/67.gif","./assets/FG/68.gif","./assets/FG/69.gif","./assets/FG/70.gif","./assets/FG/71.gif","./assets/FG/72.gif","./assets/FG/73.gif","./assets/FG/74.gif","./assets/FG/75.gif","./assets/FG/76.gif","./assets/FG/77.gif","./assets/FG/78.gif","./assets/FG/79.gif","./assets/FG/80.gif","./assets/FG/81.gif","./assets/FG/82.gif","./assets/FG/83.gif","./assets/FG/84.gif","./assets/FG/85.gif","./assets/FG/86.gif","./assets/FG/87.gif","./assets/FG/88.gif","./assets/FG/89.gif","./assets/FG/90.gif","./assets/FG/91.gif","./assets/FG/92.gif","./assets/FG/93.gif","./assets/FG/94.gif","./assets/FG/95.gif","./assets/FG/96.gif","./assets/FG/97.gif","./assets/FG/98.gif","./assets/FG/99.gif","./assets/FG/100.gif","./assets/FG/101.gif","./assets/FG/102.gif","./assets/FG/103.gif","./assets/FG/104.gif","./assets/FG/105.gif","./assets/BG/1.gif","./assets/BG/2.gif","./assets/BG/3.gif","./assets/BG/4.gif","./assets/BG/5.gif","./assets/BG/6.gif","./assets/BG/7.gif","./assets/BG/8.gif","./assets/BG/9.gif","./assets/BG/10.gif","./assets/BG/11.gif","./assets/BG/12.gif","./assets/BG/13.gif","./assets/BG/14.gif","./assets/BG/15.gif","./assets/BG/16.gif","./assets/BG/17.gif","./assets/BG/18.gif","./assets/BG/19.gif","./assets/BG/20.gif","./assets/BG/21.gif","./assets/BG/22.gif","./assets/BG/23.gif","./assets/BG/24.gif","./assets/BG/25.gif","./assets/BG/26.gif","./assets/BG/27.gif","./assets/BG/28.gif","./assets/BG/29.gif","./assets/BG/30.gif","./assets/BG/31.gif","./assets/BG/32.gif","./assets/BG/33.gif","./assets/BG/34.gif","./assets/BG/35.gif","./assets/BG/36.gif","./assets/BG/37.gif","./assets/BG/38.gif","./assets/BG/39.gif","./assets/BG/40.gif","./assets/BG/41.gif","./assets/BG/42.gif","./assets/BG/43.gif","./assets/BG/44.gif","./assets/BG/45.gif","./assets/BG/46.gif","./assets/BG/47.gif","./assets/BG/48.gif","./assets/BG/49.gif","./assets/BG/50.gif","./assets/BG/51.gif","./assets/BG/52.gif","./assets/BG/53.gif","./assets/BG/54.gif","./assets/BG/55.gif","./assets/BG/56.gif","./assets/BG/57.gif","./assets/BG/58.gif","./assets/BG/59.gif","./assets/BG/60.gif","./assets/BG/61.gif","./assets/BG/62.gif","./assets/BG/63.gif","./assets/BG/64.gif","./assets/BG/65.gif","./assets/BG/66.gif","./assets/BG/67.gif","./assets/BG/68.gif","./assets/BG/69.gif","./assets/BG/70.gif","./assets/BG/71.gif","./assets/BG/72.gif","./assets/BG/73.gif","./assets/BG/74.gif","./assets/BG/75.gif","./assets/BG/76.gif","./assets/BG/77.gif","./assets/BG/78.gif","./assets/BG/79.gif","./assets/BG/80.gif","./assets/BG/81.gif","./assets/BG/82.gif","./assets/BG/83.gif","./assets/BG/84.gif","./assets/BG/85.gif","./assets/BG/86.gif","./assets/BG/87.gif","./assets/BG/88.gif","./assets/BG/89.gif","./assets/BG/90.gif","./assets/BG/91.gif","./assets/BG/92.gif","./assets/BG/93.gif","./assets/BG/94.gif","./assets/BG/95.gif",];

self.addEventListener('install', function(event) {
  event.waitUntil((async () => {
    caches.open(cacheName).then((cache) => cache.addAll(CacheData))
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    if ('navigationPreload' in self.registration) {
      await self.registration.navigationPreload.enable();
    }
  })());
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.waitUntil((async () => {
    try{
      event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(event.request);
        }),
      );
      }catch(err){console.error('[SW] Error: '+err)}
  })());
});
