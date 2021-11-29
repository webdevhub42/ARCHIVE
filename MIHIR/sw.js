"use strict";

const CACHE_NAME = 'mihirbeg.com-1614651273058';
const SW_SUPPORTED_PROTOCOL_REGEX = /http(s?):/;
const pageUrls = JSON.parse('["/","/live-sound","/listen","/debut-album-getting-there","/about","/watch"]');
const staticAssets = JSON.parse('["https://img1.wsimg.com/poly/v2/polyfill.min.js?unknown=polyfill&flags=gated&features=default%2Cfetch%2CArray.prototype.%40%40iterator%2CArray.prototype.find%2CArray.prototype.findIndex%2CFunction.name%2CNumber.isFinite%2CPromise%2CString.prototype.repeat%2CMath.sign%2CMath.trunc%2CArray.prototype.includes%2CObject.entries%2CObject.values%2CObject.is%2CIntersectionObserver%2CIntl.~locale.en-US","//img1.wsimg.com/blobby/go/03387d70-a2b8-40e7-acae-dc6a382237e9/gpub/64c24254a69b303c/script.js","//img1.wsimg.com/ceph-p3-01/website-builder-data-prod/static/widgets/UX.4.6.20.js","//fonts.googleapis.com/css?family=Source+Sans+Pro:600,900&display=swap","//fonts.googleapis.com/css?family=Roboto:100,300,300i,400,400i,700,700i,900&display=swap","//img1.wsimg.com/blobby/go/03387d70-a2b8-40e7-acae-dc6a382237e9/gpub/9954cb7d8ca22663/script.js","//img1.wsimg.com/blobby/go/03387d70-a2b8-40e7-acae-dc6a382237e9/gpub/2309519522d6f6b4/script.js","//img1.wsimg.com/blobby/go/03387d70-a2b8-40e7-acae-dc6a382237e9/gpub/5a9326b423a00348/script.js","//img1.wsimg.com/blobby/go/03387d70-a2b8-40e7-acae-dc6a382237e9/gpub/e24bf8e94a78f912/script.js","//img1.wsimg.com/blobby/go/03387d70-a2b8-40e7-acae-dc6a382237e9/gpub/4eb128387f881d9d/script.js"]');
const networkOnlyUrls = JSON.parse('["https://api.ola.godaddy.com","https://03387d70-a2b8-40e7-acae-dc6a382237e9.onlinestore.godaddy.com","https://img.secureserver.net/t/1/tl/event","https://img.test-secureserver.net/t/1/tl/event","https://www.google-analytics.com/collect","https://calendar.apps.dev-secureserver.net","https://calendar.apps.test-secureserver.net","https://calendar.apps.secureserver.net"]');
const networkOnlyUrlsRegex = JSON.parse('["mihirbeg.com/m/api/.*","mihirbeg.com(?:/.*)?/ola/services/.*","mihirbeg.com/ola/meetings/.*","mihirbeg.com/g/api/.*","securepay.godaddy.com/api/apps/ola/accounts/.*"]').map(regexString => new RegExp(regexString));
const networkThenCacheUrls = JSON.parse('["https://blog.apps.secureserver.net/v1/website/03387d70-a2b8-40e7-acae-dc6a382237e9/feed/post/","https://blog.apps.secureserver.net/v1/website/03387d70-a2b8-40e7-acae-dc6a382237e9/feed"]');
const networkThenCacheUrlsRegex = JSON.parse('["mihirbeg.com(?:/.*)?/f/.*"]').map(regexString => new RegExp(regexString));
self.addEventListener('unhandledrejection', function (event) {
  // eslint-disable-next-line no-console
  console.warn('sw unhandledrejection error: ', event.reason);
});

function preCacheResources() {
  return caches.open(CACHE_NAME).then(function (cache) {
    // Pre-Cache pages to improve subsequent navigation but don't making it blocking
    // Avoid extremely large websites from using the end-users data in unexpected amount
    cache.addAll(pageUrls); // Pre-cache all static assets by keeping them as installation dependency

    return cache.addAll(staticAssets);
  });
}

