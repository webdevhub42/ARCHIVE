define("@widget/LAYOUT/c/bs-index2-5c95fee7.js", ["exports"], function (t) {
  "use strict";
  (t.a = (t = "medium") => ({
    "> :nth-child(n)": {
      marginBottom: t,
    },
    " > :last-child": {
      marginBottom: "0 !important",
    },
  })),
    (t.b = (t = "medium") => ({
      "> :nth-child(n)": {
        marginRight: t,
      },
      " > :last-child": {
        marginRight: "0 !important",
      },
    })),
    (t.c = function (t) {
      const e =
        (function (t) {
          if ("string" != typeof t || "{" !== t[0]) return null;
          try {
            return JSON.parse(t);
          } catch (t) {
            return null;
          }
        })(t) || {};
      let n = 0;
      return (
        e.blocks &&
          e.blocks.forEach((t) => {
            const e = t.text.length;
            n += (global._ || guac.lodash).clamp(e, 25, Math.max(e, 25));
          }),
        n
      );
    }),
    (t.g = () => {
      const t = document.getElementsByClassName("ux-scaled");
      let e = 1;
      return t && t.length > 0 && (e = t[0].getAttribute("data-scale")), e;
    }),
    (t.r = ({ count: t = 0, fontSizeMap: e = {}, defaultFontSize: n }) => {
      const r = (global._ || guac.lodash).reduce(
        e,
        (t, [e, n = Number.MAX_VALUE], r) => (
          t.push({
            range: [e, n],
            fontSize: r,
          }),
          t
        ),
        []
      );
      let i = n || void 0;
      return (
        r.forEach(({ range: [e, n], fontSize: r }) => {
          t >= e && t <= n && (i = r);
        }),
        i
      );
    }),
    (t.s = (t) => {
      if ("string" == typeof t)
        return {
          children: t.trim(),
        };
      if (t && "object" == typeof t) {
        let { children: e = null } = t;
        return "string" == typeof e && (e = e.trim()), { ...t, children: e };
      }
      return {
        children: null,
      };
    });
}),
  "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-index2-5c95fee7.js.map