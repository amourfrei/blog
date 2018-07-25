/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2a5fbae63934eecf0aa76fdf13f14110"
  },
  {
    "url": "assets/css/10.styles.3d53b23d.css",
    "revision": "886cf6ec8bfe40bc993921adbd74d83d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.e54be247.js",
    "revision": "57818f41e308f0060bfc522a6757e400"
  },
  {
    "url": "assets/js/1.cb1b1261.js",
    "revision": "7c8b1cfbb4f23eade3ab7cfd3c27f7d4"
  },
  {
    "url": "assets/js/2.5e4de388.js",
    "revision": "3006867630b832e0e5115bb590ea559f"
  },
  {
    "url": "assets/js/3.4bff3075.js",
    "revision": "42e6f4bef60482128a9bc308d5f4cca2"
  },
  {
    "url": "assets/js/4.66dc4f8b.js",
    "revision": "4f485e07b74f1ef5216e89b058b2245e"
  },
  {
    "url": "assets/js/5.0e8881dd.js",
    "revision": "8599b752ee1a362053cb08d730f6d1a9"
  },
  {
    "url": "assets/js/6.31af1396.js",
    "revision": "616aeb067ba91cf011b122b884525976"
  },
  {
    "url": "assets/js/7.790f4324.js",
    "revision": "31ae730cab715ca0699ade2901634071"
  },
  {
    "url": "assets/js/8.0b50bbc7.js",
    "revision": "901718992e2277cdd52dc289b5e6fa7d"
  },
  {
    "url": "assets/js/9.4a6d7e27.js",
    "revision": "5af3cbfc29e699c198c579937f670818"
  },
  {
    "url": "assets/js/app.cd4213f7.js",
    "revision": "43381b40b4c21789bc63181496bc06b9"
  },
  {
    "url": "hero.jpg",
    "revision": "e9350b07e0bbb70a6337c00bb108d07d"
  },
  {
    "url": "index.html",
    "revision": "8919a87087d4741bd80678bd3ae6d033"
  },
  {
    "url": "miniprogram/index.html",
    "revision": "f000f6231e2718e0802f90b5799fb0ba"
  },
  {
    "url": "miniprogram/member-code.html",
    "revision": "0eabf41ce1f1a9500a70843eb1c4719e"
  },
  {
    "url": "mix/index.html",
    "revision": "272257b12e43abb5f8bb8e887cc1a5c4"
  },
  {
    "url": "mix/marvel.html",
    "revision": "326a978fa764c1f66aac48e326737612"
  },
  {
    "url": "web/git-commit-types.html",
    "revision": "0551c82c43edcec6baee2cf0eeec8e3f"
  },
  {
    "url": "web/index.html",
    "revision": "74763cb906c08eff4298d27797a3be6d"
  },
  {
    "url": "web/node-https-dev-server.html",
    "revision": "d97defbe996dbee6c5545d11652d8a3f"
  },
  {
    "url": "web/service-worker.html",
    "revision": "6b74b60430f331f22b7d5936852c1da6"
  },
  {
    "url": "web/web-performance-monitor.html",
    "revision": "2113c97f29af862e75ebecc573d7d275"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
