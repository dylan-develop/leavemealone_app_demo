'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "dd490e187be709a54d2b7e136bf92535",
"index.html": "2884d4de10409d6881cb156bc8d5110c",
"/": "2884d4de10409d6881cb156bc8d5110c",
"main.dart.js": "e8718cf117e0834e84db7f80460dfe13",
"favicon.png": "07e710b4dd00b7182a189a735988b7be",
"icons/icon-192.png": "4ed2f56c52cb6896ef87886029802fdd",
"icons/icon-maskable-192.png": "4ed2f56c52cb6896ef87886029802fdd",
"icons/icon-maskable-512.png": "86753536d679d203efbe749b97745f90",
"icons/icon-512.png": "86753536d679d203efbe749b97745f90",
"manifest.json": "23ed6b1358a1ea1b5beb89d540732e29",
"assets/AssetManifest.json": "b5e3d2cd9c3d34680fc1fcabbf5aea9c",
"assets/NOTICES": "40e4040b09209947657c78efa9b2afd5",
"assets/FontManifest.json": "a6e489606bd80787d10aa400afeefc38",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/characterb.png": "579dbc50aef02e00c897b168cc3900f5",
"assets/assets/images/charactera.png": "0dbf7ccec319b17a1fdb8d56430e2646",
"assets/assets/images/character3.png": "513b42b25c732fe11dcbaa380ebf93ee",
"assets/assets/images/social_distance_block.gif": "6069bb922f47eaaef2f203839ba77d40",
"assets/assets/images/mask.gif": "69b3396c502d14a86c5cb588e337a1c1",
"assets/assets/images/character2.png": "b2033ce7291f198a4cc6758b6ec3b82a",
"assets/assets/images/character0.png": "303f98535855041ddcfcfac8a476d8f4",
"assets/assets/images/character1.png": "dc5d94d79bc153b5ef3f752c7fb9f60b",
"assets/assets/images/virus0.png": "0050dbcff0dc53346ba7f5758dd41307",
"assets/assets/images/character0_blink.gif": "f3c4d38d1cc9b8b421a28fcf22287c61",
"assets/assets/images/social_distance_block.png": "85c6031d4f668b7b4847dde463362530",
"assets/assets/images/mask.png": "dfd0f45757929f742bcb4ba48d62b9f5",
"assets/assets/images/character0.gif": "37971dc442d0fa4b7c10a139a270594a",
"assets/assets/icons/arrow.svg": "658a53041716f673e6a2433199779f29",
"assets/assets/icons/delete.svg": "ee636d803af4ce15a6e8255d0521594b",
"assets/assets/icons/menu.svg": "74a9d3e02eab021af54a219b19280368",
"assets/assets/fonts/thinkbig.ttf": "7a983be604cd23713cc4bed945dca39f",
"assets/assets/fonts/handwriting.ttf": "ca684df3afdd94680ec5b7e101dcdfaa"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
