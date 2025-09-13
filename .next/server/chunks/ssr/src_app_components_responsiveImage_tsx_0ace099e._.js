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
];

//# sourceMappingURL=src_app_components_responsiveImage_tsx_0ace099e._.js.map