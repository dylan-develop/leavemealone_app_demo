'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "076db5955bae8c8bb6e02f46eeb3448b",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "035d6b63b4adddb663f28989ffb06bd7",
"index.html": "0e6d27ba0b5353d58d4b46856a580cd1",
"/": "0e6d27ba0b5353d58d4b46856a580cd1",
"main.dart.js": "b5ce824a9f69d9b73cbc0ee78b37901f",
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
"assets/AssetManifest.json": "8598ed55229df34aa48c6539a5ffaf05",
"assets/NOTICES": "251626e5fe6c3a0ee6793f1c35d33ad2",
"assets/FontManifest.json": "a6e489606bd80787d10aa400afeefc38",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
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
"assets/assets/images/social_distance_block.png": "85c6031d4f668b7b4847dde463362530",
"assets/assets/images/mask.png": "dfd0f45757929f742bcb4ba48d62b9f5",
"assets/assets/audio/sneeze.wav": "acb5e3835fa9b430604ea40389eb6311",
"assets/assets/audio/bg.wav": "9faa9b017afefa6d8c6f6736f28b3da6",
"assets/assets/audio/male_cough.wav": "81c7f895916482c90a6677567adf17d9",
"assets/assets/audio/female_cough.wav": "13510679d5cf69542e62c3582a659d5f",
"assets/assets/icons/volume-1.svg": "efbe3fd9f09d443052dcf1fc4bf29916",
"assets/assets/icons/arrow.svg": "658a53041716f673e6a2433199779f29",
"assets/assets/icons/delete.svg": "ee636d803af4ce15a6e8255d0521594b",
"assets/assets/icons/volume-x.svg": "17217606c7cc79cb005ba2d36529c95b",
"assets/assets/icons/menu.svg": "74a9d3e02eab021af54a219b19280368",
"assets/assets/lottie/char_6_hover.json": "a72570f07c04cbb500966e37f4e94b51",
"assets/assets/lottie/char_6_default.json": "7cdecb7185a98b62455efdb4ed7f92b7",
"assets/assets/lottie/char_1_default.json": "03f9310c8d17974aeaf18168a3fe5ce5",
"assets/assets/lottie/char_10_default.json": "7951c3f90a11047eb9844371a0711a41",
"assets/assets/lottie/char_3_hover.json": "98345111dd45f52b6fcb644c05504b98",
"assets/assets/lottie/char_11_default.json": "e39403e3264bd6a9ebf894a85c8a2234",
"assets/assets/lottie/char_7_default.json": "620318edf5f38ff115549cb95bc51b2e",
"assets/assets/lottie/char_9_hover.json": "91e9e4a0d90867495d2bb64c2c89d11e",
"assets/assets/lottie/char_11_hover.json": "ba9563de3049e5fea96ddf1ea3403058",
"assets/assets/lottie/char_4_hover.json": "20964366aac89b1c9b1bf17e9f25469f",
"assets/assets/lottie/char_1_hover.json": "67ef0af091c12f0eab2961d87d2ad889",
"assets/assets/lottie/char_2_hover.json": "2f73864ad337fc7ed5debeb4886f4ca8",
"assets/assets/lottie/char_9_default.json": "fce9903e60d7cd2378a5e1733398d22a",
"assets/assets/lottie/char_12_hover.json": "927977de7ab3e5dc9bdb4488c094b44e",
"assets/assets/lottie/char_8_default.json": "caffeaf5f0b9499bae44efad431c3f5f",
"assets/assets/lottie/char_7_hover.json": "a5f0d9b5f0d74ab71f33cf38d9051794",
"assets/assets/lottie/char_5_default.json": "e0fbfb276dfb5904edc51e3464ed7e86",
"assets/assets/lottie/char_2_default.json": "7c016fccd57deb5ef7fb66ac256d46aa",
"assets/assets/lottie/char_8_hover.json": "0afec7a44e4cbca313b687df7470d179",
"assets/assets/lottie/char_10_hover.json": "c928da4c0da15d46b59b7640642e6744",
"assets/assets/lottie/char_12_default.json": "c0dd09837681e6a0e05f08cdd3ff41ee",
"assets/assets/lottie/char_3_default.json": "e9d511bd2efbbd799236d4ce15898d4d",
"assets/assets/lottie/char_4_default.json": "1dd6a66a037e073690f0e56b7ab7cf91",
"assets/assets/lottie/char_5_hover.json": "ed488146033935362f14f26662be9ccb",
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
