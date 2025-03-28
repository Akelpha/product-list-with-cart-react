(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_components_responsiveImage_tsx_ccf54805._.js", {

"[project]/src/app/components/responsiveImage.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ResponsiveImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$media$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-media/lib/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ResponsiveImage({ src, alt }) {
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
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_components_responsiveImage_tsx_ccf54805._.js.map