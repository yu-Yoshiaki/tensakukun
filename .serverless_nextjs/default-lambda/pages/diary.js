"use strict";
(() => {
var exports = {};
exports.id = 857;
exports.ids = [857];
exports.modules = {

/***/ 4906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([{"path":".env.local","contents":"DEEPL_ACCESS_KEY=0e2c4473-5573-6f37-526c-d6ef0c26c01e:fx\nOPENAI_API_KEY=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"}])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(23105)

      const appMod = __webpack_require__(35656)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(91228)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(89185),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: false,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: {"locales":["ja"],"defaultLocale":"ja"},
        page: "/diary",
        buildId: "DrTHw1Lt_ZGBFuZPfArHQ",
        escapedBuildId: "DrTHw1Lt_ZGBFuZPfArHQ",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"60ca9b48518fa60cdff223208be4aadd",previewModeSigningKey:"d9a169e01dd694b3063d2860f136ced95150d3c682d93e9cc9331469f4dc01f3",previewModeEncryptionKey:"cf58a4cf20f679e73a1bfbea0af746e3f7ce4b222a47b5e87c724ed947b21e09"}
      })
      
    

/***/ }),

/***/ 91228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ diary),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/firebase/firestore/dist/index.mjs + 1 modules
var dist = __webpack_require__(78847);
// EXTERNAL MODULE: ./node_modules/firebase/app/dist/index.mjs
var app_dist = __webpack_require__(79286);
;// CONCATENATED MODULE: ./lib/firebase.ts
// Import the functions you need from the SDKs you need

// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIvDNoWk9o65Y-8MUOpxEcKvzo1r3rZv0",
    authDomain: "test-950ce.firebaseapp.com",
    projectId: "test-950ce",
    storageBucket: "test-950ce.appspot.com",
    messagingSenderId: "1094288850527",
    appId: "1:1094288850527:web:a82e46a1b5290df25165ea",
    measurementId: "G-79X9Q21NZ3"
};
// Initialize Firebase
const app = (0,app_dist/* initializeApp */.ZF)(firebaseConfig);
// export const analytics = getAnalytics(app);
const db = (0,dist/* getFirestore */.ad)(app);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/index.ts + 4 modules
var components = __webpack_require__(77759);
// EXTERNAL MODULE: ./src/components/Card.tsx
var Card = __webpack_require__(61508);
;// CONCATENATED MODULE: ./src/pages/diary.tsx






const ref = (0,dist/* collection */.hJ)(db, "diary");
const Diary = (props)=>{
    const { 0: text , 1: setText  } = (0,react.useState)("");
    const handleSubmit = (0,react.useCallback)(async ()=>{
        await (0,dist/* addDoc */.ET)(ref, {
            createdAt: (0,dist/* serverTimestamp */.Bt)(),
            text
        });
    }, [
        text
    ]);
    const handleChange = (0,react.useCallback)((e)=>{
        setText(e.target.value);
    }, []);
    return(/*#__PURE__*/ jsx_runtime.jsx(components/* Layout */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "space-y-10 py-20 px-5",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                    className: "mb-20 text-center text-3xl font-semibold",
                    children: "日記"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* Card */.Z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            className: "text-xl font-bold",
                            children: "毎日、今日あった出来事を英語で記録しよう！"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            children: "お昼に食べたご飯、買ったもの、行った場所など。"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                    onChange: handleChange,
                                    rows: 4,
                                    className: "w-full border"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "flex justify-end",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        type: "submit",
                                        className: "rounded-md bg-indigo-400 p-2 px-4 text-white ",
                                        children: "作成 ✏️"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "grid grid-cols-3 gap-4",
                    children: props.docs.map((doc, index)=>{
                        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "space-y-5 rounded-md bg-white p-5",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: "rounded-md bg-green-100 py-1 px-2",
                                    children: [
                                        doc.createdAt,
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "block h-32 rounded-md bg-gray-100 py-1 px-2",
                                    children: doc.text
                                })
                            ]
                        }, index));
                    })
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./pages/diary.tsx




const DiaryPage = (props)=>{
    return(/*#__PURE__*/ jsx_runtime.jsx(Diary, {
        docs: props.docs
    }));
};
const getStaticProps = async ()=>{
    const ref = (0,dist/* collection */.hJ)(db, "diary");
    const q = (0,dist/* query */.IO)(ref, (0,dist/* orderBy */.Xo)("createdAt", "desc"));
    const snapShot = await (0,dist/* getDocs */.PL)(q);
    const docs = snapShot.docs.map((d)=>{
        const time = d.data().createdAt.toDate();
        const createdAt = `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()}`;
        return {
            text: d.data().text,
            createdAt
        };
    });
    return {
        props: {
            docs
        }
    };
};
/* harmony default export */ const diary = (DiaryPage);


/***/ }),

/***/ 1014:
/***/ ((module) => {

module.exports = require("critters");

/***/ }),

/***/ 2186:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 9523:
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 85158:
/***/ ((module) => {

module.exports = require("http2");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 41808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 24404:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [776,996,647,640,382], () => (__webpack_exec__(4906)));
module.exports = __webpack_exports__;

})();