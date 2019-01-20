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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a5e3342ed10dfc5d432cc581dd27047b"
  },
  {
    "url": "about/index.html",
    "revision": "ae17951138da90e9470882d04cc0d6d2"
  },
  {
    "url": "assets/css/1.styles.cb421415.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.df3e32a2.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/styles.f28c54c5.css",
    "revision": "66e0d44e04b10a4fa22e8bbaafdd66bd"
  },
  {
    "url": "assets/img/blog.c5a9a0ab.jpg",
    "revision": "c5a9a0ab118e42e02fb9a35fbeb71421"
  },
  {
    "url": "assets/img/home.6a04dd0a.jpg",
    "revision": "6a04dd0a9c5f7ee575afdc6f79e33da2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.cb421415.js",
    "revision": "e65dd1576d56a0d3822658485d3daeb9"
  },
  {
    "url": "assets/js/10.31b21061.js",
    "revision": "65c4f377a99cd0e4bd26378cc8432492"
  },
  {
    "url": "assets/js/11.1378472f.js",
    "revision": "192846fe773a60bd603b211101df2756"
  },
  {
    "url": "assets/js/12.7434b2fa.js",
    "revision": "76598f4513c6a0477642c576c6ddf30f"
  },
  {
    "url": "assets/js/13.ff1739a9.js",
    "revision": "5725862de972ffd2cd3e4e343140dbdb"
  },
  {
    "url": "assets/js/14.0f9d8bd8.js",
    "revision": "fbb03f124f632a82a45c83ab17ddd63f"
  },
  {
    "url": "assets/js/15.91df113f.js",
    "revision": "80e8ae482ba7edcd6271faa3df0f7314"
  },
  {
    "url": "assets/js/16.9d315117.js",
    "revision": "54ac6b03c50858dd34a09156b64d7f13"
  },
  {
    "url": "assets/js/17.0be3247d.js",
    "revision": "55f343f1244c5e5f428060eca1536f41"
  },
  {
    "url": "assets/js/18.f66b5c5a.js",
    "revision": "8af21825e593c27afedd50bfb73269d3"
  },
  {
    "url": "assets/js/19.d0494c6e.js",
    "revision": "9a277ae4330c6492bfc2c44d2d95dacc"
  },
  {
    "url": "assets/js/2.df3e32a2.js",
    "revision": "b734f67f4fb1be49ed73630c6a0fcf10"
  },
  {
    "url": "assets/js/20.2a526a8d.js",
    "revision": "90289e7c71bad8d27fc164bace2973c1"
  },
  {
    "url": "assets/js/21.4535ccdf.js",
    "revision": "a13c742ff9b110676baccd17bbbc2969"
  },
  {
    "url": "assets/js/22.57277c4b.js",
    "revision": "7ec640af80ea18eeaf5ea11f9083430c"
  },
  {
    "url": "assets/js/23.5c68f21b.js",
    "revision": "e07b42be88cbcd48c64f6148890f64bb"
  },
  {
    "url": "assets/js/24.3b30af57.js",
    "revision": "7791cc7b96d9a5b2991cf8bbb1c869d8"
  },
  {
    "url": "assets/js/25.ad57ee56.js",
    "revision": "bebdec0ac203763fdb83c20766c530cb"
  },
  {
    "url": "assets/js/26.3ad03778.js",
    "revision": "8b7676815b81c8e6f89f5dc2aadda3d3"
  },
  {
    "url": "assets/js/3.ee615cef.js",
    "revision": "dc293bb40a27709f171558057d9a841f"
  },
  {
    "url": "assets/js/4.cd60779c.js",
    "revision": "abeab0a6469c7ae8587b2830c49d98a4"
  },
  {
    "url": "assets/js/5.669ca99a.js",
    "revision": "ebd9df3b3fd0f22bbdba55daa4ec2f27"
  },
  {
    "url": "assets/js/6.5f6fe16e.js",
    "revision": "02a1cf1e2c76f4b5116a96dd48158d3d"
  },
  {
    "url": "assets/js/7.1d6871d9.js",
    "revision": "6a185225a85ec24457915b47311eed01"
  },
  {
    "url": "assets/js/8.26294794.js",
    "revision": "198dc611def8ad98f8c2fd349dc3c287"
  },
  {
    "url": "assets/js/9.6efd6aa2.js",
    "revision": "cf6c31f5292e1cc201199dfd92098ed9"
  },
  {
    "url": "assets/js/app.f28c54c5.js",
    "revision": "1eee257ca0f4f3f79baffe86bbd70886"
  },
  {
    "url": "blog/canvas2Image.html",
    "revision": "68a40cc2a5e519c17f89b28328ff1d17"
  },
  {
    "url": "blog/css-problem.html",
    "revision": "252d2fad70c6b259ebbc65a71d6594b9"
  },
  {
    "url": "blog/elegant-code.html",
    "revision": "438757d142e35963ad7d3d5d1fe52409"
  },
  {
    "url": "blog/ES6-study.html",
    "revision": "8e22e20004ccee5a30703b9fc8fbd139"
  },
  {
    "url": "blog/eslint-rules-list.html",
    "revision": "0ce2f440ac3693fa85122b8c45d5bb00"
  },
  {
    "url": "blog/front-end-progress.html",
    "revision": "3a3d913335981d1414919124978764e7"
  },
  {
    "url": "blog/github-use-notes.html",
    "revision": "e35eef745e6cd6c260d27b526d619409"
  },
  {
    "url": "blog/html5-IOS-Android.html",
    "revision": "9ce722b08f86991697631b2137f026a0"
  },
  {
    "url": "blog/javaScript-error-type.html",
    "revision": "a93d5b176bf90d68ef240947e5ab91d5"
  },
  {
    "url": "blog/javaScript-execCommand.html",
    "revision": "b2374c73b3ad82a879a1d3ac11b8204f"
  },
  {
    "url": "blog/javaScript-skill.html",
    "revision": "a0a405cb9063023274b6c535c13df7b5"
  },
  {
    "url": "blog/js-diabolic-tricks-and-wicked-craft.html",
    "revision": "59e4c85c46bf341a0ee87cdeaf19b198"
  },
  {
    "url": "blog/mac-command.html",
    "revision": "577d1f8df5c97f6e845aae859c153c95"
  },
  {
    "url": "blog/mac-mysql-attention.html",
    "revision": "861352a5c4d3fc7ea7ec6495937d1cc5"
  },
  {
    "url": "blog/mobile-hack.html",
    "revision": "b3b111bc858162ba308cdd071eb25f06"
  },
  {
    "url": "blog/node-code-standard.html",
    "revision": "41de72579fae1e75bdd7af2942e9305c"
  },
  {
    "url": "blog/node-common-methods.html",
    "revision": "f2d4713cc86d6118dfa4b29766063709"
  },
  {
    "url": "blog/node-study.html",
    "revision": "8dbe57fe592158bb2dbf4cab60e38df5"
  },
  {
    "url": "blog/vue-attention.html",
    "revision": "2e8ca4c1839abf167a001cc34be212e2"
  },
  {
    "url": "blog/vue-source-study.html",
    "revision": "19abceec09284488c1c34951ca79ad5e"
  },
  {
    "url": "blog/vuepress-theme-toos.html",
    "revision": "4f46ec14419acb77f00cadc812be9cab"
  },
  {
    "url": "img/blog.jpg",
    "revision": "c5a9a0ab118e42e02fb9a35fbeb71421"
  },
  {
    "url": "img/home.gif",
    "revision": "c1cf7dff0b60d2dfe61f39efdf377f30"
  },
  {
    "url": "img/home.jpg",
    "revision": "6a04dd0a9c5f7ee575afdc6f79e33da2"
  },
  {
    "url": "img/logo.png",
    "revision": "6eff31aa92ee6d233df8874ac4de6b8d"
  },
  {
    "url": "index.html",
    "revision": "111759d0d370741eab3d630966130df8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
