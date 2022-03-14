'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "928c30473d18893b4f53aa83344e4b72",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "035d6b63b4adddb663f28989ffb06bd7",
"index.html": "3d296adc5fe57255934c6382f7c4cc9c",
"/": "3d296adc5fe57255934c6382f7c4cc9c",
"main.dart.js": "1f6f72f964320fd088daef235720743d",
"icons/favicon-16x16.png": "eb0d6f9c1a3c07ac8e4b8f8111de5007",
"icons/favicon.ico": "2db91d729131aa5b900abdf7d16c7564",
"icons/apple-icon.png": "eb27dd9e256f1af220b5a523d65dd4d2",
"icons/apple-icon-144x144.png": "0ce319a3e693c10422c860e3700bb028",
"icons/android-icon-192x192.png": "71c676ef7616758a67e2af988e3efe0c",
"icons/apple-icon-precomposed.png": "eb27dd9e256f1af220b5a523d65dd4d2",
"icons/apple-icon-114x114.png": "1daaf5ac6466a292da4b68cdd5753ca1",
"icons/ms-icon-310x310.png": "22342cf8a463a631dd916b3430bba117",
"icons/ms-icon-144x144.png": "43feefec500406470dd7d9e2653a89d9",
"icons/apple-icon-57x57.png": "355de6b847dfabf4851774024751d869",
"icons/apple-icon-152x152.png": "57dfb05a549fcf6f015a5949bab50190",
"icons/ms-icon-150x150.png": "0a800f96c3a0cf23efe4815407491bc5",
"icons/android-icon-72x72.png": "a4a1d73ff0c4d80dc1f973b5e0e1ad77",
"icons/android-icon-96x96.png": "a0aba84cf97afbd719e752b1e15025a9",
"icons/android-icon-36x36.png": "cde846b266805496d243f24d4a669641",
"icons/apple-icon-180x180.png": "792e290f40ca7da4c87a40cbc7ef1626",
"icons/favicon-96x96.png": "a0aba84cf97afbd719e752b1e15025a9",
"icons/android-icon-48x48.png": "63b2d87a9d1f633e9550d8da2291676e",
"icons/apple-icon-76x76.png": "a8de69b116d1de2a07b0e569c833447b",
"icons/apple-icon-60x60.png": "bd8eeb4af44658e8bee46108da7cf8a5",
"icons/android-icon-144x144.png": "43feefec500406470dd7d9e2653a89d9",
"icons/apple-icon-72x72.png": "561b23f32c4c744b951493ac716403e7",
"icons/apple-icon-120x120.png": "b7ac6680cbe96346d23e4d6a39edad32",
"icons/favicon-32x32.png": "8a0258ff4e01b39492151a9b6558e5b0",
"icons/ms-icon-70x70.png": "7b3ad5da70fba2ba3c064d02c35f94c2",
"manifest.json": "b1bae3df48f0293b0346f3f9a22a555d",
"assets/AssetManifest.json": "395456cae631e3811874208329aa5744",
"assets/NOTICES": "9da28f4fd11357103edf3720edc3b117",
"assets/FontManifest.json": "a6e489606bd80787d10aa400afeefc38",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/block.png": "85c6031d4f668b7b4847dde463362530",
"assets/assets/images/characters/char_11.png": "5159cf602c8daa389d3ac75b755bb165",
"assets/assets/images/characters/char_10.png": "738c43bf782ecf98497bd805ce97037a",
"assets/assets/images/characters/char_12.png": "1dea9fc7648587c8961a838ea29cedcc",
"assets/assets/images/characters/char_9.png": "c793dab43259acabe485e59561cdfb69",
"assets/assets/images/characters/char_8.png": "c3cc2045c87dcc013f3688c86018260e",
"assets/assets/images/characters/char_6.png": "ca388b2ae1b8b9a6f3e6806725bddf5b",
"assets/assets/images/characters/char_7.png": "32a8e3654b1c4daf158e90b6e1e8e7b8",
"assets/assets/images/characters/char_5.png": "63517e452ecd14400589c394c9db8598",
"assets/assets/images/characters/char_4.png": "cdff64e1d1a377c41d0349d14e3803c6",
"assets/assets/images/characters/char_1.png": "303f98535855041ddcfcfac8a476d8f4",
"assets/assets/images/characters/char_3.png": "b2033ce7291f198a4cc6758b6ec3b82a",
"assets/assets/images/characters/char_2.png": "dc5d94d79bc153b5ef3f752c7fb9f60b",
"assets/assets/images/mask.png": "dfd0f45757929f742bcb4ba48d62b9f5",
"assets/assets/audio/sneeze.wav": "acb5e3835fa9b430604ea40389eb6311",
"assets/assets/audio/male_cough.wav": "81c7f895916482c90a6677567adf17d9",
"assets/assets/audio/female_cough.wav": "13510679d5cf69542e62c3582a659d5f",
"assets/assets/icons/volume-1.svg": "efbe3fd9f09d443052dcf1fc4bf29916",
"assets/assets/icons/arrow.svg": "658a53041716f673e6a2433199779f29",
"assets/assets/icons/delete.svg": "ee636d803af4ce15a6e8255d0521594b",
"assets/assets/icons/volume-x.svg": "17217606c7cc79cb005ba2d36529c95b",
"assets/assets/icons/menu.svg": "74a9d3e02eab021af54a219b19280368",
"assets/assets/lottie/char_1.json": "d4dc2ff387ebbeb9dbc2e64f909863da",
"assets/assets/lottie/char_10.json": "37ecece80a20c0baab2051de55166be1",
"assets/assets/lottie/block.json": "524b4fcadf022daeed991f155ba73071",
"assets/assets/lottie/char_11.json": "0a3a62eb74e88eca3d6ee36399d069aa",
"assets/assets/lottie/char_7.json": "9c5daf363203c127d26e13cf53045aff",
"assets/assets/lottie/char_6.json": "e1bccc23c6de0ca8622987367a2d8b5d",
"assets/assets/lottie/char_9.json": "599f51cea3f4230593a42445f8e933d3",
"assets/assets/lottie/char_5.json": "5f7f94ee180575424c9cc67e697ad1b7",
"assets/assets/lottie/char_4.json": "bae842641363049c48d6bf7d149de14b",
"assets/assets/lottie/mask.json": "4761e7b05d1e88af10965a8a0a01db95",
"assets/assets/lottie/char_8.json": "cc4c8641c8f9f9f15c3abc18da32233a",
"assets/assets/lottie/char_12.json": "e90c9b827617de0cd7ef9030265a9114",
"assets/assets/lottie/char_3.json": "cfb83752aa68205104ccd641cfb596b3",
"assets/assets/lottie/char_2.json": "2a181e83a629339609af600bda80d6df",
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
