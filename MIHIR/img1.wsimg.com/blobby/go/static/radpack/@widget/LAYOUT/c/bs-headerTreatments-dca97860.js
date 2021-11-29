define(
  "@widget/LAYOUT/c/bs-headerTreatments-dca97860.js",
  ["exports", "@widget/LAYOUT/c/bs-overlayTypes"],
  function (e, t) {
    "use strict";
    const {
        imageDimensionConfig: n,
        FIT_IMAGE: i,
        LANDSCAPE: r,
        CIRCLE: o,
      } = (global.Core || guac["@wsb/guac-widget-core"]).constants
        .imageDimensions,
      a = n[r].aspectRatio,
      u = o,
      c = [1, 1.5, 2, 3],
      s = /[.-]wsimg\.com\//;

    function l(e) {
      return !!s.test(e);
    }

    function g(e) {
      let t;
      if (!e || !l(e)) return t;
      const n = [],
        i = e.split(/(h:|w:)([\d.]+)(,|\/|$)/g),
        r = i.length;
      let o = 0;
      for (let e = 2; e < r; e += 4)
        c.forEach((t, r) => {
          n[r] = (n[r] || "") + i.slice(o, e).join("") + parseFloat(i[e]) * t;
        }),
          (o = e + 1);
      try {
        t = n
          .map((t, n) => {
            if (((t += i.slice(o, r).join("")), 1 !== c[n])) t += ` ${c[n]}x`;
            else if (t !== e) throw new Error([e, t]);
            return t;
          })
          .join(",\n");
      } catch (e) {}
      return t || void 0;
    }

    function d(e) {
      return e
        ? e
            .split("/")
            .filter(Boolean)
            .map((e) => {
              const [t, n] = e.split("=");
              return {
                name: t,
                value: n,
              };
            })
        : [];
    }

    function p(e) {
      return null == e
        ? []
        : "string" == typeof e
        ? d(e)
        : Array.isArray(e)
        ? e
        : Object.entries(e).map(([e, t]) => ({
            name: e,
            value: t,
          }));
    }

    function f(e) {
      return l(e)
        ? e
        : (function (e = "") {
            return e.split("/:/")[0];
          })(e);
    }
    const {
      headerTreatments: { FILL: m, FIT: h, INSET: w, BLUR: b, LEGACY_BLUR: I },
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants;
    (e.B = b),
      (e.C = s),
      (e.F = m),
      (e.I = w),
      (e.L = I),
      (e.a = function (e, t) {
        const n = (function (e) {
          if (!l(e)) return null;
          const [t, n] = e.split("/:/");
          return {
            source: t,
            operations: d(n),
          };
        })(e);
        return null == n
          ? e
          : (function ({ source: e, operations: t }) {
              if (null == t) return e;
              const n = t
                .map(({ name: e, value: t }) => (null == t ? e : `${e}=${t}`))
                .join("/");
              return n ? e + "/:/" + n : e;
            })({
              source: n.source,
              operations: [...n.operations, ...p(t)],
            });
      }),
      (e.b = h),
      (e.c = f),
      (e.d = function (e = {}) {
        const {
            outputWidth: t,
            outputHeight: r,
            imageDimension: o,
            enableImageDimension: a,
          } = e,
          u = {},
          c = { ...e };
        if (o)
          if (o === i)
            delete c.outputHeight,
              delete c.editedAspectRatio,
              (u.borderRadius = 0);
          else {
            const { aspectRatio: e, borderRadius: i } = n[o] || {};
            e && t
              ? (c.outputHeight = t / e)
              : e && r && (c.outputWidth = r * e),
              (u.borderRadius = i);
          }
        return {
          imageDimensionStyles: u,
          parsedImageData: c,
          enableImageDimension: a,
        };
      }),
      (e.e = function (e, t, n) {
        return "string" ==
          typeof (
            (null == e ? void 0 : e.imageUrl) || (null == e ? void 0 : e.image)
          )
          ? (
              global.Core || guac["@wsb/guac-widget-core"]
            ).utils.generateImageServiceUrl(e)
          : null != n && n.fallbackBackgroundImageSrc
          ? n.fallbackBackgroundImageSrc.replace(/\{(width|height)\}/g, "+0")
          : t || "";
      }),
      (e.f = g),
      (e.g = function (e, t = !0) {
        return f(
          t
            ? (
                global.Core || guac["@wsb/guac-widget-core"]
              ).utils.generateBackgroundUrl(e)
            : (global.Core || guac["@wsb/guac-widget-core"]).utils
                .generateBackgroundUrl(e)
                .replace(
                  /\/rs=w:{width},h:{height},cg:true,m\/cr=w:{width},h:{height},a[x]?:[^/]*/,
                  ""
                )
                .replace(/\/:$/, "")
        );
      }),
      (e.h = function (e) {
        if (!e) return "";
        const n = (g(e) || "").replace(/(\n)/gm, " ");
        return `(function(){${
          t.c
        };var i=new Image();i.onload=window.markVisuallyComplete;i.srcset="${
          n || e
        }";i.src="${e}";})()`;
      }),
      (e.i = l),
      (e.j = function (e = {}) {
        const {
          outputHeight: t,
          outputWidth: n,
          oHeight: i,
          oWidth: r,
          editedAspectRatio: o,
          enableImageDimension: a,
        } = e;
        if (!o) return !1;
        const u = t || i || (o && (n || r) && o * (n || r)),
          c = n || r || (o && (t || i) && o * (t || i));
        return {
          outputHeight: u,
          outputWidth: c,
          aspectRatio: a ? c && u && c / u : o,
        };
      }),
      (e.k = a),
      (e.l = u),
      (e.r = function (e, t = "") {
        return e && "string" == typeof e
          ? e.replace(/\/:\/rs=w:[0-9]*,h:[0-9]*/, t)
          : "";
      });
  }
),
  "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-headerTreatments-dca97860.js.map
