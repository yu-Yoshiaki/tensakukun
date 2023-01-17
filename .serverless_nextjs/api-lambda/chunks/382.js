"use strict";
exports.id = 382;
exports.ids = [382];
exports.modules = {

/***/ 61508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const Card = (props)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mx-auto max-w-[800px] space-y-5 rounded-md bg-white p-5 md:p-10",
        children: props.children
    }));
};


/***/ }),

/***/ 77759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* reexport */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/Footer.tsx

// import Link from "next/link";
const Footer = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "bg-gray-800 py-8 px-20 text-center text-gray-200",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex justify-center gap-4"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                children: [
                    "\xa9 2023",
                    " ",
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "https://a-release.com",
                        className: "font-semibold text-blue-400",
                        children: "α-Release企画"
                    }),
                    " ",
                    "All rights reserved"
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
;// CONCATENATED MODULE: ./src/components/Head.tsx


const defaultUrl = "https://tensakukun.vercel.com";
const defaultTitle = "添削くん | 英語で自分の意見を言えるようになるサービス";
const defaultDescription = "翻訳AIを使った英作アプリで、日本人が苦手な「自分の意見を英語で言う」力が身につく";
const CustomHead = (props)=>{
    const title = props.title ? `${props.title} | ${defaultTitle}` : defaultTitle;
    const description = props.description ? props.description : defaultDescription;
    const url = props.pagePath ? `https://tensakukun.vercel.com` : defaultUrl;
    //   const imgUrl = props.image ? `https://tensakukun.vercel.com` : defaultImg;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(head["default"], {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("title", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "viewport",
                content: "minimum-scale=1, initial-scale=1, width=device-width"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "canonical",
                href: url
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:title",
                content: title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:url",
                content: "https://englister.yunomy.com/"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:site_name",
                content: title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "twitter:site",
                content: "@yuno_miyako2"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "twitter:url",
                content: url
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "twitter:title",
                content: title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "twitter:description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "icon",
                href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>📝</text></svg>"
            })
        ]
    }));
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
;// CONCATENATED MODULE: ./src/components/Header.tsx


/**
 * @package
 */ const Header = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        className: "flex h-24 items-center bg-white px-4 py-5 md:justify-between",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                className: "font-bold text-gray-700 sm:text-2xl lg:text-3xl",
                children: [
                    "添削くん",
                    " ",
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "align-middle text-sm",
                        children: "英語で自分の意見を言えるようになるサービス"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                className: "space-x-4 px-4 ",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                            className: "inline-block font-semibold",
                            children: "ホーム"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(next_link["default"], {
                        href: "/diary",
                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                            className: "inline-block font-semibold",
                            children: "日記"
                        })
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/Layout.tsx




const Layout = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "bg-gray-100 text-gray-700 ",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(CustomHead, {
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Header, {
            }),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                className: "min-h-screen",
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer, {
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/index.ts



/***/ })

};
;