self.addEventListener('install', function (event) {
  // Let the new worker take over as fast as possible
  // For quirks refer: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#skip_the_waiting_phase
  self.skipWaiting();
  event.waitUntil(preCacheResources());
});

function clearOldCache() {
  return caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (key) {
      return key !== CACHE_NAME;
    }).map(function (key) {
      return caches.delete(key);
    }));
  });
}

self.addEventListener('activate', function (event) {
  // Remember to keep this step as lean as possible
  // Only sutiable for performing stuff that can't be done while the previous worker is running
  event.waitUntil(clearOldCache().then(function () {
    clients.claim(); // eslint-disable-line no-undef
  }));
});

function isPageRequest(url) {
  return url.origin === location.origin && pageUrls.includes(url.pathname);
}

function isNetworkOnlyRequest(url, requestMethod) {
  // Browser extensions don't use the standard `http` and `https` protocols
  // Refer: https://github.com/GoogleChromeLabs/sw-toolbox/issues/171
  if (requestMethod !== 'GET' || !SW_SUPPORTED_PROTOCOL_REGEX.test(url.protocol)) {
    return true;
  }

  const urlOrigin = url.origin;
  const urlPathName = url.pathname;
  const fullUrl = `${urlOrigin}${urlPathName}`;

  if (networkOnlyUrls.includes(urlOrigin) || networkOnlyUrls.includes(fullUrl)) {
    return true;
  }

  if (networkOnlyUrlsRegex.some(regex => regex.test(fullUrl))) {
    return true;
  }

  return false;
}

function isNetworkThenCacheRequest(url, requestMethod) {
  // Browser extensions don't use the standard `http` and `https` protocols
  // Refer: https://github.com/GoogleChromeLabs/sw-toolbox/issues/171
  if (requestMethod !== 'GET' || !SW_SUPPORTED_PROTOCOL_REGEX.test(url.protocol)) {
    return true;
  }

  const urlOrigin = url.origin;
  const urlPathName = url.pathname;
  const fullUrl = `${urlOrigin}${urlPathName}`;

  if (networkThenCacheUrls.includes(urlOrigin) || networkThenCacheUrls.includes(fullUrl)) {
    return true;
  }

  if (networkThenCacheUrlsRegex.some(regex => regex.test(fullUrl))) {
    return true;
  }

  return false;
}

function handleWithNetworkThenCache(event) {
  return event.respondWith(fetch(event.request).then(function (networkResponse) {
    if (!networkResponse.ok) {
      return networkResponse;
    }

    return caches.open(CACHE_NAME).then(function (cache) {
      cache.put(event.request, networkResponse.clone());
      return networkResponse;
    });
  }).catch(function () {
    // network failed, try to serve a cached response or offline page if there is one
    return caches.match(event.request);
  }));
}

function handleWithCacheThenNetwork(event) {
  return event.respondWith(caches.open(CACHE_NAME).then(function (cache) {
    return cache.match(event.request).then(function (response) {
      return response || fetch(event.request).then(function (networkResponse) {
        networkResponse.ok && cache.put(event.request, networkResponse.clone());
        return networkResponse;
      });
    });
  }).catch(function (err) {
    // TODO: respond with `offline.html` as the final fallback for page requests
    // and use appropriate response for other cases
    return err;
  }));
}

function handleWithNetwork(event) {
  return event.respondWith(fetch(event.request));
}

function handleRequests(event) {
  const requestURL = new URL(event.request.url);

  if (isNetworkOnlyRequest(requestURL, event.request.method)) {
    return handleWithNetwork(event);
  }

  if (isPageRequest(requestURL) || isNetworkThenCacheRequest(requestURL, event.request.method)) {
    // To avoid serving stale content after a publish
    // always fetch the markup from origin and use cache only when the user is offline
    return handleWithNetworkThenCache(event);
  }

  return handleWithCacheThenNetwork(event);
}

self.addEventListener('fetch', handleRequests);
