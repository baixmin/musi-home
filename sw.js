if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let f={};const r=e=>s(e,a),o={module:{uri:a},exports:f,require:r};i[a]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),f)))}}define(["./workbox-082d0e8a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.694a1fd3.css",revision:null},{url:"assets/index.6e062a04.js",revision:null},{url:"index.html",revision:"8ec77c9364acf9e430b76bf3c0b02a91"},{url:"loading/loading.css",revision:"97fefeccd8990346f6e8ae49101507fa"},{url:"loading/loading.min.css",revision:"545e4423de4c59bc4303fc592da53790"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/icon/48.png",revision:"10be05e31f28b919c2f58de5292546bc"},{url:"images/icon/72.png",revision:"b9a39d59042123a0427a75fd12f57001"},{url:"images/icon/96.png",revision:"5c5085c1c1f1c4221eb4e27a42bb7b35"},{url:"images/icon/128.png",revision:"af96e30640b005aad64609f58ab72d0f"},{url:"images/icon/144.png",revision:"9d1758f0ce6babe4aac37d94b4c29b7e"},{url:"images/icon/192.png",revision:"8f560e79ad2e2cbc7fea33cd8c3ba863"},{url:"images/icon/512.png",revision:"f5eecf718e996f0546d01942faf69a0d"},{url:"manifest.webmanifest",revision:"7fefda217ae079f0bff95cdfad8eaa40"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(js|css|woff2|woff|ttf)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
