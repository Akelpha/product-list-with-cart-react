(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/responsiveImage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResponsiveImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$media$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-media/lib/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ResponsiveImage(param) {
    let { src, alt } = param;
    _s();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$media$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        maxWidth: "767px"
    });
    const isTablet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$media$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        minWidth: "768px",
        maxWidth: "1023px"
    });
    const isDesktop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$media$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(ResponsiveImage, "P9fZFMhB2exRQ4JytXKdU0o+H2M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$media$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$media$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$media$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = ResponsiveImage;
var _c;
__turbopack_context__.k.register(_c, "ResponsiveImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/dessertCart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DessertsCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$responsiveImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/responsiveImage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
// TO DO : Instead of having this button component like this,  try to implement a conditional function that will take the two part of the button
// Tu déclares ton état en haut du composant :
// const [isAdded, setIsAdded] = useState(false);
// Ensuite, dans le return, tu fais le rendu conditionnel :
// return (
//   <button>
//     {isAdded ? (
// Ici le JSX pour le compteur ( + , -, nombre )
//     ) : (
// Ici le JSX pour Add to Cart + icône
//     )}
//   </button>
// );
// const [changeButtonStyle,setChangeButtonStyle] = useState('text-rose-900 bg-white');
// const click = () => {
//   setChangeButtonStyle('text-white bg-rose-900')
// }
// useEffect(() => {
//   document.querySelector('button')?.addEventListener('click', click){
//     return () => {
//       button.style.background = 'bg-rose-900';
//       button.style.color = 'text-white';
//   };
//   },[]);
// function CounterDessert (){
//   const [countDessert, setCountDessert] = useState(0);
//   const incrementDessert = () => { 
//     setCountDessert(countDessert + 1)
//   }
//   const decrementDessert = () => {
//     setCountDessert(countDessert - 1)
//   }
// } 
function Button() {
    _s();
    const [isAdded, setIsAdded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [countDessert, setCountDessert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const incrementDessert = ()=>{
        setCountDessert(countDessert + 1);
    };
    const decrementDessert = ()=>{
        setCountDessert(countDessert - 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: isAdded ? "border-2 rounded-4xl w-[170px] h-[50px] text-white border-red bg-red flex justify-center items-center absolute top-[90%] left-[20%]" : "border-2 rounded-4xl w-[170px] h-[50px] text-rose-900 border-rose-500 hover:border-red flex justify-center items-center absolute top-[90%] left-[20%] bg-white",
        onClick: ()=>setIsAdded(!isAdded),
        children: isAdded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "          ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    onClick: decrementDessert,
                    children: [
                        "          ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/assets/images/icon-decrement-quantity.svg",
                            alt: "Minus Icon",
                            width: 25,
                            height: 25
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dessertCart.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this),
                        "       "
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/dessertCart.tsx",
                    lineNumber: 159,
                    columnNumber: 11
                }, this),
                "        ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mx-2",
                    children: count
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dessertCart.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this),
                "       ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    onClick: incrementDessert,
                    children: [
                        "        ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/assets/images/icon-increment-quantity.svg",
                            alt: "Plus Icon",
                            width: 25,
                            height: 25
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dessertCart.tsx",
                            lineNumber: 169,
                            columnNumber: 9
                        }, this),
                        "       "
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/dessertCart.tsx",
                    lineNumber: 168,
                    columnNumber: 8
                }, this)
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "         ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        "        ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/assets/images/icon-add-to-cart.svg",
                            alt: "Add to Cart Icon",
                            width: 25,
                            height: 25,
                            className: "object-cover pr-2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dessertCart.tsx",
                            lineNumber: 180,
                            columnNumber: 9
                        }, this),
                        "      "
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/dessertCart.tsx",
                    lineNumber: 179,
                    columnNumber: 10
                }, this),
                "        Add To Cart       "
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/app/components/dessertCart.tsx",
        lineNumber: 156,
        columnNumber: 6
    }, this);
}
_s(Button, "EoGZLh7QQgjlzAfnsg/p0v1nOKw=");
_c = Button;
function DessertsCard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold text-rose-900 pl-6.5 pb-3.5",
                children: "Desserts"
            }, void 0, false, {
                fileName: "[project]/src/app/components/dessertCart.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-4 ",
                children: data.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " flex flex-col  ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "relative flex justify-center items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$responsiveImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: item.image,
                                        alt: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dessertCart.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {}, void 0, false, {
                                        fileName: "[project]/src/app/components/dessertCart.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dessertCart.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "text-justify mt-6 pl-6.5 ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-rose-400 font-medium text-sm",
                                        children: item.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dessertCart.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-rose-900 ",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dessertCart.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red font-medium text-sm",
                                        children: [
                                            "$",
                                            item.price
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/dessertCart.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dessertCart.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/app/components/dessertCart.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/dessertCart.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/dessertCart.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, this);
}
_c1 = DessertsCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button");
__turbopack_context__.k.register(_c1, "DessertsCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_components_d851d9f6._.js.map