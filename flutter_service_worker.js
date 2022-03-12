'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ce7ffc648c7f5e55808dbe55009d3626",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "87bc3278b335851b74e1de51809e5057",
"index.html": "609f409e06e1e7444a89f14eb273ba26",
"/": "609f409e06e1e7444a89f14eb273ba26",
"main.dart.js": "6e4ad49d18c0ef3de34f21af837da03b",
"favicon.png": "07e710b4dd00b7182a189a735988b7be",
"icons/favicon-16x16.png": "c776e90ad4fb40ead4850f874278a863",
"icons/favicon.ico": "3817946fa2adfdee26c859ab31c34241",
"icons/apple-icon.png": "834560da34eaa028da9c030800a18027",
"icons/apple-icon-144x144.png": "60571e58ccf57b4d275d46dd7ad4b3b8",
"icons/android-icon-192x192.png": "884da3d05dcfa89c3a821ab61e515db9",
"icons/apple-icon-precomposed.png": "834560da34eaa028da9c030800a18027",
"icons/apple-icon-114x114.png": "b97f433dad1dfd2d6da9e3a2effaba48",
"icons/ms-icon-310x310.png": "0fe721188714db1f3cfb41a06266a458",
"icons/icon-192.png": "4ed2f56c52cb6896ef87886029802fdd",
"icons/icon-maskable-192.png": "4ed2f56c52cb6896ef87886029802fdd",
"icons/ms-icon-144x144.png": "60571e58ccf57b4d275d46dd7ad4b3b8",
"icons/apple-icon-57x57.png": "7e9e83eeaae9ab7cae28b431e53805ee",
"icons/apple-icon-152x152.png": "c3ba4f09cc9a9c006df960ef86499021",
"icons/ms-icon-150x150.png": "80fa103206a438dd79c72b869efbc700",
"icons/android-icon-72x72.png": "7160aa9a0b5354d4ab484331abbcee08",
"icons/android-icon-96x96.png": "8cb6e344944db5210036a9dcdbfded4a",
"icons/android-icon-36x36.png": "d40de603053c6ebe58657d5dfd9a7a7a",
"icons/apple-icon-180x180.png": "e4a95fcf93e31335511f144ae8b7a15f",
"icons/favicon-96x96.png": "8cb6e344944db5210036a9dcdbfded4a",
"icons/android-icon-48x48.png": "f43c6f99acfb223eaef736e9a0fdff23",
"icons/apple-icon-76x76.png": "d788900524e9a2b0c0da4f4f3dadefde",
"icons/apple-icon-60x60.png": "eac57683f7ba2dd1c839af8243435f4e",
"icons/icon-maskable-512.png": "86753536d679d203efbe749b97745f90",
"icons/android-icon-144x144.png": "60571e58ccf57b4d275d46dd7ad4b3b8",
"icons/apple-icon-72x72.png": "7160aa9a0b5354d4ab484331abbcee08",
"icons/apple-icon-120x120.png": "09f473d55ccb6e7c3e595a6e415f1eff",
"icons/icon-512.png": "86753536d679d203efbe749b97745f90",
"icons/favicon-32x32.png": "0b5548026d365d57fd6557bb1309f49b",
"icons/ms-icon-70x70.png": "144f221f35a765a06c66371b47f533e3",
"manifest.json": "7a69fb919c6795262a4e4a3be049a47e",
"assets/AssetManifest.json": "ec6b4403e9a627ae4959dd8227da72c0",
"assets/NOTICES": "1ab754a58ea4560a6be67d5907900c73",
"assets/FontManifest.json": "a6e489606bd80787d10aa400afeefc38",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/char_11.png": "5159cf602c8daa389d3ac75b755bb165",
"assets/assets/images/char_3_hover.gif": "d0b7bc740e6ccb251b1623850bcbaeaa",
"assets/assets/images/char_10.png": "738c43bf782ecf98497bd805ce97037a",
"assets/assets/images/char_12.png": "1dea9fc7648587c8961a838ea29cedcc",
"assets/assets/images/char_2_default.gif": "6cefae9849989bf7191a6a6574b7ae27",
"assets/assets/images/char_7_default.gif": "a56fa7914a6fff0dfd036a12fabee074",
"assets/assets/images/char_9.png": "c793dab43259acabe485e59561cdfb69",
"assets/assets/images/char_11_default.gif": "ce03eca8bb40be53a07277faac73b4ca",
"assets/assets/images/char_8.png": "c3cc2045c87dcc013f3688c86018260e",
"assets/assets/images/char_5_hover.gif": "dab9bad9ab9be205ff04620fee10495c",
"assets/assets/images/char_8_hover.gif": "e5d43dfbf7a196fa5a73a4c5e833daa3",
"assets/assets/images/char_2_hover.gif": "a87df3af4d937d1545aba9c3b4c8dea7",
"assets/assets/images/characterb.png": "579dbc50aef02e00c897b168cc3900f5",
"assets/assets/images/char_12_default.gif": "e08ab80f1508e31ef1c79d56d5df3226",
"assets/assets/images/char_12_hover.gif": "58200297382b41a4e8bc6e7c79927916",
"assets/assets/images/char_10_hover.png": "e6eebafdd87e207981d15d04c435a186",
"assets/assets/images/charactera.png": "0dbf7ccec319b17a1fdb8d56430e2646",
"assets/assets/images/char_4_default.gif": "394292d15a2e39fe820ce78f8ad2eac5",
"assets/assets/images/social_distance_block.gif": "6069bb922f47eaaef2f203839ba77d40",
"assets/assets/images/char_4_hover.gif": "c167ecb4f102f996d3bec3252b2561af",
"assets/assets/images/char_1_default.gif": "37971dc442d0fa4b7c10a139a270594a",
"assets/assets/images/mask.gif": "69b3396c502d14a86c5cb588e337a1c1",
"assets/assets/images/char_9_hover.gif": "cbf6c43d76bb8e9c1814e82e0c704ae6",
"assets/assets/images/char_8_default.gif": "1eeac67cc17acf2dc5991fdb6d2c8bcb",
"assets/assets/images/char_1_hover.gif": "3d4d6e993e421e8acf7a482b6360473f",
"assets/assets/images/char_10_default.gif": "5e681253b1719bc6dd982d066f0b98cd",
"assets/assets/images/char_6_default.gif": "0ba9dbb8088c79218b45eeba1bafc8c9",
"assets/assets/images/char_11_hover.gif": "0497d13249d97b458f02f96d9b4bd70b",
"assets/assets/images/char_7_hover.gif": "34dc32adcd11201fe0587eb88bb28f3d",
"assets/assets/images/char_3_default.gif": "2d2e0aefad8ea4ba7ad7ea117ac76471",
"assets/assets/images/virus0.png": "0050dbcff0dc53346ba7f5758dd41307",
"assets/assets/images/char_9_default.gif": "c61883bdd3c2d5849aae85d3a0003572",
"assets/assets/images/char_6.png": "ca388b2ae1b8b9a6f3e6806725bddf5b",
"assets/assets/images/char_7.png": "32a8e3654b1c4daf158e90b6e1e8e7b8",
"assets/assets/images/char_5.png": "63517e452ecd14400589c394c9db8598",
"assets/assets/images/char_4.png": "cdff64e1d1a377c41d0349d14e3803c6",
"assets/assets/images/char_6_hover.gif": "a794761544e1c797eef879f7a7d9b13c",
"assets/assets/images/char_5_default.gif": "24ecf4ea658771ca6179bfb58bad60f0",
"assets/assets/images/social_distance_block.png": "85c6031d4f668b7b4847dde463362530",
"assets/assets/images/mask.png": "dfd0f45757929f742bcb4ba48d62b9f5",
"assets/assets/images/char_1.png": "303f98535855041ddcfcfac8a476d8f4",
"assets/assets/images/char_3.png": "b2033ce7291f198a4cc6758b6ec3b82a",
"assets/assets/images/char_2.png": "dc5d94d79bc153b5ef3f752c7fb9f60b",
"assets/assets/icons/arrow.svg": "658a53041716f673e6a2433199779f29",
"assets/assets/icons/delete.svg": "ee636d803af4ce15a6e8255d0521594b",
"assets/assets/icons/menu.svg": "74a9d3e02eab021af54a219b19280368",
"assets/assets/fonts/thinkbig.ttf": "7a983be604cd23713cc4bed945dca39f",
"assets/assets/fonts/handwriting.ttf": "ca684df3afdd94680ec5b7e101dcdfaa",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
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
