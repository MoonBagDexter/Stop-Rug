"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[772], {
    5565: (t, e, i) => {
        i.d(e, {
            default: () => r.a
        });
        var n = i(4146)
          , r = i.n(n)
    }
    ,
    8173: (t, e, i) => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return m
            }
        });
        let n = i(306)
          , r = i(5155)
          , s = n._(i(2115))
          , o = i(180)
          , a = i(1394)
          , l = i(4116)
          , u = i(4445)
          , h = i(5353)
          , d = i(2170)
          , c = i(9544);
        function p(t, e, i) {
            "undefined" != typeof window && (async () => t.prefetch(e, i))().catch(t => {}
            )
        }
        function f(t) {
            return "string" == typeof t ? t : (0,
            o.formatUrl)(t)
        }
        i(2363);
        let m = s.default.forwardRef(function(t, e) {
            let i, n;
            let {href: o, as: m, children: g, prefetch: v=null, passHref: y, replace: x, shallow: b, scroll: w, onClick: P, onMouseEnter: S, onTouchStart: T, legacyBehavior: A=!1, ...E} = t;
            i = g,
            A && ("string" == typeof i || "number" == typeof i) && (i = (0,
            r.jsx)("a", {
                children: i
            }));
            let M = s.default.useContext(a.AppRouterContext)
              , C = !1 !== v
              , j = null === v ? u.PrefetchKind.AUTO : u.PrefetchKind.FULL
              , {href: V, as: D} = s.default.useMemo( () => {
                let t = f(o);
                return {
                    href: t,
                    as: m ? f(m) : t
                }
            }
            , [o, m])
              , k = s.default.useRef(V)
              , R = s.default.useRef(D);
            A && (n = s.default.Children.only(i));
            let O = A ? n && "object" == typeof n && n.ref : e
              , [L,F,I] = (0,
            l.useIntersection)({
                rootMargin: "200px"
            })
              , B = s.default.useCallback(t => {
                (R.current !== D || k.current !== V) && (I(),
                R.current = D,
                k.current = V),
                L(t)
            }
            , [D, V, I, L])
              , _ = (0,
            h.useMergedRef)(B, O);
            s.default.useEffect( () => {
                M && F && C && p(M, V, {
                    kind: j
                })
            }
            , [D, V, F, C, M, j]);
            let U = {
                ref: _,
                onClick(t) {
                    A || "function" != typeof P || P(t),
                    A && n.props && "function" == typeof n.props.onClick && n.props.onClick(t),
                    M && !t.defaultPrevented && function(t, e, i, n, r, o, a) {
                        let {nodeName: l} = t.currentTarget;
                        "A" === l.toUpperCase() && function(t) {
                            let e = t.currentTarget.getAttribute("target");
                            return e && "_self" !== e || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                        }(t) || (t.preventDefault(),
                        s.default.startTransition( () => {
                            let t = null == a || a;
                            "beforePopState"in e ? e[r ? "replace" : "push"](i, n, {
                                shallow: o,
                                scroll: t
                            }) : e[r ? "replace" : "push"](n || i, {
                                scroll: t
                            })
                        }
                        ))
                    }(t, M, V, D, x, b, w)
                },
                onMouseEnter(t) {
                    A || "function" != typeof S || S(t),
                    A && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(t),
                    M && C && p(M, V, {
                        kind: j
                    })
                },
                onTouchStart: function(t) {
                    A || "function" != typeof T || T(t),
                    A && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(t),
                    M && C && p(M, V, {
                        kind: j
                    })
                }
            };
            return (0,
            d.isAbsoluteUrl)(D) ? U.href = D : A && !y && ("a" !== n.type || "href"in n.props) || (U.href = (0,
            c.addBasePath)(D)),
            A ? s.default.cloneElement(n, U) : (0,
            r.jsx)("a", {
                ...E,
                ...U,
                children: i
            })
        });
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    }
    ,
    7970: (t, e, i) => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "Image", {
            enumerable: !0,
            get: function() {
                return b
            }
        });
        let n = i(306)
          , r = i(9955)
          , s = i(5155)
          , o = r._(i(2115))
          , a = n._(i(7650))
          , l = n._(i(6107))
          , u = i(666)
          , h = i(1159)
          , d = i(3621);
        i(2363);
        let c = i(3576)
          , p = n._(i(5514))
          , f = i(5353)
          , m = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };
        function g(t, e, i, n, r, s, o) {
            let a = null == t ? void 0 : t.src;
            t && t["data-loaded-src"] !== a && (t["data-loaded-src"] = a,
            ("decode"in t ? t.decode() : Promise.resolve()).catch( () => {}
            ).then( () => {
                if (t.parentElement && t.isConnected) {
                    if ("empty" !== e && r(!0),
                    null == i ? void 0 : i.current) {
                        let e = new Event("load");
                        Object.defineProperty(e, "target", {
                            writable: !1,
                            value: t
                        });
                        let n = !1
                          , r = !1;
                        i.current({
                            ...e,
                            nativeEvent: e,
                            currentTarget: t,
                            target: t,
                            isDefaultPrevented: () => n,
                            isPropagationStopped: () => r,
                            persist: () => {}
                            ,
                            preventDefault: () => {
                                n = !0,
                                e.preventDefault()
                            }
                            ,
                            stopPropagation: () => {
                                r = !0,
                                e.stopPropagation()
                            }
                        })
                    }
                    (null == n ? void 0 : n.current) && n.current(t)
                }
            }
            ))
        }
        function v(t) {
            return o.use ? {
                fetchPriority: t
            } : {
                fetchpriority: t
            }
        }
        "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
        let y = (0,
        o.forwardRef)( (t, e) => {
            let {src: i, srcSet: n, sizes: r, height: a, width: l, decoding: u, className: h, style: d, fetchPriority: c, placeholder: p, loading: m, unoptimized: y, fill: x, onLoadRef: b, onLoadingCompleteRef: w, setBlurComplete: P, setShowAltText: S, sizesInput: T, onLoad: A, onError: E, ...M} = t
              , C = (0,
            o.useCallback)(t => {
                t && (E && (t.src = t.src),
                t.complete && g(t, p, b, w, P, y, T))
            }
            , [i, p, b, w, P, E, y, T])
              , j = (0,
            f.useMergedRef)(e, C);
            return (0,
            s.jsx)("img", {
                ...M,
                ...v(c),
                loading: m,
                width: l,
                height: a,
                decoding: u,
                "data-nimg": x ? "fill" : "1",
                className: h,
                style: d,
                sizes: r,
                srcSet: n,
                src: i,
                ref: j,
                onLoad: t => {
                    g(t.currentTarget, p, b, w, P, y, T)
                }
                ,
                onError: t => {
                    S(!0),
                    "empty" !== p && P(!0),
                    E && E(t)
                }
            })
        }
        );
        function x(t) {
            let {isAppRouter: e, imgAttributes: i} = t
              , n = {
                as: "image",
                imageSrcSet: i.srcSet,
                imageSizes: i.sizes,
                crossOrigin: i.crossOrigin,
                referrerPolicy: i.referrerPolicy,
                ...v(i.fetchPriority)
            };
            return e && a.default.preload ? (a.default.preload(i.src, n),
            null) : (0,
            s.jsx)(l.default, {
                children: (0,
                s.jsx)("link", {
                    rel: "preload",
                    href: i.srcSet ? void 0 : i.src,
                    ...n
                }, "__nimg-" + i.src + i.srcSet + i.sizes)
            })
        }
        let b = (0,
        o.forwardRef)( (t, e) => {
            let i = (0,
            o.useContext)(c.RouterContext)
              , n = (0,
            o.useContext)(d.ImageConfigContext)
              , r = (0,
            o.useMemo)( () => {
                var t;
                let e = m || n || h.imageConfigDefault
                  , i = [...e.deviceSizes, ...e.imageSizes].sort( (t, e) => t - e)
                  , r = e.deviceSizes.sort( (t, e) => t - e)
                  , s = null == (t = e.qualities) ? void 0 : t.sort( (t, e) => t - e);
                return {
                    ...e,
                    allSizes: i,
                    deviceSizes: r,
                    qualities: s
                }
            }
            , [n])
              , {onLoad: a, onLoadingComplete: l} = t
              , f = (0,
            o.useRef)(a);
            (0,
            o.useEffect)( () => {
                f.current = a
            }
            , [a]);
            let g = (0,
            o.useRef)(l);
            (0,
            o.useEffect)( () => {
                g.current = l
            }
            , [l]);
            let[v,b] = (0,
            o.useState)(!1)
              , [w,P] = (0,
            o.useState)(!1)
              , {props: S, meta: T} = (0,
            u.getImgProps)(t, {
                defaultLoader: p.default,
                imgConf: r,
                blurComplete: v,
                showAltText: w
            });
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)(y, {
                    ...S,
                    unoptimized: T.unoptimized,
                    placeholder: T.placeholder,
                    fill: T.fill,
                    onLoadRef: f,
                    onLoadingCompleteRef: g,
                    setBlurComplete: b,
                    setShowAltText: P,
                    sizesInput: t.sizes,
                    ref: e
                }), T.priority ? (0,
                s.jsx)(x, {
                    isAppRouter: !i,
                    imgAttributes: S
                }) : null]
            })
        }
        );
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    }
    ,
    8571: (t, e) => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var i in e)
                Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: e[i]
                })
        }(e, {
            cancelIdleCallback: function() {
                return n
            },
            requestIdleCallback: function() {
                return i
            }
        });
        let i = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(t) {
            let e = Date.now();
            return self.setTimeout(function() {
                t({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - e))
                    }
                })
            }, 1)
        }
          , n = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(t) {
            return clearTimeout(t)
        }
        ;
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    }
    ,
    4116: (t, e, i) => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "useIntersection", {
            enumerable: !0,
            get: function() {
                return l
            }
        });
        let n = i(2115)
          , r = i(8571)
          , s = "function" == typeof IntersectionObserver
          , o = new Map
          , a = [];
        function l(t) {
            let {rootRef: e, rootMargin: i, disabled: l} = t
              , u = l || !s
              , [h,d] = (0,
            n.useState)(!1)
              , c = (0,
            n.useRef)(null)
              , p = (0,
            n.useCallback)(t => {
                c.current = t
            }
            , []);
            return (0,
            n.useEffect)( () => {
                if (s) {
                    if (u || h)
                        return;
                    let t = c.current;
                    if (t && t.tagName)
                        return function(t, e, i) {
                            let {id: n, observer: r, elements: s} = function(t) {
                                let e;
                                let i = {
                                    root: t.root || null,
                                    margin: t.rootMargin || ""
                                }
                                  , n = a.find(t => t.root === i.root && t.margin === i.margin);
                                if (n && (e = o.get(n)))
                                    return e;
                                let r = new Map;
                                return e = {
                                    id: i,
                                    observer: new IntersectionObserver(t => {
                                        t.forEach(t => {
                                            let e = r.get(t.target)
                                              , i = t.isIntersecting || t.intersectionRatio > 0;
                                            e && i && e(i)
                                        }
                                        )
                                    }
                                    ,t),
                                    elements: r
                                },
                                a.push(i),
                                o.set(i, e),
                                e
                            }(i);
                            return s.set(t, e),
                            r.observe(t),
                            function() {
                                if (s.delete(t),
                                r.unobserve(t),
                                0 === s.size) {
                                    r.disconnect(),
                                    o.delete(n);
                                    let t = a.findIndex(t => t.root === n.root && t.margin === n.margin);
                                    t > -1 && a.splice(t, 1)
                                }
                            }
                        }(t, t => t && d(t), {
                            root: null == e ? void 0 : e.current,
                            rootMargin: i
                        })
                } else if (!h) {
                    let t = (0,
                    r.requestIdleCallback)( () => d(!0));
                    return () => (0,
                    r.cancelIdleCallback)(t)
                }
            }
            , [u, i, e, h, c.current]),
            [p, h, (0,
            n.useCallback)( () => {
                d(!1)
            }
            , [])]
        }
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    }
    ,
    5353: (t, e, i) => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "useMergedRef", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let n = i(2115);
        function r(t, e) {
            let i = (0,
            n.useRef)( () => {}
            )
              , r = (0,
            n.useRef)( () => {}
            );
            return (0,
            n.useMemo)( () => t && e ? n => {
                null === n ? (i.current(),
                r.current()) : (i.current = s(t, n),
                r.current = s(e, n))
            }
            : t || e, [t, e])
        }
        function s(t, e) {
            if ("function" != typeof t)
                return t.current = e,
                () => {
                    t.current = null
                }
                ;
            {
                let i = t(e);
                return "function" == typeof i ? i : () => t(null)
            }
        }
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    }
    ,
    3003: (t, e, i) => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "AmpStateContext", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let n = i(306)._(i(2115)).default.createContext({})
    }
    ,
    675: (t, e) => {
        function i(t) {
            let {ampFirst: e=!1, hybrid: i=!1, hasQuery: n=!1} = void 0 === t ? {} : t;
            return e || i && n
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "isInAmpMode", {
            enumerable: !0,
            get: function() {
                return i
            }
        })
    }
    ,
    666: (t, e, i) => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getImgProps", {
            enumerable: !0,
            get: function() {
                return a
            }
        }),
        i(2363);
        let n = i(5859)
          , r = i(1159);
        function s(t) {
            return void 0 !== t.default
        }
        function o(t) {
            return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" == typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
        }
        function a(t, e) {
            var i, a;
            let l, u, h, {src: d, sizes: c, unoptimized: p=!1, priority: f=!1, loading: m, className: g, quality: v, width: y, height: x, fill: b=!1, style: w, overrideSrc: P, onLoad: S, onLoadingComplete: T, placeholder: A="empty", blurDataURL: E, fetchPriority: M, decoding: C="async", layout: j, objectFit: V, objectPosition: D, lazyBoundary: k, lazyRoot: R, ...O} = t, {imgConf: L, showAltText: F, blurComplete: I, defaultLoader: B} = e, _ = L || r.imageConfigDefault;
            if ("allSizes"in _)
                l = _;
            else {
                let t = [..._.deviceSizes, ..._.imageSizes].sort( (t, e) => t - e)
                  , e = _.deviceSizes.sort( (t, e) => t - e)
                  , n = null == (i = _.qualities) ? void 0 : i.sort( (t, e) => t - e);
                l = {
                    ..._,
                    allSizes: t,
                    deviceSizes: e,
                    qualities: n
                }
            }
            if (void 0 === B)
                throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
            let U = O.loader || B;
            delete O.loader,
            delete O.srcSet;
            let N = "__next_img_default"in U;
            if (N) {
                if ("custom" === l.loader)
                    throw Error('Image with src "' + d + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
            } else {
                let t = U;
                U = e => {
                    let {config: i, ...n} = e;
                    return t(n)
                }
            }
            if (j) {
                "fill" === j && (b = !0);
                let t = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[j];
                t && (w = {
                    ...w,
                    ...t
                });
                let e = {
                    responsive: "100vw",
                    fill: "100vw"
                }[j];
                e && !c && (c = e)
            }
            let z = ""
              , $ = o(y)
              , W = o(x);
            if ((a = d) && "object" == typeof a && (s(a) || void 0 !== a.src)) {
                let t = s(d) ? d.default : d;
                if (!t.src)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t));
                if (!t.height || !t.width)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t));
                if (u = t.blurWidth,
                h = t.blurHeight,
                E = E || t.blurDataURL,
                z = t.src,
                !b) {
                    if ($ || W) {
                        if ($ && !W) {
                            let e = $ / t.width;
                            W = Math.round(t.height * e)
                        } else if (!$ && W) {
                            let e = W / t.height;
                            $ = Math.round(t.width * e)
                        }
                    } else
                        $ = t.width,
                        W = t.height
                }
            }
            let q = !f && ("lazy" === m || void 0 === m);
            (!(d = "string" == typeof d ? d : z) || d.startsWith("data:") || d.startsWith("blob:")) && (p = !0,
            q = !1),
            l.unoptimized && (p = !0),
            N && !l.dangerouslyAllowSVG && d.split("?", 1)[0].endsWith(".svg") && (p = !0);
            let H = o(v)
              , K = Object.assign(b ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: V,
                objectPosition: D
            } : {}, F ? {} : {
                color: "transparent"
            }, w)
              , Y = I || "empty" === A ? null : "blur" === A ? 'url("data:image/svg+xml;charset=utf-8,' + (0,
            n.getImageBlurSvg)({
                widthInt: $,
                heightInt: W,
                blurWidth: u,
                blurHeight: h,
                blurDataURL: E || "",
                objectFit: K.objectFit
            }) + '")' : 'url("' + A + '")'
              , X = Y ? {
                backgroundSize: K.objectFit || "cover",
                backgroundPosition: K.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: Y
            } : {}
              , G = function(t) {
                let {config: e, src: i, unoptimized: n, width: r, quality: s, sizes: o, loader: a} = t;
                if (n)
                    return {
                        src: i,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: l, kind: u} = function(t, e, i) {
                    let {deviceSizes: n, allSizes: r} = t;
                    if (i) {
                        let t = /(^|\s)(1?\d?\d)vw/g
                          , e = [];
                        for (let n; n = t.exec(i); n)
                            e.push(parseInt(n[2]));
                        if (e.length) {
                            let t = .01 * Math.min(...e);
                            return {
                                widths: r.filter(e => e >= n[0] * t),
                                kind: "w"
                            }
                        }
                        return {
                            widths: r,
                            kind: "w"
                        }
                    }
                    return "number" != typeof e ? {
                        widths: n,
                        kind: "w"
                    } : {
                        widths: [...new Set([e, 2 * e].map(t => r.find(e => e >= t) || r[r.length - 1]))],
                        kind: "x"
                    }
                }(e, r, o)
                  , h = l.length - 1;
                return {
                    sizes: o || "w" !== u ? o : "100vw",
                    srcSet: l.map( (t, n) => a({
                        config: e,
                        src: i,
                        quality: s,
                        width: t
                    }) + " " + ("w" === u ? t : n + 1) + u).join(", "),
                    src: a({
                        config: e,
                        src: i,
                        quality: s,
                        width: l[h]
                    })
                }
            }({
                config: l,
                src: d,
                unoptimized: p,
                width: $,
                quality: H,
                sizes: c,
                loader: U
            });
            return {
                props: {
                    ...O,
                    loading: q ? "lazy" : m,
                    fetchPriority: M,
                    width: $,
                    height: W,
                    decoding: C,
                    className: g,
                    style: {
                        ...K,
                        ...X
                    },
                    sizes: G.sizes,
                    srcSet: G.srcSet,
                    src: P || G.src
                },
                meta: {
                    unoptimized: p,
                    priority: f,
                    placeholder: A,
                    fill: b
                }
            }
        }
    }
    ,
    6107: (t, e, i) => {
        var n = i(2818);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var i in e)
                Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: e[i]
                })
        }(e, {
            default: function() {
                return g
            },
            defaultHead: function() {
                return c
            }
        });
        let r = i(306)
          , s = i(9955)
          , o = i(5155)
          , a = s._(i(2115))
          , l = r._(i(1172))
          , u = i(3003)
          , h = i(1147)
          , d = i(675);
        function c(t) {
            void 0 === t && (t = !1);
            let e = [(0,
            o.jsx)("meta", {
                charSet: "utf-8"
            }, "charset")];
            return t || e.push((0,
            o.jsx)("meta", {
                name: "viewport",
                content: "width=device-width"
            }, "viewport")),
            e
        }
        function p(t, e) {
            return "string" == typeof e || "number" == typeof e ? t : e.type === a.default.Fragment ? t.concat(a.default.Children.toArray(e.props.children).reduce( (t, e) => "string" == typeof e || "number" == typeof e ? t : t.concat(e), [])) : t.concat(e)
        }
        i(2363);
        let f = ["name", "httpEquiv", "charSet", "itemProp"];
        function m(t, e) {
            let {inAmpMode: i} = e;
            return t.reduce(p, []).reverse().concat(c(i).reverse()).filter(function() {
                let t = new Set
                  , e = new Set
                  , i = new Set
                  , n = {};
                return r => {
                    let s = !0
                      , o = !1;
                    if (r.key && "number" != typeof r.key && r.key.indexOf("$") > 0) {
                        o = !0;
                        let e = r.key.slice(r.key.indexOf("$") + 1);
                        t.has(e) ? s = !1 : t.add(e)
                    }
                    switch (r.type) {
                    case "title":
                    case "base":
                        e.has(r.type) ? s = !1 : e.add(r.type);
                        break;
                    case "meta":
                        for (let t = 0, e = f.length; t < e; t++) {
                            let e = f[t];
                            if (r.props.hasOwnProperty(e)) {
                                if ("charSet" === e)
                                    i.has(e) ? s = !1 : i.add(e);
                                else {
                                    let t = r.props[e]
                                      , i = n[e] || new Set;
                                    ("name" !== e || !o) && i.has(t) ? s = !1 : (i.add(t),
                                    n[e] = i)
                                }
                            }
                        }
                    }
                    return s
                }
            }()).reverse().map( (t, e) => {
                let r = t.key || e;
                if (n.env.__NEXT_OPTIMIZE_FONTS && !i && "link" === t.type && t.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(e => t.props.href.startsWith(e))) {
                    let e = {
                        ...t.props || {}
                    };
                    return e["data-href"] = e.href,
                    e.href = void 0,
                    e["data-optimized-fonts"] = !0,
                    a.default.cloneElement(t, e)
                }
                return a.default.cloneElement(t, {
                    key: r
                })
            }
            )
        }
        let g = function(t) {
            let {children: e} = t
              , i = (0,
            a.useContext)(u.AmpStateContext)
              , n = (0,
            a.useContext)(h.HeadManagerContext);
            return (0,
            o.jsx)(l.default, {
                reduceComponentsToState: m,
                headManager: n,
                inAmpMode: (0,
                d.isInAmpMode)(i),
                children: e
            })
        };
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    }
    ,
    5859: (t, e) => {
        function i(t) {
            let {widthInt: e, heightInt: i, blurWidth: n, blurHeight: r, blurDataURL: s, objectFit: o} = t
              , a = n ? 40 * n : e
              , l = r ? 40 * r : i
              , u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
            return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + s + "'/%3E%3C/svg%3E"
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getImageBlurSvg", {
            enumerable: !0,
            get: function() {
                return i
            }
        })
    }
    ,
    3621: (t, e, i) => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "ImageConfigContext", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        let n = i(306)._(i(2115))
          , r = i(1159)
          , s = n.default.createContext(r.imageConfigDefault)
    }
    ,
    1159: (t, e) => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var i in e)
                Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: e[i]
                })
        }(e, {
            VALID_LOADERS: function() {
                return i
            },
            imageConfigDefault: function() {
                return n
            }
        });
        let i = ["default", "imgix", "cloudinary", "akamai", "custom"]
          , n = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60,
            formats: ["image/webp"],
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: void 0,
            unoptimized: !1
        }
    }
    ,
    4146: (t, e, i) => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var i in e)
                Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: e[i]
                })
        }(e, {
            default: function() {
                return l
            },
            getImageProps: function() {
                return a
            }
        });
        let n = i(306)
          , r = i(666)
          , s = i(7970)
          , o = n._(i(5514));
        function a(t) {
            let {props: e} = (0,
            r.getImgProps)(t, {
                defaultLoader: o.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                }
            });
            for (let[t,i] of Object.entries(e))
                void 0 === i && delete e[t];
            return {
                props: e
            }
        }
        let l = s.Image
    }
    ,
    5514: (t, e) => {
        function i(t) {
            var e;
            let {config: i, src: n, width: r, quality: s} = t
              , o = s || (null == (e = i.qualities) ? void 0 : e.reduce( (t, e) => Math.abs(e - 75) < Math.abs(t - 75) ? e : t)) || 75;
            return "https://www.stoprug.fun/" + i.path + "?url=" + encodeURIComponent(n) + "&w=" + r + "&q=" + o + (n.startsWith("/_next/static/media/"),
            "")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return n
            }
        }),
        i.__next_img_default = !0;
        let n = i
    }
    ,
    3576: (t, e, i) => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "RouterContext", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let n = i(306)._(i(2115)).default.createContext(null)
    }
    ,
    180: (t, e, i) => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var i in e)
                Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: e[i]
                })
        }(e, {
            formatUrl: function() {
                return s
            },
            formatWithValidation: function() {
                return a
            },
            urlObjectKeys: function() {
                return o
            }
        });
        let n = i(9955)._(i(4156))
          , r = /https?|ftp|gopher|file/;
        function s(t) {
            let {auth: e, hostname: i} = t
              , s = t.protocol || ""
              , o = t.pathname || ""
              , a = t.hash || ""
              , l = t.query || ""
              , u = !1;
            e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : "",
            t.host ? u = e + t.host : i && (u = e + (~i.indexOf(":") ? "[" + i + "]" : i),
            t.port && (u += ":" + t.port)),
            l && "object" == typeof l && (l = String(n.urlQueryToSearchParams(l)));
            let h = t.search || l && "?" + l || "";
            return s && !s.endsWith(":") && (s += ":"),
            t.slashes || (!s || r.test(s)) && !1 !== u ? (u = "//" + (u || ""),
            o && "/" !== o[0] && (o = "/" + o)) : u || (u = ""),
            a && "#" !== a[0] && (a = "#" + a),
            h && "?" !== h[0] && (h = "?" + h),
            "" + s + u + (o = o.replace(/[?#]/g, encodeURIComponent)) + (h = h.replace("#", "%23")) + a
        }
        let o = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
        function a(t) {
            return s(t)
        }
    }
    ,
    4156: (t, e) => {
        function i(t) {
            let e = {};
            return t.forEach( (t, i) => {
                void 0 === e[i] ? e[i] = t : Array.isArray(e[i]) ? e[i].push(t) : e[i] = [e[i], t]
            }
            ),
            e
        }
        function n(t) {
            return "string" != typeof t && ("number" != typeof t || isNaN(t)) && "boolean" != typeof t ? "" : String(t)
        }
        function r(t) {
            let e = new URLSearchParams;
            return Object.entries(t).forEach(t => {
                let[i,r] = t;
                Array.isArray(r) ? r.forEach(t => e.append(i, n(t))) : e.set(i, n(r))
            }
            ),
            e
        }
        function s(t) {
            for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
                i[n - 1] = arguments[n];
            return i.forEach(e => {
                Array.from(e.keys()).forEach(e => t.delete(e)),
                e.forEach( (e, i) => t.append(i, e))
            }
            ),
            t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var i in e)
                Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: e[i]
                })
        }(e, {
            assign: function() {
                return s
            },
            searchParamsToUrlQuery: function() {
                return i
            },
            urlQueryToSearchParams: function() {
                return r
            }
        })
    }
    ,
    1172: (t, e, i) => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return a
            }
        });
        let n = i(2115)
          , r = "undefined" == typeof window
          , s = r ? () => {}
        : n.useLayoutEffect
          , o = r ? () => {}
        : n.useEffect;
        function a(t) {
            let {headManager: e, reduceComponentsToState: i} = t;
            function a() {
                if (e && e.mountedInstances) {
                    let r = n.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));
                    e.updateHead(i(r, t))
                }
            }
            if (r) {
                var l;
                null == e || null == (l = e.mountedInstances) || l.add(t.children),
                a()
            }
            return s( () => {
                var i;
                return null == e || null == (i = e.mountedInstances) || i.add(t.children),
                () => {
                    var i;
                    null == e || null == (i = e.mountedInstances) || i.delete(t.children)
                }
            }
            ),
            s( () => (e && (e._pendingUpdate = a),
            () => {
                e && (e._pendingUpdate = a)
            }
            )),
            o( () => (e && e._pendingUpdate && (e._pendingUpdate(),
            e._pendingUpdate = null),
            () => {
                e && e._pendingUpdate && (e._pendingUpdate(),
                e._pendingUpdate = null)
            }
            )),
            null
        }
    }
    ,
    2170: (t, e) => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var i in e)
                Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: e[i]
                })
        }(e, {
            DecodeError: function() {
                return f
            },
            MiddlewareNotFoundError: function() {
                return y
            },
            MissingStaticPage: function() {
                return v
            },
            NormalizeError: function() {
                return m
            },
            PageNotFoundError: function() {
                return g
            },
            SP: function() {
                return c
            },
            ST: function() {
                return p
            },
            WEB_VITALS: function() {
                return i
            },
            execOnce: function() {
                return n
            },
            getDisplayName: function() {
                return l
            },
            getLocationOrigin: function() {
                return o
            },
            getURL: function() {
                return a
            },
            isAbsoluteUrl: function() {
                return s
            },
            isResSent: function() {
                return u
            },
            loadGetInitialProps: function() {
                return d
            },
            normalizeRepeatedSlashes: function() {
                return h
            },
            stringifyError: function() {
                return x
            }
        });
        let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
        function n(t) {
            let e, i = !1;
            return function() {
                for (var n = arguments.length, r = Array(n), s = 0; s < n; s++)
                    r[s] = arguments[s];
                return i || (i = !0,
                e = t(...r)),
                e
            }
        }
        let r = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/
          , s = t => r.test(t);
        function o() {
            let {protocol: t, hostname: e, port: i} = window.location;
            return t + "//" + e + (i ? ":" + i : "")
        }
        function a() {
            let {href: t} = window.location
              , e = o();
            return t.substring(e.length)
        }
        function l(t) {
            return "string" == typeof t ? t : t.displayName || t.name || "Unknown"
        }
        function u(t) {
            return t.finished || t.headersSent
        }
        function h(t) {
            let e = t.split("?");
            return e[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (e[1] ? "?" + e.slice(1).join("?") : "")
        }
        async function d(t, e) {
            let i = e.res || e.ctx && e.ctx.res;
            if (!t.getInitialProps)
                return e.ctx && e.Component ? {
                    pageProps: await d(e.Component, e.ctx)
                } : {};
            let n = await t.getInitialProps(e);
            if (i && u(i))
                return n;
            if (!n)
                throw Error('"' + l(t) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.');
            return n
        }
        let c = "undefined" != typeof performance
          , p = c && ["mark", "measure", "getEntriesByName"].every(t => "function" == typeof performance[t]);
        class f extends Error {
        }
        class m extends Error {
        }
        class g extends Error {
            constructor(t) {
                super(),
                this.code = "ENOENT",
                this.name = "PageNotFoundError",
                this.message = "Cannot find module for page: " + t
            }
        }
        class v extends Error {
            constructor(t, e) {
                super(),
                this.message = "Failed to load static file for page: " + t + " " + e
            }
        }
        class y extends Error {
            constructor() {
                super(),
                this.code = "ENOENT",
                this.message = "Cannot find the middleware module"
            }
        }
        function x(t) {
            return JSON.stringify({
                message: t.message,
                stack: t.stack
            })
        }
    }
    ,
    5087: (t, e, i) => {
        i.d(e, {
            xQ: () => s
        });
        var n = i(2115)
          , r = i(9656);
        function s(t=!0) {
            let e = (0,
            n.useContext)(r.t);
            if (null === e)
                return [!0, null];
            let {isPresent: i, onExitComplete: o, register: a} = e
              , l = (0,
            n.useId)();
            (0,
            n.useEffect)( () => {
                t && a(l)
            }
            , [t]);
            let u = (0,
            n.useCallback)( () => t && o && o(l), [l, o, t]);
            return !i && o ? [!1, u] : [!0]
        }
    }
    ,
    4710: (t, e, i) => {
        i.d(e, {
            L: () => n
        });
        let n = (0,
        i(2115).createContext)({})
    }
    ,
    7249: (t, e, i) => {
        i.d(e, {
            Q: () => n
        });
        let n = (0,
        i(2115).createContext)({
            transformPagePoint: t => t,
            isStatic: !1,
            reducedMotion: "never"
        })
    }
    ,
    9656: (t, e, i) => {
        i.d(e, {
            t: () => n
        });
        let n = (0,
        i(2115).createContext)(null)
    }
    ,
    9124: (t, e, i) => {
        let n;
        function r(t) {
            return null !== t && "object" == typeof t && "function" == typeof t.start
        }
        i.d(e, {
            P: () => sf
        });
        let s = t => Array.isArray(t);
        function o(t, e) {
            if (!Array.isArray(e))
                return !1;
            let i = e.length;
            if (i !== t.length)
                return !1;
            for (let n = 0; n < i; n++)
                if (e[n] !== t[n])
                    return !1;
            return !0
        }
        function a(t) {
            return "string" == typeof t || Array.isArray(t)
        }
        function l(t, e, i, n) {
            if ("function" == typeof e || ("string" == typeof e && (e = t.variants && t.variants[e]),
            "function" == typeof e)) {
                let[r,s] = function(t) {
                    let e = [{}, {}];
                    return null == t || t.values.forEach( (t, i) => {
                        e[0][i] = t.get(),
                        e[1][i] = t.getVelocity()
                    }
                    ),
                    e
                }(n);
                e = e(void 0 !== i ? i : t.custom, r, s)
            }
            return e
        }
        function u(t, e, i) {
            let n = t.getProps();
            return l(n, e, void 0 !== i ? i : n.custom, t)
        }
        let h = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
          , d = ["initial", ...h];
        function c(t) {
            let e;
            return () => (void 0 === e && (e = t()),
            e)
        }
        let p = c( () => void 0 !== window.ScrollTimeline);
        class f {
            constructor(t) {
                this.stop = () => this.runAll("stop"),
                this.animations = t.filter(Boolean)
            }
            get finished() {
                return Promise.all(this.animations.map(t => "finished"in t ? t.finished : t))
            }
            getAll(t) {
                return this.animations[0][t]
            }
            setAll(t, e) {
                for (let i = 0; i < this.animations.length; i++)
                    this.animations[i][t] = e
            }
            attachTimeline(t, e) {
                let i = this.animations.map(i => p() && i.attachTimeline ? i.attachTimeline(t) : "function" == typeof e ? e(i) : void 0);
                return () => {
                    i.forEach( (t, e) => {
                        t && t(),
                        this.animations[e].stop()
                    }
                    )
                }
            }
            get time() {
                return this.getAll("time")
            }
            set time(t) {
                this.setAll("time", t)
            }
            get speed() {
                return this.getAll("speed")
            }
            set speed(t) {
                this.setAll("speed", t)
            }
            get startTime() {
                return this.getAll("startTime")
            }
            get duration() {
                let t = 0;
                for (let e = 0; e < this.animations.length; e++)
                    t = Math.max(t, this.animations[e].duration);
                return t
            }
            runAll(t) {
                this.animations.forEach(e => e[t]())
            }
            flatten() {
                this.runAll("flatten")
            }
            play() {
                this.runAll("play")
            }
            pause() {
                this.runAll("pause")
            }
            cancel() {
                this.runAll("cancel")
            }
            complete() {
                this.runAll("complete")
            }
        }
        class m extends f {
            then(t, e) {
                return Promise.all(this.animations).then(t).catch(e)
            }
        }
        function g(t, e) {
            return t ? t[e] || t.default || t : void 0
        }
        function v(t) {
            let e = 0
              , i = t.next(e);
            for (; !i.done && e < 2e4; )
                e += 50,
                i = t.next(e);
            return e >= 2e4 ? 1 / 0 : e
        }
        function y(t) {
            return "function" == typeof t
        }
        function x(t, e) {
            t.timeline = e,
            t.onfinish = null
        }
        let b = t => Array.isArray(t) && "number" == typeof t[0]
          , w = {
            linearEasing: void 0
        }
          , P = function(t, e) {
            let i = c(t);
            return () => {
                var t;
                return null !== (t = w[e]) && void 0 !== t ? t : i()
            }
        }( () => {
            try {
                document.createElement("div").animate({
                    opacity: 0
                }, {
                    easing: "linear(0, 1)"
                })
            } catch (t) {
                return !1
            }
            return !0
        }
        , "linearEasing")
          , S = (t, e, i) => {
            let n = e - t;
            return 0 === n ? 1 : (i - t) / n
        }
          , T = (t, e, i=10) => {
            let n = ""
              , r = Math.max(Math.round(e / i), 2);
            for (let e = 0; e < r; e++)
                n += t(S(0, r - 1, e)) + ", ";
            return `linear(${n.substring(0, n.length - 2)})`
        }
          , A = ([t,e,i,n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`
          , E = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: A([0, .65, .55, 1]),
            circOut: A([.55, 0, 1, .45]),
            backIn: A([.31, .01, .66, -.59]),
            backOut: A([.33, 1.53, .69, .99])
        }
          , M = {
            x: !1,
            y: !1
        };
        function C(t, e) {
            let i = function(t, e, i) {
                if (t instanceof Element)
                    return [t];
                if ("string" == typeof t) {
                    let e = document.querySelectorAll(t);
                    return e ? Array.from(e) : []
                }
                return Array.from(t)
            }(t)
              , n = new AbortController;
            return [i, {
                passive: !0,
                ...e,
                signal: n.signal
            }, () => n.abort()]
        }
        function j(t) {
            return e => {
                "touch" === e.pointerType || M.x || M.y || t(e)
            }
        }
        let V = (t, e) => !!e && (t === e || V(t, e.parentElement))
          , D = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary
          , k = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"])
          , R = new WeakSet;
        function O(t) {
            return e => {
                "Enter" === e.key && t(e)
            }
        }
        function L(t, e) {
            t.dispatchEvent(new PointerEvent("pointer" + e,{
                isPrimary: !0,
                bubbles: !0
            }))
        }
        let F = (t, e) => {
            let i = t.currentTarget;
            if (!i)
                return;
            let n = O( () => {
                if (R.has(i))
                    return;
                L(i, "down");
                let t = O( () => {
                    L(i, "up")
                }
                );
                i.addEventListener("keyup", t, e),
                i.addEventListener("blur", () => L(i, "cancel"), e)
            }
            );
            i.addEventListener("keydown", n, e),
            i.addEventListener("blur", () => i.removeEventListener("keydown", n), e)
        }
        ;
        function I(t) {
            return D(t) && !(M.x || M.y)
        }
        let B = t => 1e3 * t
          , _ = t => t / 1e3
          , U = t => t
          , N = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
          , z = new Set(N)
          , $ = new Set(["width", "height", "top", "left", "right", "bottom", ...N])
          , W = t => !!(t && "object" == typeof t && t.mix && t.toValue)
          , q = t => s(t) ? t[t.length - 1] || 0 : t
          , H = {
            skipAnimations: !1,
            useManualTiming: !1
        }
          , K = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];
        function Y(t, e) {
            let i = !1
              , n = !0
              , r = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            }
              , s = () => i = !0
              , o = K.reduce( (t, e) => (t[e] = function(t) {
                let e = new Set
                  , i = new Set
                  , n = !1
                  , r = !1
                  , s = new WeakSet
                  , o = {
                    delta: 0,
                    timestamp: 0,
                    isProcessing: !1
                };
                function a(e) {
                    s.has(e) && (l.schedule(e),
                    t()),
                    e(o)
                }
                let l = {
                    schedule: (t, r=!1, o=!1) => {
                        let a = o && n ? e : i;
                        return r && s.add(t),
                        a.has(t) || a.add(t),
                        t
                    }
                    ,
                    cancel: t => {
                        i.delete(t),
                        s.delete(t)
                    }
                    ,
                    process: t => {
                        if (o = t,
                        n) {
                            r = !0;
                            return
                        }
                        n = !0,
                        [e,i] = [i, e],
                        e.forEach(a),
                        e.clear(),
                        n = !1,
                        r && (r = !1,
                        l.process(t))
                    }
                };
                return l
            }(s),
            t), {})
              , {read: a, resolveKeyframes: l, update: u, preRender: h, render: d, postRender: c} = o
              , p = () => {
                let s = H.useManualTiming ? r.timestamp : performance.now();
                i = !1,
                r.delta = n ? 1e3 / 60 : Math.max(Math.min(s - r.timestamp, 40), 1),
                r.timestamp = s,
                r.isProcessing = !0,
                a.process(r),
                l.process(r),
                u.process(r),
                h.process(r),
                d.process(r),
                c.process(r),
                r.isProcessing = !1,
                i && e && (n = !1,
                t(p))
            }
              , f = () => {
                i = !0,
                n = !0,
                r.isProcessing || t(p)
            }
            ;
            return {
                schedule: K.reduce( (t, e) => {
                    let n = o[e];
                    return t[e] = (t, e=!1, r=!1) => (i || f(),
                    n.schedule(t, e, r)),
                    t
                }
                , {}),
                cancel: t => {
                    for (let e = 0; e < K.length; e++)
                        o[K[e]].cancel(t)
                }
                ,
                state: r,
                steps: o
            }
        }
        let {schedule: X, cancel: G, state: Z, steps: Q} = Y("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : U, !0);
        function J() {
            n = void 0
        }
        let tt = {
            now: () => (void 0 === n && tt.set(Z.isProcessing || H.useManualTiming ? Z.timestamp : performance.now()),
            n),
            set: t => {
                n = t,
                queueMicrotask(J)
            }
        };
        function te(t, e) {
            -1 === t.indexOf(e) && t.push(e)
        }
        function ti(t, e) {
            let i = t.indexOf(e);
            i > -1 && t.splice(i, 1)
        }
        class tn {
            constructor() {
                this.subscriptions = []
            }
            add(t) {
                return te(this.subscriptions, t),
                () => ti(this.subscriptions, t)
            }
            notify(t, e, i) {
                let n = this.subscriptions.length;
                if (n) {
                    if (1 === n)
                        this.subscriptions[0](t, e, i);
                    else
                        for (let r = 0; r < n; r++) {
                            let n = this.subscriptions[r];
                            n && n(t, e, i)
                        }
                }
            }
            getSize() {
                return this.subscriptions.length
            }
            clear() {
                this.subscriptions.length = 0
            }
        }
        let tr = t => !isNaN(parseFloat(t))
          , ts = {
            current: void 0
        };
        class to {
            constructor(t, e={}) {
                this.version = "11.18.0",
                this.canTrackVelocity = null,
                this.events = {},
                this.updateAndNotify = (t, e=!0) => {
                    let i = tt.now();
                    this.updatedAt !== i && this.setPrevFrameValue(),
                    this.prev = this.current,
                    this.setCurrent(t),
                    this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
                    e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                }
                ,
                this.hasAnimated = !1,
                this.setCurrent(t),
                this.owner = e.owner
            }
            setCurrent(t) {
                this.current = t,
                this.updatedAt = tt.now(),
                null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = tr(this.current))
            }
            setPrevFrameValue(t=this.current) {
                this.prevFrameValue = t,
                this.prevUpdatedAt = this.updatedAt
            }
            onChange(t) {
                return this.on("change", t)
            }
            on(t, e) {
                this.events[t] || (this.events[t] = new tn);
                let i = this.events[t].add(e);
                return "change" === t ? () => {
                    i(),
                    X.read( () => {
                        this.events.change.getSize() || this.stop()
                    }
                    )
                }
                : i
            }
            clearListeners() {
                for (let t in this.events)
                    this.events[t].clear()
            }
            attach(t, e) {
                this.passiveEffect = t,
                this.stopPassiveEffect = e
            }
            set(t, e=!0) {
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }
            setWithVelocity(t, e, i) {
                this.set(e),
                this.prev = void 0,
                this.prevFrameValue = t,
                this.prevUpdatedAt = this.updatedAt - i
            }
            jump(t, e=!0) {
                this.updateAndNotify(t),
                this.prev = t,
                this.prevUpdatedAt = this.prevFrameValue = void 0,
                e && this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
            get() {
                return ts.current && ts.current.push(this),
                this.current
            }
            getPrevious() {
                return this.prev
            }
            getVelocity() {
                var t;
                let e = tt.now();
                if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30)
                    return 0;
                let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                return t = parseFloat(this.current) - parseFloat(this.prevFrameValue),
                i ? 1e3 / i * t : 0
            }
            start(t) {
                return this.stop(),
                new Promise(e => {
                    this.hasAnimated = !0,
                    this.animation = t(e),
                    this.events.animationStart && this.events.animationStart.notify()
                }
                ).then( () => {
                    this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
                }
                )
            }
            stop() {
                this.animation && (this.animation.stop(),
                this.events.animationCancel && this.events.animationCancel.notify()),
                this.clearAnimation()
            }
            isAnimating() {
                return !!this.animation
            }
            clearAnimation() {
                delete this.animation
            }
            destroy() {
                this.clearListeners(),
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
        }
        function ta(t, e) {
            return new to(t,e)
        }
        let tl = t => !!(t && t.getVelocity);
        function tu(t, e) {
            let i = t.getValue("willChange");
            if (tl(i) && i.add)
                return i.add(e)
        }
        let th = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
          , td = "data-" + th("framerAppearId")
          , tc = {
            current: !1
        }
          , tp = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
        function tf(t, e, i, n) {
            if (t === e && i === n)
                return U;
            let r = e => (function(t, e, i, n, r) {
                let s, o;
                let a = 0;
                do
                    (s = tp(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o;
                while (Math.abs(s) > 1e-7 && ++a < 12);
                return o
            }
            )(e, 0, 1, t, i);
            return t => 0 === t || 1 === t ? t : tp(r(t), e, n)
        }
        let tm = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
          , tg = t => e => 1 - t(1 - e)
          , tv = tf(.33, 1.53, .69, .99)
          , ty = tg(tv)
          , tx = tm(ty)
          , tb = t => (t *= 2) < 1 ? .5 * ty(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
          , tw = t => 1 - Math.sin(Math.acos(t))
          , tP = tg(tw)
          , tS = tm(tw)
          , tT = t => /^0[^.\s]+$/u.test(t)
          , tA = (t, e, i) => i > e ? e : i < t ? t : i
          , tE = {
            test: t => "number" == typeof t,
            parse: parseFloat,
            transform: t => t
        }
          , tM = {
            ...tE,
            transform: t => tA(0, 1, t)
        }
          , tC = {
            ...tE,
            default: 1
        }
          , tj = t => Math.round(1e5 * t) / 1e5
          , tV = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
          , tD = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
          , tk = (t, e) => i => !!("string" == typeof i && tD.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          , tR = (t, e, i) => n => {
            if ("string" != typeof n)
                return n;
            let[r,s,o,a] = n.match(tV);
            return {
                [t]: parseFloat(r),
                [e]: parseFloat(s),
                [i]: parseFloat(o),
                alpha: void 0 !== a ? parseFloat(a) : 1
            }
        }
          , tO = t => tA(0, 255, t)
          , tL = {
            ...tE,
            transform: t => Math.round(tO(t))
        }
          , tF = {
            test: tk("rgb", "red"),
            parse: tR("red", "green", "blue"),
            transform: ({red: t, green: e, blue: i, alpha: n=1}) => "rgba(" + tL.transform(t) + ", " + tL.transform(e) + ", " + tL.transform(i) + ", " + tj(tM.transform(n)) + ")"
        }
          , tI = {
            test: tk("#"),
            parse: function(t) {
                let e = ""
                  , i = ""
                  , n = ""
                  , r = "";
                return t.length > 5 ? (e = t.substring(1, 3),
                i = t.substring(3, 5),
                n = t.substring(5, 7),
                r = t.substring(7, 9)) : (e = t.substring(1, 2),
                i = t.substring(2, 3),
                n = t.substring(3, 4),
                r = t.substring(4, 5),
                e += e,
                i += i,
                n += n,
                r += r),
                {
                    red: parseInt(e, 16),
                    green: parseInt(i, 16),
                    blue: parseInt(n, 16),
                    alpha: r ? parseInt(r, 16) / 255 : 1
                }
            },
            transform: tF.transform
        }
          , tB = t => ({
            test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e => `${e}${t}`
        })
          , t_ = tB("deg")
          , tU = tB("%")
          , tN = tB("px")
          , tz = tB("vh")
          , t$ = tB("vw")
          , tW = {
            ...tU,
            parse: t => tU.parse(t) / 100,
            transform: t => tU.transform(100 * t)
        }
          , tq = {
            test: tk("hsl", "hue"),
            parse: tR("hue", "saturation", "lightness"),
            transform: ({hue: t, saturation: e, lightness: i, alpha: n=1}) => "hsla(" + Math.round(t) + ", " + tU.transform(tj(e)) + ", " + tU.transform(tj(i)) + ", " + tj(tM.transform(n)) + ")"
        }
          , tH = {
            test: t => tF.test(t) || tI.test(t) || tq.test(t),
            parse: t => tF.test(t) ? tF.parse(t) : tq.test(t) ? tq.parse(t) : tI.parse(t),
            transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? tF.transform(t) : tq.transform(t)
        }
          , tK = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
          , tY = "number"
          , tX = "color"
          , tG = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
        function tZ(t) {
            let e = t.toString()
              , i = []
              , n = {
                color: [],
                number: [],
                var: []
            }
              , r = []
              , s = 0
              , o = e.replace(tG, t => (tH.test(t) ? (n.color.push(s),
            r.push(tX),
            i.push(tH.parse(t))) : t.startsWith("var(") ? (n.var.push(s),
            r.push("var"),
            i.push(t)) : (n.number.push(s),
            r.push(tY),
            i.push(parseFloat(t))),
            ++s,
            "${}")).split("${}");
            return {
                values: i,
                split: o,
                indexes: n,
                types: r
            }
        }
        function tQ(t) {
            return tZ(t).values
        }
        function tJ(t) {
            let {split: e, types: i} = tZ(t)
              , n = e.length;
            return t => {
                let r = "";
                for (let s = 0; s < n; s++)
                    if (r += e[s],
                    void 0 !== t[s]) {
                        let e = i[s];
                        e === tY ? r += tj(t[s]) : e === tX ? r += tH.transform(t[s]) : r += t[s]
                    }
                return r
            }
        }
        let t0 = t => "number" == typeof t ? 0 : t
          , t1 = {
            test: function(t) {
                var e, i;
                return isNaN(t) && "string" == typeof t && ((null === (e = t.match(tV)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(tK)) || void 0 === i ? void 0 : i.length) || 0) > 0
            },
            parse: tQ,
            createTransformer: tJ,
            getAnimatableNone: function(t) {
                let e = tQ(t);
                return tJ(t)(e.map(t0))
            }
        }
          , t5 = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function t2(t) {
            let[e,i] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e)
                return t;
            let[n] = i.match(tV) || [];
            if (!n)
                return t;
            let r = i.replace(n, "")
              , s = t5.has(e) ? 1 : 0;
            return n !== i && (s *= 100),
            e + "(" + s + r + ")"
        }
        let t3 = /\b([a-z-]*)\(.*?\)/gu
          , t6 = {
            ...t1,
            getAnimatableNone: t => {
                let e = t.match(t3);
                return e ? e.map(t2).join(" ") : t
            }
        }
          , t9 = {
            ...tE,
            transform: Math.round
        }
          , t4 = {
            borderWidth: tN,
            borderTopWidth: tN,
            borderRightWidth: tN,
            borderBottomWidth: tN,
            borderLeftWidth: tN,
            borderRadius: tN,
            radius: tN,
            borderTopLeftRadius: tN,
            borderTopRightRadius: tN,
            borderBottomRightRadius: tN,
            borderBottomLeftRadius: tN,
            width: tN,
            maxWidth: tN,
            height: tN,
            maxHeight: tN,
            top: tN,
            right: tN,
            bottom: tN,
            left: tN,
            padding: tN,
            paddingTop: tN,
            paddingRight: tN,
            paddingBottom: tN,
            paddingLeft: tN,
            margin: tN,
            marginTop: tN,
            marginRight: tN,
            marginBottom: tN,
            marginLeft: tN,
            backgroundPositionX: tN,
            backgroundPositionY: tN,
            rotate: t_,
            rotateX: t_,
            rotateY: t_,
            rotateZ: t_,
            scale: tC,
            scaleX: tC,
            scaleY: tC,
            scaleZ: tC,
            skew: t_,
            skewX: t_,
            skewY: t_,
            distance: tN,
            translateX: tN,
            translateY: tN,
            translateZ: tN,
            x: tN,
            y: tN,
            z: tN,
            perspective: tN,
            transformPerspective: tN,
            opacity: tM,
            originX: tW,
            originY: tW,
            originZ: tN,
            zIndex: t9,
            size: tN,
            fillOpacity: tM,
            strokeOpacity: tM,
            numOctaves: t9
        }
          , t8 = {
            ...t4,
            color: tH,
            backgroundColor: tH,
            outlineColor: tH,
            fill: tH,
            stroke: tH,
            borderColor: tH,
            borderTopColor: tH,
            borderRightColor: tH,
            borderBottomColor: tH,
            borderLeftColor: tH,
            filter: t6,
            WebkitFilter: t6
        }
          , t7 = t => t8[t];
        function et(t, e) {
            let i = t7(t);
            return i !== t6 && (i = t1),
            i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        }
        let ee = new Set(["auto", "none", "0"])
          , ei = t => t === tE || t === tN
          , en = (t, e) => parseFloat(t.split(", ")[e])
          , er = (t, e) => (i, {transform: n}) => {
            if ("none" === n || !n)
                return 0;
            let r = n.match(/^matrix3d\((.+)\)$/u);
            if (r)
                return en(r[1], e);
            {
                let e = n.match(/^matrix\((.+)\)$/u);
                return e ? en(e[1], t) : 0
            }
        }
          , es = new Set(["x", "y", "z"])
          , eo = N.filter(t => !es.has(t))
          , ea = {
            width: ({x: t}, {paddingLeft: e="0", paddingRight: i="0"}) => t.max - t.min - parseFloat(e) - parseFloat(i),
            height: ({y: t}, {paddingTop: e="0", paddingBottom: i="0"}) => t.max - t.min - parseFloat(e) - parseFloat(i),
            top: (t, {top: e}) => parseFloat(e),
            left: (t, {left: e}) => parseFloat(e),
            bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
            right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
            x: er(4, 13),
            y: er(5, 14)
        };
        ea.translateX = ea.x,
        ea.translateY = ea.y;
        let el = new Set
          , eu = !1
          , eh = !1;
        function ed() {
            if (eh) {
                let t = Array.from(el).filter(t => t.needsMeasurement)
                  , e = new Set(t.map(t => t.element))
                  , i = new Map;
                e.forEach(t => {
                    let e = function(t) {
                        let e = [];
                        return eo.forEach(i => {
                            let n = t.getValue(i);
                            void 0 !== n && (e.push([i, n.get()]),
                            n.set(i.startsWith("scale") ? 1 : 0))
                        }
                        ),
                        e
                    }(t);
                    e.length && (i.set(t, e),
                    t.render())
                }
                ),
                t.forEach(t => t.measureInitialState()),
                e.forEach(t => {
                    t.render();
                    let e = i.get(t);
                    e && e.forEach( ([e,i]) => {
                        var n;
                        null === (n = t.getValue(e)) || void 0 === n || n.set(i)
                    }
                    )
                }
                ),
                t.forEach(t => t.measureEndState()),
                t.forEach(t => {
                    void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                }
                )
            }
            eh = !1,
            eu = !1,
            el.forEach(t => t.complete()),
            el.clear()
        }
        function ec() {
            el.forEach(t => {
                t.readKeyframes(),
                t.needsMeasurement && (eh = !0)
            }
            )
        }
        class ep {
            constructor(t, e, i, n, r, s=!1) {
                this.isComplete = !1,
                this.isAsync = !1,
                this.needsMeasurement = !1,
                this.isScheduled = !1,
                this.unresolvedKeyframes = [...t],
                this.onComplete = e,
                this.name = i,
                this.motionValue = n,
                this.element = r,
                this.isAsync = s
            }
            scheduleResolve() {
                this.isScheduled = !0,
                this.isAsync ? (el.add(this),
                eu || (eu = !0,
                X.read(ec),
                X.resolveKeyframes(ed))) : (this.readKeyframes(),
                this.complete())
            }
            readKeyframes() {
                let {unresolvedKeyframes: t, name: e, element: i, motionValue: n} = this;
                for (let r = 0; r < t.length; r++)
                    if (null === t[r]) {
                        if (0 === r) {
                            let r = null == n ? void 0 : n.get()
                              , s = t[t.length - 1];
                            if (void 0 !== r)
                                t[0] = r;
                            else if (i && e) {
                                let n = i.readValue(e, s);
                                null != n && (t[0] = n)
                            }
                            void 0 === t[0] && (t[0] = s),
                            n && void 0 === r && n.set(t[0])
                        } else
                            t[r] = t[r - 1]
                    }
            }
            setFinalKeyframe() {}
            measureInitialState() {}
            renderEndStyles() {}
            measureEndState() {}
            complete() {
                this.isComplete = !0,
                this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
                el.delete(this)
            }
            cancel() {
                this.isComplete || (this.isScheduled = !1,
                el.delete(this))
            }
            resume() {
                this.isComplete || this.scheduleResolve()
            }
        }
        let ef = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
          , em = t => e => "string" == typeof e && e.startsWith(t)
          , eg = em("--")
          , ev = em("var(--")
          , ey = t => !!ev(t) && ex.test(t.split("/*")[0].trim())
          , ex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
          , eb = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
          , ew = t => e => e.test(t)
          , eP = [tE, tN, tU, t_, t$, tz, {
            test: t => "auto" === t,
            parse: t => t
        }]
          , eS = t => eP.find(ew(t));
        class eT extends ep {
            constructor(t, e, i, n, r) {
                super(t, e, i, n, r, !0)
            }
            readKeyframes() {
                let {unresolvedKeyframes: t, element: e, name: i} = this;
                if (!e || !e.current)
                    return;
                super.readKeyframes();
                for (let i = 0; i < t.length; i++) {
                    let n = t[i];
                    if ("string" == typeof n && ey(n = n.trim())) {
                        let r = function t(e, i, n=1) {
                            U(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                            let[r,s] = function(t) {
                                let e = eb.exec(t);
                                if (!e)
                                    return [, ];
                                let[,i,n,r] = e;
                                return [`--${null != i ? i : n}`, r]
                            }(e);
                            if (!r)
                                return;
                            let o = window.getComputedStyle(i).getPropertyValue(r);
                            if (o) {
                                let t = o.trim();
                                return ef(t) ? parseFloat(t) : t
                            }
                            return ey(s) ? t(s, i, n + 1) : s
                        }(n, e.current);
                        void 0 !== r && (t[i] = r),
                        i === t.length - 1 && (this.finalKeyframe = n)
                    }
                }
                if (this.resolveNoneKeyframes(),
                !$.has(i) || 2 !== t.length)
                    return;
                let[n,r] = t
                  , s = eS(n)
                  , o = eS(r);
                if (s !== o) {
                    if (ei(s) && ei(o))
                        for (let e = 0; e < t.length; e++) {
                            let i = t[e];
                            "string" == typeof i && (t[e] = parseFloat(i))
                        }
                    else
                        this.needsMeasurement = !0
                }
            }
            resolveNoneKeyframes() {
                let {unresolvedKeyframes: t, name: e} = this
                  , i = [];
                for (let e = 0; e < t.length; e++) {
                    var n;
                    ("number" == typeof (n = t[e]) ? 0 === n : null === n || "none" === n || "0" === n || tT(n)) && i.push(e)
                }
                i.length && function(t, e, i) {
                    let n, r = 0;
                    for (; r < t.length && !n; ) {
                        let e = t[r];
                        "string" == typeof e && !ee.has(e) && tZ(e).values.length && (n = t[r]),
                        r++
                    }
                    if (n && i)
                        for (let r of e)
                            t[r] = et(i, n)
                }(t, i, e)
            }
            measureInitialState() {
                let {element: t, unresolvedKeyframes: e, name: i} = this;
                if (!t || !t.current)
                    return;
                "height" === i && (this.suspendedScrollY = window.pageYOffset),
                this.measuredOrigin = ea[i](t.measureViewportBox(), window.getComputedStyle(t.current)),
                e[0] = this.measuredOrigin;
                let n = e[e.length - 1];
                void 0 !== n && t.getValue(i, n).jump(n, !1)
            }
            measureEndState() {
                var t;
                let {element: e, name: i, unresolvedKeyframes: n} = this;
                if (!e || !e.current)
                    return;
                let r = e.getValue(i);
                r && r.jump(this.measuredOrigin, !1);
                let s = n.length - 1
                  , o = n[s];
                n[s] = ea[i](e.measureViewportBox(), window.getComputedStyle(e.current)),
                null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o),
                (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) && this.removedTransforms.forEach( ([t,i]) => {
                    e.getValue(t).set(i)
                }
                ),
                this.resolveNoneKeyframes()
            }
        }
        let eA = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (t1.test(t) || "0" === t) && !t.startsWith("url("))
          , eE = t => null !== t;
        function eM(t, {repeat: e, repeatType: i="loop"}, n) {
            let r = t.filter(eE)
              , s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
            return s && void 0 !== n ? n : r[s]
        }
        class eC {
            constructor({autoplay: t=!0, delay: e=0, type: i="keyframes", repeat: n=0, repeatDelay: r=0, repeatType: s="loop", ...o}) {
                this.isStopped = !1,
                this.hasAttemptedResolve = !1,
                this.createdAt = tt.now(),
                this.options = {
                    autoplay: t,
                    delay: e,
                    type: i,
                    repeat: n,
                    repeatDelay: r,
                    repeatType: s,
                    ...o
                },
                this.updateFinishedPromise()
            }
            calcStartTime() {
                return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
            }
            get resolved() {
                return this._resolved || this.hasAttemptedResolve || (ec(),
                ed()),
                this._resolved
            }
            onKeyframesResolved(t, e) {
                this.resolvedAt = tt.now(),
                this.hasAttemptedResolve = !0;
                let {name: i, type: n, velocity: r, delay: s, onComplete: o, onUpdate: a, isGenerator: l} = this.options;
                if (!l && !function(t, e, i, n) {
                    let r = t[0];
                    if (null === r)
                        return !1;
                    if ("display" === e || "visibility" === e)
                        return !0;
                    let s = t[t.length - 1]
                      , o = eA(r, e)
                      , a = eA(s, e);
                    return U(o === a, `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`),
                    !!o && !!a && (function(t) {
                        let e = t[0];
                        if (1 === t.length)
                            return !0;
                        for (let i = 0; i < t.length; i++)
                            if (t[i] !== e)
                                return !0
                    }(t) || ("spring" === i || y(i)) && n)
                }(t, i, n, r)) {
                    if (tc.current || !s) {
                        null == a || a(eM(t, this.options, e)),
                        null == o || o(),
                        this.resolveFinishedPromise();
                        return
                    }
                    this.options.duration = 0
                }
                let u = this.initPlayback(t, e);
                !1 !== u && (this._resolved = {
                    keyframes: t,
                    finalKeyframe: e,
                    ...u
                },
                this.onPostResolved())
            }
            onPostResolved() {}
            then(t, e) {
                return this.currentFinishedPromise.then(t, e)
            }
            flatten() {
                this.options.type = "keyframes",
                this.options.ease = "linear"
            }
            updateFinishedPromise() {
                this.currentFinishedPromise = new Promise(t => {
                    this.resolveFinishedPromise = t
                }
                )
            }
        }
        let ej = (t, e, i) => t + (e - t) * i;
        function eV(t, e, i) {
            return (i < 0 && (i += 1),
            i > 1 && (i -= 1),
            i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
        }
        function eD(t, e) {
            return i => i > 0 ? e : t
        }
        let ek = (t, e, i) => {
            let n = t * t
              , r = i * (e * e - n) + n;
            return r < 0 ? 0 : Math.sqrt(r)
        }
          , eR = [tI, tF, tq]
          , eO = t => eR.find(e => e.test(t));
        function eL(t) {
            let e = eO(t);
            if (U(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`),
            !e)
                return !1;
            let i = e.parse(t);
            return e === tq && (i = function({hue: t, saturation: e, lightness: i, alpha: n}) {
                t /= 360,
                i /= 100;
                let r = 0
                  , s = 0
                  , o = 0;
                if (e /= 100) {
                    let n = i < .5 ? i * (1 + e) : i + e - i * e
                      , a = 2 * i - n;
                    r = eV(a, n, t + 1 / 3),
                    s = eV(a, n, t),
                    o = eV(a, n, t - 1 / 3)
                } else
                    r = s = o = i;
                return {
                    red: Math.round(255 * r),
                    green: Math.round(255 * s),
                    blue: Math.round(255 * o),
                    alpha: n
                }
            }(i)),
            i
        }
        let eF = (t, e) => {
            let i = eL(t)
              , n = eL(e);
            if (!i || !n)
                return eD(t, e);
            let r = {
                ...i
            };
            return t => (r.red = ek(i.red, n.red, t),
            r.green = ek(i.green, n.green, t),
            r.blue = ek(i.blue, n.blue, t),
            r.alpha = ej(i.alpha, n.alpha, t),
            tF.transform(r))
        }
          , eI = (t, e) => i => e(t(i))
          , eB = (...t) => t.reduce(eI)
          , e_ = new Set(["none", "hidden"]);
        function eU(t, e) {
            return i => ej(t, e, i)
        }
        function eN(t) {
            return "number" == typeof t ? eU : "string" == typeof t ? ey(t) ? eD : tH.test(t) ? eF : eW : Array.isArray(t) ? ez : "object" == typeof t ? tH.test(t) ? eF : e$ : eD
        }
        function ez(t, e) {
            let i = [...t]
              , n = i.length
              , r = t.map( (t, i) => eN(t)(t, e[i]));
            return t => {
                for (let e = 0; e < n; e++)
                    i[e] = r[e](t);
                return i
            }
        }
        function e$(t, e) {
            let i = {
                ...t,
                ...e
            }
              , n = {};
            for (let r in i)
                void 0 !== t[r] && void 0 !== e[r] && (n[r] = eN(t[r])(t[r], e[r]));
            return t => {
                for (let e in n)
                    i[e] = n[e](t);
                return i
            }
        }
        let eW = (t, e) => {
            let i = t1.createTransformer(e)
              , n = tZ(t)
              , r = tZ(e);
            return n.indexes.var.length === r.indexes.var.length && n.indexes.color.length === r.indexes.color.length && n.indexes.number.length >= r.indexes.number.length ? e_.has(t) && !r.values.length || e_.has(e) && !n.values.length ? function(t, e) {
                return e_.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t
            }(t, e) : eB(ez(function(t, e) {
                var i;
                let n = []
                  , r = {
                    color: 0,
                    var: 0,
                    number: 0
                };
                for (let s = 0; s < e.values.length; s++) {
                    let o = e.types[s]
                      , a = t.indexes[o][r[o]]
                      , l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                    n[s] = l,
                    r[o]++
                }
                return n
            }(n, r), r.values), i) : (U(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
            eD(t, e))
        }
        ;
        function eq(t, e, i) {
            return "number" == typeof t && "number" == typeof e && "number" == typeof i ? ej(t, e, i) : eN(t)(t, e)
        }
        function eH(t, e, i) {
            var n, r;
            let s = Math.max(e - 5, 0);
            return n = i - t(s),
            (r = e - s) ? 1e3 / r * n : 0
        }
        let eK = {
            stiffness: 100,
            damping: 10,
            mass: 1,
            velocity: 0,
            duration: 800,
            bounce: .3,
            visualDuration: .3,
            restSpeed: {
                granular: .01,
                default: 2
            },
            restDelta: {
                granular: .005,
                default: .5
            },
            minDuration: .01,
            maxDuration: 10,
            minDamping: .05,
            maxDamping: 1
        };
        function eY(t, e) {
            return t * Math.sqrt(1 - e * e)
        }
        let eX = ["duration", "bounce"]
          , eG = ["stiffness", "damping", "mass"];
        function eZ(t, e) {
            return e.some(e => void 0 !== t[e])
        }
        function eQ(t=eK.visualDuration, e=eK.bounce) {
            let i;
            let n = "object" != typeof t ? {
                visualDuration: t,
                keyframes: [0, 1],
                bounce: e
            } : t
              , {restSpeed: r, restDelta: s} = n
              , o = n.keyframes[0]
              , a = n.keyframes[n.keyframes.length - 1]
              , l = {
                done: !1,
                value: o
            }
              , {stiffness: u, damping: h, mass: d, duration: c, velocity: p, isResolvedFromDuration: f} = function(t) {
                let e = {
                    velocity: eK.velocity,
                    stiffness: eK.stiffness,
                    damping: eK.damping,
                    mass: eK.mass,
                    isResolvedFromDuration: !1,
                    ...t
                };
                if (!eZ(t, eG) && eZ(t, eX)) {
                    if (t.visualDuration) {
                        let i = 2 * Math.PI / (1.2 * t.visualDuration)
                          , n = i * i
                          , r = 2 * tA(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
                        e = {
                            ...e,
                            mass: eK.mass,
                            stiffness: n,
                            damping: r
                        }
                    } else {
                        let i = function({duration: t=eK.duration, bounce: e=eK.bounce, velocity: i=eK.velocity, mass: n=eK.mass}) {
                            let r, s;
                            U(t <= B(eK.maxDuration), "Spring duration must be 10 seconds or less");
                            let o = 1 - e;
                            o = tA(eK.minDamping, eK.maxDamping, o),
                            t = tA(eK.minDuration, eK.maxDuration, _(t)),
                            o < 1 ? (r = e => {
                                let n = e * o
                                  , r = n * t;
                                return .001 - (n - i) / eY(e, o) * Math.exp(-r)
                            }
                            ,
                            s = e => {
                                let n = e * o * t
                                  , s = Math.pow(o, 2) * Math.pow(e, 2) * t
                                  , a = Math.exp(-n)
                                  , l = eY(Math.pow(e, 2), o);
                                return (n * i + i - s) * a * (-r(e) + .001 > 0 ? -1 : 1) / l
                            }
                            ) : (r = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1),
                            s = e => t * t * (i - e) * Math.exp(-e * t));
                            let a = function(t, e, i) {
                                let n = i;
                                for (let i = 1; i < 12; i++)
                                    n -= t(n) / e(n);
                                return n
                            }(r, s, 5 / t);
                            if (t = B(t),
                            isNaN(a))
                                return {
                                    stiffness: eK.stiffness,
                                    damping: eK.damping,
                                    duration: t
                                };
                            {
                                let e = Math.pow(a, 2) * n;
                                return {
                                    stiffness: e,
                                    damping: 2 * o * Math.sqrt(n * e),
                                    duration: t
                                }
                            }
                        }(t);
                        (e = {
                            ...e,
                            ...i,
                            mass: eK.mass
                        }).isResolvedFromDuration = !0
                    }
                }
                return e
            }({
                ...n,
                velocity: -_(n.velocity || 0)
            })
              , m = p || 0
              , g = h / (2 * Math.sqrt(u * d))
              , y = a - o
              , x = _(Math.sqrt(u / d))
              , b = 5 > Math.abs(y);
            if (r || (r = b ? eK.restSpeed.granular : eK.restSpeed.default),
            s || (s = b ? eK.restDelta.granular : eK.restDelta.default),
            g < 1) {
                let t = eY(x, g);
                i = e => a - Math.exp(-g * x * e) * ((m + g * x * y) / t * Math.sin(t * e) + y * Math.cos(t * e))
            } else if (1 === g)
                i = t => a - Math.exp(-x * t) * (y + (m + x * y) * t);
            else {
                let t = x * Math.sqrt(g * g - 1);
                i = e => {
                    let i = Math.exp(-g * x * e)
                      , n = Math.min(t * e, 300);
                    return a - i * ((m + g * x * y) * Math.sinh(n) + t * y * Math.cosh(n)) / t
                }
            }
            let w = {
                calculatedDuration: f && c || null,
                next: t => {
                    let e = i(t);
                    if (f)
                        l.done = t >= c;
                    else {
                        let n = 0;
                        g < 1 && (n = 0 === t ? B(m) : eH(i, t, e));
                        let o = Math.abs(n) <= r
                          , u = Math.abs(a - e) <= s;
                        l.done = o && u
                    }
                    return l.value = l.done ? a : e,
                    l
                }
                ,
                toString: () => {
                    let t = Math.min(v(w), 2e4)
                      , e = T(e => w.next(t * e).value, t, 30);
                    return t + "ms " + e
                }
            };
            return w
        }
        function eJ({keyframes: t, velocity: e=0, power: i=.8, timeConstant: n=325, bounceDamping: r=10, bounceStiffness: s=500, modifyTarget: o, min: a, max: l, restDelta: u=.5, restSpeed: h}) {
            let d, c;
            let p = t[0]
              , f = {
                done: !1,
                value: p
            }
              , m = t => void 0 !== a && t < a || void 0 !== l && t > l
              , g = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l
              , v = i * e
              , y = p + v
              , x = void 0 === o ? y : o(y);
            x !== y && (v = x - p);
            let b = t => -v * Math.exp(-t / n)
              , w = t => x + b(t)
              , P = t => {
                let e = b(t)
                  , i = w(t);
                f.done = Math.abs(e) <= u,
                f.value = f.done ? x : i
            }
              , S = t => {
                m(f.value) && (d = t,
                c = eQ({
                    keyframes: [f.value, g(f.value)],
                    velocity: eH(w, t, f.value),
                    damping: r,
                    stiffness: s,
                    restDelta: u,
                    restSpeed: h
                }))
            }
            ;
            return S(0),
            {
                calculatedDuration: null,
                next: t => {
                    let e = !1;
                    return (c || void 0 !== d || (e = !0,
                    P(t),
                    S(t)),
                    void 0 !== d && t >= d) ? c.next(t - d) : (e || P(t),
                    f)
                }
            }
        }
        let e0 = tf(.42, 0, 1, 1)
          , e1 = tf(0, 0, .58, 1)
          , e5 = tf(.42, 0, .58, 1)
          , e2 = t => Array.isArray(t) && "number" != typeof t[0]
          , e3 = {
            linear: U,
            easeIn: e0,
            easeInOut: e5,
            easeOut: e1,
            circIn: tw,
            circInOut: tS,
            circOut: tP,
            backIn: ty,
            backInOut: tx,
            backOut: tv,
            anticipate: tb
        }
          , e6 = t => {
            if (b(t)) {
                U(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                let[e,i,n,r] = t;
                return tf(e, i, n, r)
            }
            return "string" == typeof t ? (U(void 0 !== e3[t], `Invalid easing type '${t}'`),
            e3[t]) : t
        }
        ;
        function e9({duration: t=300, keyframes: e, times: i, ease: n="easeInOut"}) {
            let r = e2(n) ? n.map(e6) : e6(n)
              , s = {
                done: !1,
                value: e[0]
            }
              , o = function(t, e, {clamp: i=!0, ease: n, mixer: r}={}) {
                let s = t.length;
                if (U(s === e.length, "Both input and output ranges must be the same length"),
                1 === s)
                    return () => e[0];
                if (2 === s && e[0] === e[1])
                    return () => e[1];
                let o = t[0] === t[1];
                t[0] > t[s - 1] && (t = [...t].reverse(),
                e = [...e].reverse());
                let a = function(t, e, i) {
                    let n = []
                      , r = i || eq
                      , s = t.length - 1;
                    for (let i = 0; i < s; i++) {
                        let s = r(t[i], t[i + 1]);
                        e && (s = eB(Array.isArray(e) ? e[i] || U : e, s)),
                        n.push(s)
                    }
                    return n
                }(e, n, r)
                  , l = a.length
                  , u = i => {
                    if (o && i < t[0])
                        return e[0];
                    let n = 0;
                    if (l > 1)
                        for (; n < t.length - 2 && !(i < t[n + 1]); n++)
                            ;
                    let r = S(t[n], t[n + 1], i);
                    return a[n](r)
                }
                ;
                return i ? e => u(tA(t[0], t[s - 1], e)) : u
            }((i && i.length === e.length ? i : function(t) {
                let e = [0];
                return function(t, e) {
                    let i = t[t.length - 1];
                    for (let n = 1; n <= e; n++) {
                        let r = S(0, e, n);
                        t.push(ej(i, 1, r))
                    }
                }(e, t.length - 1),
                e
            }(e)).map(e => e * t), e, {
                ease: Array.isArray(r) ? r : e.map( () => r || e5).splice(0, e.length - 1)
            });
            return {
                calculatedDuration: t,
                next: e => (s.value = o(e),
                s.done = e >= t,
                s)
            }
        }
        let e4 = t => {
            let e = ({timestamp: e}) => t(e);
            return {
                start: () => X.update(e, !0),
                stop: () => G(e),
                now: () => Z.isProcessing ? Z.timestamp : tt.now()
            }
        }
          , e8 = {
            decay: eJ,
            inertia: eJ,
            tween: e9,
            keyframes: e9,
            spring: eQ
        }
          , e7 = t => t / 100;
        class it extends eC {
            constructor(t) {
                super(t),
                this.holdTime = null,
                this.cancelTime = null,
                this.currentTime = 0,
                this.playbackSpeed = 1,
                this.pendingPlayState = "running",
                this.startTime = null,
                this.state = "idle",
                this.stop = () => {
                    if (this.resolver.cancel(),
                    this.isStopped = !0,
                    "idle" === this.state)
                        return;
                    this.teardown();
                    let {onStop: t} = this.options;
                    t && t()
                }
                ;
                let {name: e, motionValue: i, element: n, keyframes: r} = this.options
                  , s = (null == n ? void 0 : n.KeyframeResolver) || ep;
                this.resolver = new s(r, (t, e) => this.onKeyframesResolved(t, e),e,i,n),
                this.resolver.scheduleResolve()
            }
            flatten() {
                super.flatten(),
                this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
            }
            initPlayback(t) {
                let e, i;
                let {type: n="keyframes", repeat: r=0, repeatDelay: s=0, repeatType: o, velocity: a=0} = this.options
                  , l = y(n) ? n : e8[n] || e9;
                l !== e9 && "number" != typeof t[0] && (e = eB(e7, eq(t[0], t[1])),
                t = [0, 100]);
                let u = l({
                    ...this.options,
                    keyframes: t
                });
                "mirror" === o && (i = l({
                    ...this.options,
                    keyframes: [...t].reverse(),
                    velocity: -a
                })),
                null === u.calculatedDuration && (u.calculatedDuration = v(u));
                let {calculatedDuration: h} = u
                  , d = h + s;
                return {
                    generator: u,
                    mirroredGenerator: i,
                    mapPercentToKeyframes: e,
                    calculatedDuration: h,
                    resolvedDuration: d,
                    totalDuration: d * (r + 1) - s
                }
            }
            onPostResolved() {
                let {autoplay: t=!0} = this.options;
                this.play(),
                "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
            }
            tick(t, e=!1) {
                let {resolved: i} = this;
                if (!i) {
                    let {keyframes: t} = this.options;
                    return {
                        done: !0,
                        value: t[t.length - 1]
                    }
                }
                let {finalKeyframe: n, generator: r, mirroredGenerator: s, mapPercentToKeyframes: o, keyframes: a, calculatedDuration: l, totalDuration: u, resolvedDuration: h} = i;
                if (null === this.startTime)
                    return r.next(0);
                let {delay: d, repeat: c, repeatType: p, repeatDelay: f, onUpdate: m} = this.options;
                this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)),
                e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
                let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1)
                  , v = this.speed >= 0 ? g < 0 : g > u;
                this.currentTime = Math.max(g, 0),
                "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                let y = this.currentTime
                  , x = r;
                if (c) {
                    let t = Math.min(this.currentTime, u) / h
                      , e = Math.floor(t)
                      , i = t % 1;
                    !i && t >= 1 && (i = 1),
                    1 === i && e--,
                    (e = Math.min(e, c + 1)) % 2 && ("reverse" === p ? (i = 1 - i,
                    f && (i -= f / h)) : "mirror" === p && (x = s)),
                    y = tA(0, 1, i) * h
                }
                let b = v ? {
                    done: !1,
                    value: a[0]
                } : x.next(y);
                o && (b.value = o(b.value));
                let {done: w} = b;
                v || null === l || (w = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                let P = null === this.holdTime && ("finished" === this.state || "running" === this.state && w);
                return P && void 0 !== n && (b.value = eM(a, this.options, n)),
                m && m(b.value),
                P && this.finish(),
                b
            }
            get duration() {
                let {resolved: t} = this;
                return t ? _(t.calculatedDuration) : 0
            }
            get time() {
                return _(this.currentTime)
            }
            set time(t) {
                t = B(t),
                this.currentTime = t,
                null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
            }
            get speed() {
                return this.playbackSpeed
            }
            set speed(t) {
                let e = this.playbackSpeed !== t;
                this.playbackSpeed = t,
                e && (this.time = _(this.currentTime))
            }
            play() {
                if (this.resolver.isScheduled || this.resolver.resume(),
                !this._resolved) {
                    this.pendingPlayState = "running";
                    return
                }
                if (this.isStopped)
                    return;
                let {driver: t=e4, onPlay: e, startTime: i} = this.options;
                this.driver || (this.driver = t(t => this.tick(t))),
                e && e();
                let n = this.driver.now();
                null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = n) : this.startTime = null != i ? i : this.calcStartTime(),
                "finished" === this.state && this.updateFinishedPromise(),
                this.cancelTime = this.startTime,
                this.holdTime = null,
                this.state = "running",
                this.driver.start()
            }
            pause() {
                var t;
                if (!this._resolved) {
                    this.pendingPlayState = "paused";
                    return
                }
                this.state = "paused",
                this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0
            }
            complete() {
                "running" !== this.state && this.play(),
                this.pendingPlayState = this.state = "finished",
                this.holdTime = null
            }
            finish() {
                this.teardown(),
                this.state = "finished";
                let {onComplete: t} = this.options;
                t && t()
            }
            cancel() {
                null !== this.cancelTime && this.tick(this.cancelTime),
                this.teardown(),
                this.updateFinishedPromise()
            }
            teardown() {
                this.state = "idle",
                this.stopDriver(),
                this.resolveFinishedPromise(),
                this.updateFinishedPromise(),
                this.startTime = this.cancelTime = null,
                this.resolver.cancel()
            }
            stopDriver() {
                this.driver && (this.driver.stop(),
                this.driver = void 0)
            }
            sample(t) {
                return this.startTime = 0,
                this.tick(t, !0)
            }
        }
        let ie = new Set(["opacity", "clipPath", "filter", "transform"])
          , ii = c( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
          , ir = {
            anticipate: tb,
            backInOut: tx,
            circInOut: tS
        };
        class is extends eC {
            constructor(t) {
                super(t);
                let {name: e, motionValue: i, element: n, keyframes: r} = this.options;
                this.resolver = new eT(r, (t, e) => this.onKeyframesResolved(t, e),e,i,n),
                this.resolver.scheduleResolve()
            }
            initPlayback(t, e) {
                var i, n;
                let {duration: r=300, times: s, ease: o, type: a, motionValue: l, name: u, startTime: h} = this.options;
                if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
                    return !1;
                if ("string" == typeof o && P() && o in ir && (o = ir[o]),
                y((n = this.options).type) || "spring" === n.type || !function t(e) {
                    return !!("function" == typeof e && P() || !e || "string" == typeof e && (e in E || P()) || b(e) || Array.isArray(e) && e.every(t))
                }(n.ease)) {
                    let {onComplete: e, onUpdate: i, motionValue: n, element: l, ...u} = this.options
                      , h = function(t, e) {
                        let i = new it({
                            ...e,
                            keyframes: t,
                            repeat: 0,
                            delay: 0,
                            isGenerator: !0
                        })
                          , n = {
                            done: !1,
                            value: t[0]
                        }
                          , r = []
                          , s = 0;
                        for (; !n.done && s < 2e4; )
                            r.push((n = i.sample(s)).value),
                            s += 10;
                        return {
                            times: void 0,
                            keyframes: r,
                            duration: s - 10,
                            ease: "linear"
                        }
                    }(t, u);
                    1 === (t = h.keyframes).length && (t[1] = t[0]),
                    r = h.duration,
                    s = h.times,
                    o = h.ease,
                    a = "keyframes"
                }
                let d = function(t, e, i, {delay: n=0, duration: r=300, repeat: s=0, repeatType: o="loop", ease: a="easeInOut", times: l}={}) {
                    let u = {
                        [e]: i
                    };
                    l && (u.offset = l);
                    let h = function t(e, i) {
                        if (e)
                            return "function" == typeof e && P() ? T(e, i) : b(e) ? A(e) : Array.isArray(e) ? e.map(e => t(e, i) || E.easeOut) : E[e]
                    }(a, r);
                    return Array.isArray(h) && (u.easing = h),
                    t.animate(u, {
                        delay: n,
                        duration: r,
                        easing: Array.isArray(h) ? "linear" : h,
                        fill: "both",
                        iterations: s + 1,
                        direction: "reverse" === o ? "alternate" : "normal"
                    })
                }(l.owner.current, u, t, {
                    ...this.options,
                    duration: r,
                    times: s,
                    ease: o
                });
                return d.startTime = null != h ? h : this.calcStartTime(),
                this.pendingTimeline ? (x(d, this.pendingTimeline),
                this.pendingTimeline = void 0) : d.onfinish = () => {
                    let {onComplete: i} = this.options;
                    l.set(eM(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise()
                }
                ,
                {
                    animation: d,
                    duration: r,
                    times: s,
                    type: a,
                    ease: o,
                    keyframes: t
                }
            }
            get duration() {
                let {resolved: t} = this;
                if (!t)
                    return 0;
                let {duration: e} = t;
                return _(e)
            }
            get time() {
                let {resolved: t} = this;
                if (!t)
                    return 0;
                let {animation: e} = t;
                return _(e.currentTime || 0)
            }
            set time(t) {
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: i} = e;
                i.currentTime = B(t)
            }
            get speed() {
                let {resolved: t} = this;
                if (!t)
                    return 1;
                let {animation: e} = t;
                return e.playbackRate
            }
            set speed(t) {
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: i} = e;
                i.playbackRate = t
            }
            get state() {
                let {resolved: t} = this;
                if (!t)
                    return "idle";
                let {animation: e} = t;
                return e.playState
            }
            get startTime() {
                let {resolved: t} = this;
                if (!t)
                    return null;
                let {animation: e} = t;
                return e.startTime
            }
            attachTimeline(t) {
                if (this._resolved) {
                    let {resolved: e} = this;
                    if (!e)
                        return U;
                    let {animation: i} = e;
                    x(i, t)
                } else
                    this.pendingTimeline = t;
                return U
            }
            play() {
                if (this.isStopped)
                    return;
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e} = t;
                "finished" === e.playState && this.updateFinishedPromise(),
                e.play()
            }
            pause() {
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e} = t;
                e.pause()
            }
            stop() {
                if (this.resolver.cancel(),
                this.isStopped = !0,
                "idle" === this.state)
                    return;
                this.resolveFinishedPromise(),
                this.updateFinishedPromise();
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e, keyframes: i, duration: n, type: r, ease: s, times: o} = t;
                if ("idle" === e.playState || "finished" === e.playState)
                    return;
                if (this.time) {
                    let {motionValue: t, onUpdate: e, onComplete: a, element: l, ...u} = this.options
                      , h = new it({
                        ...u,
                        keyframes: i,
                        duration: n,
                        type: r,
                        ease: s,
                        times: o,
                        isGenerator: !0
                    })
                      , d = B(this.time);
                    t.setWithVelocity(h.sample(d - 10).value, h.sample(d).value, 10)
                }
                let {onStop: a} = this.options;
                a && a(),
                this.cancel()
            }
            complete() {
                let {resolved: t} = this;
                t && t.animation.finish()
            }
            cancel() {
                let {resolved: t} = this;
                t && t.animation.cancel()
            }
            static supports(t) {
                let {motionValue: e, name: i, repeatDelay: n, repeatType: r, damping: s, type: o} = t;
                return ii() && i && ie.has(i) && e && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate && !n && "mirror" !== r && 0 !== s && "inertia" !== o
            }
        }
        let io = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }
          , ia = t => ({
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        })
          , il = {
            type: "keyframes",
            duration: .8
        }
          , iu = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        }
          , ih = (t, {keyframes: e}) => e.length > 2 ? il : z.has(t) ? t.startsWith("scale") ? ia(e[1]) : io : iu
          , id = (t, e, i, n={}, r, s) => o => {
            let a = g(n, t) || {}
              , l = a.delay || n.delay || 0
              , {elapsed: u=0} = n;
            u -= B(l);
            let h = {
                keyframes: Array.isArray(i) ? i : [null, i],
                ease: "easeOut",
                velocity: e.getVelocity(),
                ...a,
                delay: -u,
                onUpdate: t => {
                    e.set(t),
                    a.onUpdate && a.onUpdate(t)
                }
                ,
                onComplete: () => {
                    o(),
                    a.onComplete && a.onComplete()
                }
                ,
                name: t,
                motionValue: e,
                element: s ? void 0 : r
            };
            !function({when: t, delay: e, delayChildren: i, staggerChildren: n, staggerDirection: r, repeat: s, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...h}) {
                return !!Object.keys(h).length
            }(a) && (h = {
                ...h,
                ...ih(t, h)
            }),
            h.duration && (h.duration = B(h.duration)),
            h.repeatDelay && (h.repeatDelay = B(h.repeatDelay)),
            void 0 !== h.from && (h.keyframes[0] = h.from);
            let d = !1;
            if (!1 !== h.type && (0 !== h.duration || h.repeatDelay) || (h.duration = 0,
            0 !== h.delay || (d = !0)),
            (tc.current || H.skipAnimations) && (d = !0,
            h.duration = 0,
            h.delay = 0),
            d && !s && void 0 !== e.get()) {
                let t = eM(h.keyframes, a);
                if (void 0 !== t)
                    return X.update( () => {
                        h.onUpdate(t),
                        h.onComplete()
                    }
                    ),
                    new m([])
            }
            return !s && is.supports(h) ? new is(h) : new it(h)
        }
        ;
        function ic(t, e, {delay: i=0, transitionOverride: n, type: r}={}) {
            var s;
            let {transition: o=t.getDefaultTransition(), transitionEnd: a, ...l} = e;
            n && (o = n);
            let h = []
              , d = r && t.animationState && t.animationState.getState()[r];
            for (let e in l) {
                let n = t.getValue(e, null !== (s = t.latestValues[e]) && void 0 !== s ? s : null)
                  , r = l[e];
                if (void 0 === r || d && function({protectedKeys: t, needsAnimating: e}, i) {
                    let n = t.hasOwnProperty(i) && !0 !== e[i];
                    return e[i] = !1,
                    n
                }(d, e))
                    continue;
                let a = {
                    delay: i,
                    ...g(o || {}, e)
                }
                  , u = !1;
                if (window.MotionHandoffAnimation) {
                    let i = t.props[td];
                    if (i) {
                        let t = window.MotionHandoffAnimation(i, e, X);
                        null !== t && (a.startTime = t,
                        u = !0)
                    }
                }
                tu(t, e),
                n.start(id(e, n, r, t.shouldReduceMotion && $.has(e) ? {
                    type: !1
                } : a, t, u));
                let c = n.animation;
                c && h.push(c)
            }
            return a && Promise.all(h).then( () => {
                X.update( () => {
                    a && function(t, e) {
                        let {transitionEnd: i={}, transition: n={}, ...r} = u(t, e) || {};
                        for (let e in r = {
                            ...r,
                            ...i
                        }) {
                            let i = q(r[e]);
                            t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, ta(i))
                        }
                    }(t, a)
                }
                )
            }
            ),
            h
        }
        function ip(t, e, i={}) {
            var n;
            let r = u(t, e, "exit" === i.type ? null === (n = t.presenceContext) || void 0 === n ? void 0 : n.custom : void 0)
              , {transition: s=t.getDefaultTransition() || {}} = r || {};
            i.transitionOverride && (s = i.transitionOverride);
            let o = r ? () => Promise.all(ic(t, r, i)) : () => Promise.resolve()
              , a = t.variantChildren && t.variantChildren.size ? (n=0) => {
                let {delayChildren: r=0, staggerChildren: o, staggerDirection: a} = s;
                return function(t, e, i=0, n=0, r=1, s) {
                    let o = []
                      , a = (t.variantChildren.size - 1) * n
                      , l = 1 === r ? (t=0) => t * n : (t=0) => a - t * n;
                    return Array.from(t.variantChildren).sort(im).forEach( (t, n) => {
                        t.notify("AnimationStart", e),
                        o.push(ip(t, e, {
                            ...s,
                            delay: i + l(n)
                        }).then( () => t.notify("AnimationComplete", e)))
                    }
                    ),
                    Promise.all(o)
                }(t, e, r + n, o, a, i)
            }
            : () => Promise.resolve()
              , {when: l} = s;
            if (!l)
                return Promise.all([o(), a(i.delay)]);
            {
                let[t,e] = "beforeChildren" === l ? [o, a] : [a, o];
                return t().then( () => e())
            }
        }
        function im(t, e) {
            return t.sortNodePosition(e)
        }
        let ig = d.length
          , iv = [...h].reverse()
          , iy = h.length;
        function ix(t=!1) {
            return {
                isActive: t,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        function ib() {
            return {
                animate: ix(!0),
                whileInView: ix(),
                whileHover: ix(),
                whileTap: ix(),
                whileDrag: ix(),
                whileFocus: ix(),
                exit: ix()
            }
        }
        class iw {
            constructor(t) {
                this.isMounted = !1,
                this.node = t
            }
            update() {}
        }
        class iP extends iw {
            constructor(t) {
                super(t),
                t.animationState || (t.animationState = function(t) {
                    let e = e => Promise.all(e.map( ({animation: e, options: i}) => (function(t, e, i={}) {
                        let n;
                        if (t.notify("AnimationStart", e),
                        Array.isArray(e))
                            n = Promise.all(e.map(e => ip(t, e, i)));
                        else if ("string" == typeof e)
                            n = ip(t, e, i);
                        else {
                            let r = "function" == typeof e ? u(t, e, i.custom) : e;
                            n = Promise.all(ic(t, r, i))
                        }
                        return n.then( () => {
                            t.notify("AnimationComplete", e)
                        }
                        )
                    }
                    )(t, e, i)))
                      , i = ib()
                      , n = !0
                      , l = e => (i, n) => {
                        var r;
                        let s = u(t, n, "exit" === e ? null === (r = t.presenceContext) || void 0 === r ? void 0 : r.custom : void 0);
                        if (s) {
                            let {transition: t, transitionEnd: e, ...n} = s;
                            i = {
                                ...i,
                                ...n,
                                ...e
                            }
                        }
                        return i
                    }
                    ;
                    function h(u) {
                        let {props: h} = t
                          , c = function t(e) {
                            if (!e)
                                return;
                            if (!e.isControllingVariants) {
                                let i = e.parent && t(e.parent) || {};
                                return void 0 !== e.props.initial && (i.initial = e.props.initial),
                                i
                            }
                            let i = {};
                            for (let t = 0; t < ig; t++) {
                                let n = d[t]
                                  , r = e.props[n];
                                (a(r) || !1 === r) && (i[n] = r)
                            }
                            return i
                        }(t.parent) || {}
                          , p = []
                          , f = new Set
                          , m = {}
                          , g = 1 / 0;
                        for (let e = 0; e < iy; e++) {
                            var v;
                            let d = iv[e]
                              , y = i[d]
                              , x = void 0 !== h[d] ? h[d] : c[d]
                              , b = a(x)
                              , w = d === u ? y.isActive : null;
                            !1 === w && (g = e);
                            let P = x === c[d] && x !== h[d] && b;
                            if (P && n && t.manuallyAnimateOnMount && (P = !1),
                            y.protectedKeys = {
                                ...m
                            },
                            !y.isActive && null === w || !x && !y.prevProp || r(x) || "boolean" == typeof x)
                                continue;
                            let S = (v = y.prevProp,
                            "string" == typeof x ? x !== v : !!Array.isArray(x) && !o(x, v))
                              , T = S || d === u && y.isActive && !P && b || e > g && b
                              , A = !1
                              , E = Array.isArray(x) ? x : [x]
                              , M = E.reduce(l(d), {});
                            !1 === w && (M = {});
                            let {prevResolvedValues: C={}} = y
                              , j = {
                                ...C,
                                ...M
                            }
                              , V = e => {
                                T = !0,
                                f.has(e) && (A = !0,
                                f.delete(e)),
                                y.needsAnimating[e] = !0;
                                let i = t.getValue(e);
                                i && (i.liveStyle = !1)
                            }
                            ;
                            for (let t in j) {
                                let e = M[t]
                                  , i = C[t];
                                if (!m.hasOwnProperty(t))
                                    (s(e) && s(i) ? o(e, i) : e === i) ? void 0 !== e && f.has(t) ? V(t) : y.protectedKeys[t] = !0 : null != e ? V(t) : f.add(t)
                            }
                            y.prevProp = x,
                            y.prevResolvedValues = M,
                            y.isActive && (m = {
                                ...m,
                                ...M
                            }),
                            n && t.blockInitialAnimation && (T = !1);
                            let D = !(P && S) || A;
                            T && D && p.push(...E.map(t => ({
                                animation: t,
                                options: {
                                    type: d
                                }
                            })))
                        }
                        if (f.size) {
                            let e = {};
                            f.forEach(i => {
                                let n = t.getBaseTarget(i)
                                  , r = t.getValue(i);
                                r && (r.liveStyle = !0),
                                e[i] = null != n ? n : null
                            }
                            ),
                            p.push({
                                animation: e
                            })
                        }
                        let y = !!p.length;
                        return n && (!1 === h.initial || h.initial === h.animate) && !t.manuallyAnimateOnMount && (y = !1),
                        n = !1,
                        y ? e(p) : Promise.resolve()
                    }
                    return {
                        animateChanges: h,
                        setActive: function(e, n) {
                            var r;
                            if (i[e].isActive === n)
                                return Promise.resolve();
                            null === (r = t.variantChildren) || void 0 === r || r.forEach(t => {
                                var i;
                                return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, n)
                            }
                            ),
                            i[e].isActive = n;
                            let s = h(e);
                            for (let t in i)
                                i[t].protectedKeys = {};
                            return s
                        },
                        setAnimateFunction: function(i) {
                            e = i(t)
                        },
                        getState: () => i,
                        reset: () => {
                            i = ib(),
                            n = !0
                        }
                    }
                }(t))
            }
            updateAnimationControlsSubscription() {
                let {animate: t} = this.node.getProps();
                r(t) && (this.unmountControls = t.subscribe(this.node))
            }
            mount() {
                this.updateAnimationControlsSubscription()
            }
            update() {
                let {animate: t} = this.node.getProps()
                  , {animate: e} = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription()
            }
            unmount() {
                var t;
                this.node.animationState.reset(),
                null === (t = this.unmountControls) || void 0 === t || t.call(this)
            }
        }
        let iS = 0;
        class iT extends iw {
            constructor() {
                super(...arguments),
                this.id = iS++
            }
            update() {
                if (!this.node.presenceContext)
                    return;
                let {isPresent: t, onExitComplete: e} = this.node.presenceContext
                  , {isPresent: i} = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === i)
                    return;
                let n = this.node.animationState.setActive("exit", !t);
                e && !t && n.then( () => e(this.id))
            }
            mount() {
                let {register: t} = this.node.presenceContext || {};
                t && (this.unmount = t(this.id))
            }
            unmount() {}
        }
        function iA(t, e, i, n={
            passive: !0
        }) {
            return t.addEventListener(e, i, n),
            () => t.removeEventListener(e, i)
        }
        function iE(t) {
            return {
                point: {
                    x: t.pageX,
                    y: t.pageY
                }
            }
        }
        let iM = t => e => D(e) && t(e, iE(e));
        function iC(t, e, i, n) {
            return iA(t, e, iM(i), n)
        }
        let ij = (t, e) => Math.abs(t - e);
        class iV {
            constructor(t, e, {transformPagePoint: i, contextWindow: n, dragSnapToOrigin: r=!1}={}) {
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.contextWindow = window,
                this.updatePoint = () => {
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let t = iR(this.lastMoveEventInfo, this.history)
                      , e = null !== this.startEvent
                      , i = function(t, e) {
                        return Math.sqrt(ij(t.x, e.x) ** 2 + ij(t.y, e.y) ** 2)
                    }(t.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                    if (!e && !i)
                        return;
                    let {point: n} = t
                      , {timestamp: r} = Z;
                    this.history.push({
                        ...n,
                        timestamp: r
                    });
                    let {onStart: s, onMove: o} = this.handlers;
                    e || (s && s(this.lastMoveEvent, t),
                    this.startEvent = this.lastMoveEvent),
                    o && o(this.lastMoveEvent, t)
                }
                ,
                this.handlePointerMove = (t, e) => {
                    this.lastMoveEvent = t,
                    this.lastMoveEventInfo = iD(e, this.transformPagePoint),
                    X.update(this.updatePoint, !0)
                }
                ,
                this.handlePointerUp = (t, e) => {
                    this.end();
                    let {onEnd: i, onSessionEnd: n, resumeAnimation: r} = this.handlers;
                    if (this.dragSnapToOrigin && r && r(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let s = iR("pointercancel" === t.type ? this.lastMoveEventInfo : iD(e, this.transformPagePoint), this.history);
                    this.startEvent && i && i(t, s),
                    n && n(t, s)
                }
                ,
                !D(t))
                    return;
                this.dragSnapToOrigin = r,
                this.handlers = e,
                this.transformPagePoint = i,
                this.contextWindow = n || window;
                let s = iD(iE(t), this.transformPagePoint)
                  , {point: o} = s
                  , {timestamp: a} = Z;
                this.history = [{
                    ...o,
                    timestamp: a
                }];
                let {onSessionStart: l} = e;
                l && l(t, iR(s, this.history)),
                this.removeListeners = eB(iC(this.contextWindow, "pointermove", this.handlePointerMove), iC(this.contextWindow, "pointerup", this.handlePointerUp), iC(this.contextWindow, "pointercancel", this.handlePointerUp))
            }
            updateHandlers(t) {
                this.handlers = t
            }
            end() {
                this.removeListeners && this.removeListeners(),
                G(this.updatePoint)
            }
        }
        function iD(t, e) {
            return e ? {
                point: e(t.point)
            } : t
        }
        function ik(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }
        function iR({point: t}, e) {
            return {
                point: t,
                delta: ik(t, iO(e)),
                offset: ik(t, e[0]),
                velocity: function(t, e) {
                    if (t.length < 2)
                        return {
                            x: 0,
                            y: 0
                        };
                    let i = t.length - 1
                      , n = null
                      , r = iO(t);
                    for (; i >= 0 && (n = t[i],
                    !(r.timestamp - n.timestamp > B(.1))); )
                        i--;
                    if (!n)
                        return {
                            x: 0,
                            y: 0
                        };
                    let s = _(r.timestamp - n.timestamp);
                    if (0 === s)
                        return {
                            x: 0,
                            y: 0
                        };
                    let o = {
                        x: (r.x - n.x) / s,
                        y: (r.y - n.y) / s
                    };
                    return o.x === 1 / 0 && (o.x = 0),
                    o.y === 1 / 0 && (o.y = 0),
                    o
                }(e, 0)
            }
        }
        function iO(t) {
            return t[t.length - 1]
        }
        function iL(t) {
            return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
        }
        function iF(t) {
            return t.max - t.min
        }
        function iI(t, e, i, n=.5) {
            t.origin = n,
            t.originPoint = ej(e.min, e.max, t.origin),
            t.scale = iF(i) / iF(e),
            t.translate = ej(i.min, i.max, t.origin) - t.originPoint,
            (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1),
            (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
        }
        function iB(t, e, i, n) {
            iI(t.x, e.x, i.x, n ? n.originX : void 0),
            iI(t.y, e.y, i.y, n ? n.originY : void 0)
        }
        function i_(t, e, i) {
            t.min = i.min + e.min,
            t.max = t.min + iF(e)
        }
        function iU(t, e, i) {
            t.min = e.min - i.min,
            t.max = t.min + iF(e)
        }
        function iN(t, e, i) {
            iU(t.x, e.x, i.x),
            iU(t.y, e.y, i.y)
        }
        function iz(t, e, i) {
            return {
                min: void 0 !== e ? t.min + e : void 0,
                max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
            }
        }
        function i$(t, e) {
            let i = e.min - t.min
              , n = e.max - t.max;
            return e.max - e.min < t.max - t.min && ([i,n] = [n, i]),
            {
                min: i,
                max: n
            }
        }
        function iW(t, e, i) {
            return {
                min: iq(t, e),
                max: iq(t, i)
            }
        }
        function iq(t, e) {
            return "number" == typeof t ? t : t[e] || 0
        }
        let iH = () => ({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        })
          , iK = () => ({
            x: iH(),
            y: iH()
        })
          , iY = () => ({
            min: 0,
            max: 0
        })
          , iX = () => ({
            x: iY(),
            y: iY()
        });
        function iG(t) {
            return [t("x"), t("y")]
        }
        function iZ({top: t, left: e, right: i, bottom: n}) {
            return {
                x: {
                    min: e,
                    max: i
                },
                y: {
                    min: t,
                    max: n
                }
            }
        }
        function iQ(t) {
            return void 0 === t || 1 === t
        }
        function iJ({scale: t, scaleX: e, scaleY: i}) {
            return !iQ(t) || !iQ(e) || !iQ(i)
        }
        function i0(t) {
            return iJ(t) || i1(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
        }
        function i1(t) {
            var e, i;
            return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
        }
        function i5(t, e, i, n, r) {
            return void 0 !== r && (t = n + r * (t - n)),
            n + i * (t - n) + e
        }
        function i2(t, e=0, i=1, n, r) {
            t.min = i5(t.min, e, i, n, r),
            t.max = i5(t.max, e, i, n, r)
        }
        function i3(t, {x: e, y: i}) {
            i2(t.x, e.translate, e.scale, e.originPoint),
            i2(t.y, i.translate, i.scale, i.originPoint)
        }
        function i6(t, e) {
            t.min = t.min + e,
            t.max = t.max + e
        }
        function i9(t, e, i, n, r=.5) {
            let s = ej(t.min, t.max, r);
            i2(t, e, i, s, n)
        }
        function i4(t, e) {
            i9(t.x, e.x, e.scaleX, e.scale, e.originX),
            i9(t.y, e.y, e.scaleY, e.scale, e.originY)
        }
        function i8(t, e) {
            return iZ(function(t, e) {
                if (!e)
                    return t;
                let i = e({
                    x: t.left,
                    y: t.top
                })
                  , n = e({
                    x: t.right,
                    y: t.bottom
                });
                return {
                    top: i.y,
                    left: i.x,
                    bottom: n.y,
                    right: n.x
                }
            }(t.getBoundingClientRect(), e))
        }
        let i7 = ({current: t}) => t ? t.ownerDocument.defaultView : null
          , nt = new WeakMap;
        class ne {
            constructor(t) {
                this.openDragLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = iX(),
                this.visualElement = t
            }
            start(t, {snapToCursor: e=!1}={}) {
                let {presenceContext: i} = this.visualElement;
                if (i && !1 === i.isPresent)
                    return;
                let {dragSnapToOrigin: n} = this.getProps();
                this.panSession = new iV(t,{
                    onSessionStart: t => {
                        let {dragSnapToOrigin: i} = this.getProps();
                        i ? this.pauseAnimation() : this.stopAnimation(),
                        e && this.snapToCursor(iE(t).point)
                    }
                    ,
                    onStart: (t, e) => {
                        let {drag: i, dragPropagation: n, onDragStart: r} = this.getProps();
                        if (i && !n && (this.openDragLock && this.openDragLock(),
                        this.openDragLock = "x" === i || "y" === i ? M[i] ? null : (M[i] = !0,
                        () => {
                            M[i] = !1
                        }
                        ) : M.x || M.y ? null : (M.x = M.y = !0,
                        () => {
                            M.x = M.y = !1
                        }
                        ),
                        !this.openDragLock))
                            return;
                        this.isDragging = !0,
                        this.currentDirection = null,
                        this.resolveConstraints(),
                        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                        iG(t => {
                            let e = this.getAxisMotionValue(t).get() || 0;
                            if (tU.test(e)) {
                                let {projection: i} = this.visualElement;
                                if (i && i.layout) {
                                    let n = i.layout.layoutBox[t];
                                    n && (e = iF(n) * (parseFloat(e) / 100))
                                }
                            }
                            this.originPoint[t] = e
                        }
                        ),
                        r && X.postRender( () => r(t, e)),
                        tu(this.visualElement, "transform");
                        let {animationState: s} = this.visualElement;
                        s && s.setActive("whileDrag", !0)
                    }
                    ,
                    onMove: (t, e) => {
                        let {dragPropagation: i, dragDirectionLock: n, onDirectionLock: r, onDrag: s} = this.getProps();
                        if (!i && !this.openDragLock)
                            return;
                        let {offset: o} = e;
                        if (n && null === this.currentDirection) {
                            this.currentDirection = function(t, e=10) {
                                let i = null;
                                return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"),
                                i
                            }(o),
                            null !== this.currentDirection && r && r(this.currentDirection);
                            return
                        }
                        this.updateAxis("x", e.point, o),
                        this.updateAxis("y", e.point, o),
                        this.visualElement.render(),
                        s && s(t, e)
                    }
                    ,
                    onSessionEnd: (t, e) => this.stop(t, e),
                    resumeAnimation: () => iG(t => {
                        var e;
                        return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                    }
                    )
                },{
                    transformPagePoint: this.visualElement.getTransformPagePoint(),
                    dragSnapToOrigin: n,
                    contextWindow: i7(this.visualElement)
                })
            }
            stop(t, e) {
                let i = this.isDragging;
                if (this.cancel(),
                !i)
                    return;
                let {velocity: n} = e;
                this.startAnimation(n);
                let {onDragEnd: r} = this.getProps();
                r && X.postRender( () => r(t, e))
            }
            cancel() {
                this.isDragging = !1;
                let {projection: t, animationState: e} = this.visualElement;
                t && (t.isAnimationBlocked = !1),
                this.panSession && this.panSession.end(),
                this.panSession = void 0;
                let {dragPropagation: i} = this.getProps();
                !i && this.openDragLock && (this.openDragLock(),
                this.openDragLock = null),
                e && e.setActive("whileDrag", !1)
            }
            updateAxis(t, e, i) {
                let {drag: n} = this.getProps();
                if (!i || !ni(t, n, this.currentDirection))
                    return;
                let r = this.getAxisMotionValue(t)
                  , s = this.originPoint[t] + i[t];
                this.constraints && this.constraints[t] && (s = function(t, {min: e, max: i}, n) {
                    return void 0 !== e && t < e ? t = n ? ej(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? ej(i, t, n.max) : Math.min(t, i)),
                    t
                }(s, this.constraints[t], this.elastic[t])),
                r.set(s)
            }
            resolveConstraints() {
                var t;
                let {dragConstraints: e, dragElastic: i} = this.getProps()
                  , n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout
                  , r = this.constraints;
                e && iL(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(t, {top: e, left: i, bottom: n, right: r}) {
                    return {
                        x: iz(t.x, i, r),
                        y: iz(t.y, e, n)
                    }
                }(n.layoutBox, e) : this.constraints = !1,
                this.elastic = function(t=.35) {
                    return !1 === t ? t = 0 : !0 === t && (t = .35),
                    {
                        x: iW(t, "left", "right"),
                        y: iW(t, "top", "bottom")
                    }
                }(i),
                r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && iG(t => {
                    !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                        let i = {};
                        return void 0 !== e.min && (i.min = e.min - t.min),
                        void 0 !== e.max && (i.max = e.max - t.min),
                        i
                    }(n.layoutBox[t], this.constraints[t]))
                }
                )
            }
            resolveRefConstraints() {
                var t;
                let {dragConstraints: e, onMeasureDragConstraints: i} = this.getProps();
                if (!e || !iL(e))
                    return !1;
                let n = e.current;
                U(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let {projection: r} = this.visualElement;
                if (!r || !r.layout)
                    return !1;
                let s = function(t, e, i) {
                    let n = i8(t, i)
                      , {scroll: r} = e;
                    return r && (i6(n.x, r.offset.x),
                    i6(n.y, r.offset.y)),
                    n
                }(n, r.root, this.visualElement.getTransformPagePoint())
                  , o = {
                    x: i$((t = r.layout.layoutBox).x, s.x),
                    y: i$(t.y, s.y)
                };
                if (i) {
                    let t = i(function({x: t, y: e}) {
                        return {
                            top: e.min,
                            right: t.max,
                            bottom: e.max,
                            left: t.min
                        }
                    }(o));
                    this.hasMutatedConstraints = !!t,
                    t && (o = iZ(t))
                }
                return o
            }
            startAnimation(t) {
                let {drag: e, dragMomentum: i, dragElastic: n, dragTransition: r, dragSnapToOrigin: s, onDragTransitionEnd: o} = this.getProps()
                  , a = this.constraints || {};
                return Promise.all(iG(o => {
                    if (!ni(o, e, this.currentDirection))
                        return;
                    let l = a && a[o] || {};
                    s && (l = {
                        min: 0,
                        max: 0
                    });
                    let u = {
                        type: "inertia",
                        velocity: i ? t[o] : 0,
                        bounceStiffness: n ? 200 : 1e6,
                        bounceDamping: n ? 40 : 1e7,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...r,
                        ...l
                    };
                    return this.startAxisValueAnimation(o, u)
                }
                )).then(o)
            }
            startAxisValueAnimation(t, e) {
                let i = this.getAxisMotionValue(t);
                return tu(this.visualElement, t),
                i.start(id(t, i, 0, e, this.visualElement, !1))
            }
            stopAnimation() {
                iG(t => this.getAxisMotionValue(t).stop())
            }
            pauseAnimation() {
                iG(t => {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                }
                )
            }
            getAnimationState(t) {
                var e;
                return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
            }
            getAxisMotionValue(t) {
                let e = `_drag${t.toUpperCase()}`
                  , i = this.visualElement.getProps();
                return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
            }
            snapToCursor(t) {
                iG(e => {
                    let {drag: i} = this.getProps();
                    if (!ni(e, i, this.currentDirection))
                        return;
                    let {projection: n} = this.visualElement
                      , r = this.getAxisMotionValue(e);
                    if (n && n.layout) {
                        let {min: i, max: s} = n.layout.layoutBox[e];
                        r.set(t[e] - ej(i, s, .5))
                    }
                }
                )
            }
            scalePositionWithinConstraints() {
                if (!this.visualElement.current)
                    return;
                let {drag: t, dragConstraints: e} = this.getProps()
                  , {projection: i} = this.visualElement;
                if (!iL(e) || !i || !this.constraints)
                    return;
                this.stopAnimation();
                let n = {
                    x: 0,
                    y: 0
                };
                iG(t => {
                    let e = this.getAxisMotionValue(t);
                    if (e && !1 !== this.constraints) {
                        let i = e.get();
                        n[t] = function(t, e) {
                            let i = .5
                              , n = iF(t)
                              , r = iF(e);
                            return r > n ? i = S(e.min, e.max - n, t.min) : n > r && (i = S(t.min, t.max - r, e.min)),
                            tA(0, 1, i)
                        }({
                            min: i,
                            max: i
                        }, this.constraints[t])
                    }
                }
                );
                let {transformTemplate: r} = this.visualElement.getProps();
                this.visualElement.current.style.transform = r ? r({}, "") : "none",
                i.root && i.root.updateScroll(),
                i.updateLayout(),
                this.resolveConstraints(),
                iG(e => {
                    if (!ni(e, t, null))
                        return;
                    let i = this.getAxisMotionValue(e)
                      , {min: r, max: s} = this.constraints[e];
                    i.set(ej(r, s, n[e]))
                }
                )
            }
            addListeners() {
                if (!this.visualElement.current)
                    return;
                nt.set(this.visualElement, this);
                let t = iC(this.visualElement.current, "pointerdown", t => {
                    let {drag: e, dragListener: i=!0} = this.getProps();
                    e && i && this.start(t)
                }
                )
                  , e = () => {
                    let {dragConstraints: t} = this.getProps();
                    iL(t) && t.current && (this.constraints = this.resolveRefConstraints())
                }
                  , {projection: i} = this.visualElement
                  , n = i.addEventListener("measure", e);
                i && !i.layout && (i.root && i.root.updateScroll(),
                i.updateLayout()),
                X.read(e);
                let r = iA(window, "resize", () => this.scalePositionWithinConstraints())
                  , s = i.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e}) => {
                    this.isDragging && e && (iG(e => {
                        let i = this.getAxisMotionValue(e);
                        i && (this.originPoint[e] += t[e].translate,
                        i.set(i.get() + t[e].translate))
                    }
                    ),
                    this.visualElement.render())
                }
                );
                return () => {
                    r(),
                    t(),
                    n(),
                    s && s()
                }
            }
            getProps() {
                let t = this.visualElement.getProps()
                  , {drag: e=!1, dragDirectionLock: i=!1, dragPropagation: n=!1, dragConstraints: r=!1, dragElastic: s=.35, dragMomentum: o=!0} = t;
                return {
                    ...t,
                    drag: e,
                    dragDirectionLock: i,
                    dragPropagation: n,
                    dragConstraints: r,
                    dragElastic: s,
                    dragMomentum: o
                }
            }
        }
        function ni(t, e, i) {
            return (!0 === e || e === t) && (null === i || i === t)
        }
        class nn extends iw {
            constructor(t) {
                super(t),
                this.removeGroupControls = U,
                this.removeListeners = U,
                this.controls = new ne(t)
            }
            mount() {
                let {dragControls: t} = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                this.removeListeners = this.controls.addListeners() || U
            }
            unmount() {
                this.removeGroupControls(),
                this.removeListeners()
            }
        }
        let nr = t => (e, i) => {
            t && X.postRender( () => t(e, i))
        }
        ;
        class ns extends iw {
            constructor() {
                super(...arguments),
                this.removePointerDownListener = U
            }
            onPointerDown(t) {
                this.session = new iV(t,this.createPanHandlers(),{
                    transformPagePoint: this.node.getTransformPagePoint(),
                    contextWindow: i7(this.node)
                })
            }
            createPanHandlers() {
                let {onPanSessionStart: t, onPanStart: e, onPan: i, onPanEnd: n} = this.node.getProps();
                return {
                    onSessionStart: nr(t),
                    onStart: nr(e),
                    onMove: i,
                    onEnd: (t, e) => {
                        delete this.session,
                        n && X.postRender( () => n(t, e))
                    }
                }
            }
            mount() {
                this.removePointerDownListener = iC(this.node.current, "pointerdown", t => this.onPointerDown(t))
            }
            update() {
                this.session && this.session.updateHandlers(this.createPanHandlers())
            }
            unmount() {
                this.removePointerDownListener(),
                this.session && this.session.end()
            }
        }
        var no, na, nl = i(5155), nu = i(2115), nh = i(5087), nd = i(4710);
        let nc = (0,
        nu.createContext)({})
          , np = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        };
        function nf(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
        }
        let nm = {
            correct: (t, e) => {
                if (!e.target)
                    return t;
                if ("string" == typeof t) {
                    if (!tN.test(t))
                        return t;
                    t = parseFloat(t)
                }
                let i = nf(t, e.target.x)
                  , n = nf(t, e.target.y);
                return `${i}% ${n}%`
            }
        }
          , ng = {}
          , {schedule: nv, cancel: ny} = Y(queueMicrotask, !1);
        class nx extends nu.Component {
            componentDidMount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: i, layoutId: n} = this.props
                  , {projection: r} = t;
                Object.assign(ng, nw),
                r && (e.group && e.group.add(r),
                i && i.register && n && i.register(r),
                r.root.didUpdate(),
                r.addEventListener("animationComplete", () => {
                    this.safeToRemove()
                }
                ),
                r.setOptions({
                    ...r.options,
                    onExitComplete: () => this.safeToRemove()
                })),
                np.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(t) {
                let {layoutDependency: e, visualElement: i, drag: n, isPresent: r} = this.props
                  , s = i.projection;
                return s && (s.isPresent = r,
                n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(),
                t.isPresent === r || (r ? s.promote() : s.relegate() || X.postRender( () => {
                    let t = s.getStack();
                    t && t.members.length || this.safeToRemove()
                }
                ))),
                null
            }
            componentDidUpdate() {
                let {projection: t} = this.props.visualElement;
                t && (t.root.didUpdate(),
                nv.postRender( () => {
                    !t.currentAnimation && t.isLead() && this.safeToRemove()
                }
                ))
            }
            componentWillUnmount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: i} = this.props
                  , {projection: n} = t;
                n && (n.scheduleCheckAfterUnmount(),
                e && e.group && e.group.remove(n),
                i && i.deregister && i.deregister(n))
            }
            safeToRemove() {
                let {safeToRemove: t} = this.props;
                t && t()
            }
            render() {
                return null
            }
        }
        function nb(t) {
            let[e,i] = (0,
            nh.xQ)()
              , n = (0,
            nu.useContext)(nd.L);
            return (0,
            nl.jsx)(nx, {
                ...t,
                layoutGroup: n,
                switchLayoutGroup: (0,
                nu.useContext)(nc),
                isPresent: e,
                safeToRemove: i
            })
        }
        let nw = {
            borderRadius: {
                ...nm,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: nm,
            borderTopRightRadius: nm,
            borderBottomLeftRadius: nm,
            borderBottomRightRadius: nm,
            boxShadow: {
                correct: (t, {treeScale: e, projectionDelta: i}) => {
                    let n = t1.parse(t);
                    if (n.length > 5)
                        return t;
                    let r = t1.createTransformer(t)
                      , s = "number" != typeof n[0] ? 1 : 0
                      , o = i.x.scale * e.x
                      , a = i.y.scale * e.y;
                    n[0 + s] /= o,
                    n[1 + s] /= a;
                    let l = ej(o, a, .5);
                    return "number" == typeof n[2 + s] && (n[2 + s] /= l),
                    "number" == typeof n[3 + s] && (n[3 + s] /= l),
                    r(n)
                }
            }
        }
          , nP = (t, e) => t.depth - e.depth;
        class nS {
            constructor() {
                this.children = [],
                this.isDirty = !1
            }
            add(t) {
                te(this.children, t),
                this.isDirty = !0
            }
            remove(t) {
                ti(this.children, t),
                this.isDirty = !0
            }
            forEach(t) {
                this.isDirty && this.children.sort(nP),
                this.isDirty = !1,
                this.children.forEach(t)
            }
        }
        function nT(t) {
            let e = tl(t) ? t.get() : t;
            return W(e) ? e.toValue() : e
        }
        let nA = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , nE = nA.length
          , nM = t => "string" == typeof t ? parseFloat(t) : t
          , nC = t => "number" == typeof t || tN.test(t);
        function nj(t, e) {
            return void 0 !== t[e] ? t[e] : t.borderRadius
        }
        let nV = nk(0, .5, tP)
          , nD = nk(.5, .95, U);
        function nk(t, e, i) {
            return n => n < t ? 0 : n > e ? 1 : i(S(t, e, n))
        }
        function nR(t, e) {
            t.min = e.min,
            t.max = e.max
        }
        function nO(t, e) {
            nR(t.x, e.x),
            nR(t.y, e.y)
        }
        function nL(t, e) {
            t.translate = e.translate,
            t.scale = e.scale,
            t.originPoint = e.originPoint,
            t.origin = e.origin
        }
        function nF(t, e, i, n, r) {
            return t -= e,
            t = n + 1 / i * (t - n),
            void 0 !== r && (t = n + 1 / r * (t - n)),
            t
        }
        function nI(t, e, [i,n,r], s, o) {
            !function(t, e=0, i=1, n=.5, r, s=t, o=t) {
                if (tU.test(e) && (e = parseFloat(e),
                e = ej(o.min, o.max, e / 100) - o.min),
                "number" != typeof e)
                    return;
                let a = ej(s.min, s.max, n);
                t === s && (a -= e),
                t.min = nF(t.min, e, i, a, r),
                t.max = nF(t.max, e, i, a, r)
            }(t, e[i], e[n], e[r], e.scale, s, o)
        }
        let nB = ["x", "scaleX", "originX"]
          , n_ = ["y", "scaleY", "originY"];
        function nU(t, e, i, n) {
            nI(t.x, e, nB, i ? i.x : void 0, n ? n.x : void 0),
            nI(t.y, e, n_, i ? i.y : void 0, n ? n.y : void 0)
        }
        function nN(t) {
            return 0 === t.translate && 1 === t.scale
        }
        function nz(t) {
            return nN(t.x) && nN(t.y)
        }
        function n$(t, e) {
            return t.min === e.min && t.max === e.max
        }
        function nW(t, e) {
            return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
        }
        function nq(t, e) {
            return nW(t.x, e.x) && nW(t.y, e.y)
        }
        function nH(t) {
            return iF(t.x) / iF(t.y)
        }
        function nK(t, e) {
            return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
        }
        class nY {
            constructor() {
                this.members = []
            }
            add(t) {
                te(this.members, t),
                t.scheduleRender()
            }
            remove(t) {
                if (ti(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead) {
                    let t = this.members[this.members.length - 1];
                    t && this.promote(t)
                }
            }
            relegate(t) {
                let e;
                let i = this.members.findIndex(e => t === e);
                if (0 === i)
                    return !1;
                for (let t = i; t >= 0; t--) {
                    let i = this.members[t];
                    if (!1 !== i.isPresent) {
                        e = i;
                        break
                    }
                }
                return !!e && (this.promote(e),
                !0)
            }
            promote(t, e) {
                let i = this.lead;
                if (t !== i && (this.prevLead = i,
                this.lead = t,
                t.show(),
                i)) {
                    i.instance && i.scheduleRender(),
                    t.scheduleRender(),
                    t.resumeFrom = i,
                    e && (t.resumeFrom.preserveOpacity = !0),
                    i.snapshot && (t.snapshot = i.snapshot,
                    t.snapshot.latestValues = i.animationValues || i.latestValues),
                    t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                    let {crossfade: n} = t.options;
                    !1 === n && i.hide()
                }
            }
            exitAnimationComplete() {
                this.members.forEach(t => {
                    let {options: e, resumingFrom: i} = t;
                    e.onExitComplete && e.onExitComplete(),
                    i && i.options.onExitComplete && i.options.onExitComplete()
                }
                )
            }
            scheduleRender() {
                this.members.forEach(t => {
                    t.instance && t.scheduleRender(!1)
                }
                )
            }
            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }
        let nX = {
            type: "projectionFrame",
            totalNodes: 0,
            resolvedTargetDeltas: 0,
            recalculatedProjection: 0
        }
          , nG = "undefined" != typeof window && void 0 !== window.MotionDebug
          , nZ = ["", "X", "Y", "Z"]
          , nQ = {
            visibility: "hidden"
        }
          , nJ = 0;
        function n0(t, e, i, n) {
            let {latestValues: r} = e;
            r[t] && (i[t] = r[t],
            e.setStaticValue(t, 0),
            n && (n[t] = 0))
        }
        function n1({attachResizeListener: t, defaultParent: e, measureScroll: i, checkIsScrollRoot: n, resetTransform: r}) {
            return class {
                constructor(t={}, i=null == e ? void 0 : e()) {
                    this.id = nJ++,
                    this.animationId = 0,
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.isProjectionDirty = !1,
                    this.isSharedProjectionDirty = !1,
                    this.isTransformDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.hasCheckedOptimisedAppear = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.hasTreeAnimated = !1,
                    this.updateScheduled = !1,
                    this.scheduleUpdate = () => this.update(),
                    this.projectionUpdateScheduled = !1,
                    this.checkUpdateFailed = () => {
                        this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = () => {
                        this.projectionUpdateScheduled = !1,
                        nG && (nX.totalNodes = nX.resolvedTargetDeltas = nX.recalculatedProjection = 0),
                        this.nodes.forEach(n3),
                        this.nodes.forEach(re),
                        this.nodes.forEach(ri),
                        this.nodes.forEach(n6),
                        nG && window.MotionDebug.record(nX)
                    }
                    ,
                    this.resolvedRelativeTargetAt = 0,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.latestValues = t,
                    this.root = i ? i.root || i : this,
                    this.path = i ? [...i.path, i] : [],
                    this.parent = i,
                    this.depth = i ? i.depth + 1 : 0;
                    for (let t = 0; t < this.path.length; t++)
                        this.path[t].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new nS)
                }
                addEventListener(t, e) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new tn),
                    this.eventHandlers.get(t).add(e)
                }
                notifyListeners(t, ...e) {
                    let i = this.eventHandlers.get(t);
                    i && i.notify(...e)
                }
                hasListeners(t) {
                    return this.eventHandlers.has(t)
                }
                mount(e, i=this.root.hasTreeAnimated) {
                    if (this.instance)
                        return;
                    this.isSVG = e instanceof SVGElement && "svg" !== e.tagName,
                    this.instance = e;
                    let {layoutId: n, layout: r, visualElement: s} = this.options;
                    if (s && !s.current && s.mount(e),
                    this.root.nodes.add(this),
                    this.parent && this.parent.children.add(this),
                    i && (r || n) && (this.isLayoutDirty = !0),
                    t) {
                        let i;
                        let n = () => this.root.updateBlockedByResize = !1;
                        t(e, () => {
                            this.root.updateBlockedByResize = !0,
                            i && i(),
                            i = function(t, e) {
                                let i = tt.now()
                                  , n = ({timestamp: e}) => {
                                    let r = e - i;
                                    r >= 250 && (G(n),
                                    t(r - 250))
                                }
                                ;
                                return X.read(n, !0),
                                () => G(n)
                            }(n, 250),
                            np.hasAnimatedSinceResize && (np.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(rt))
                        }
                        )
                    }
                    n && this.root.registerSharedNode(n, this),
                    !1 !== this.options.animate && s && (n || r) && this.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e, hasRelativeTargetChanged: i, layout: n}) => {
                        if (this.isTreeAnimationBlocked()) {
                            this.target = void 0,
                            this.relativeTarget = void 0;
                            return
                        }
                        let r = this.options.transition || s.getDefaultTransition() || rl
                          , {onLayoutAnimationStart: o, onLayoutAnimationComplete: a} = s.getProps()
                          , l = !this.targetLayout || !nq(this.targetLayout, n) || i
                          , u = !e && i;
                        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(t, u);
                            let e = {
                                ...g(r, "layout"),
                                onPlay: o,
                                onComplete: a
                            };
                            (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0,
                            e.type = !1),
                            this.startAnimation(e)
                        } else
                            e || rt(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = n
                    }
                    )
                }
                unmount() {
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                    let t = this.getStack();
                    t && t.remove(this),
                    this.parent && this.parent.children.delete(this),
                    this.instance = void 0,
                    G(this.updateProjection)
                }
                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }
                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }
                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }
                startUpdate() {
                    !this.isUpdateBlocked() && (this.isUpdating = !0,
                    this.nodes && this.nodes.forEach(rn),
                    this.animationId++)
                }
                getTransformTemplate() {
                    let {visualElement: t} = this.options;
                    return t && t.getProps().transformTemplate
                }
                willUpdate(t=!0) {
                    if (this.root.hasTreeAnimated = !0,
                    this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return
                    }
                    if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                        if (e.hasCheckedOptimisedAppear = !0,
                        e.root === e)
                            return;
                        let {visualElement: i} = e.options;
                        if (!i)
                            return;
                        let n = i.props[td];
                        if (window.MotionHasOptimisedAnimation(n, "transform")) {
                            let {layout: t, layoutId: i} = e.options;
                            window.MotionCancelOptimisedAnimation(n, "transform", X, !(t || i))
                        }
                        let {parent: r} = e;
                        r && !r.hasCheckedOptimisedAppear && t(r)
                    }(this),
                    this.root.isUpdating || this.root.startUpdate(),
                    this.isLayoutDirty)
                        return;
                    this.isLayoutDirty = !0;
                    for (let t = 0; t < this.path.length; t++) {
                        let e = this.path[t];
                        e.shouldResetTransform = !0,
                        e.updateScroll("snapshot"),
                        e.options.layoutRoot && e.willUpdate(!1)
                    }
                    let {layoutId: e, layout: i} = this.options;
                    if (void 0 === e && !i)
                        return;
                    let n = this.getTransformTemplate();
                    this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0,
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate")
                }
                update() {
                    if (this.updateScheduled = !1,
                    this.isUpdateBlocked()) {
                        this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        this.nodes.forEach(n4);
                        return
                    }
                    this.isUpdating || this.nodes.forEach(n8),
                    this.isUpdating = !1,
                    this.nodes.forEach(n7),
                    this.nodes.forEach(n5),
                    this.nodes.forEach(n2),
                    this.clearAllSnapshots();
                    let t = tt.now();
                    Z.delta = tA(0, 1e3 / 60, t - Z.timestamp),
                    Z.timestamp = t,
                    Z.isProcessing = !0,
                    Q.update.process(Z),
                    Q.preRender.process(Z),
                    Q.render.process(Z),
                    Z.isProcessing = !1
                }
                didUpdate() {
                    this.updateScheduled || (this.updateScheduled = !0,
                    nv.read(this.scheduleUpdate))
                }
                clearAllSnapshots() {
                    this.nodes.forEach(n9),
                    this.sharedNodes.forEach(rr)
                }
                scheduleUpdateProjection() {
                    this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                    X.preRender(this.updateProjection, !1, !0))
                }
                scheduleCheckAfterUnmount() {
                    X.postRender( () => {
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    }
                    )
                }
                updateSnapshot() {
                    !this.snapshot && this.instance && (this.snapshot = this.measure())
                }
                updateLayout() {
                    if (!this.instance || (this.updateScroll(),
                    !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                        return;
                    if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let t = 0; t < this.path.length; t++)
                            this.path[t].updateScroll();
                    let t = this.layout;
                    this.layout = this.measure(!1),
                    this.layoutCorrected = iX(),
                    this.isLayoutDirty = !1,
                    this.projectionDelta = void 0,
                    this.notifyListeners("measure", this.layout.layoutBox);
                    let {visualElement: e} = this.options;
                    e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                }
                updateScroll(t="measure") {
                    let e = !!(this.options.layoutScroll && this.instance);
                    if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
                    e) {
                        let e = n(this.instance);
                        this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: e,
                            offset: i(this.instance),
                            wasRoot: this.scroll ? this.scroll.isRoot : e
                        }
                    }
                }
                resetTransform() {
                    if (!r)
                        return;
                    let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
                      , e = this.projectionDelta && !nz(this.projectionDelta)
                      , i = this.getTransformTemplate()
                      , n = i ? i(this.latestValues, "") : void 0
                      , s = n !== this.prevTransformTemplateValue;
                    t && (e || i0(this.latestValues) || s) && (r(this.instance, n),
                    this.shouldResetTransform = !1,
                    this.scheduleRender())
                }
                measure(t=!0) {
                    var e;
                    let i = this.measurePageBox()
                      , n = this.removeElementScroll(i);
                    return t && (n = this.removeTransform(n)),
                    rd((e = n).x),
                    rd(e.y),
                    {
                        animationId: this.root.animationId,
                        measuredBox: i,
                        layoutBox: n,
                        latestValues: {},
                        source: this.id
                    }
                }
                measurePageBox() {
                    var t;
                    let {visualElement: e} = this.options;
                    if (!e)
                        return iX();
                    let i = e.measureViewportBox();
                    if (!((null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) || this.path.some(rp))) {
                        let {scroll: t} = this.root;
                        t && (i6(i.x, t.offset.x),
                        i6(i.y, t.offset.y))
                    }
                    return i
                }
                removeElementScroll(t) {
                    var e;
                    let i = iX();
                    if (nO(i, t),
                    null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
                        return i;
                    for (let e = 0; e < this.path.length; e++) {
                        let n = this.path[e]
                          , {scroll: r, options: s} = n;
                        n !== this.root && r && s.layoutScroll && (r.wasRoot && nO(i, t),
                        i6(i.x, r.offset.x),
                        i6(i.y, r.offset.y))
                    }
                    return i
                }
                applyTransform(t, e=!1) {
                    let i = iX();
                    nO(i, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let n = this.path[t];
                        !e && n.options.layoutScroll && n.scroll && n !== n.root && i4(i, {
                            x: -n.scroll.offset.x,
                            y: -n.scroll.offset.y
                        }),
                        i0(n.latestValues) && i4(i, n.latestValues)
                    }
                    return i0(this.latestValues) && i4(i, this.latestValues),
                    i
                }
                removeTransform(t) {
                    let e = iX();
                    nO(e, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let i = this.path[t];
                        if (!i.instance || !i0(i.latestValues))
                            continue;
                        iJ(i.latestValues) && i.updateSnapshot();
                        let n = iX();
                        nO(n, i.measurePageBox()),
                        nU(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                    }
                    return i0(this.latestValues) && nU(e, this.latestValues),
                    e
                }
                setTargetDelta(t) {
                    this.targetDelta = t,
                    this.root.scheduleUpdateProjection(),
                    this.isProjectionDirty = !0
                }
                setOptions(t) {
                    this.options = {
                        ...this.options,
                        ...t,
                        crossfade: void 0 === t.crossfade || t.crossfade
                    }
                }
                clearMeasurements() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                forceRelativeParentToResolveTarget() {
                    this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Z.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }
                resolveTargetDelta(t=!1) {
                    var e, i, n, r;
                    let s = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty),
                    this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty),
                    this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                    let o = !!this.resumingFrom || this !== s;
                    if (!(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                        return;
                    let {layout: a, layoutId: l} = this.options;
                    if (this.layout && (a || l)) {
                        if (this.resolvedRelativeTargetAt = Z.timestamp,
                        !this.targetDelta && !this.relativeTarget) {
                            let t = this.getClosestProjectingParent();
                            t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = iX(),
                            this.relativeTargetOrigin = iX(),
                            iN(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                            nO(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if (this.relativeTarget || this.targetDelta) {
                            if ((this.target || (this.target = iX(),
                            this.targetWithTransforms = iX()),
                            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(),
                            i = this.target,
                            n = this.relativeTarget,
                            r = this.relativeParent.target,
                            i_(i.x, n.x, r.x),
                            i_(i.y, n.y, r.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nO(this.target, this.layout.layoutBox),
                            i3(this.target, this.targetDelta)) : nO(this.target, this.layout.layoutBox),
                            this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget = !1;
                                let t = this.getClosestProjectingParent();
                                t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t,
                                this.forceRelativeParentToResolveTarget(),
                                this.relativeTarget = iX(),
                                this.relativeTargetOrigin = iX(),
                                iN(this.relativeTargetOrigin, this.target, t.target),
                                nO(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            nG && nX.resolvedTargetDeltas++
                        }
                    }
                }
                getClosestProjectingParent() {
                    return !this.parent || iJ(this.parent.latestValues) || i1(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                }
                isProjecting() {
                    return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }
                calcProjection() {
                    var t;
                    let e = this.getLead()
                      , i = !!this.resumingFrom || this !== e
                      , n = !0;
                    if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1),
                    i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1),
                    this.resolvedRelativeTargetAt === Z.timestamp && (n = !1),
                    n)
                        return;
                    let {layout: r, layoutId: s} = this.options;
                    if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    !this.layout || !(r || s))
                        return;
                    nO(this.layoutCorrected, this.layout.layoutBox);
                    let o = this.treeScale.x
                      , a = this.treeScale.y;
                    !function(t, e, i, n=!1) {
                        let r, s;
                        let o = i.length;
                        if (o) {
                            e.x = e.y = 1;
                            for (let a = 0; a < o; a++) {
                                s = (r = i[a]).projectionDelta;
                                let {visualElement: o} = r.options;
                                (!o || !o.props.style || "contents" !== o.props.style.display) && (n && r.options.layoutScroll && r.scroll && r !== r.root && i4(t, {
                                    x: -r.scroll.offset.x,
                                    y: -r.scroll.offset.y
                                }),
                                s && (e.x *= s.x.scale,
                                e.y *= s.y.scale,
                                i3(t, s)),
                                n && i0(r.latestValues) && i4(t, r.latestValues))
                            }
                            e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1),
                            e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                        }
                    }(this.layoutCorrected, this.treeScale, this.path, i),
                    e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox,
                    e.targetWithTransforms = iX());
                    let {target: l} = e;
                    if (!l) {
                        this.prevProjectionDelta && (this.createProjectionDeltas(),
                        this.scheduleRender());
                        return
                    }
                    this.projectionDelta && this.prevProjectionDelta ? (nL(this.prevProjectionDelta.x, this.projectionDelta.x),
                    nL(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(),
                    iB(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                    this.treeScale.x === o && this.treeScale.y === a && nK(this.projectionDelta.x, this.prevProjectionDelta.x) && nK(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", l)),
                    nG && nX.recalculatedProjection++
                }
                hide() {
                    this.isVisible = !1
                }
                show() {
                    this.isVisible = !0
                }
                scheduleRender(t=!0) {
                    var e;
                    if (null === (e = this.options.visualElement) || void 0 === e || e.scheduleRender(),
                    t) {
                        let t = this.getStack();
                        t && t.scheduleRender()
                    }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                createProjectionDeltas() {
                    this.prevProjectionDelta = iK(),
                    this.projectionDelta = iK(),
                    this.projectionDeltaWithTransform = iK()
                }
                setAnimationOrigin(t, e=!1) {
                    let i;
                    let n = this.snapshot
                      , r = n ? n.latestValues : {}
                      , s = {
                        ...this.latestValues
                    }
                      , o = iK();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    this.attemptToResolveRelativeTarget = !e;
                    let a = iX()
                      , l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0)
                      , u = this.getStack()
                      , h = !u || u.members.length <= 1
                      , d = !!(l && !h && !0 === this.options.crossfade && !this.path.some(ra));
                    this.animationProgress = 0,
                    this.mixTargetDelta = e => {
                        let n = e / 1e3;
                        if (rs(o.x, t.x, n),
                        rs(o.y, t.y, n),
                        this.setTargetDelta(o),
                        this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                            var u, c, p, f;
                            iN(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                            p = this.relativeTarget,
                            f = this.relativeTargetOrigin,
                            ro(p.x, f.x, a.x, n),
                            ro(p.y, f.y, a.y, n),
                            i && (u = this.relativeTarget,
                            c = i,
                            n$(u.x, c.x) && n$(u.y, c.y)) && (this.isProjectionDirty = !1),
                            i || (i = iX()),
                            nO(i, this.relativeTarget)
                        }
                        l && (this.animationValues = s,
                        function(t, e, i, n, r, s) {
                            r ? (t.opacity = ej(0, void 0 !== i.opacity ? i.opacity : 1, nV(n)),
                            t.opacityExit = ej(void 0 !== e.opacity ? e.opacity : 1, 0, nD(n))) : s && (t.opacity = ej(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                            for (let r = 0; r < nE; r++) {
                                let s = `border${nA[r]}Radius`
                                  , o = nj(e, s)
                                  , a = nj(i, s);
                                (void 0 !== o || void 0 !== a) && (o || (o = 0),
                                a || (a = 0),
                                0 === o || 0 === a || nC(o) === nC(a) ? (t[s] = Math.max(ej(nM(o), nM(a), n), 0),
                                (tU.test(a) || tU.test(o)) && (t[s] += "%")) : t[s] = a)
                            }
                            (e.rotate || i.rotate) && (t.rotate = ej(e.rotate || 0, i.rotate || 0, n))
                        }(s, r, this.latestValues, n, d, h)),
                        this.root.scheduleUpdateProjection(),
                        this.scheduleRender(),
                        this.animationProgress = n
                    }
                    ,
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                }
                startAnimation(t) {
                    this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation && (G(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = X.update( () => {
                        np.hasAnimatedSinceResize = !0,
                        this.currentAnimation = function(t, e, i) {
                            let n = tl(0) ? 0 : ta(0);
                            return n.start(id("", n, 1e3, i)),
                            n.animation
                        }(0, 0, {
                            ...t,
                            onUpdate: e => {
                                this.mixTargetDelta(e),
                                t.onUpdate && t.onUpdate(e)
                            }
                            ,
                            onComplete: () => {
                                t.onComplete && t.onComplete(),
                                this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                    }
                    )
                }
                completeAnimation() {
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0);
                    let t = this.getStack();
                    t && t.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                    this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                applyTransformsToTarget() {
                    let t = this.getLead()
                      , {targetWithTransforms: e, target: i, layout: n, latestValues: r} = t;
                    if (e && i && n) {
                        if (this !== t && this.layout && n && rc(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                            i = this.target || iX();
                            let e = iF(this.layout.layoutBox.x);
                            i.x.min = t.target.x.min,
                            i.x.max = i.x.min + e;
                            let n = iF(this.layout.layoutBox.y);
                            i.y.min = t.target.y.min,
                            i.y.max = i.y.min + n
                        }
                        nO(e, i),
                        i4(e, r),
                        iB(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                    }
                }
                registerSharedNode(t, e) {
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new nY),
                    this.sharedNodes.get(t).add(e);
                    let i = e.options.initialPromotionConfig;
                    e.promote({
                        transition: i ? i.transition : void 0,
                        preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                    })
                }
                isLead() {
                    let t = this.getStack();
                    return !t || t.lead === this
                }
                getLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }
                getPrevLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }
                getStack() {
                    let {layoutId: t} = this.options;
                    if (t)
                        return this.root.sharedNodes.get(t)
                }
                promote({needsReset: t, transition: e, preserveFollowOpacity: i}={}) {
                    let n = this.getStack();
                    n && n.promote(this, i),
                    t && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    e && this.setOptions({
                        transition: e
                    })
                }
                relegate() {
                    let t = this.getStack();
                    return !!t && t.relegate(this)
                }
                resetSkewAndRotation() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return;
                    let e = !1
                      , {latestValues: i} = t;
                    if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0),
                    !e)
                        return;
                    let n = {};
                    i.z && n0("z", t, n, this.animationValues);
                    for (let e = 0; e < nZ.length; e++)
                        n0(`rotate${nZ[e]}`, t, n, this.animationValues),
                        n0(`skew${nZ[e]}`, t, n, this.animationValues);
                    for (let e in t.render(),
                    n)
                        t.setStaticValue(e, n[e]),
                        this.animationValues && (this.animationValues[e] = n[e]);
                    t.scheduleRender()
                }
                getProjectionStyles(t) {
                    var e, i;
                    if (!this.instance || this.isSVG)
                        return;
                    if (!this.isVisible)
                        return nQ;
                    let n = {
                        visibility: ""
                    }
                      , r = this.getTransformTemplate();
                    if (this.needsReset)
                        return this.needsReset = !1,
                        n.opacity = "",
                        n.pointerEvents = nT(null == t ? void 0 : t.pointerEvents) || "",
                        n.transform = r ? r(this.latestValues, "") : "none",
                        n;
                    let s = this.getLead();
                    if (!this.projectionDelta || !this.layout || !s.target) {
                        let e = {};
                        return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                        e.pointerEvents = nT(null == t ? void 0 : t.pointerEvents) || ""),
                        this.hasProjected && !i0(this.latestValues) && (e.transform = r ? r({}, "") : "none",
                        this.hasProjected = !1),
                        e
                    }
                    let o = s.animationValues || s.latestValues;
                    this.applyTransformsToTarget(),
                    n.transform = function(t, e, i) {
                        let n = ""
                          , r = t.x.translate / e.x
                          , s = t.y.translate / e.y
                          , o = (null == i ? void 0 : i.z) || 0;
                        if ((r || s || o) && (n = `translate3d(${r}px, ${s}px, ${o}px) `),
                        (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                        i) {
                            let {transformPerspective: t, rotate: e, rotateX: r, rotateY: s, skewX: o, skewY: a} = i;
                            t && (n = `perspective(${t}px) ${n}`),
                            e && (n += `rotate(${e}deg) `),
                            r && (n += `rotateX(${r}deg) `),
                            s && (n += `rotateY(${s}deg) `),
                            o && (n += `skewX(${o}deg) `),
                            a && (n += `skewY(${a}deg) `)
                        }
                        let a = t.x.scale * e.x
                          , l = t.y.scale * e.y;
                        return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
                        n || "none"
                    }(this.projectionDeltaWithTransform, this.treeScale, o),
                    r && (n.transform = r(o, n.transform));
                    let {x: a, y: l} = this.projectionDelta;
                    for (let t in n.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`,
                    s.animationValues ? n.opacity = s === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0,
                    ng) {
                        if (void 0 === o[t])
                            continue;
                        let {correct: e, applyTo: i} = ng[t]
                          , r = "none" === n.transform ? o[t] : e(o[t], s);
                        if (i) {
                            let t = i.length;
                            for (let e = 0; e < t; e++)
                                n[i[e]] = r
                        } else
                            n[t] = r
                    }
                    return this.options.layoutId && (n.pointerEvents = s === this ? nT(null == t ? void 0 : t.pointerEvents) || "" : "none"),
                    n
                }
                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }
                resetTree() {
                    this.root.nodes.forEach(t => {
                        var e;
                        return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                    }
                    ),
                    this.root.nodes.forEach(n4),
                    this.root.sharedNodes.clear()
                }
            }
        }
        function n5(t) {
            t.updateLayout()
        }
        function n2(t) {
            var e;
            let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
            if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                let {layoutBox: e, measuredBox: n} = t.layout
                  , {animationType: r} = t.options
                  , s = i.source !== t.layout.source;
                "size" === r ? iG(t => {
                    let n = s ? i.measuredBox[t] : i.layoutBox[t]
                      , r = iF(n);
                    n.min = e[t].min,
                    n.max = n.min + r
                }
                ) : rc(r, i.layoutBox, e) && iG(n => {
                    let r = s ? i.measuredBox[n] : i.layoutBox[n]
                      , o = iF(e[n]);
                    r.max = r.min + o,
                    t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
                    t.relativeTarget[n].max = t.relativeTarget[n].min + o)
                }
                );
                let o = iK();
                iB(o, e, i.layoutBox);
                let a = iK();
                s ? iB(a, t.applyTransform(n, !0), i.measuredBox) : iB(a, e, i.layoutBox);
                let l = !nz(o)
                  , u = !1;
                if (!t.resumeFrom) {
                    let n = t.getClosestProjectingParent();
                    if (n && !n.resumeFrom) {
                        let {snapshot: r, layout: s} = n;
                        if (r && s) {
                            let o = iX();
                            iN(o, i.layoutBox, r.layoutBox);
                            let a = iX();
                            iN(a, e, s.layoutBox),
                            nq(o, a) || (u = !0),
                            n.options.layoutRoot && (t.relativeTarget = a,
                            t.relativeTargetOrigin = o,
                            t.relativeParent = n)
                        }
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: e,
                    snapshot: i,
                    delta: a,
                    layoutDelta: o,
                    hasLayoutChanged: l,
                    hasRelativeTargetChanged: u
                })
            } else if (t.isLead()) {
                let {onExitComplete: e} = t.options;
                e && e()
            }
            t.options.transition = void 0
        }
        function n3(t) {
            nG && nX.totalNodes++,
            t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
            t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
        }
        function n6(t) {
            t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
        }
        function n9(t) {
            t.clearSnapshot()
        }
        function n4(t) {
            t.clearMeasurements()
        }
        function n8(t) {
            t.isLayoutDirty = !1
        }
        function n7(t) {
            let {visualElement: e} = t.options;
            e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
            t.resetTransform()
        }
        function rt(t) {
            t.finishAnimation(),
            t.targetDelta = t.relativeTarget = t.target = void 0,
            t.isProjectionDirty = !0
        }
        function re(t) {
            t.resolveTargetDelta()
        }
        function ri(t) {
            t.calcProjection()
        }
        function rn(t) {
            t.resetSkewAndRotation()
        }
        function rr(t) {
            t.removeLeadSnapshot()
        }
        function rs(t, e, i) {
            t.translate = ej(e.translate, 0, i),
            t.scale = ej(e.scale, 1, i),
            t.origin = e.origin,
            t.originPoint = e.originPoint
        }
        function ro(t, e, i, n) {
            t.min = ej(e.min, i.min, n),
            t.max = ej(e.max, i.max, n)
        }
        function ra(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }
        let rl = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        }
          , ru = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
          , rh = ru("applewebkit/") && !ru("chrome/") ? Math.round : U;
        function rd(t) {
            t.min = rh(t.min),
            t.max = rh(t.max)
        }
        function rc(t, e, i) {
            return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(nH(e) - nH(i)))
        }
        function rp(t) {
            var e;
            return t !== t.root && (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        }
        let rf = n1({
            attachResizeListener: (t, e) => iA(t, "resize", e),
            measureScroll: () => ({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: () => !0
        })
          , rm = {
            current: void 0
        }
          , rg = n1({
            measureScroll: t => ({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: () => {
                if (!rm.current) {
                    let t = new rf({});
                    t.mount(window),
                    t.setOptions({
                        layoutScroll: !0
                    }),
                    rm.current = t
                }
                return rm.current
            }
            ,
            resetTransform: (t, e) => {
                t.style.transform = void 0 !== e ? e : "none"
            }
            ,
            checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
        });
        function rv(t, e, i) {
            let {props: n} = t;
            t.animationState && n.whileHover && t.animationState.setActive("whileHover", "Start" === i);
            let r = n["onHover" + i];
            r && X.postRender( () => r(e, iE(e)))
        }
        class ry extends iw {
            mount() {
                let {current: t} = this.node;
                t && (this.unmount = function(t, e, i={}) {
                    let[n,r,s] = C(t, i)
                      , o = j(t => {
                        let {target: i} = t
                          , n = e(t);
                        if ("function" != typeof n || !i)
                            return;
                        let s = j(t => {
                            n(t),
                            i.removeEventListener("pointerleave", s)
                        }
                        );
                        i.addEventListener("pointerleave", s, r)
                    }
                    );
                    return n.forEach(t => {
                        t.addEventListener("pointerenter", o, r)
                    }
                    ),
                    s
                }(t, t => (rv(this.node, t, "Start"),
                t => rv(this.node, t, "End"))))
            }
            unmount() {}
        }
        class rx extends iw {
            constructor() {
                super(...arguments),
                this.isActive = !1
            }
            onFocus() {
                let t = !1;
                try {
                    t = this.node.current.matches(":focus-visible")
                } catch (e) {
                    t = !0
                }
                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                this.isActive = !0)
            }
            onBlur() {
                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                this.isActive = !1)
            }
            mount() {
                this.unmount = eB(iA(this.node.current, "focus", () => this.onFocus()), iA(this.node.current, "blur", () => this.onBlur()))
            }
            unmount() {}
        }
        function rb(t, e, i) {
            let {props: n} = t;
            t.animationState && n.whileTap && t.animationState.setActive("whileTap", "Start" === i);
            let r = n["onTap" + ("End" === i ? "" : i)];
            r && X.postRender( () => r(e, iE(e)))
        }
        class rw extends iw {
            mount() {
                let {current: t} = this.node;
                t && (this.unmount = function(t, e, i={}) {
                    let[n,r,s] = C(t, i)
                      , o = t => {
                        let n = t.currentTarget;
                        if (!I(t) || R.has(n))
                            return;
                        R.add(n);
                        let s = e(t)
                          , o = (t, e) => {
                            window.removeEventListener("pointerup", a),
                            window.removeEventListener("pointercancel", l),
                            I(t) && R.has(n) && (R.delete(n),
                            "function" == typeof s && s(t, {
                                success: e
                            }))
                        }
                          , a = t => {
                            o(t, i.useGlobalTarget || V(n, t.target))
                        }
                          , l = t => {
                            o(t, !1)
                        }
                        ;
                        window.addEventListener("pointerup", a, r),
                        window.addEventListener("pointercancel", l, r)
                    }
                    ;
                    return n.forEach(t => {
                        k.has(t.tagName) || -1 !== t.tabIndex || null !== t.getAttribute("tabindex") || (t.tabIndex = 0),
                        (i.useGlobalTarget ? window : t).addEventListener("pointerdown", o, r),
                        t.addEventListener("focus", t => F(t, r), r)
                    }
                    ),
                    s
                }(t, t => (rb(this.node, t, "Start"),
                (t, {success: e}) => rb(this.node, t, e ? "End" : "Cancel")), {
                    useGlobalTarget: this.node.props.globalTapTarget
                }))
            }
            unmount() {}
        }
        let rP = new WeakMap
          , rS = new WeakMap
          , rT = t => {
            let e = rP.get(t.target);
            e && e(t)
        }
          , rA = t => {
            t.forEach(rT)
        }
          , rE = {
            some: 0,
            all: 1
        };
        class rM extends iw {
            constructor() {
                super(...arguments),
                this.hasEnteredView = !1,
                this.isInView = !1
            }
            startObserver() {
                this.unmount();
                let {viewport: t={}} = this.node.getProps()
                  , {root: e, margin: i, amount: n="some", once: r} = t
                  , s = {
                    root: e ? e.current : void 0,
                    rootMargin: i,
                    threshold: "number" == typeof n ? n : rE[n]
                };
                return function(t, e, i) {
                    let n = function({root: t, ...e}) {
                        let i = t || document;
                        rS.has(i) || rS.set(i, {});
                        let n = rS.get(i)
                          , r = JSON.stringify(e);
                        return n[r] || (n[r] = new IntersectionObserver(rA,{
                            root: t,
                            ...e
                        })),
                        n[r]
                    }(e);
                    return rP.set(t, i),
                    n.observe(t),
                    () => {
                        rP.delete(t),
                        n.unobserve(t)
                    }
                }(this.node.current, s, t => {
                    let {isIntersecting: e} = t;
                    if (this.isInView === e || (this.isInView = e,
                    r && !e && this.hasEnteredView))
                        return;
                    e && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", e);
                    let {onViewportEnter: i, onViewportLeave: n} = this.node.getProps()
                      , s = e ? i : n;
                    s && s(t)
                }
                )
            }
            mount() {
                this.startObserver()
            }
            update() {
                if ("undefined" == typeof IntersectionObserver)
                    return;
                let {props: t, prevProps: e} = this.node;
                ["amount", "margin", "root"].some(function({viewport: t={}}, {viewport: e={}}={}) {
                    return i => t[i] !== e[i]
                }(t, e)) && this.startObserver()
            }
            unmount() {}
        }
        let rC = (0,
        nu.createContext)({
            strict: !1
        });
        var rj = i(7249);
        let rV = (0,
        nu.createContext)({});
        function rD(t) {
            return r(t.animate) || d.some(e => a(t[e]))
        }
        function rk(t) {
            return !!(rD(t) || t.variants)
        }
        function rR(t) {
            return Array.isArray(t) ? t.join(" ") : t
        }
        var rO = i(5687);
        let rL = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        }
          , rF = {};
        for (let t in rL)
            rF[t] = {
                isEnabled: e => rL[t].some(t => !!e[t])
            };
        let rI = Symbol.for("motionComponentSymbol");
        var rB = i(9656)
          , r_ = i(5403);
        let rU = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        function rN(t) {
            if ("string" != typeof t || t.includes("-"))
                ;
            else if (rU.indexOf(t) > -1 || /[A-Z]/u.test(t))
                return !0;
            return !1
        }
        var rz = i(9234);
        let r$ = t => (e, i) => {
            let n = (0,
            nu.useContext)(rV)
              , s = (0,
            nu.useContext)(rB.t)
              , o = () => (function({scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: i}, n, s, o) {
                let a = {
                    latestValues: function(t, e, i, n) {
                        let s = {}
                          , o = n(t, {});
                        for (let t in o)
                            s[t] = nT(o[t]);
                        let {initial: a, animate: u} = t
                          , h = rD(t)
                          , d = rk(t);
                        e && d && !h && !1 !== t.inherit && (void 0 === a && (a = e.initial),
                        void 0 === u && (u = e.animate));
                        let c = !!i && !1 === i.initial
                          , p = (c = c || !1 === a) ? u : a;
                        if (p && "boolean" != typeof p && !r(p)) {
                            let e = Array.isArray(p) ? p : [p];
                            for (let i = 0; i < e.length; i++) {
                                let n = l(t, e[i]);
                                if (n) {
                                    let {transitionEnd: t, transition: e, ...i} = n;
                                    for (let t in i) {
                                        let e = i[t];
                                        if (Array.isArray(e)) {
                                            let t = c ? e.length - 1 : 0;
                                            e = e[t]
                                        }
                                        null !== e && (s[t] = e)
                                    }
                                    for (let e in t)
                                        s[e] = t[e]
                                }
                            }
                        }
                        return s
                    }(n, s, o, t),
                    renderState: e()
                };
                return i && (a.onMount = t => i({
                    props: n,
                    current: t,
                    ...a
                }),
                a.onUpdate = t => i(t)),
                a
            }
            )(t, e, n, s);
            return i ? o() : (0,
            rz.M)(o)
        }
          , rW = (t, e) => e && "number" == typeof t ? e.transform(t) : t
          , rq = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        }
          , rH = N.length;
        function rK(t, e, i) {
            let {style: n, vars: r, transformOrigin: s} = t
              , o = !1
              , a = !1;
            for (let t in e) {
                let i = e[t];
                if (z.has(t)) {
                    o = !0;
                    continue
                }
                if (eg(t)) {
                    r[t] = i;
                    continue
                }
                {
                    let e = rW(i, t4[t]);
                    t.startsWith("origin") ? (a = !0,
                    s[t] = e) : n[t] = e
                }
            }
            if (!e.transform && (o || i ? n.transform = function(t, e, i) {
                let n = ""
                  , r = !0;
                for (let s = 0; s < rH; s++) {
                    let o = N[s]
                      , a = t[o];
                    if (void 0 === a)
                        continue;
                    let l = !0;
                    if (!(l = "number" == typeof a ? a === (o.startsWith("scale") ? 1 : 0) : 0 === parseFloat(a)) || i) {
                        let t = rW(a, t4[o]);
                        if (!l) {
                            r = !1;
                            let e = rq[o] || o;
                            n += `${e}(${t}) `
                        }
                        i && (e[o] = t)
                    }
                }
                return n = n.trim(),
                i ? n = i(e, r ? "" : n) : r && (n = "none"),
                n
            }(e, t.transform, i) : n.transform && (n.transform = "none")),
            a) {
                let {originX: t="50%", originY: e="50%", originZ: i=0} = s;
                n.transformOrigin = `${t} ${e} ${i}`
            }
        }
        function rY(t, e, i) {
            return "string" == typeof t ? t : tN.transform(e + i * t)
        }
        let rX = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , rG = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function rZ(t, {attrX: e, attrY: i, attrScale: n, originX: r, originY: s, pathLength: o, pathSpacing: a=1, pathOffset: l=0, ...u}, h, d) {
            if (rK(t, u, d),
            h) {
                t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                return
            }
            t.attrs = t.style,
            t.style = {};
            let {attrs: c, style: p, dimensions: f} = t;
            c.transform && (f && (p.transform = c.transform),
            delete c.transform),
            f && (void 0 !== r || void 0 !== s || p.transform) && (p.transformOrigin = function(t, e, i) {
                let n = rY(e, t.x, t.width)
                  , r = rY(i, t.y, t.height);
                return `${n} ${r}`
            }(f, void 0 !== r ? r : .5, void 0 !== s ? s : .5)),
            void 0 !== e && (c.x = e),
            void 0 !== i && (c.y = i),
            void 0 !== n && (c.scale = n),
            void 0 !== o && function(t, e, i=1, n=0, r=!0) {
                t.pathLength = 1;
                let s = r ? rX : rG;
                t[s.offset] = tN.transform(-n);
                let o = tN.transform(e)
                  , a = tN.transform(i);
                t[s.array] = `${o} ${a}`
            }(c, o, a, l, !1)
        }
        let rQ = () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
        })
          , rJ = () => ({
            ...rQ(),
            attrs: {}
        })
          , r0 = t => "string" == typeof t && "svg" === t.toLowerCase();
        function r1(t, {style: e, vars: i}, n, r) {
            for (let s in Object.assign(t.style, e, r && r.getProjectionStyles(n)),
            i)
                t.style.setProperty(s, i[s])
        }
        let r5 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
        function r2(t, e, i, n) {
            for (let i in r1(t, e, void 0, n),
            e.attrs)
                t.setAttribute(r5.has(i) ? i : th(i), e.attrs[i])
        }
        function r3(t, {layout: e, layoutId: i}) {
            return z.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!ng[t] || "opacity" === t)
        }
        function r6(t, e, i) {
            var n;
            let {style: r} = t
              , s = {};
            for (let o in r)
                (tl(r[o]) || e.style && tl(e.style[o]) || r3(o, t) || (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n ? void 0 : n.liveStyle) !== void 0) && (s[o] = r[o]);
            return s
        }
        function r9(t, e, i) {
            let n = r6(t, e, i);
            for (let i in t)
                (tl(t[i]) || tl(e[i])) && (n[-1 !== N.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
            return n
        }
        let r4 = ["x", "y", "width", "height", "cx", "cy", "r"]
          , r8 = {
            useVisualState: r$({
                scrapeMotionValuesFromProps: r9,
                createRenderState: rJ,
                onUpdate: ({props: t, prevProps: e, current: i, renderState: n, latestValues: r}) => {
                    if (!i)
                        return;
                    let s = !!t.drag;
                    if (!s) {
                        for (let t in r)
                            if (z.has(t)) {
                                s = !0;
                                break
                            }
                    }
                    if (!s)
                        return;
                    let o = !e;
                    if (e)
                        for (let i = 0; i < r4.length; i++) {
                            let n = r4[i];
                            t[n] !== e[n] && (o = !0)
                        }
                    o && (X.read( () => (function(t, e) {
                        try {
                            e.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                        } catch (t) {
                            e.dimensions = {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            }
                        }
                    }
                    )(i, n)),
                    X.render( () => {
                        rZ(n, r, r0(i.tagName), t.transformTemplate),
                        r2(i, n)
                    }
                    ))
                }
            })
        }
          , r7 = {
            useVisualState: r$({
                scrapeMotionValuesFromProps: r6,
                createRenderState: rQ
            })
        };
        function st(t, e, i) {
            for (let n in e)
                tl(e[n]) || r3(n, i) || (t[n] = e[n])
        }
        let se = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
        function si(t) {
            return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || se.has(t)
        }
        let sn = t => !si(t);
        try {
            !function(t) {
                t && (sn = e => e.startsWith("on") ? !si(e) : t(e))
            }(require("@emotion/is-prop-valid").default)
        } catch (t) {}
        let sr = {
            current: null
        }
          , ss = {
            current: !1
        }
          , so = [...eP, tH, t1]
          , sa = t => so.find(ew(t))
          , sl = new WeakMap
          , su = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
        class sh {
            scrapeMotionValuesFromProps(t, e, i) {
                return {}
            }
            constructor({parent: t, props: e, presenceContext: i, reducedMotionConfig: n, blockInitialAnimation: r, visualState: s}, o={}) {
                this.current = null,
                this.children = new Set,
                this.isVariantNode = !1,
                this.isControllingVariants = !1,
                this.shouldReduceMotion = null,
                this.values = new Map,
                this.KeyframeResolver = ep,
                this.features = {},
                this.valueSubscriptions = new Map,
                this.prevMotionValues = {},
                this.events = {},
                this.propEventSubscriptions = {},
                this.notifyUpdate = () => this.notify("Update", this.latestValues),
                this.render = () => {
                    this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                }
                ,
                this.renderScheduledAt = 0,
                this.scheduleRender = () => {
                    let t = tt.now();
                    this.renderScheduledAt < t && (this.renderScheduledAt = t,
                    X.render(this.render, !1, !0))
                }
                ;
                let {latestValues: a, renderState: l, onUpdate: u} = s;
                this.onUpdate = u,
                this.latestValues = a,
                this.baseTarget = {
                    ...a
                },
                this.initialValues = e.initial ? {
                    ...a
                } : {},
                this.renderState = l,
                this.parent = t,
                this.props = e,
                this.presenceContext = i,
                this.depth = t ? t.depth + 1 : 0,
                this.reducedMotionConfig = n,
                this.options = o,
                this.blockInitialAnimation = !!r,
                this.isControllingVariants = rD(e),
                this.isVariantNode = rk(e),
                this.isVariantNode && (this.variantChildren = new Set),
                this.manuallyAnimateOnMount = !!(t && t.current);
                let {willChange: h, ...d} = this.scrapeMotionValuesFromProps(e, {}, this);
                for (let t in d) {
                    let e = d[t];
                    void 0 !== a[t] && tl(e) && e.set(a[t], !1)
                }
            }
            mount(t) {
                this.current = t,
                sl.set(t, this),
                this.projection && !this.projection.instance && this.projection.mount(t),
                this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                this.values.forEach( (t, e) => this.bindToMotionValue(e, t)),
                ss.current || function() {
                    if (ss.current = !0,
                    rO.B) {
                        if (window.matchMedia) {
                            let t = window.matchMedia("(prefers-reduced-motion)")
                              , e = () => sr.current = t.matches;
                            t.addListener(e),
                            e()
                        } else
                            sr.current = !1
                    }
                }(),
                this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || sr.current),
                this.parent && this.parent.children.add(this),
                this.update(this.props, this.presenceContext)
            }
            unmount() {
                for (let t in sl.delete(this.current),
                this.projection && this.projection.unmount(),
                G(this.notifyUpdate),
                G(this.render),
                this.valueSubscriptions.forEach(t => t()),
                this.valueSubscriptions.clear(),
                this.removeFromVariantTree && this.removeFromVariantTree(),
                this.parent && this.parent.children.delete(this),
                this.events)
                    this.events[t].clear();
                for (let t in this.features) {
                    let e = this.features[t];
                    e && (e.unmount(),
                    e.isMounted = !1)
                }
                this.current = null
            }
            bindToMotionValue(t, e) {
                let i;
                this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                let n = z.has(t)
                  , r = e.on("change", e => {
                    this.latestValues[t] = e,
                    this.props.onUpdate && X.preRender(this.notifyUpdate),
                    n && this.projection && (this.projection.isTransformDirty = !0)
                }
                )
                  , s = e.on("renderRequest", this.scheduleRender);
                window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)),
                this.valueSubscriptions.set(t, () => {
                    r(),
                    s(),
                    i && i(),
                    e.owner && e.stop()
                }
                )
            }
            sortNodePosition(t) {
                return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
            }
            updateFeatures() {
                let t = "animation";
                for (t in rF) {
                    let e = rF[t];
                    if (!e)
                        continue;
                    let {isEnabled: i, Feature: n} = e;
                    if (!this.features[t] && n && i(this.props) && (this.features[t] = new n(this)),
                    this.features[t]) {
                        let e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(),
                        e.isMounted = !0)
                    }
                }
            }
            triggerBuild() {
                this.build(this.renderState, this.latestValues, this.props)
            }
            measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : iX()
            }
            getStaticValue(t) {
                return this.latestValues[t]
            }
            setStaticValue(t, e) {
                this.latestValues[t] = e
            }
            update(t, e) {
                (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                this.prevProps = this.props,
                this.props = t,
                this.prevPresenceContext = this.presenceContext,
                this.presenceContext = e;
                for (let e = 0; e < su.length; e++) {
                    let i = su[e];
                    this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
                    delete this.propEventSubscriptions[i]);
                    let n = t["on" + i];
                    n && (this.propEventSubscriptions[i] = this.on(i, n))
                }
                this.prevMotionValues = function(t, e, i) {
                    for (let n in e) {
                        let r = e[n]
                          , s = i[n];
                        if (tl(r))
                            t.addValue(n, r);
                        else if (tl(s))
                            t.addValue(n, ta(r, {
                                owner: t
                            }));
                        else if (s !== r) {
                            if (t.hasValue(n)) {
                                let e = t.getValue(n);
                                !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r)
                            } else {
                                let e = t.getStaticValue(n);
                                t.addValue(n, ta(void 0 !== e ? e : r, {
                                    owner: t
                                }))
                            }
                        }
                    }
                    for (let n in i)
                        void 0 === e[n] && t.removeValue(n);
                    return e
                }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
                this.handleChildMotionValue && this.handleChildMotionValue(),
                this.onUpdate && this.onUpdate(this)
            }
            getProps() {
                return this.props
            }
            getVariant(t) {
                return this.props.variants ? this.props.variants[t] : void 0
            }
            getDefaultTransition() {
                return this.props.transition
            }
            getTransformPagePoint() {
                return this.props.transformPagePoint
            }
            getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
            }
            addVariantChild(t) {
                let e = this.getClosestVariantNode();
                if (e)
                    return e.variantChildren && e.variantChildren.add(t),
                    () => e.variantChildren.delete(t)
            }
            addValue(t, e) {
                let i = this.values.get(t);
                e !== i && (i && this.removeValue(t),
                this.bindToMotionValue(t, e),
                this.values.set(t, e),
                this.latestValues[t] = e.get())
            }
            removeValue(t) {
                this.values.delete(t);
                let e = this.valueSubscriptions.get(t);
                e && (e(),
                this.valueSubscriptions.delete(t)),
                delete this.latestValues[t],
                this.removeValueFromRenderState(t, this.renderState)
            }
            hasValue(t) {
                return this.values.has(t)
            }
            getValue(t, e) {
                if (this.props.values && this.props.values[t])
                    return this.props.values[t];
                let i = this.values.get(t);
                return void 0 === i && void 0 !== e && (i = ta(null === e ? void 0 : e, {
                    owner: this
                }),
                this.addValue(t, i)),
                i
            }
            readValue(t, e) {
                var i;
                let n = void 0 === this.latestValues[t] && this.current ? null !== (i = this.getBaseTargetFromProps(this.props, t)) && void 0 !== i ? i : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                return null != n && ("string" == typeof n && (ef(n) || tT(n)) ? n = parseFloat(n) : !sa(n) && t1.test(e) && (n = et(t, e)),
                this.setBaseTarget(t, tl(n) ? n.get() : n)),
                tl(n) ? n.get() : n
            }
            setBaseTarget(t, e) {
                this.baseTarget[t] = e
            }
            getBaseTarget(t) {
                var e;
                let i;
                let {initial: n} = this.props;
                if ("string" == typeof n || "object" == typeof n) {
                    let r = l(this.props, n, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
                    r && (i = r[t])
                }
                if (n && void 0 !== i)
                    return i;
                let r = this.getBaseTargetFromProps(this.props, t);
                return void 0 === r || tl(r) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : r
            }
            on(t, e) {
                return this.events[t] || (this.events[t] = new tn),
                this.events[t].add(e)
            }
            notify(t, ...e) {
                this.events[t] && this.events[t].notify(...e)
            }
        }
        class sd extends sh {
            constructor() {
                super(...arguments),
                this.KeyframeResolver = eT
            }
            sortInstanceNodePosition(t, e) {
                return 2 & t.compareDocumentPosition(e) ? 1 : -1
            }
            getBaseTargetFromProps(t, e) {
                return t.style ? t.style[e] : void 0
            }
            removeValueFromRenderState(t, {vars: e, style: i}) {
                delete e[t],
                delete i[t]
            }
            handleChildMotionValue() {
                this.childSubscription && (this.childSubscription(),
                delete this.childSubscription);
                let {children: t} = this.props;
                tl(t) && (this.childSubscription = t.on("change", t => {
                    this.current && (this.current.textContent = `${t}`)
                }
                ))
            }
        }
        class sc extends sd {
            constructor() {
                super(...arguments),
                this.type = "html",
                this.renderInstance = r1
            }
            readValueFromInstance(t, e) {
                if (z.has(e)) {
                    let t = t7(e);
                    return t && t.default || 0
                }
                {
                    let i = window.getComputedStyle(t)
                      , n = (eg(e) ? i.getPropertyValue(e) : i[e]) || 0;
                    return "string" == typeof n ? n.trim() : n
                }
            }
            measureInstanceViewportBox(t, {transformPagePoint: e}) {
                return i8(t, e)
            }
            build(t, e, i) {
                rK(t, e, i.transformTemplate)
            }
            scrapeMotionValuesFromProps(t, e, i) {
                return r6(t, e, i)
            }
        }
        class sp extends sd {
            constructor() {
                super(...arguments),
                this.type = "svg",
                this.isSVGTag = !1,
                this.measureInstanceViewportBox = iX
            }
            getBaseTargetFromProps(t, e) {
                return t[e]
            }
            readValueFromInstance(t, e) {
                if (z.has(e)) {
                    let t = t7(e);
                    return t && t.default || 0
                }
                return e = r5.has(e) ? e : th(e),
                t.getAttribute(e)
            }
            scrapeMotionValuesFromProps(t, e, i) {
                return r9(t, e, i)
            }
            build(t, e, i) {
                rZ(t, e, this.isSVGTag, i.transformTemplate)
            }
            renderInstance(t, e, i, n) {
                r2(t, e, i, n)
            }
            mount(t) {
                this.isSVGTag = r0(t.tagName),
                super.mount(t)
            }
        }
        let sf = function(t) {
            if ("undefined" == typeof Proxy)
                return t;
            let e = new Map;
            return new Proxy( (...e) => t(...e),{
                get: (i, n) => "create" === n ? t : (e.has(n) || e.set(n, t(n)),
                e.get(n))
            })
        }((no = {
            animation: {
                Feature: iP
            },
            exit: {
                Feature: iT
            },
            inView: {
                Feature: rM
            },
            tap: {
                Feature: rw
            },
            focus: {
                Feature: rx
            },
            hover: {
                Feature: ry
            },
            pan: {
                Feature: ns
            },
            drag: {
                Feature: nn,
                ProjectionNode: rg,
                MeasureLayout: nb
            },
            layout: {
                ProjectionNode: rg,
                MeasureLayout: nb
            }
        },
        na = (t, e) => rN(t) ? new sp(e) : new sc(e,{
            allowProjection: t !== nu.Fragment
        }),
        function(t, {forwardMotionProps: e}={
            forwardMotionProps: !1
        }) {
            return function(t) {
                var e, i;
                let {preloadedFeatures: n, createVisualElement: r, useRender: s, useVisualState: o, Component: l} = t;
                function u(t, e) {
                    var i;
                    let n;
                    let u = {
                        ...(0,
                        nu.useContext)(rj.Q),
                        ...t,
                        layoutId: function(t) {
                            let {layoutId: e} = t
                              , i = (0,
                            nu.useContext)(nd.L).id;
                            return i && void 0 !== e ? i + "-" + e : e
                        }(t)
                    }
                      , {isStatic: h} = u
                      , d = function(t) {
                        let {initial: e, animate: i} = function(t, e) {
                            if (rD(t)) {
                                let {initial: e, animate: i} = t;
                                return {
                                    initial: !1 === e || a(e) ? e : void 0,
                                    animate: a(i) ? i : void 0
                                }
                            }
                            return !1 !== t.inherit ? e : {}
                        }(t, (0,
                        nu.useContext)(rV));
                        return (0,
                        nu.useMemo)( () => ({
                            initial: e,
                            animate: i
                        }), [rR(e), rR(i)])
                    }(t)
                      , c = o(t, h);
                    if (!h && rO.B) {
                        (0,
                        nu.useContext)(rC).strict;
                        let t = function(t) {
                            let {drag: e, layout: i} = rF;
                            if (!e && !i)
                                return {};
                            let n = {
                                ...e,
                                ...i
                            };
                            return {
                                MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == i ? void 0 : i.isEnabled(t)) ? n.MeasureLayout : void 0,
                                ProjectionNode: n.ProjectionNode
                            }
                        }(u);
                        n = t.MeasureLayout,
                        d.visualElement = function(t, e, i, n, r) {
                            var s, o;
                            let {visualElement: a} = (0,
                            nu.useContext)(rV)
                              , l = (0,
                            nu.useContext)(rC)
                              , u = (0,
                            nu.useContext)(rB.t)
                              , h = (0,
                            nu.useContext)(rj.Q).reducedMotion
                              , d = (0,
                            nu.useRef)(null);
                            n = n || l.renderer,
                            !d.current && n && (d.current = n(t, {
                                visualState: e,
                                parent: a,
                                props: i,
                                presenceContext: u,
                                blockInitialAnimation: !!u && !1 === u.initial,
                                reducedMotionConfig: h
                            }));
                            let c = d.current
                              , p = (0,
                            nu.useContext)(nc);
                            c && !c.projection && r && ("html" === c.type || "svg" === c.type) && function(t, e, i, n) {
                                let {layoutId: r, layout: s, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: u} = e;
                                t.projection = new i(t.latestValues,e["data-framer-portal-id"] ? void 0 : function t(e) {
                                    if (e)
                                        return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                }(t.parent)),
                                t.projection.setOptions({
                                    layoutId: r,
                                    layout: s,
                                    alwaysMeasureLayout: !!o || a && iL(a),
                                    visualElement: t,
                                    animationType: "string" == typeof s ? s : "both",
                                    initialPromotionConfig: n,
                                    layoutScroll: l,
                                    layoutRoot: u
                                })
                            }(d.current, i, r, p);
                            let f = (0,
                            nu.useRef)(!1);
                            (0,
                            nu.useInsertionEffect)( () => {
                                c && f.current && c.update(i, u)
                            }
                            );
                            let m = i[td]
                              , g = (0,
                            nu.useRef)(!!m && !(null === (s = window.MotionHandoffIsComplete) || void 0 === s ? void 0 : s.call(window, m)) && (null === (o = window.MotionHasOptimisedAnimation) || void 0 === o ? void 0 : o.call(window, m)));
                            return (0,
                            r_.E)( () => {
                                c && (f.current = !0,
                                window.MotionIsMounted = !0,
                                c.updateFeatures(),
                                nv.render(c.render),
                                g.current && c.animationState && c.animationState.animateChanges())
                            }
                            ),
                            (0,
                            nu.useEffect)( () => {
                                c && (!g.current && c.animationState && c.animationState.animateChanges(),
                                g.current && (queueMicrotask( () => {
                                    var t;
                                    null === (t = window.MotionHandoffMarkAsComplete) || void 0 === t || t.call(window, m)
                                }
                                ),
                                g.current = !1))
                            }
                            ),
                            c
                        }(l, c, u, r, t.ProjectionNode)
                    }
                    return (0,
                    nl.jsxs)(rV.Provider, {
                        value: d,
                        children: [n && d.visualElement ? (0,
                        nl.jsx)(n, {
                            visualElement: d.visualElement,
                            ...u
                        }) : null, s(l, t, (i = d.visualElement,
                        (0,
                        nu.useCallback)(t => {
                            t && c.onMount && c.onMount(t),
                            i && (t ? i.mount(t) : i.unmount()),
                            e && ("function" == typeof e ? e(t) : iL(e) && (e.current = t))
                        }
                        , [i])), c, h, d.visualElement)]
                    })
                }
                n && function(t) {
                    for (let e in t)
                        rF[e] = {
                            ...rF[e],
                            ...t[e]
                        }
                }(n),
                u.displayName = "motion.".concat("string" == typeof l ? l : "create(".concat(null !== (i = null !== (e = l.displayName) && void 0 !== e ? e : l.name) && void 0 !== i ? i : "", ")"));
                let h = (0,
                nu.forwardRef)(u);
                return h[rI] = l,
                h
            }({
                ...rN(t) ? r8 : r7,
                preloadedFeatures: no,
                useRender: function(t=!1) {
                    return (e, i, n, {latestValues: r}, s) => {
                        let o = (rN(e) ? function(t, e, i, n) {
                            let r = (0,
                            nu.useMemo)( () => {
                                let i = rJ();
                                return rZ(i, e, r0(n), t.transformTemplate),
                                {
                                    ...i.attrs,
                                    style: {
                                        ...i.style
                                    }
                                }
                            }
                            , [e]);
                            if (t.style) {
                                let e = {};
                                st(e, t.style, t),
                                r.style = {
                                    ...e,
                                    ...r.style
                                }
                            }
                            return r
                        }
                        : function(t, e) {
                            let i = {}
                              , n = function(t, e) {
                                let i = t.style || {}
                                  , n = {};
                                return st(n, i, t),
                                Object.assign(n, function({transformTemplate: t}, e) {
                                    return (0,
                                    nu.useMemo)( () => {
                                        let i = rQ();
                                        return rK(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                    }
                                    , [e])
                                }(t, e)),
                                n
                            }(t, e);
                            return t.drag && !1 !== t.dragListener && (i.draggable = !1,
                            n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none",
                            n.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`),
                            void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (i.tabIndex = 0),
                            i.style = n,
                            i
                        }
                        )(i, r, s, e)
                          , a = function(t, e, i) {
                            let n = {};
                            for (let r in t)
                                ("values" !== r || "object" != typeof t.values) && (sn(r) || !0 === i && si(r) || !e && !si(r) || t.draggable && r.startsWith("onDrag")) && (n[r] = t[r]);
                            return n
                        }(i, "string" == typeof e, t)
                          , l = e !== nu.Fragment ? {
                            ...a,
                            ...o,
                            ref: n
                        } : {}
                          , {children: u} = i
                          , h = (0,
                        nu.useMemo)( () => tl(u) ? u.get() : u, [u]);
                        return (0,
                        nu.createElement)(e, {
                            ...l,
                            children: h
                        })
                    }
                }(e),
                createVisualElement: na,
                Component: t
            })
        }
        ))
    }
    ,
    5687: (t, e, i) => {
        i.d(e, {
            B: () => n
        });
        let n = "undefined" != typeof window
    }
    ,
    9234: (t, e, i) => {
        i.d(e, {
            M: () => r
        });
        var n = i(2115);
        function r(t) {
            let e = (0,
            n.useRef)(null);
            return null === e.current && (e.current = t()),
            e.current
        }
    }
    ,
    5403: (t, e, i) => {
        i.d(e, {
            E: () => r
        });
        var n = i(2115);
        let r = i(5687).B ? n.useLayoutEffect : n.useEffect
    }
}]);
