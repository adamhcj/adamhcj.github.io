'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9870cfedb4f985df400c51c8f74172a9",
"assets/assets/audio/bubble.wav": "d6c7affcfd45bed8af8f8d74d31491c7",
"assets/assets/audio/diamondpokecenter.wav": "8033ad88ddbc3988b871144801134d96",
"assets/assets/audio/jump.wav": "2654db821ac5215d10e30869b5110ff9",
"assets/assets/audio/loot.wav": "487b4b6436550f262494ce67c2469ddd",
"assets/assets/audio/ludipq.mp3": "d9abae7749e21bedc1b10ff02327b9f3",
"assets/assets/audio/maple.wav": "e5d5315478a875dacc0330e98f6d16ba",
"assets/assets/audio/pip.wav": "fd79faae5886d8046af1be5fc23474da",
"assets/assets/audio/pipattack.wav": "5ddcf5e0e79c35659749b458cf8427d0",
"assets/assets/audio/portal.wav": "15594a893b317e41795b9c492959d8da",
"assets/assets/images/bg.jpg": "b4334098f512c00a5636f991166bf1dd",
"assets/assets/images/bg.png": "67660736f1ce85e0420180d701af9ecb",
"assets/assets/images/bgsungei.jpg": "72f16748870f3bb7f8570f61d7f999bf",
"assets/assets/images/botbg.jpg": "70c88d759730f37159da40e6c6d94f3a",
"assets/assets/images/bubble1.png": "770ae284a736d088c2d0a9ad1086824b",
"assets/assets/images/C1.png": "e91ccc714dd79c9fed6504e4ea4270c0",
"assets/assets/images/Cpressed1.png": "2a79b4a7daeb565edd5321a8276e18a0",
"assets/assets/images/left1.png": "3d4849ea0faf3cfbd3c1e87ebe8a0a4b",
"assets/assets/images/leftpressed1.png": "18127587e463421e8c6c03411b7d7b8b",
"assets/assets/images/littleguilin.JPG": "aad5536dd4f1d29b353dd343c7e96f69",
"assets/assets/images/pipattack1.png": "3f1dfa9e43d5e36e5bd22b0e18c61fd4",
"assets/assets/images/pipattack2.png": "e6a4c15727661c8fb2a574eea339125a",
"assets/assets/images/pipbw.gif": "63380e2f2e4d771036caeffaa9b90719",
"assets/assets/images/pipidle1.png": "8134356a52fd345a23aa273999017b04",
"assets/assets/images/pipidle10.png": "e0242ff76b2f09474393a1da35b257a5",
"assets/assets/images/pipidle11.png": "c661df4b60396a06e6868023e3db0c5b",
"assets/assets/images/pipidle12.png": "fe53ba76bd0ce5c75618679b40483dfa",
"assets/assets/images/pipidle13.png": "93f266d7d41d102bb1c4e26817c3fe5d",
"assets/assets/images/pipidle14.png": "d49d52e1739bfa8484835c9b87566e02",
"assets/assets/images/pipidle15.png": "5d7396b40737ac8835bb837f24a3f2b9",
"assets/assets/images/pipidle16.png": "66b957fe8b57bbe772f764e9caa82107",
"assets/assets/images/pipidle17.png": "b8dd469edf7cc5ed4647c5c28ffb84c8",
"assets/assets/images/pipidle18.png": "815e750e8123e71bf70ab5888f9ec1e5",
"assets/assets/images/pipidle19.png": "656ac374ec45038622e2fca8062e79ef",
"assets/assets/images/pipidle2.png": "bff453553cd764358a20e12706aaa2cf",
"assets/assets/images/pipidle20.png": "ca957aa6adf9916478ea8a279e42fdd0",
"assets/assets/images/pipidle21.png": "bfd0e30a209659534af3ba91a43ac12b",
"assets/assets/images/pipidle22.png": "cb416b16f2e11f2ac007e60234ca70f3",
"assets/assets/images/pipidle23.png": "f55f318a78101b9227edadb82e9cc2c8",
"assets/assets/images/pipidle24.png": "daf6a7490465b4c8130c7c31fc7fe24c",
"assets/assets/images/pipidle25.png": "b55fed2f12e1f82c87f885cbb7d15962",
"assets/assets/images/pipidle26.png": "c5fd22d5e4457c1b807a3de63775967a",
"assets/assets/images/pipidle27.png": "37235e21943a8a7cd4aab8296dc6e5ac",
"assets/assets/images/pipidle28.png": "c5055fcbc7ac6c37dbf3d878a163e5a7",
"assets/assets/images/pipidle29.png": "e400b820d896f888567157b18ff1a34d",
"assets/assets/images/pipidle3.png": "702335459d18831a48cfbbde46069fa2",
"assets/assets/images/pipidle30.png": "76f9c186bbd440be7dc99d8461e07596",
"assets/assets/images/pipidle31.png": "f434faaca578e5a970f476e88fb4d094",
"assets/assets/images/pipidle32.png": "127babd1d2abe0889d13354172088796",
"assets/assets/images/pipidle33.png": "7e62bdea16bc834bdcf452c0b666e922",
"assets/assets/images/pipidle34.png": "ee11e312d42e15fe8b0d59e1509aa8d5",
"assets/assets/images/pipidle35.png": "a310893f25b64654ee6335b432fbde71",
"assets/assets/images/pipidle36.png": "f216212bf85f790414ddcc05cc594289",
"assets/assets/images/pipidle37.png": "976f0161a13e6440c3a9e16e6803a0e9",
"assets/assets/images/pipidle38.png": "93959e2e12fd8e2337d3b1d6e9ee19f3",
"assets/assets/images/pipidle39.png": "ddfd50d6ea7118b0ab6c4804597a1968",
"assets/assets/images/pipidle4.png": "b520280dcf63bef295800d401fa76d3d",
"assets/assets/images/pipidle40.png": "e46de86fd1922c9d67fee3e3240cdae6",
"assets/assets/images/pipidle5.png": "0986a5a24192b00d4a0456740e34cfa7",
"assets/assets/images/pipidle6.png": "4d15dce527a05f8161163ce0de2e4cc0",
"assets/assets/images/pipidle7.png": "6d4169a8707ad73654330ea003e67dd1",
"assets/assets/images/pipidle8.png": "34095bd8b5525f859c8e12959c2f9c2f",
"assets/assets/images/pipidle9.png": "f5f5feb36caab1d222c7f5ff201caf84",
"assets/assets/images/pipskip1.png": "cb6a76fae713d81f88a0bc64d4aa9297",
"assets/assets/images/pipskip2.png": "b78cc147644d3cb41751df788fbf20b9",
"assets/assets/images/pipskip3.png": "f4a5698283699ad2aa703b1b476bdbb4",
"assets/assets/images/pipskip4.png": "c2ff25dd64290e80d15ec1a09cb59938",
"assets/assets/images/platform.png": "38ce5191d2fb2140adb7c1746db568ef",
"assets/assets/images/portal.gif": "df0dfa9d2ec32a1183b4ca897dd72693",
"assets/assets/images/portal.png": "9ee9dd5d995a5ded95a8ec0e5aa27504",
"assets/assets/images/portal1.png": "9d02c64befb2842fcb909d4e56295220",
"assets/assets/images/portal2.png": "30ca97b42b02555b2eac7f91a80f19e2",
"assets/assets/images/portal3.png": "7d7aadffd67123cb57d89e3971bfe097",
"assets/assets/images/portal4.png": "974ee2eab4593a7cf41cf011d619886a",
"assets/assets/images/portal5.png": "2ce58736cc698152686e2d2166273013",
"assets/assets/images/portal6.png": "02d397857389485ea8df1873107601e3",
"assets/assets/images/portal7.png": "15ac7f721889e323d1dca3ab7d6e70f6",
"assets/assets/images/portal8.png": "2045382d4b25f652c3755a630a631db7",
"assets/assets/images/rarecandy.png": "bc1e8bb610964c205a8803925f4ee00c",
"assets/assets/images/right1.png": "4e95fb5e4b6adc95d9a4b62922c8ab8c",
"assets/assets/images/rightpressed1.png": "077d31175a8b6f3b0f992072b3ad767f",
"assets/assets/images/runningpip1.png": "d77f52e8ef5b31516eb4c6a35aecc965",
"assets/assets/images/runningpip2.png": "07b6e2cf1150ff603872e518b75086a1",
"assets/assets/images/runningpip3.png": "090a41f5dc8d83beb5069a5b099140ae",
"assets/assets/images/runningpip4.png": "5648c23f4bea6903e5db0e769e06801f",
"assets/assets/images/runningpip5.png": "6f2bd76f4db45075f99346b138ead898",
"assets/assets/images/spacebar1.png": "4e012dd2833ecd1212ee61879c40852c",
"assets/assets/images/spacebarpressed1.png": "4815482ccf270f015a9139b0d46e762f",
"assets/assets/images/splash1.png": "83ed56fef50d22d2e01563809e9af059",
"assets/assets/images/splash2.png": "f118d54c884d4f0d968638081080fa5f",
"assets/assets/images/splash3.png": "ea18d2cf3fc07092d72ac971c70aacf7",
"assets/assets/images/splash4.png": "b8b62cce8727251d7470494dcf4ae676",
"assets/assets/images/splash5.png": "d1038c273bf27140a8cdb71b06c72d61",
"assets/assets/images/splash6.png": "5e3ba7fc5cfce28d5ccb35be19929d86",
"assets/assets/images/splash7.png": "fd8a549d08fa385f5d289e4dbad5fcfc",
"assets/assets/images/splash8.png": "6f49e4ec24d0f62f1de0c5d8c11a76f5",
"assets/FontManifest.json": "3020802906dc520f88ca973c65aa46d8",
"assets/NOTICES": "729c3ad81469f266f84505d75b268c28",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "660d1fdd376e7f16251bdcf3bb16f2b1",
"/": "660d1fdd376e7f16251bdcf3bb16f2b1",
"main.dart.js": "ac6ec857a247b507e8727a7328217b14",
"manifest.json": "41d4462bb04f02961db9781338a5c279",
"version.json": "7a8cee6b1f21b697788782d341ea2eb4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
