var cacheName = 'zscore.be';
var filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/sw.js',
  '/js/main.js',
  '/js/lmsfuns.js',
  '/images/logo/kuleuven.svg',
  '/images/logo/vwvj.svg'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
