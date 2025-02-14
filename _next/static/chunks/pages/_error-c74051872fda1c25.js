(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [218, 731],
  {
    56194: (e, t, n) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_error",
        function () {
          return n(86218);
        },
      ]);
    },
    86218: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let r = n(87677),
        o = n(74848),
        l = r._(n(96540)),
        i = r._(n(23248)),
        a = {
          400: "Bad Request",
          404: "This page could not be found",
          405: "Method Not Allowed",
          500: "Internal Server Error",
        };
      function d(e) {
        let { res: t, err: n } = e;
        return {
          statusCode: t && t.statusCode ? t.statusCode : n ? n.statusCode : 404,
        };
      }
      let s = {
        error: {
          fontFamily:
            'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
          height: "100vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
        desc: { lineHeight: "48px" },
        h1: {
          display: "inline-block",
          margin: "0 20px 0 0",
          paddingRight: 23,
          fontSize: 24,
          fontWeight: 500,
          verticalAlign: "top",
        },
        h2: { fontSize: 14, fontWeight: 400, lineHeight: "28px" },
        wrap: { display: "inline-block" },
      };
      class u extends l.default.Component {
        render() {
          let { statusCode: e, withDarkMode: t = !0 } = this.props,
            n = this.props.title || a[e] || "An unexpected error has occurred";
          return (0, o.jsxs)("div", {
            style: s.error,
            children: [
              (0, o.jsx)(i.default, {
                children: (0, o.jsx)("title", {
                  children: e
                    ? e + ": " + n
                    : "Application error: a client-side exception has occurred",
                }),
              }),
              (0, o.jsxs)("div", {
                style: s.desc,
                children: [
                  (0, o.jsx)("style", {
                    dangerouslySetInnerHTML: {
                      __html:
                        "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}" +
                        (t
                          ? "@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"
                          : ""),
                    },
                  }),
                  e
                    ? (0, o.jsx)("h1", {
                        className: "next-error-h1",
                        style: s.h1,
                        children: e,
                      })
                    : null,
                  (0, o.jsx)("div", {
                    style: s.wrap,
                    children: (0, o.jsxs)("h2", {
                      style: s.h2,
                      children: [
                        this.props.title || e
                          ? n
                          : (0, o.jsx)(o.Fragment, {
                              children:
                                "Application error: a client-side exception has occurred (see the browser console for more information)",
                            }),
                        ".",
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        }
      }
      (u.displayName = "ErrorPage"),
        (u.getInitialProps = d),
        (u.origGetInitialProps = d),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    51432: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(87677)._(n(96540)).default.createContext({});
    },
    42452: (e, t) => {
      "use strict";
      function n(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: r = !1,
        } = void 0 === e ? {} : e;
        return t || (n && r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    23248: (e, t, n) => {
      "use strict";
      var r = n(77836);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return _;
          },
          defaultHead: function () {
            return f;
          },
        });
      let o = n(87677),
        l = n(40544),
        i = n(74848),
        a = l._(n(96540)),
        d = o._(n(2495)),
        s = n(51432),
        u = n(27592),
        c = n(42452);
      function f(e) {
        void 0 === e && (e = !1);
        let t = [(0, i.jsx)("meta", { charSet: "utf-8" }, "charset")];
        return (
          e ||
            t.push(
              (0, i.jsx)(
                "meta",
                { name: "viewport", content: "width=device-width" },
                "viewport",
              ),
            ),
          t
        );
      }
      function p(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === a.default.Fragment
            ? e.concat(
                a.default.Children.toArray(t.props.children).reduce(
                  (e, t) =>
                    "string" == typeof t || "number" == typeof t
                      ? e
                      : e.concat(t),
                  [],
                ),
              )
            : e.concat(t);
      }
      n(84636);
      let h = ["name", "httpEquiv", "charSet", "itemProp"];
      function y(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(p, [])
          .reverse()
          .concat(f(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return (o) => {
                let l = !0,
                  i = !1;
                if (
                  o.key &&
                  "number" != typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  i = !0;
                  let t = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(t) ? (l = !1) : e.add(t);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (l = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (let e = 0, t = h.length; e < t; e++) {
                      let t = h[e];
                      if (o.props.hasOwnProperty(t)) {
                        if ("charSet" === t) n.has(t) ? (l = !1) : n.add(t);
                        else {
                          let e = o.props[t],
                            n = r[t] || new Set();
                          ("name" !== t || !i) && n.has(e)
                            ? (l = !1)
                            : (n.add(e), (r[t] = n));
                        }
                      }
                    }
                }
                return l;
              };
            })(),
          )
          .reverse()
          .map((e, t) => {
            let o = e.key || t;
            if (
              r.env.__NEXT_OPTIMIZE_FONTS &&
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                a.default.cloneElement(e, t)
              );
            }
            return a.default.cloneElement(e, { key: o });
          });
      }
      let _ = function (e) {
        let { children: t } = e,
          n = (0, a.useContext)(s.AmpStateContext),
          r = (0, a.useContext)(u.HeadManagerContext);
        return (0, i.jsx)(d.default, {
          reduceComponentsToState: y,
          headManager: r,
          inAmpMode: (0, c.isInAmpMode)(n),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2495: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(96540),
        o = r.useLayoutEffect,
        l = r.useEffect;
      function i(e) {
        let { headManager: t, reduceComponentsToState: n } = e;
        function i() {
          if (t && t.mountedInstances) {
            let o = r.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean),
            );
            t.updateHead(n(o, e));
          }
        }
        return (
          o(() => {
            var n;
            return (
              null == t ||
                null == (n = t.mountedInstances) ||
                n.add(e.children),
              () => {
                var n;
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.delete(e.children);
              }
            );
          }),
          o(
            () => (
              t && (t._pendingUpdate = i),
              () => {
                t && (t._pendingUpdate = i);
              }
            ),
          ),
          l(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            ),
          ),
          null
        );
      }
    },
    84636: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "warnOnce", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = (e) => {};
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [636, 593, 792], () => t(56194)), (_N_E = e.O());
  },
]);
