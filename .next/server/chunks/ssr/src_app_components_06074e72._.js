module.exports = [
"[project]/src/app/components/responsiveImage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResponsiveImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$media$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-media/lib/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function ResponsiveImage({ src, alt }) {
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$media$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        maxWidth: "767px"
    });
    const isTablet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$media$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        minWidth: "768px",
        maxWidth: "1023px"
    });
    const isDesktop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$media$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        minWidth: "1024px"
    });
    let imageSrc = src.thumbnail;
    if (isMobile) {
        imageSrc = src.mobile;
    } else if (isTablet) {
        imageSrc = src.tablet;
    } else if (isDesktop) {
        imageSrc = src.desktop;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        src: imageSrc,
        alt: alt,
        width: 300,
        height: 300,
        priority: false,
        className: "object-cover rounded-2xl"
    }, void 0, false, {
        fileName: "[project]/src/app/components/responsiveImage.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/components/dessertCart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DessertsCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$responsiveImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/responsiveImage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const data = [
    {
        image: {
            thumbnail: "/assets/images/image-waffle-thumbnail.jpg",
            mobile: "/assets/images/image-waffle-mobile.jpg",
            tablet: "/assets/images/image-waffle-tablet.jpg",
            desktop: "/assets/images/image-waffle-desktop.jpg"
        },
        name: "Waffle with Berries",
        category: "Waffle",
        price: 6.5
    },
    {
        image: {
            thumbnail: "/assets/images/image-creme-brulee-thumbnail.jpg",
            mobile: "/assets/images/image-creme-brulee-mobile.jpg",
            tablet: "/assets/images/image-creme-brulee-tablet.jpg",
            desktop: "/assets/images/image-creme-brulee-desktop.jpg"
        },
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.0
    },
    {
        image: {
            thumbnail: "/assets/images/image-macaron-thumbnail.jpg",
            mobile: "/assets/images/image-macaron-mobile.jpg",
            tablet: "/assets/images/image-macaron-tablet.jpg",
            desktop: "/assets/images/image-macaron-desktop.jpg"
        },
        name: "Macaron Mix of Five",
        category: "Macaron",
        price: 8.0
    },
    {
        image: {
            thumbnail: "/assets/images/image-tiramisu-thumbnail.jpg",
            mobile: "/assets/images/image-tiramisu-mobile.jpg",
            tablet: "/assets/images/image-tiramisu-tablet.jpg",
            desktop: "/assets/images/image-tiramisu-desktop.jpg"
        },
        name: "Classic Tiramisu",
        category: "Tiramisu",
        price: 5.5
    },
    {
        image: {
            thumbnail: "/assets/images/image-baklava-thumbnail.jpg",
            mobile: "/assets/images/image-baklava-mobile.jpg",
            tablet: "/assets/images/image-baklava-tablet.jpg",
            desktop: "/assets/images/image-baklava-desktop.jpg"
        },
        name: "Pistachio Baklava",
        category: "Baklava",
        price: 4.0
    },
    {
        image: {
            thumbnail: "/assets/images/image-meringue-thumbnail.jpg",
            mobile: "/assets/images/image-meringue-mobile.jpg",
            tablet: "/assets/images/image-meringue-tablet.jpg",
            desktop: "/assets/images/image-meringue-desktop.jpg"
        },
        name: "Lemon Meringue Pie",
        category: "Pie",
        price: 5.0
    },
    {
        image: {
            thumbnail: "/assets/images/image-cake-thumbnail.jpg",
            mobile: "/assets/images/image-cake-mobile.jpg",
            tablet: "/assets/images/image-cake-tablet.jpg",
            desktop: "/assets/images/image-cake-desktop.jpg"
        },
        name: "Red Velvet Cake",
        category: "Cake",
        price: 4.5
    },
    {
        image: {
            thumbnail: "/assets/images/image-brownie-thumbnail.jpg",
            mobile: "/assets/images/image-brownie-mobile.jpg",
            tablet: "/assets/images/image-brownie-tablet.jpg",
            desktop: "/assets/images/image-brownie-desktop.jpg"
        },
        name: "Salted Caramel Brownie",
        category: "Brownie",
        price: 4.5
    },
    {
        image: {
            thumbnail: "/assets/images/image-panna-cotta-thumbnail.jpg",
            mobile: "/assets/images/image-panna-cotta-mobile.jpg",
            tablet: "/assets/images/image-panna-cotta-tablet.jpg",
            desktop: "/assets/images/image-panna-cotta-desktop.jpg"
        },
        name: "Vanilla Panna Cotta",
        category: "Panna Cotta",
        price: 6.5
    }
];
const changeButtonStyle = {
    notClicked: 'bg-white text-rose-900',
    clicked: 'bg-rose-900 text-white'
};
function CounterDessert() {
    const [countDessert, setCountDessert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const incrementDessert = ()=>{
        setCountDessert(countDessert + 1);
    };
    const decrementDessert = ()=>{
        setCountDessert(countDessert - 1);
    };
}
function Button() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: "border-2 rounded-4xl w-[170px] h-[50px] text-rose-900 border-rose-500 hover:border-red flex justify-center items-center absolute top-[90%] left-[20%] bg-white",
        onClick: CounterDessert,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/images/icon-add-to-cart.svg",
                    alt: "Add to Cart Icon",
                    width: 25,
                    height: 25,
                    className: "object-cover pr-2"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dessertCart.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/dessertCart.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/images/icon-decrement-quantity.svg",
                    alt: "Minus Icon",
                    width: 25,
                    height: 25
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dessertCart.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/dessertCart.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            "Add To Cart",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/images/icon-increment-quantity.svg",
                    alt: "Minus Icon",
                    width: 25,
                    height: 25
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dessertCart.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/dessertCart.tsx",
                lineNumber: 145,
                columnNumber: 8
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/dessertCart.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
function DessertsCard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold text-rose-900 pl-6.5 pb-3.5",
                children: "Desserts"
            }, void 0, false, {
                fileName: "[project]/src/app/components/dessertCart.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-4 ",
                children: data.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " flex flex-col  ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "relative flex justify-center items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$responsiveImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: item.image,
                                        alt: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dessertCart.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {}, void 0, false, {
                                        fileName: "[project]/src/app/components/dessertCart.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dessertCart.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "text-justify mt-6 pl-6.5 ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-rose-400 font-medium text-sm",
                                        children: item.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dessertCart.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-rose-900 ",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dessertCart.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red font-medium text-sm",
                                        children: [
                                            "$",
                                            item.price
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/dessertCart.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dessertCart.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/app/components/dessertCart.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/dessertCart.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/dessertCart.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_components_06074e72._.js.map