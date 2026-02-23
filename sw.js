const CACHE_NAME = 'exec-engine-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// نصب سرویس ورکر و کش کردن فایل‌ها
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// مدیریت درخواست‌ها (استفاده از کش در صورت نبود اینترنت)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
