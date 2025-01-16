(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[974], {
    2300: (e, s, a) => {
        Promise.resolve().then(a.bind(a, 4996))
    }
    ,
    4996: (e, s, a) => {
        "use strict";
        a.r(s),
        a.d(s, {
            default: () => R
        });
        var t = a(5155)
          , i = a(2115)
          , r = a(5565)
          , l = a(9124)
          , n = a(7458)
          , o = a.n(n)
          , c = a(1589);
        function d() {
            return (0,
            t.jsx)("div", {
                className: "fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center",
                children: (0,
                t.jsxs)(l.P.div, {
                    className: "flex flex-col items-center gap-4",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    children: [(0,
                    t.jsx)(l.P.div, {
                        className: "w-16 h-16 border-4 border-black/10 border-t-black rounded-full",
                        animate: {
                            rotate: 360
                        },
                        transition: {
                            duration: 1,
                            repeat: 1 / 0,
                            ease: "linear"
                        }
                    }), (0,
                    t.jsx)(l.P.div, {
                        className: "text-black/80 font-mono text-sm",
                        animate: {
                            opacity: [.5, 1, .5]
                        },
                        transition: {
                            duration: 1.5,
                            repeat: 1 / 0,
                            ease: "easeInOut"
                        },
                        children: "Scanning..."
                    })]
                })
            })
        }
        a(8173);
        var x = a(9904)
          , m = a(8698);
        let h = (0,
        x.Wp)({
            apiKey: "AIzaSyB-xm6vR1lAW_afQip14wEpszXvHvNmshw",
            authDomain: "eccomerceapp-4c533.firebaseapp.com",
            databaseURL: "https://eccomerceapp-4c533-default-rtdb.firebaseio.com",
            projectId: "eccomerceapp-4c533",
            storageBucket: "eccomerceapp-4c533.appspot.com",
            messagingSenderId: "882407440548",
            appId: "1:882407440548:web:74b4ff94fb2e34d9356631",
            measurementId: "G-4JPVRY2C3F"
        })
          , g = (0,
        m.C3)(h);
        function p(e) {
            let {onLoadingComplete: s} = e
              , [a,n] = (0,
            i.useState)(0);
            return (0,
            i.useEffect)( () => {
                let e = 0
                  , a = setInterval( () => {
                    if (e >= 100) {
                        clearInterval(a),
                        setTimeout( () => {
                            s()
                        }
                        , 500);
                        return
                    }
                    n(e += 1)
                }
                , 30);
                return () => clearInterval(a)
            }
            , [s]),
            (0,
            t.jsx)(l.P.div, {
                className: "fixed inset-0 bg-white z-50 flex flex-col items-center justify-center",
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .5
                },
                children: (0,
                t.jsxs)("div", {
                    className: "w-full max-w-xs px-8 flex flex-col items-center",
                    children: [(0,
                    t.jsx)(l.P.div, {
                        initial: {
                            scale: .9,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 1,
                            y: [0, -10, 0]
                        },
                        transition: {
                            y: {
                                duration: 2,
                                repeat: 1 / 0,
                                ease: "easeInOut"
                            }
                        },
                        className: "mb-8 relative w-24 h-24",
                        children: (0,
                        t.jsx)(r.default, {
                            src: "/logo.png",
                            alt: "Stop Rug",
                            fill: !0,
                            className: "object-contain",
                            priority: !0
                        })
                    }), (0,
                    t.jsx)("div", {
                        className: "w-full max-w-[200px] h-[2px] bg-gray-100 relative overflow-hidden",
                        children: (0,
                        t.jsx)(l.P.div, {
                            className: "absolute inset-0 bg-pink-500",
                            initial: {
                                width: 0
                            },
                            animate: {
                                width: "".concat(a, "%")
                            },
                            transition: {
                                duration: .1
                            }
                        })
                    }), (0,
                    t.jsx)(l.P.div, {
                        className: "mt-8 text-pink-400 font-mono text-xs tracking-wider",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: .4
                        },
                        children: "STOP RUG"
                    })]
                })
            })
        }
        function u(e) {
            let {databaseId: s} = e;
            return (0,
            t.jsx)(l.P.footer, {
                className: "fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-100",
                initial: {
                    y: 100
                },
                animate: {
                    y: 0
                },
                transition: {
                    delay: .2
                },
                children: (0,
                t.jsx)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: (0,
                    t.jsxs)("div", {
                        className: "h-16 flex items-center justify-between",
                        children: [(0,
                        t.jsx)("div", {
                            className: "text-sm text-gray-500",
                            children: "\xa9 2025 Stop Rug. All rights reserved."
                        }), (0,
                        t.jsxs)("div", {
                            className: "flex items-center gap-2 text-sm text-gray-500",
                            children: [(0,
                            t.jsx)("span", {
                                children: "ca:"
                            }), (0,
                            t.jsx)("code", {
                                className: "font-mono bg-gray-50 px-3 py-1 rounded-lg",
                                children: "FAKE CA HERE"
                            })]
                        })]
                    })
                })
            })
        }
        var b = a(1536)
          , y = a(9967)
          , f = a(8422);
        let v = e => {
            let {label: s, disabled: a=!0} = e;
            return (0,
            t.jsxs)("button", {
                disabled: a,
                className: "px-2 sm:px-3 py-1.5 text-xs sm:text-sm rounded-lg transition-colors whitespace-nowrap\n      ".concat(a ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white text-gray-900 hover:bg-gray-50", "\n    "),
                children: [s, a && (0,
                t.jsx)("span", {
                    className: "ml-1 sm:ml-2 text-[10px] sm:text-xs",
                    children: "(Soon)"
                })]
            })
        }
          , j = e => {
            let {href: s, icon: a, label: i} = e;
            return s ? (0,
            t.jsx)(l.P.a, {
                href: s,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors",
                whileHover: {
                    scale: 1.05
                },
                whileTap: {
                    scale: .95
                },
                title: i,
                children: (0,
                t.jsx)(a, {
                    className: "w-4 h-4"
                })
            }) : null
        }
        ;
        function N(e) {
            let {onAnalyze: s} = e
              , [a,n] = (0,
            i.useState)([])
              , [o,c] = (0,
            i.useState)(!0)
              , [d,x] = (0,
            i.useState)(null);
            return ((0,
            i.useEffect)( () => {
                let e = async () => {
                    try {
                        let e = await fetch("https://www.stoprug.fun/api/coins");
                        if (!e.ok)
                            throw Error("Failed to fetch coins");
                        let s = (await e.json()).filter(e => e.usd_market_cap > 2e4);
                        n(s.slice(0, 50))
                    } catch (e) {
                        x(e.message)
                    } finally {
                        c(!1)
                    }
                }
                ;
                e();
                let s = setInterval(e, 3e4);
                return () => clearInterval(s)
            }
            , []),
            console.log(a),
            o) ? (0,
            t.jsx)("div", {
                className: "w-full bg-white",
                children: (0,
                t.jsxs)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
                    children: [(0,
                    t.jsx)("div", {
                        className: "h-8 w-48 bg-gray-100 rounded-lg mb-8 animate-pulse"
                    }), (0,
                    t.jsx)("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: [...Array(50)].map( (e, s) => (0,
                        t.jsx)("div", {
                            className: "h-48 bg-gray-100 rounded-xl animate-pulse"
                        }, s))
                    })]
                })
            }) : d ? (0,
            t.jsxs)("div", {
                className: "text-red-500 text-sm",
                children: ["Error loading coins: ", d]
            }) : (0,
            t.jsx)(l.P.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                className: "w-full bg-white",
                children: (0,
                t.jsxs)("div", {
                    className: "max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-2 py-12",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-8",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "text-xl font-bold text-gray-900 flex items-center gap-2",
                            children: [(0,
                            t.jsx)("span", {
                                className: "text-2xl",
                                children: "◆"
                            }), "Latest Trades"]
                        }), (0,
                        t.jsxs)("div", {
                            className: "flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0",
                            children: [(0,
                            t.jsx)(v, {
                                label: "About to Migrate"
                            }), (0,
                            t.jsx)(v, {
                                label: "Early Gems"
                            }), (0,
                            t.jsx)(v, {
                                label: "Graduated"
                            })]
                        })]
                    }), (0,
                    t.jsx)("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
                        children: null == a ? void 0 : a.map( (e, a) => (0,
                        t.jsxs)(l.P.div, {
                            className: "flex flex-col p-4 rounded-xl bg-white border border-gray-100 hover:border-black/20 transition-all shadow-sm hover:shadow-md",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: .1 * a
                            },
                            children: [(0,
                            t.jsxs)("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [(0,
                                t.jsx)("div", {
                                    className: "w-10 h-10 relative rounded-xl overflow-hidden bg-gray-50",
                                    children: (0,
                                    t.jsx)(r.default, {
                                        src: e.image_uri || "/fallback-token.png",
                                        alt: e.name || e.symbol,
                                        fill: !0,
                                        className: "object-cover",
                                        unoptimized: !0,
                                        onError: e => {
                                            e.currentTarget.src = "/fallback-token.png"
                                        }
                                    })
                                }), (0,
                                t.jsxs)("div", {
                                    children: [(0,
                                    t.jsxs)("div", {
                                        className: "font-bold text-gray-900 text-base",
                                        children: ["$", e.symbol]
                                    }), (0,
                                    t.jsx)("div", {
                                        className: "text-xs text-gray-500 truncate max-w-[120px]",
                                        children: e.name
                                    })]
                                })]
                            }), (0,
                            t.jsxs)("div", {
                                className: "space-y-2 mb-4",
                                children: [(0,
                                t.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0,
                                    t.jsx)("span", {
                                        className: "text-gray-500 text-xs",
                                        children: "Market Cap"
                                    }), (0,
                                    t.jsxs)("span", {
                                        className: "text-gray-900 font-mono text-sm",
                                        children: ["$", e.usd_market_cap.toLocaleString(void 0, {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        })]
                                    })]
                                }), (0,
                                t.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0,
                                    t.jsx)("span", {
                                        className: "text-gray-500 text-xs",
                                        children: "Created"
                                    }), (0,
                                    t.jsx)("span", {
                                        className: "text-gray-600 text-xs",
                                        children: function(e) {
                                            let s = Math.floor((new Date - new Date(e)) / 1e3)
                                              , a = s / 31536e3;
                                            return a > 1 ? Math.floor(a) + " years ago" : (a = s / 2592e3) > 1 ? Math.floor(a) + " months ago" : (a = s / 86400) > 1 ? Math.floor(a) + " days ago" : (a = s / 3600) > 1 ? Math.floor(a) + " hours ago" : (a = s / 60) > 1 ? Math.floor(a) + " minutes ago" : s < 10 ? "just now" : Math.floor(s) + " seconds ago"
                                        }(e.created_timestamp)
                                    })]
                                })]
                            }), (0,
                            t.jsxs)("div", {
                                className: "flex gap-2 mt-auto pt-4 border-t border-gray-100",
                                children: [(0,
                                t.jsx)(l.P.a, {
                                    href: "https://pump.fun/coin/".concat(e.mint),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex-1 text-center py-2 px-3 rounded-lg bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors text-xs",
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    whileTap: {
                                        scale: .98
                                    },
                                    children: "View"
                                }), (0,
                                t.jsx)(l.P.button, {
                                    onClick: () => s(e.mint),
                                    className: "flex-1 py-2 px-3 rounded-lg bg-black text-white hover:bg-gray-900 transition-colors text-xs font-medium",
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    whileTap: {
                                        scale: .98
                                    },
                                    children: "Analyze"
                                })]
                            }), (0,
                            t.jsxs)("div", {
                                className: "flex items-center justify-center gap-1 mt-4 pt-4 border-t border-gray-100",
                                children: [(0,
                                t.jsx)(j, {
                                    href: e.telegram,
                                    icon: b.zyo,
                                    label: "Telegram"
                                }), (0,
                                t.jsx)(j, {
                                    href: e.twitter,
                                    icon: b.feZ,
                                    label: "Twitter"
                                }), (0,
                                t.jsx)(j, {
                                    href: e.website,
                                    icon: b.f35,
                                    label: "Website"
                                }), e.whitepaper && (0,
                                t.jsx)(j, {
                                    href: e.whitepaper,
                                    icon: y.YcT,
                                    label: "Whitepaper"
                                }), (0,
                                t.jsx)(j, {
                                    href: "https://pump.fun/coin/".concat(e.mint),
                                    icon: f.$xg,
                                    label: "View on Pump.fun"
                                })]
                            })]
                        }, e.mint))
                    })]
                })
            })
        }
        var w = a(5683)
          , k = a(6280);
        function C() {
            let[e,s] = (0,
            i.useState)(!1);
            (0,
            i.useEffect)( () => {
                if (!localStorage.getItem("hasSeenIntro")) {
                    let e = setTimeout( () => s(!0), 2e3);
                    return localStorage.setItem("hasSeenIntro", "true"),
                    () => clearTimeout(e)
                }
            }
            , []);
            let a = [{
                icon: (0,
                t.jsx)(b.YYR, {
                    className: "w-6 h-6 text-pink-500"
                }),
                title: "Real-time Token Tracking",
                description: "Monitor the latest trending tokens on Pump.fun before they migrate to Raydium. Stay ahead of the market with instant updates on new opportunities."
            }, {
                icon: (0,
                t.jsx)(b.y8Q, {
                    className: "w-6 h-6 text-pink-500"
                }),
                title: "AI-Powered Analysis",
                description: "Our advanced AI agent provides comprehensive risk assessments, analyzing patterns, holder distributions, and market metrics to help you make informed decisions."
            }, {
                icon: (0,
                t.jsx)(b.SMR, {
                    className: "w-6 h-6 text-pink-500"
                }),
                title: "Risk Protection",
                description: "Make safer trading decisions with our detailed security checks and creator analysis. Identify potential risks before they affect your investments."
            }];
            return (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)(l.P.button, {
                    onClick: () => s(!0),
                    className: "fixed bottom-20 right-4 z-40 bg-black text-white rounded-full p-4 shadow-lg",
                    whileHover: {
                        scale: 1.05
                    },
                    whileTap: {
                        scale: .95
                    },
                    children: (0,
                    t.jsx)("span", {
                        className: "text-lg",
                        children: "❔"
                    })
                }), (0,
                t.jsx)(w.N, {
                    children: e && (0,
                    t.jsx)(l.P.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",
                        onClick: e => e.target === e.currentTarget && s(!1),
                        children: (0,
                        t.jsxs)(l.P.div, {
                            initial: {
                                scale: .9,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            exit: {
                                scale: .9,
                                opacity: 0
                            },
                            className: "bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
                            children: [(0,
                            t.jsxs)("div", {
                                className: "p-6 border-b border-gray-100",
                                children: [(0,
                                t.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [(0,
                                    t.jsx)("h2", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: "Welcome to Stop Rug! \uD83D\uDE80"
                                    }), (0,
                                    t.jsx)("button", {
                                        onClick: () => s(!1),
                                        className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                                        children: (0,
                                        t.jsx)(k.$8F, {
                                            className: "w-5 h-5"
                                        })
                                    })]
                                }), (0,
                                t.jsx)("p", {
                                    className: "mt-2 text-gray-600",
                                    children: "The first platform to analyze trending tokens before they migrate to Raydium."
                                })]
                            }), (0,
                            t.jsxs)("div", {
                                className: "p-6 space-y-6",
                                children: [(0,
                                t.jsx)("div", {
                                    className: "space-y-6",
                                    children: a.map( (e, s) => (0,
                                    t.jsxs)("div", {
                                        className: "flex gap-4",
                                        children: [(0,
                                        t.jsx)("div", {
                                            className: "flex-shrink-0 p-3 bg-pink-50 rounded-xl",
                                            children: e.icon
                                        }), (0,
                                        t.jsxs)("div", {
                                            children: [(0,
                                            t.jsx)("h3", {
                                                className: "font-semibold text-gray-900 mb-1",
                                                children: e.title
                                            }), (0,
                                            t.jsx)("p", {
                                                className: "text-gray-600 text-sm leading-relaxed",
                                                children: e.description
                                            })]
                                        })]
                                    }, s))
                                }), (0,
                                t.jsxs)("div", {
                                    className: "bg-gray-50 rounded-xl p-4 border border-gray-100",
                                    children: [(0,
                                    t.jsx)("h3", {
                                        className: "font-semibold text-gray-900 mb-2",
                                        children: "Beta Phase Features:"
                                    }), (0,
                                    t.jsxs)("ul", {
                                        className: "space-y-2 text-sm text-gray-600",
                                        children: [(0,
                                        t.jsx)("li", {
                                            children: "• Track latest trending tokens from Pump.fun"
                                        }), (0,
                                        t.jsx)("li", {
                                            children: "• AI-powered risk assessment and analysis"
                                        }), (0,
                                        t.jsx)("li", {
                                            children: "• Creator wallet analysis and history"
                                        }), (0,
                                        t.jsx)("li", {
                                            children: "• Direct integration with trading platforms"
                                        }), (0,
                                        t.jsx)("li", {
                                            children: "• Real-time market cap and creation monitoring"
                                        })]
                                    })]
                                })]
                            }), (0,
                            t.jsx)("div", {
                                className: "p-6 bg-gray-50 rounded-b-2xl",
                                children: (0,
                                t.jsx)("p", {
                                    className: "text-sm text-gray-600 text-center",
                                    children: "Power your trading decisions with Stop Rug's advanced analytics and make more profitable trades! \uD83D\uDCC8"
                                })
                            })]
                        })
                    })
                })]
            })
        }
        let S = {
            hidden: {
                opacity: 0,
                y: 20
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: .5
                }
            }
        }
          , _ = {
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: .1
                }
            }
        }
          , P = e => {
            let {href: s, icon: a, label: i, color: n="sky", isImage: o=!1, customBg: c=""} = e;
            return (0,
            t.jsxs)(l.P.a, {
                href: s,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-3 px-6 py-3 rounded-lg \n      ".concat(c || "bg-".concat(n, "-50 border border-").concat(n, "-100"), "\n      text-gray-500 hover:opacity-90 transition-all duration-200"),
                whileHover: {
                    scale: 1.02
                },
                whileTap: {
                    scale: .98
                },
                children: [o ? (0,
                t.jsx)(r.default, {
                    src: a,
                    alt: i,
                    width: 24,
                    height: 24,
                    className: "w-6 h-6"
                }) : (0,
                t.jsx)("span", {
                    children: a
                }), (0,
                t.jsx)("span", {
                    className: "font-medium",
                    children: i
                })]
            })
        }
          , I = () => (0,
        t.jsxs)(l.P.div, {
            initial: "hidden",
            animate: "visible",
            variants: {
                visible: {
                    transition: {
                        staggerChildren: .1
                    }
                }
            },
            className: "max-w-4xl mx-auto px-8 py-12",
            children: [(0,
            t.jsxs)(l.P.div, {
                variants: S,
                className: "mb-12",
                children: [(0,
                t.jsx)("h1", {
                    className: "text-3xl font-bold text-gray-900 mb-4",
                    children: "What's Stop Rug?"
                }), (0,
                t.jsx)("p", {
                    className: "text-lg text-gray-600 leading-relaxed",
                    children: "Stop Rug is an AI-powered analytics platform designed to provide real-time security assessment and risk analysis for Solana tokens. Our automated system leverages artificial intelligence to evaluate multiple parameters including bundle metrics, transaction patterns, and holder distributions to deliver comprehensive investment insights."
                })]
            }), (0,
            t.jsxs)(l.P.div, {
                variants: S,
                className: "mb-12",
                children: [(0,
                t.jsx)("h2", {
                    className: "text-2xl font-bold text-gray-900 mb-4",
                    children: "Development Roadmap"
                }), (0,
                t.jsxs)("div", {
                    className: "space-y-8",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "border border-gray-200 rounded-xl p-6 bg-white/80 backdrop-blur-sm",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "flex items-center gap-3 mb-3",
                            children: [(0,
                            t.jsx)("span", {
                                className: "text-sky-500 text-xl",
                                children: "◇"
                            }), (0,
                            t.jsx)("h3", {
                                className: "text-xl font-semibold text-gray-900",
                                children: "Version 1.0.2 - Real-time Integration"
                            })]
                        }), (0,
                        t.jsx)("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: "Our next major update will introduce automated real-time analysis for all migrated tokens. This enhancement will enable instant risk assessment and market opportunity identification, providing $RADAR holders with a significant advantage in decision-making speed and accuracy."
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "border border-gray-200 rounded-xl p-6 bg-white/80 backdrop-blur-sm",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "flex items-center gap-3 mb-3",
                            children: [(0,
                            t.jsx)("span", {
                                className: "text-sky-500 text-xl",
                                children: "◇"
                            }), (0,
                            t.jsx)("h3", {
                                className: "text-xl font-semibold text-gray-900",
                                children: "Version 1.0.3 - Social Sentiment Analysis"
                            })]
                        }), (0,
                        t.jsx)("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: "Expanding our analytical capabilities, we're introducing advanced social sentiment tracking. This feature will analyze Twitter trends and social metrics to provide a comprehensive market sentiment indicator, helping users identify emerging opportunities before they gain mainstream attention."
                        })]
                    })]
                })]
            }), (0,
            t.jsxs)(l.P.div, {
                variants: S,
                className: "bg-gray-50 rounded-xl p-6 border border-gray-200",
                children: [(0,
                t.jsxs)("div", {
                    className: "flex items-center gap-3 mb-3",
                    children: [(0,
                    t.jsx)("span", {
                        className: "text-sky-500 text-2xl",
                        children: "ℹ️"
                    }), (0,
                    t.jsx)("h3", {
                        className: "text-xl font-semibold text-gray-900",
                        children: "Technical Specifications"
                    })]
                }), (0,
                t.jsx)("p", {
                    className: "text-gray-600 leading-relaxed",
                    children: "Our high-performance infrastructure processes up to 50 requests per second, ensuring rapid analysis and response times. While we optimize for speed, we appreciate your patience during peak usage periods. We're continuously working to enhance our system's capabilities to provide you with the most reliable and efficient service possible."
                })]
            }), (0,
            t.jsx)(l.P.div, {
                variants: S,
                className: "mt-8 text-center text-gray-500",
                children: (0,
                t.jsx)("p", {
                    className: "text-sm",
                    children: "Thank you for being part of the Stop Rug ecosystem. Together, we're building the future of AI-driven secure trading."
                })
            })]
        })
          , T = e => {
            let {currentView: s, setCurrentView: a, databaseId: n, contractAddress: o, setContractAddress: d, onAnalyze: x, loading: m} = e
              , [h,g] = (0,
            i.useState)(!1);
            return (0,
            t.jsx)(l.P.nav, {
                initial: {
                    y: -100
                },
                animate: {
                    y: 0
                },
                className: "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100",
                children: (0,
                t.jsx)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: (0,
                    t.jsxs)("div", {
                        className: "flex items-center justify-between h-20",
                        children: [(0,
                        t.jsx)("div", {
                            className: "flex items-center gap-3",
                            children: (0,
                            t.jsx)(r.default, {
                                src: "/logo.png",
                                alt: "Stop Rug Logo",
                                width: 40,
                                height: 40,
                                className: "w-10 h-10"
                            })
                        }), (0,
                        t.jsx)("div", {
                            className: "flex-1 max-w-2xl mx-8",
                            children: (0,
                            t.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0,
                                t.jsx)("div", {
                                    className: "relative flex-1",
                                    children: (0,
                                    t.jsx)("input", {
                                        type: "text",
                                        value: o,
                                        onChange: e => d(e.target.value),
                                        placeholder: "Enter contract address",
                                        className: "w-full pl-4 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-900 font-mono text-sm focus:ring-2 focus:ring-black/10 focus:border-black transition-all duration-200 placeholder:text-gray-400"
                                    })
                                }), (0,
                                t.jsx)(l.P.button, {
                                    onClick: x,
                                    disabled: m,
                                    className: "px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors disabled:opacity-50",
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    whileTap: {
                                        scale: .98
                                    },
                                    children: m ? (0,
                                    t.jsx)("span", {
                                        className: "inline-block animate-spin",
                                        children: "◈"
                                    }) : "Analyze"
                                })]
                            })
                        }), (0,
                        t.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [(0,
                            t.jsx)(l.P.a, {
                                href: "https://x.com/stoprugfun",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "p-2 rounded-lg hover:bg-gray-50 text-gray-600",
                                whileHover: {
                                    scale: 1.05
                                },
                                whileTap: {
                                    scale: .95
                                },
                                children: (0,
                                t.jsx)(c.TCj, {
                                    className: "w-5 h-5"
                                })
                            }), (0,
                            t.jsx)("div", {
                                className: "h-4 w-px bg-gray-200"
                            }), (0,
                            t.jsx)("span", {
                                className: "text-xs text-gray-400",
                                children: "v1.0.1"
                            })]
                        })]
                    })
                })
            })
        }
        ;
        function R() {
            var e, s, a, n, x, h, b;
            let[y,f] = (0,
            i.useState)("loading...")
              , [v,j] = (0,
            i.useState)(!0);
            (0,
            i.useEffect)( () => {
                let e = (0,
                m.KR)(g, "id")
                  , s = (0,
                m.Zy)(e, e => {
                    e.exists() ? f(e.val()) : f("No ID found")
                }
                , e => {
                    console.error("Error fetching ID:", e),
                    f("Error loading ID")
                }
                );
                return () => s()
            }
            , []);
            let[w,k] = (0,
            i.useState)("")
              , [R,A] = (0,
            i.useState)(null)
              , [D,E] = (0,
            i.useState)(!1)
              , [O,H] = (0,
            i.useState)(null)
              , [z,F] = (0,
            i.useState)(!1)
              , M = async () => {
                if (w) {
                    E(!0),
                    H(null);
                    try {
                        let e = await fetch("https://www.stoprug.fun/api/token?ca=".concat(w));
                        if (!e.ok)
                            throw Error("Failed to fetch data");
                        let s = await e.json()
                          , a = Object.values(s.bundles || {}).filter(e => e.holding_amount > 0).length
                          , t = Object.keys(s.bundles || {}).length;
                        A({
                            ...s,
                            activeBundles: a,
                            totalBundles: t
                        }),
                        console.log("API Response:", s)
                    } catch (e) {
                        H(e.message),
                        console.error("Error:", e)
                    } finally {
                        E(!1)
                    }
                }
            }
              , [B,L] = (0,
            i.useState)("scanner")
              , W = e => {
                var s, a;
                if (!(null == e ? void 0 : e.total_holding_percentage))
                    return {
                        status: "unknown",
                        message: "No data available",
                        color: "text-gray-500",
                        bgColor: "bg-gray-50",
                        borderColor: "border-gray-200",
                        analysis: "Unable to perform analysis due to insufficient data."
                    };
                let t = parseFloat(e.total_holding_percentage)
                  , i = null === (s = e.creator_analysis) || void 0 === s ? void 0 : s.history;
                null === (a = e.creator_analysis) || void 0 === a || a.current_holdings;
                let r = e.bonded
                  , l = (null == i ? void 0 : i.total_coins_created) || 0
                  , n = (null == i ? void 0 : i.previous_coins) || [];
                return t < 6 ? {
                    status: "SAFE",
                    message: "Low risk - Snipers holding below 6%",
                    color: "text-emerald-600",
                    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
                    borderColor: "border-emerald-200",
                    glowColor: "shadow-emerald-200/50",
                    icon: "◆",
                    analysis: "\n          Analysis indicates LOW RISK based on multiple factors:\n          • Snipers currently hold only ".concat(t.toFixed(2), "% of tokens\n          ").concat(r ? "• Token is bonded, adding additional security layer" : "", "\n          • Creator has launched ").concat(l, " previous tokens\n          ").concat(0 === n.length ? "• No history of suspicious token activity" : "", "\n          • Current holding patterns suggest normal distribution\n          \n          Recommendation: While no investment is without risk, current metrics suggest standard trading safety.\n        ")
                } : t <= 15 ? {
                    status: "CAUTION",
                    message: "Medium risk - Exercise caution",
                    color: "text-amber-600",
                    bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
                    borderColor: "border-amber-200",
                    glowColor: "shadow-amber-200/50",
                    icon: "⚠️",
                    analysis: "\n          Analysis indicates MODERATE RISK based on several factors:\n          • Snipers hold ".concat(t.toFixed(2), "% of tokens - Higher than recommended\n          ").concat(r ? "" : "• Token is not bonded, reducing security guarantees", "\n          • Creator history shows ").concat(l, " previous launches\n          ").concat(n.length > 0 ? "• Previous tokens launched: ".concat(n.map(e => e.symbol).join(", ")) : "", "\n          \n          Recommendation: Trade with caution. Consider smaller position sizes and set strict stop losses.\n        ")
                } : {
                    status: "HIGH RISK",
                    message: "High risk of rug - Large sniper holdings",
                    color: "text-rose-600",
                    bgColor: "bg-gradient-to-br from-rose-50 to-red-50",
                    borderColor: "border-rose-200",
                    glowColor: "shadow-rose-200/50",
                    icon: "\uD83D\uDEA8",
                    analysis: "\n          Analysis indicates HIGH RISK based on critical factors:\n          • Snipers hold ".concat(t.toFixed(2), "% - Dangerously high concentration\n          ").concat(r ? "" : "• Token is not bonded - No security guarantees", "\n          • Creator wallet analysis shows concerning patterns\n          ").concat((null == i ? void 0 : i.high_risk) ? "• Multiple high-risk indicators detected in creator history" : "", "\n          ").concat(n.length > 0 ? "• Previous tokens show suspicious patterns" : "", "\n          \n          Recommendation: EXTREME CAUTION. High risk of potential rug pull. Not recommended for investment.\n        ")
                }
            }
            ;
            c.TCj,
            r.default,
            r.default;
            let V = () => {
                let e = document.getElementById("ai-analysis");
                e && e.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                })
            }
            ;
            return v ? (0,
            t.jsx)(p, {
                onLoadingComplete: () => j(!1)
            }) : (0,
            t.jsxs)("main", {
                className: "min-h-screen bg-white ".concat(o().className),
                children: [D && (0,
                t.jsx)(d, {}), (0,
                t.jsx)(T, {
                    currentView: B,
                    setCurrentView: L,
                    databaseId: y,
                    contractAddress: w,
                    setContractAddress: k,
                    onAnalyze: M,
                    loading: D
                }), (0,
                t.jsx)(C, {}), (0,
                t.jsx)("div", {
                    className: "pt-24 pb-20",
                    children: "scanner" === B ? (0,
                    t.jsx)(t.Fragment, {
                        children: (0,
                        t.jsxs)("div", {
                            className: "max-w-6xl mx-auto px-8 pb-12",
                            children: [(0,
                            t.jsx)("div", {
                                className: "mb-8",
                                children: (0,
                                t.jsx)(N, {
                                    onAnalyze: async e => {
                                        k(e),
                                        E(!0),
                                        H(null);
                                        try {
                                            let s = await fetch("https://www.stoprug.fun/api/token?ca=".concat(e));
                                            if (!s.ok)
                                                throw Error("Failed to fetch data");
                                            let a = await s.json()
                                              , t = Object.values(a.bundles || {}).filter(e => e.holding_amount > 0).length
                                              , i = Object.keys(a.bundles || {}).length;
                                            A({
                                                ...a,
                                                activeBundles: t,
                                                totalBundles: i
                                            }),
                                            setTimeout(V, 1e3)
                                        } catch (e) {
                                            H(e.message),
                                            console.error("Error:", e)
                                        } finally {
                                            E(!1)
                                        }
                                    }
                                })
                            }), O && (0,
                            t.jsxs)(l.P.div, {
                                className: "text-red-500 p-4 bg-red-50 rounded-lg mb-6 font-mono",
                                variants: S,
                                initial: "hidden",
                                animate: "visible",
                                children: [(0,
                                t.jsx)("span", {
                                    className: "text-red-500",
                                    children: "> Error:"
                                }), " ", O]
                            }), R && (0,
                            t.jsxs)(l.P.div, {
                                className: "space-y-4 sm:space-y-6 pb-8",
                                variants: _,
                                initial: "hidden",
                                animate: "visible",
                                children: [(0,
                                t.jsxs)(l.P.section, {
                                    id: "ai-analysis",
                                    className: "border border-gray-200 rounded-2xl p-6 sm:p-8  shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]  bg-white backdrop-blur-sm hover:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.15)] transition-shadow duration-300",
                                    variants: S,
                                    children: [(0,
                                    t.jsxs)("h2", {
                                        className: "text-xl font-bold mb-4 text-gray-900 flex items-center gap-2",
                                        children: [(0,
                                        t.jsx)("span", {
                                            className: "text-black",
                                            children: "◆"
                                        }), "AI Analysis"]
                                    }), (0,
                                    t.jsxs)("div", {
                                        className: "space-y-4",
                                        children: [(0,
                                        t.jsxs)("div", {
                                            className: "flex flex-col gap-4 mb-6",
                                            children: [(0,
                                            t.jsxs)("div", {
                                                className: "flex-1",
                                                children: [(0,
                                                t.jsx)("div", {
                                                    className: "text-sm text-gray-500 mb-1",
                                                    children: "Token Name"
                                                }), (0,
                                                t.jsxs)("div", {
                                                    className: "text-xl font-bold text-gray-900",
                                                    children: ["$", (null == R ? void 0 : R.ticker) || "Unknown"]
                                                })]
                                            }), (0,
                                            t.jsxs)("div", {
                                                className: "flex-1",
                                                children: [(0,
                                                t.jsx)("div", {
                                                    className: "text-sm text-gray-500 mb-1",
                                                    children: "Contract Address"
                                                }), (0,
                                                t.jsxs)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [(0,
                                                    t.jsx)("code", {
                                                        className: "text-base bg-gray-50 p-3 rounded-lg break-all font-mono text-gray-900 border border-gray-200",
                                                        children: w
                                                    }), (0,
                                                    t.jsx)(l.P.button, {
                                                        onClick: () => navigator.clipboard.writeText(w),
                                                        className: "p-2 text-gray-500 hover:text-sky-500 rounded-lg hover:bg-gray-50",
                                                        whileHover: {
                                                            scale: 1.1
                                                        },
                                                        whileTap: {
                                                            scale: .95
                                                        },
                                                        title: "Copy to clipboard",
                                                        children: "\uD83D\uDCCB"
                                                    })]
                                                })]
                                            })]
                                        }), (null == R ? void 0 : R.total_holding_percentage) && (0,
                                        t.jsx)(l.P.div, {
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            className: "border-t border-gray-100 pt-4",
                                            children: ( () => {
                                                let e = W(R);
                                                return (0,
                                                t.jsxs)("div", {
                                                    className: "\n                                flex flex-col gap-4 p-6 rounded-lg \n                                ".concat(e.bgColor, " \n                                border border-").concat(e.borderColor, "\n                                shadow-lg ").concat(e.glowColor, "\n                                transition-all duration-300\n                              "),
                                                    children: [(0,
                                                    t.jsxs)("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [(0,
                                                        t.jsx)("span", {
                                                            className: "text-3xl",
                                                            children: e.icon
                                                        }), (0,
                                                        t.jsxs)("div", {
                                                            className: "flex-1",
                                                            children: [(0,
                                                            t.jsxs)("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [(0,
                                                                t.jsx)("div", {
                                                                    className: "text-lg font-bold ".concat(e.color),
                                                                    children: e.status
                                                                }), (0,
                                                                t.jsxs)("div", {
                                                                    className: "text-lg font-mono ".concat(e.color),
                                                                    children: [R.total_holding_percentage.toFixed(2), "%"]
                                                                })]
                                                            }), (0,
                                                            t.jsx)("div", {
                                                                className: "text-sm text-gray-600",
                                                                children: e.message
                                                            })]
                                                        })]
                                                    }), (0,
                                                    t.jsxs)("div", {
                                                        className: "mt-4 pt-4 border-t border-gray-200/50",
                                                        children: [(0,
                                                        t.jsx)("div", {
                                                            className: "text-sm font-medium text-gray-900 mb-2",
                                                            children: "AI Analysis:"
                                                        }), (0,
                                                        t.jsx)("div", {
                                                            className: "text-sm text-gray-600 whitespace-pre-line font-mono",
                                                            children: e.analysis
                                                        }), (0,
                                                        t.jsxs)("div", {
                                                            className: "mt-4 pt-4 border-t border-gray-200/50",
                                                            children: [(0,
                                                            t.jsx)("div", {
                                                                className: "text-sm font-medium text-gray-900 mb-4",
                                                                children: "Quick Actions:"
                                                            }), (0,
                                                            t.jsxs)("div", {
                                                                className: "flex flex-wrap gap-3",
                                                                children: [(0,
                                                                t.jsx)(P, {
                                                                    href: "https://backup2.bullx.io/terminal?chainId=1399811149&address=".concat(w),
                                                                    icon: "/bull.webp",
                                                                    label: "Snipe with BullX",
                                                                    customBg: "bg-black text-white",
                                                                    isImage: !0
                                                                }), (0,
                                                                t.jsx)(P, {
                                                                    href: "https://photon-sol.tinyastro.io/en/lp/".concat(w),
                                                                    icon: "/pho.png",
                                                                    label: "Snipe with Photon",
                                                                    color: "black",
                                                                    isImage: !0
                                                                })]
                                                            })]
                                                        })]
                                                    })]
                                                })
                                            }
                                            )()
                                        })]
                                    })]
                                }), (0,
                                t.jsxs)(l.P.section, {
                                    className: "border-2 border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm bg-white",
                                    variants: S,
                                    children: [(0,
                                    t.jsxs)("h2", {
                                        className: "text-xl font-bold mb-4 text-gray-900 flex items-center gap-2",
                                        children: [(0,
                                        t.jsx)("span", {
                                            className: "text-sky-500",
                                            children: ">"
                                        }), "Overall Statistics"]
                                    }), (0,
                                    t.jsxs)("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                        children: [(0,
                                        t.jsxs)("div", {
                                            className: "flex items-center gap-3",
                                            children: [(0,
                                            t.jsx)("div", {
                                                className: "p-2 bg-gray-50 rounded-lg",
                                                children: (0,
                                                t.jsx)("span", {
                                                    className: "text-sky-500",
                                                    children: "\uD83D\uDCCA"
                                                })
                                            }), (0,
                                            t.jsxs)("div", {
                                                children: [(0,
                                                t.jsx)("div", {
                                                    className: "text-sm text-gray-500",
                                                    children: "Total Bundles"
                                                }), (0,
                                                t.jsxs)("div", {
                                                    className: "text-gray-900",
                                                    children: [(null == R ? void 0 : R.activeBundles) || "0", " (Holding) / ", (null == R ? void 0 : R.totalBundles) || "0", " (Total)"]
                                                })]
                                            })]
                                        }), (0,
                                        t.jsxs)("div", {
                                            className: "flex items-center gap-3",
                                            children: [(0,
                                            t.jsx)("div", {
                                                className: "p-2 bg-gray-50 rounded-lg",
                                                children: (0,
                                                t.jsx)("span", {
                                                    className: "text-sky-500",
                                                    children: "\uD83D\uDC8E"
                                                })
                                            }), (0,
                                            t.jsxs)("div", {
                                                children: [(0,
                                                t.jsx)("div", {
                                                    className: "text-sm text-gray-500",
                                                    children: "Total SOL Spent"
                                                }), (0,
                                                t.jsxs)("div", {
                                                    className: "text-gray-900",
                                                    children: [R.total_sol_spent.toFixed(2) || "0", " SOL"]
                                                })]
                                            })]
                                        }), (0,
                                        t.jsxs)("div", {
                                            className: "flex items-center gap-3",
                                            children: [(0,
                                            t.jsx)("div", {
                                                className: "p-2 bg-gray-50 rounded-lg",
                                                children: (0,
                                                t.jsx)("span", {
                                                    className: "text-sky-500",
                                                    children: "\uD83D\uDCC8"
                                                })
                                            }), (0,
                                            t.jsxs)("div", {
                                                children: [(0,
                                                t.jsx)("div", {
                                                    className: "text-sm text-gray-500",
                                                    children: "Current Held Percentage"
                                                }), (0,
                                                t.jsxs)("div", {
                                                    className: "text-gray-900",
                                                    children: [R.total_holding_percentage.toFixed(2) || "0", "%"]
                                                })]
                                            })]
                                        }), (0,
                                        t.jsxs)("div", {
                                            className: "flex items-center gap-3",
                                            children: [(0,
                                            t.jsx)("div", {
                                                className: "p-2 bg-gray-50 rounded-lg",
                                                children: (0,
                                                t.jsx)("span", {
                                                    className: "text-sky-500",
                                                    children: "\uD83D\uDD17"
                                                })
                                            }), (0,
                                            t.jsxs)("div", {
                                                children: [(0,
                                                t.jsx)("div", {
                                                    className: "text-sm text-gray-500",
                                                    children: "Bonded"
                                                }), (0,
                                                t.jsx)("div", {
                                                    className: "text-gray-900",
                                                    children: R.bonded ? "Yes" : "No"
                                                })]
                                            })]
                                        })]
                                    })]
                                }), (0,
                                t.jsxs)(l.P.section, {
                                    className: "border-2 border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm bg-white",
                                    variants: S,
                                    children: [(0,
                                    t.jsxs)("h2", {
                                        className: "text-xl font-bold mb-4 text-gray-900 flex items-center gap-2",
                                        children: [(0,
                                        t.jsx)("span", {
                                            className: "text-sky-500",
                                            children: ">"
                                        }), "Creator Risk Profile"]
                                    }), (0,
                                    t.jsxs)("div", {
                                        className: "space-y-3 text-gray-900",
                                        children: [(0,
                                        t.jsx)("div", {
                                            children: (0,
                                            t.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [(0,
                                                t.jsx)("span", {
                                                    className: "text-sky-500",
                                                    children: "•"
                                                }), "Total Created: ", (null == R ? void 0 : null === (e = R.creator_analysis) || void 0 === e ? void 0 : e.history.total_coins_created) || "0"]
                                            })
                                        }), (0,
                                        t.jsx)("div", {
                                            children: (0,
                                            t.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [(0,
                                                t.jsx)("span", {
                                                    className: "text-sky-500",
                                                    children: "•"
                                                }), "Current Token Held: ", (null == R ? void 0 : null === (s = R.creator_analysis) || void 0 === s ? void 0 : s.current_holdings) || "0", "%"]
                                            })
                                        }), (0,
                                        t.jsx)("div", {
                                            children: (0,
                                            t.jsxs)("div", {
                                                className: "flex items-center gap-2 flex-wrap",
                                                children: [(0,
                                                t.jsx)("span", {
                                                    className: "text-sky-500",
                                                    children: "•"
                                                }), (0,
                                                t.jsx)("span", {
                                                    className: "text-gray-900",
                                                    children: "RUG HISTORY:"
                                                }), null == R ? void 0 : null === (x = R.creator_analysis) || void 0 === x ? void 0 : null === (n = x.history) || void 0 === n ? void 0 : null === (a = n.previous_coins) || void 0 === a ? void 0 : a.map( (e, s) => (0,
                                                t.jsxs)("a", {
                                                    href: "https://pump.fun/coin/".concat(e.mint),
                                                    className: "text-sky-500 hover:text-sky-600",
                                                    children: [e.symbol || "", s < R.creator_analysis.history.previous_coins.length - 1 ? " | " : ""]
                                                }, s))]
                                            })
                                        }), (null == R ? void 0 : null === (b = R.creator_analysis) || void 0 === b ? void 0 : null === (h = b.history) || void 0 === h ? void 0 : h.high_risk) ? (0,
                                        t.jsxs)("div", {
                                            className: "flex items-center gap-2 text-red-500",
                                            children: [(0,
                                            t.jsx)("span", {
                                                children: "⚠️"
                                            }), "Dev Warnings: Suspicious token spam"]
                                        }) : (0,
                                        t.jsxs)("div", {
                                            className: "flex items-center gap-2 text-green-500",
                                            children: [(0,
                                            t.jsx)("span", {
                                                children: "✓"
                                            }), "Low risk"]
                                        })]
                                    })]
                                }), (0,
                                t.jsxs)("div", {
                                    className: "mt-4 pt-4 border-t border-gray-200/50",
                                    children: [(0,
                                    t.jsx)("div", {
                                        className: "text-sm font-medium text-gray-900 mb-4",
                                        children: "Quick Actions:"
                                    }), (0,
                                    t.jsxs)("div", {
                                        className: "flex flex-wrap gap-3",
                                        children: [(0,
                                        t.jsx)(P, {
                                            href: "https://backup2.bullx.io/terminal?chainId=1399811149&address=".concat(w),
                                            icon: "/bull.webp",
                                            label: "Snipe with BullX",
                                            customBg: "bg-black text-white",
                                            isImage: !0
                                        }), (0,
                                        t.jsx)(P, {
                                            href: "https://photon-sol.tinyastro.io/en/lp/".concat(w),
                                            icon: "/pho.png",
                                            label: "Snipe with Photon",
                                            color: "black",
                                            isImage: !0
                                        })]
                                    })]
                                })]
                            })]
                        })
                    }) : (0,
                    t.jsx)(I, {})
                }), (0,
                t.jsx)(u, {
                    databaseId: y
                })]
            })
        }
    }
}, e => {
    var s = s => e(e.s = s);
    e.O(0, [103, 362, 512, 777, 446, 711, 507, 772, 594, 441, 517, 358], () => s(2300)),
    _N_E = e.O()
}
]);
