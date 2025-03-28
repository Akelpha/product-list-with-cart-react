module.exports = {

"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/components/card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DessertsCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './assets/images/icon-add-to-cart.svg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
const data = [
    {
        image: {
            thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
            mobile: "./assets/images/image-waffle-mobile.jpg",
            tablet: "./assets/images/image-waffle-tablet.jpg",
            desktop: "./assets/images/image-waffle-desktop.jpg"
        },
        name: "Waffle with Berries",
        category: "Waffle",
        price: 6.5
    },
    {
        image: {
            thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
            mobile: "./assets/images/image-creme-brulee-mobile.jpg",
            tablet: "./assets/images/image-creme-brulee-tablet.jpg",
            desktop: "./assets/images/image-creme-brulee-desktop.jpg"
        },
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.0
    },
    {
        image: {
            thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
            mobile: "./assets/images/image-macaron-mobile.jpg",
            tablet: "./assets/images/image-macaron-tablet.jpg",
            desktop: "./assets/images/image-macaron-desktop.jpg"
        },
        name: "Macaron Mix of Five",
        category: "Macaron",
        price: 8.0
    },
    {
        image: {
            thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
            mobile: "./assets/images/image-tiramisu-mobile.jpg",
            tablet: "./assets/images/image-tiramisu-tablet.jpg",
            desktop: "./assets/images/image-tiramisu-desktop.jpg"
        },
        name: "Classic Tiramisu",
        category: "Tiramisu",
        price: 5.5
    },
    {
        image: {
            thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
            mobile: "./assets/images/image-baklava-mobile.jpg",
            tablet: "./assets/images/image-baklava-tablet.jpg",
            desktop: "./assets/images/image-baklava-desktop.jpg"
        },
        name: "Pistachio Baklava",
        category: "Baklava",
        price: 4.0
    },
    {
        image: {
            thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
            mobile: "./assets/images/image-meringue-mobile.jpg",
            tablet: "./assets/images/image-meringue-tablet.jpg",
            desktop: "./assets/images/image-meringue-desktop.jpg"
        },
        name: "Lemon Meringue Pie",
        category: "Pie",
        price: 5.0
    },
    {
        image: {
            thumbnail: "./assets/images/image-cake-thumbnail.jpg",
            mobile: "./assets/images/image-cake-mobile.jpg",
            tablet: "./assets/images/image-cake-tablet.jpg",
            desktop: "./assets/images/image-cake-desktop.jpg"
        },
        name: "Red Velvet Cake",
        category: "Cake",
        price: 4.5
    },
    {
        image: {
            thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
            mobile: "./assets/images/image-brownie-mobile.jpg",
            tablet: "./assets/images/image-brownie-tablet.jpg",
            desktop: "./assets/images/image-brownie-desktop.jpg"
        },
        name: "Salted Caramel Brownie",
        category: "Brownie",
        price: 4.5
    },
    {
        image: {
            thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
            mobile: "./assets/images/image-panna-cotta-mobile.jpg",
            tablet: "./assets/images/image-panna-cotta-tablet.jpg",
            desktop: "./assets/images/image-panna-cotta-desktop.jpg"
        },
        name: "Vanilla Panna Cotta",
        category: "Panna Cotta",
        price: 6.5
    }
];
function Button() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: "border rounded-xl w-[25%] h-[45px] border-rose-500 focus:bg-red flex justify-center items-center gap-2.5 absolute top-2 right-2 bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: addToCart,
                    alt: "icon"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/card.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/card.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            "Add To Cart"
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/card.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
function DessertsCard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold text-rose-900",
                children: "Desserts"
            }, void 0, false, {
                fileName: "[project]/src/app/components/card.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-4",
                children: data.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "relative flex justify-center items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        alt: "`image-${item.name}`",
                                        src: item.image.thumbnail,
                                        sizes: "100vw",
                                        width: 300,
                                        height: 300
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/card.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {}, void 0, false, {
                                        fileName: "[project]/src/app/components/card.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/card.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: item.category
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/card.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: item.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/card.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "$",
                                    item.price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/card.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/app/components/card.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/card.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/card.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/card.tsx [app-rsc] (ecmascript)");
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-[11px]  text-center",
                children: [
                    "Challenge by",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://www.frontendmentor.io?ref=challenge",
                        className: "text-[#3e52a3]",
                        children: "Frontend Mentor"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    ". Coded by",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://www.frontendmentor.io/profile/Akelpha",
                        className: "text-[#3e52a3]",
                        children: "Akelpha"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_5370c5aa._.js.map