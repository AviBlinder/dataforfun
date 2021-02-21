//https://web.dev/customize-install/
// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);
});

window.addEventListener('appinstalled', () => {
  // Hide the app-provided install promotion
  hideInstallPromotion();
  // Clear the deferredPrompt so it can be garbage collected
  deferredPrompt = null;
  // Optionally, send analytics event to indicate successful install
  console.log('PWA was installed');
});

// 
// Caching and Fetching Cached data
// 
const cacheName = "kaldiPWA-v1";
const filesToCache = [
          '/',
          '/dist/img/',
          'https://use.fontawesome.com/releases/v5.4.1/css/all.css',
          'https://fonts.googleapis.com/css?family=Open+Sans',
          'https://unpkg.com/bulma@0.9.0/css/bulma.min.css'
];

window.addEventListener("install", function(event) {
  // Perform install steps
  console.log("[Servicework] Install");
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll(filesToCache);
    })
  );
});

window.addEventListener("activate", function(event) {
  console.log("[Servicework] Activate");
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log("[ServiceWorker] Removing old cache shell", key);
          return caches.delete(key);
        }
      }));
    })
  );
});

window.addEventListener("fetch", (event) => {
  console.log("[ServiceWorker] Fetch");
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );

})
