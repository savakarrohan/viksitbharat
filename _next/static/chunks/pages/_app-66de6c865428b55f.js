(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [203, 636],
  {
    1788: (e, t, n) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(35203);
        },
      ]);
    },
    35203: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let u = n(87677),
        l = n(74848),
        a = u._(n(96540)),
        o = n(4881);
      async function r(e) {
        let { Component: t, ctx: n } = e;
        return { pageProps: await (0, o.loadGetInitialProps)(t, n) };
      }
      class s extends a.default.Component {
        render() {
          let { Component: e, pageProps: t } = this.props;
          return (0, l.jsx)(e, { ...t });
        }
      }
      (s.origGetInitialProps = r),
        (s.getInitialProps = r),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [593, 792], () => (t(1788), t(74009))), (_N_E = e.O());
  },
]);
