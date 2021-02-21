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

var CACHE_STATIC_NAME = 'static-v1';
var CACHE_DYNAMIC_NAME = 'dynamic-v1';

self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
//event.waitUntil will ensure that the installation step finished setting all the cache before it states that it's done
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME)
      .then(function(cache) {
        console.log('[Service Worker] Precaching App Shell');
        cache.addAll([
          '/',
          '/index.html',
          '/dist/img/',
          'https://use.fontawesome.com/releases/v5.4.1/css/all.css',
          'https://fonts.googleapis.com/css?family=Open+Sans',
          'https://unpkg.com/bulma@0.9.0/css/bulma.min.css'
        ]);
      })
  )
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
//if the data is cached, we fetch it.
//Otherwise we fetch data from the Network and cache it
    caches.match(event.request)
      .then(function(response) {
            //response = cached data
        if (response) {
          return response;
        } else {
            //fetch(event.request) = continue with Network request
          return fetch(event.request)
            .then(function(res) {
              return caches.open(CACHE_DYNAMIC_NAME)
                .then(function(cache) {
                  cache.put(event.request.url, res.clone());
                  return res;
                })
            })
            .catch(function(err) {

            });
        }
      })
  );
});