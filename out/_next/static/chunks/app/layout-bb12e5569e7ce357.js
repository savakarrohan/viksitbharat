(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    46762: (e, s, n) => {
      Promise.resolve().then(n.t.bind(n, 62093, 23)),
        Promise.resolve().then(n.t.bind(n, 27735, 23)),
        Promise.resolve().then(n.t.bind(n, 30347, 23)),
        Promise.resolve().then(n.bind(n, 78534)),
        Promise.resolve().then(n.bind(n, 57427));
    },
    4146: (e, s, n) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (function (e, s) {
          for (var n in s)
            Object.defineProperty(e, n, { enumerable: !0, get: s[n] });
        })(s, {
          default: function () {
            return o;
          },
          getImageProps: function () {
            return i;
          },
        });
      let a = n(60306),
        t = n(40666),
        r = n(87970),
        l = a._(n(65514));
      function i(e) {
        let { props: s } = (0, t.getImgProps)(e, {
          defaultLoader: l.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/viksitbharath/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [e, n] of Object.entries(s)) void 0 === n && delete s[e];
        return { props: s };
      }
      let o = r.Image;
    },
    78534: (e, s, n) => {
      "use strict";
      n.d(s, { Providers: () => r });
      var a = n(95155),
        t = n(37411);
      function r(e) {
        let { children: s } = e;
        return (0, a.jsx)(t.M, { className: "text-inherit", children: s });
      }
    },
    57427: (e, s, n) => {
      "use strict";
      n.d(s, { default: () => b });
      var a = n(95155),
        t = n(12115),
        r = n(41868),
        l = n(36205),
        i = n(18898),
        o = n(42433),
        d = n(43779),
        c = n(43527),
        m = n(67828),
        u = n(30705),
        f = n(4146),
        h = n.n(f);
      function b() {
        let [e, s] = t.useState(!1),
          n = [
            { name: "Home", key: 1 },
            { name: "Mission", key: 2 },
            { name: "About Us", key: 3 },
            { name: "Contact Us", key: 4 },
          ];
        return (0, a.jsxs)(r.H, {
          onMenuOpenChange: s,
          isBlurred: !1,
          isBordered: !0,
          shouldHideOnScroll: !0,
          children: [
            (0, a.jsxs)(l.t, {
              children: [
                (0, a.jsx)(i.w, {
                  "aria-label": e ? "Close menu" : "Open menu",
                  className: "sm:hidden",
                }),
                (0, a.jsx)(o.$, {
                  children: (0, a.jsx)(h(), {
                    className: "dark:invert rounded-md ",
                    src: "/viksitbharath/Icons/Flag_of_India.svg",
                    alt: "Indian Flag logo",
                    width: 40,
                    height: 38,
                    priority: !0,
                  }),
                }),
              ],
            }),
            (0, a.jsx)(l.t, {
              className: "hidden sm:flex gap-4",
              justify: "end",
              children: n.map((e) =>
                (0, a.jsx)(
                  d.p,
                  {
                    children: (0, a.jsx)(c.h, {
                      color: "foreground",
                      href: "#",
                      className: "font-semibold py-3",
                      children: e.name,
                    }),
                  },
                  e.key,
                ),
              ),
            }),
            (0, a.jsx)(m.n, {
              children: n.map((e) =>
                (0, a.jsx)(
                  u.X,
                  {
                    children: (0, a.jsx)(c.h, {
                      className: "w-full",
                      color: "foreground",
                      href: "#",
                      size: "lg",
                      children: e.name,
                    }),
                  },
                  e.key,
                ),
              ),
            }),
          ],
        });
      }
    },
    30347: () => {},
    62093: (e) => {
      e.exports = {
        style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: "normal" },
        className: "__className_b49c7a",
        variable: "__variable_b49c7a",
      };
    },
    27735: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Geist Mono', 'Geist Mono Fallback'",
          fontStyle: "normal",
        },
        className: "__className_ebe9ff",
        variable: "__variable_ebe9ff",
      };
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [777, 690, 418, 441, 517, 358], () => s(46762)), (_N_E = e.O());
  },
]);
