var CACHE_NAME = 'v1';
var urlsToCache = [
    '/',
    '/index.html',
    '/dist/bundle.main.js',
    '/dist/bundle.vendor.js'
];

self.addEventListener('install', function(event) {
    console.log('V1 installing');

    event.waitUntil(
        caches.open(CACHE_NAME)
          .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
          }).catch(err => {
              console.dir(err);
          })
    )
});

self.addEventListener('activate', function(event) {

});

self.addEventListener('fetch', function(event) {
    console.log("Fetching cache");
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }

                return fetch(event.request).then(
                    function(response) {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        var responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            })
                        return response;
                    }
                );
            })
    )
});