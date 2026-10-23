const CACHE_NAME = 'tinh-toan-v1';
const urlsToCache = [
  './index.html',
  './manifest.json'
];

// Cài đặt và cache tài nguyên
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Phục vụ tài nguyên từ cache khi không có mạng
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
