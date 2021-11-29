define(
  "@widget/LAYOUT/c/bs-index3-6694a0b1.js",
  [
    "radpack",
    "exports",
    "@widget/LAYOUT/c/bs-_rollupPluginBabelHelpers",
    "@widget/LAYOUT/c/bs-headerTreatments",
    "@widget/LAYOUT/c/bs-index2",
    "@widget/LAYOUT/c/bs-overlayTypes",
    "@widget/LAYOUT/c/bs-index",
    "@widget/LAYOUT/c/bs-searchFormLocations",
  ],
  function (e, t, a, r, o, l, n, i) {
    "use strict";
    const { Image: c } = (global.Core || guac["@wsb/guac-widget-core"]).utils;
    class s extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("Background") {
      constructor() {
        super(...arguments);
        const {
            backgroundImage: e,
            treatmentData: t,
            imageData: a = {},
          } = this.props,
          { widgetType: o, widgetPreset: l } = this;
        this.state = {
          id: (global._ || guac.lodash).uniqueId("guacBg"),
          backgroundImage: e || r.g(a),
          isResponsive: r.C.test(e || r.g(a)),
          defaultFilter:
            !a.filter &&
            this.theme &&
            (global._ || guac.lodash).isFunction(
              this.theme.constructor.getDefaultBackgroundFilter
            ) &&
            this.theme.constructor.getDefaultBackgroundFilter(o, l),
          widgetType: o,
          widgetPreset: l,
          ...t,
        };
      }
      static getDerivedStateFromProps(e, t) {
        const { backgroundImage: a, treatmentData: o, defaultFilter: l } = t,
          { treatmentData: n, imageData: i = {} } = e,
          c = e.backgroundImage
            ? r.a(
                e.backgroundImage,
                (
                  global.Core || guac["@wsb/guac-widget-core"]
                ).utils.generateImageFilterUrlParam(i.filter || l)
              )
            : i &&
              r.g({
                filter: l,
                ...i,
                ...(e.backgroundImage &&
                  e.backgroundImage.indexOf("fx-bl=s") > -1 && {
                    image: e.backgroundImage,
                  }),
              }),
          g = {
            ...s.backgroundImageUpdate(a, c),
            ...(n && !(global._ || guac.lodash).isEqual(o, n) && n),
          };
        return Object.keys(g).length > 0 ? g : null;
      }
      static backgroundImageUpdate(e, t) {
        return e !== t
          ? {
              responsiveImage: null,
              backgroundImage: t,
              isResponsive: r.C.test(t),
            }
          : {};
      }
      componentDidMount() {
        (this.mounted = !0),
          this.state.backgroundImage &&
            this.state.isResponsive &&
            (this._instance = new c(
              this.state.backgroundImage,
              document.getElementById(this.state.id),
              {},
              this.onRender.bind(this)
            ));
      }
      componentDidUpdate() {
        this.state.backgroundImage &&
          !this.state.responsiveImage &&
          (this.componentWillUnmount(), this.componentDidMount());
      }
      componentWillUnmount() {
        (this.mounted = !1), this._instance && this._instance.unmount();
      }
      onRender(e) {
        if (this.mounted) {
          const { treatmentData: t } = this.props,
            a = {
              responsiveImage: e,
              ...t,
            };
          this.setState(a);
        }
      }
    }
    a._(s, "propTypes", {
      className: (global.PropTypes || guac["prop-types"]).string,
      children: (global.PropTypes || guac["prop-types"]).any,
      backgroundImage: (global.PropTypes || guac["prop-types"]).string,
      backgroundSize: (global.PropTypes || guac["prop-types"]).string,
      backgroundPosition: (global.PropTypes || guac["prop-types"]).string,
      style: (global.PropTypes || guac["prop-types"]).object,
      treatmentData: (global.PropTypes || guac["prop-types"]).object,
      imageData: (global.PropTypes || guac["prop-types"]).object,
    }),
      a._(s, "defaultProps", {
        backgroundSize: "cover",
        backgroundPosition: "center",
        treatmentData: {},
      });
    class g extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("Background", "Responsive") {
      constructor(e) {
        super(e), (this.id = (global._ || guac.lodash).uniqueId("bg-"));
      }
    }
    a._(g, "propTypes", {
      className: (global.PropTypes || guac["prop-types"]).string,
      backgroundSize: (global.PropTypes || guac["prop-types"]).string,
      backgroundPosition: (global.PropTypes || guac["prop-types"]).string,
      style: (global.PropTypes || guac["prop-types"]).object,
      imageData: (global.PropTypes || guac["prop-types"]).object,
      mobileWidthMultiplier: (global.PropTypes || guac["prop-types"]).number,
      desktopWidthMultiplier: (global.PropTypes || guac["prop-types"]).number,
      blur: (global.PropTypes || guac["prop-types"]).bool,
    }),
      a._(g, "defaultProps", {
        backgroundSize: "cover",
        backgroundPosition: "center",
        mobileWidthMultiplier: 1,
        desktopWidthMultiplier: 1,
      });
    class p extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("Background", "Half") {
      constructor(e) {
        super(e), (this.id = (global._ || guac.lodash).uniqueId("bg-"));
      }
    }
    a._(p, "propTypes", {
      className: (global.PropTypes || guac["prop-types"]).string,
      backgroundImage: (global.PropTypes || guac["prop-types"]).string,
      backgroundSize: (global.PropTypes || guac["prop-types"]).string,
      backgroundPosition: (global.PropTypes || guac["prop-types"]).string,
      style: (global.PropTypes || guac["prop-types"]).object,
      imageData: (global.PropTypes || guac["prop-types"]).object,
    }),
      a._(p, "defaultProps", {
        backgroundSize: "cover",
        backgroundPosition: "center",
      }),
      (s.Responsive = g),
      (s.Half = p);
    const u = (global.PropTypes || guac["prop-types"]).shape({
      url: (global.PropTypes || guac["prop-types"]).string,
      pageId: (global.PropTypes || guac["prop-types"]).string,
      widgetId: (global.PropTypes || guac["prop-types"]).string,
      linkId: (global.PropTypes || guac["prop-types"]).string,
      target: (global.PropTypes || guac["prop-types"]).string,
    });
    class d extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("ContentBasic") {}
    a._(d, "propTypes", {
      heading: (global.PropTypes || guac["prop-types"]).oneOfType([
        (global.PropTypes || guac["prop-types"]).string,
        (global.PropTypes || guac["prop-types"]).shape({
          children: (global.PropTypes || guac["prop-types"]).any.isRequired,
          link: u,
        }),
      ]),
      text: (global.PropTypes || guac["prop-types"]).oneOfType([
        (global.PropTypes || guac["prop-types"]).string,
        (global.PropTypes || guac["prop-types"]).shape({
          children: (global.PropTypes || guac["prop-types"]).any.isRequired,
          richtext: (global.PropTypes || guac["prop-types"]).bool,
        }),
      ]),
      actionComponent: (global.PropTypes || guac["prop-types"]).object,
      action: (global.PropTypes || guac["prop-types"]).shape({
        children: (global.PropTypes || guac["prop-types"]).any.isRequired,
        link: u,
      }),
      alignment: (global.PropTypes || guac["prop-types"]).oneOf([
        "left",
        "center",
        "right",
      ]),
    });
    class h extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("ContentWrap") {}
    a._(h, "propTypes", {
      data: (global.PropTypes || guac["prop-types"]).array,
      render: (global.PropTypes || guac["prop-types"]).func,
    });
    class m extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("HeadingPair") {}
    a._(m, "propTypes", {
      heading: (global.PropTypes || guac["prop-types"]).oneOfType([
        (global.PropTypes || guac["prop-types"]).string,
        (global.PropTypes || guac["prop-types"]).shape({
          children: (global.PropTypes || guac["prop-types"]).string.isRequired,
        }),
      ]),
      subheading: (global.PropTypes || guac["prop-types"]).oneOfType([
        (global.PropTypes || guac["prop-types"]).string,
        (global.PropTypes || guac["prop-types"]).shape({
          children: (global.PropTypes || guac["prop-types"]).string.isRequired,
        }),
      ]),
    });
    class y extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("Rating") {
      constructor() {
        super(...arguments),
          (this.keyId = (global._ || guac.lodash).uniqueId("rating"));
      }
    }
    a._(y, "propTypes", {
      rating: (global.PropTypes || guac["prop-types"]).number.isRequired,
    }),
      a._(y, "defaultProps", {
        rating: 5,
      });
    class b extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("CardBanner") {}
    a._(b, "propTypes", {
      heading: (global.PropTypes || guac["prop-types"]).string,
      headingProps: (global.PropTypes || guac["prop-types"]).object,
      action: (global.PropTypes || guac["prop-types"]).node,
    });
    const { utils: f } = (global.Core || guac["@wsb/guac-widget-core"]).UX2;
    class C extends f.createElement("Grid") {
      static getMargin(e, t, a) {
        return `0 -${e / 2}${t} ${a ? `-${e}${t}` : 0}`;
      }
      static applySizingStyles(e = {}, t = {}, a) {
        const {
          gutter: r,
          bottom: o,
          spacing: l,
          spacingXs: n = l,
          spacingSm: i = n,
          spacingMd: c = i,
          spacingLg: s = c,
        } = t;
        if (r) {
          let t = (e.margin = this.getMargin(
            ...a.parseSizedUnit(a.mapPropValue("margin", n)),
            o
          ));
          if (i !== n) {
            const r = this.getMargin(
              ...a.parseSizedUnit(a.mapPropValue("margin", i)),
              o
            );
            r !== t &&
              ((t = r), (global._ || guac.lodash).set(e, "@sm.margin", t));
          }
          if (c !== i) {
            const r = this.getMargin(
              ...a.parseSizedUnit(a.mapPropValue("margin", c)),
              o
            );
            r !== t &&
              ((t = r), (global._ || guac.lodash).set(e, "@md.margin", t));
          }
          if (s !== c) {
            const r = this.getMargin(
              ...a.parseSizedUnit(a.mapPropValue("margin", s)),
              o
            );
            r !== t &&
              ((t = r), (global._ || guac.lodash).set(e, "@lg.margin", t));
          }
        } else e.margin = 0;
      }
    }
    a._(C, "propTypes", {
      tag: (global.PropTypes || guac["prop-types"]).any,
      children: (global.PropTypes || guac["prop-types"]).node,
      wrap: (global.PropTypes || guac["prop-types"]).bool,
      equal: (global.PropTypes || guac["prop-types"]).bool,
      bottom: (global.PropTypes || guac["prop-types"]).bool,
      gutter: (global.PropTypes || guac["prop-types"]).bool,
      column: (global.PropTypes || guac["prop-types"]).bool,
      reverse: (global.PropTypes || guac["prop-types"]).bool,
      inset: (global.PropTypes || guac["prop-types"]).bool,
      size: (global.PropTypes || guac["prop-types"]).number,
      spacing: (global.PropTypes || guac["prop-types"]).any,
      xs: (global.PropTypes || guac["prop-types"]).number,
      sm: (global.PropTypes || guac["prop-types"]).number,
      md: (global.PropTypes || guac["prop-types"]).number,
      lg: (global.PropTypes || guac["prop-types"]).number,
      spacingXs: (global.PropTypes || guac["prop-types"]).any,
      spacingSm: (global.PropTypes || guac["prop-types"]).any,
      spacingMd: (global.PropTypes || guac["prop-types"]).any,
      spacingLg: (global.PropTypes || guac["prop-types"]).any,
    }),
      a._(C, "defaultProps", {
        tag: "div",
        wrap: !0,
        gutter: !0,
        bottom: !0,
        size: 0,
        spacing: "medium",
        spacingSm: "xlarger",
      });
    const { utils: x } = (global.Core || guac["@wsb/guac-widget-core"]).UX2;
    class w extends x.createElement("Grid", "Cell") {
      static getPadding(e, t, a) {
        return `0 ${e / 2}${t} ${a ? `${e}${t}` : 0}`;
      }
      static getPercent(e, t) {
        return ((e || 1) / (t || 12)) * 100 + "%";
      }
      static applySizingStyles(e = {}, t = {}, a) {
        const {
          gutter: r,
          bottom: o,
          spacing: l,
          spacingXs: n = l,
          spacingSm: i = n,
          spacingMd: c = i,
          spacingLg: s = c,
        } = t;
        if (r) {
          let t = (e.padding = this.getPadding(
            ...a.parseSizedUnit(a.mapPropValue("padding", n)),
            o
          ));
          if (i !== n) {
            const r = this.getPadding(
              ...a.parseSizedUnit(a.mapPropValue("padding", i)),
              o
            );
            r !== t &&
              ((t = r), (global._ || guac.lodash).set(e, "@sm.padding", t));
          }
          if (c !== i) {
            const r = this.getPadding(
              ...a.parseSizedUnit(a.mapPropValue("padding", c)),
              o
            );
            r !== t &&
              ((t = r), (global._ || guac.lodash).set(e, "@md.padding", t));
          }
          if (s !== c) {
            const r = this.getPadding(
              ...a.parseSizedUnit(a.mapPropValue("padding", s)),
              o
            );
            r !== t &&
              ((t = r), (global._ || guac.lodash).set(e, "@lg.padding", t));
          }
        } else e.padding = 0;
        return e;
      }
      static applyPushPullStyles(e = {}, t = {}) {
        const {
          push: a,
          pushXs: r = a,
          pushSm: o = r,
          pushMd: l = o,
          pushLg: n = l,
          pull: i,
          pullXs: c = i,
          pullSm: s = c,
          pullMd: g = s,
          pullLg: p = g,
          grid: u,
          gridXs: d = u,
          gridSm: h = d,
          gridMd: m = h,
          gridLg: y = m,
        } = t;
        let b = "initial";
        if ((r > 0 && (e.marginLeft = b = this.getPercent(r, d)), o !== r)) {
          const t = o > 0 ? this.getPercent(o, h) : "initial";
          t !== b &&
            ((b = t), (global._ || guac.lodash).set(e, "@sm.marginLeft", b));
        }
        if (l !== o) {
          const t = l > 0 ? this.getPercent(l, m) : "initial";
          t !== b &&
            ((b = t), (global._ || guac.lodash).set(e, "@md.marginLeft", b));
        }
        if (n !== l) {
          const t = n > 0 ? this.getPercent(n, y) : "initial";
          t !== b &&
            ((b = t), (global._ || guac.lodash).set(e, "@lg.marginLeft", b));
        }
        let f = "initial";
        if ((c > 0 && (e.marginRight = f = this.getPercent(c, d)), s !== c)) {
          const t = s > 0 ? this.getPercent(s, h) : "initial";
          t !== f &&
            ((f = t), (global._ || guac.lodash).set(e, "@sm.marginRight", f));
        }
        if (g !== s) {
          const t = g > 0 ? this.getPercent(g, m) : "initial";
          t !== f &&
            ((f = t), (global._ || guac.lodash).set(e, "@md.marginRight", f));
        }
        if (p !== g) {
          const t = p > 0 ? this.getPercent(p, y) : "initial";
          t !== f &&
            ((f = t), (global._ || guac.lodash).set(e, "@lg.marginRight", f));
        }
        return e;
      }
      static applySizeStyles(e = {}, t = {}) {
        const {
          size: a,
          xs: r = a,
          sm: o = r,
          md: l = o,
          lg: n = l,
          grid: i,
          gridXs: c = i,
          gridSm: s = c,
          gridMd: g = s,
          gridLg: p = g,
        } = t;
        let u = "0%";
        if (
          ((r > 0 || c > 0) &&
            (e.flexBasis = e.maxWidth = u = this.getPercent(r, c)),
          o !== r || s !== c)
        ) {
          const t = o > 0 || s > 0 ? this.getPercent(o, s) : "0%";
          t !== u &&
            ((u = t),
            (global._ || guac.lodash).set(e, "@sm.flexBasis", u),
            (global._ || guac.lodash).set(
              e,
              "@sm.maxWidth",
              "0%" === u ? "none" : u
            ));
        }
        if (l !== o || g !== s) {
          const t = l > 0 || g > 0 ? this.getPercent(l, g) : "0%";
          t !== u &&
            ((u = t),
            (global._ || guac.lodash).set(e, "@md.flexBasis", u),
            (global._ || guac.lodash).set(
              e,
              "@md.maxWidth",
              "0%" === u ? "none" : u
            ));
        }
        if (n !== l || p !== g) {
          const t = n > 0 || p > 0 ? this.getPercent(n, p) : "0%";
          t !== u &&
            ((u = t),
            (global._ || guac.lodash).set(e, "@lg.flexBasis", u),
            (global._ || guac.lodash).set(
              e,
              "@lg.maxWidth",
              "0%" === u ? "none" : u
            ));
        }
        return e;
      }
    }
    a._(w, "propTypes", {
      tag: (global.PropTypes || guac["prop-types"]).any,
      children: (global.PropTypes || guac["prop-types"]).node,
      equal: (global.PropTypes || guac["prop-types"]).bool,
      bottom: (global.PropTypes || guac["prop-types"]).bool,
      gutter: (global.PropTypes || guac["prop-types"]).bool,
      column: (global.PropTypes || guac["prop-types"]).bool,
      first: (global.PropTypes || guac["prop-types"]).bool,
      last: (global.PropTypes || guac["prop-types"]).bool,
      size: (global.PropTypes || guac["prop-types"]).number,
      push: (global.PropTypes || guac["prop-types"]).number,
      pull: (global.PropTypes || guac["prop-types"]).number,
      grid: (global.PropTypes || guac["prop-types"]).number,
      spacing: (global.PropTypes || guac["prop-types"]).any,
      xs: (global.PropTypes || guac["prop-types"]).number,
      sm: (global.PropTypes || guac["prop-types"]).number,
      md: (global.PropTypes || guac["prop-types"]).number,
      lg: (global.PropTypes || guac["prop-types"]).number,
      inset: (global.PropTypes || guac["prop-types"]).bool,
      pushXs: (global.PropTypes || guac["prop-types"]).number,
      pushSm: (global.PropTypes || guac["prop-types"]).number,
      pushMd: (global.PropTypes || guac["prop-types"]).number,
      pushLg: (global.PropTypes || guac["prop-types"]).number,
      pullXs: (global.PropTypes || guac["prop-types"]).number,
      pullSm: (global.PropTypes || guac["prop-types"]).number,
      pullMd: (global.PropTypes || guac["prop-types"]).number,
      pullLg: (global.PropTypes || guac["prop-types"]).number,
      gridXs: (global.PropTypes || guac["prop-types"]).number,
      gridSm: (global.PropTypes || guac["prop-types"]).number,
      gridMd: (global.PropTypes || guac["prop-types"]).number,
      gridLg: (global.PropTypes || guac["prop-types"]).number,
      spacingXs: (global.PropTypes || guac["prop-types"]).any,
      spacingSm: (global.PropTypes || guac["prop-types"]).any,
      spacingMd: (global.PropTypes || guac["prop-types"]).any,
      spacingLg: (global.PropTypes || guac["prop-types"]).any,
    }),
      a._(w, "defaultProps", {
        tag: "div",
        size: 0,
        push: 0,
        pull: 0,
        grid: 0,
        spacing: "small",
        spacingSm: "medium",
        spacingMd: "large",
      }),
      (C.Cell = w);
    class T extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("MediaObject") {}
    a._(T, "propTypes", {
      heading: (global.PropTypes || guac["prop-types"]).oneOfType([
        (global.PropTypes || guac["prop-types"]).string,
        (global.PropTypes || guac["prop-types"]).shape({
          children: (global.PropTypes || guac["prop-types"]).string.isRequired,
        }),
      ]),
      subheading: (global.PropTypes || guac["prop-types"]).oneOfType([
        (global.PropTypes || guac["prop-types"]).string,
        (global.PropTypes || guac["prop-types"]).shape({
          children: (global.PropTypes || guac["prop-types"]).string.isRequired,
        }),
      ]),
      media: (global.PropTypes || guac["prop-types"]).shape({
        url: (global.PropTypes || guac["prop-types"]).string.isRequired,
      }),
    });
    class P extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("Header") {}
    a._(P, "propTypes", {
      category: (global.PropTypes || guac["prop-types"]).string,
      section: (global.PropTypes || guac["prop-types"]).string,
    });
    class k extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("Page") {}
    a._(k, "propTypes", {
      fixedWidth: (global.PropTypes || guac["prop-types"]).bool,
    });
    class v extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("Widget") {}
    a._(v, "propTypes", {
      category: (global.PropTypes || guac["prop-types"]).string.isRequired,
      section: (global.PropTypes || guac["prop-types"]).string.isRequired,
    });
    class E extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("Widget", "Banner") {}
    class R extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("Widget", "Split") {}
    (v.Banner = E), (v.Split = R);
    const S = "cardBackground",
      L = (global.PropTypes || guac["prop-types"]).shape({
        url: (global.PropTypes || guac["prop-types"]).string,
        pageId: (global.PropTypes || guac["prop-types"]).string,
        widgetId: (global.PropTypes || guac["prop-types"]).string,
        linkId: (global.PropTypes || guac["prop-types"]).string,
        target: (global.PropTypes || guac["prop-types"]).string,
      });
    class A extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("ContentCard") {}
    a._(A, "propTypes", {
      id: (global.PropTypes || guac["prop-types"]).string,
      heading: (global.PropTypes || guac["prop-types"]).oneOfType([
        (global.PropTypes || guac["prop-types"]).string,
        (global.PropTypes || guac["prop-types"]).shape({
          children: (global.PropTypes || guac["prop-types"]).any.isRequired,
          link: L,
        }),
      ]),
      text: (global.PropTypes || guac["prop-types"]).oneOfType([
        (global.PropTypes || guac["prop-types"]).string,
        (global.PropTypes || guac["prop-types"]).shape({
          children: (global.PropTypes || guac["prop-types"]).any.isRequired,
          richtext: (global.PropTypes || guac["prop-types"]).bool,
          textCollapseProps: (global.PropTypes || guac["prop-types"]).shape({
            enabled: (global.PropTypes || guac["prop-types"]).bool,
            renderMode: (global.PropTypes || guac["prop-types"]).string
              .isRequired,
            collapseThreshold: (global.PropTypes || guac["prop-types"]).number,
            expandIconProps: (global.PropTypes || guac["prop-types"]).shape({
              children: (global.PropTypes || guac["prop-types"]).any,
              "data-aid": (global.PropTypes || guac["prop-types"]).string,
            }),
            collapseIconProps: (global.PropTypes || guac["prop-types"]).shape({
              children: (global.PropTypes || guac["prop-types"]).any,
              "data-aid": (global.PropTypes || guac["prop-types"]).string,
            }),
          }),
        }),
      ]),
      image: (global.PropTypes || guac["prop-types"]).shape({
        alt: (global.PropTypes || guac["prop-types"]).string,
        src: (global.PropTypes || guac["prop-types"]).string,
        link: L,
        shrinkToFit: (global.PropTypes || guac["prop-types"]).bool,
        width: (global.PropTypes || guac["prop-types"]).oneOfType([
          (global.PropTypes || guac["prop-types"]).number,
          (global.PropTypes || guac["prop-types"]).string,
        ]),
        height: (global.PropTypes || guac["prop-types"]).oneOfType([
          (global.PropTypes || guac["prop-types"]).number,
          (global.PropTypes || guac["prop-types"]).string,
        ]),
        type: (global.PropTypes || guac["prop-types"]).oneOf([
          "image",
          "background",
          S,
        ]),
        backgroundSize: (global.PropTypes || guac["prop-types"]).oneOf([
          "contain",
          "cover",
        ]),
        imageData: (global.PropTypes || guac["prop-types"]).object,
        style: (global.PropTypes || guac["prop-types"]).object,
      }),
      action: (global.PropTypes || guac["prop-types"]).shape({
        children: (global.PropTypes || guac["prop-types"]).any,
        link: L,
      }),
      alignment: (global.PropTypes || guac["prop-types"]).oneOf([
        "left",
        "center",
        "right",
      ]),
    });
    class B extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("ContentCards") {}
    a._(B, "propTypes", {
      cards: (global.PropTypes || guac["prop-types"]).arrayOf(
        (global.PropTypes || guac["prop-types"]).object
      ),
    });
    class I extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("SplitLayout") {}
    a._(I, "propTypes", {
      bleed: (global.PropTypes || guac["prop-types"]).bool,
      fluid: (global.PropTypes || guac["prop-types"]).bool,
      reverse: (global.PropTypes || guac["prop-types"]).bool,
      url: (global.PropTypes || guac["prop-types"]).string,
      contentElement: (global.PropTypes || guac["prop-types"]).element,
      mediaElement: (global.PropTypes || guac["prop-types"]).element,
    });
    class M extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("Box") {}
    a._(M, "propTypes", {
      alignX: (global.PropTypes || guac["prop-types"]).oneOf([
        "left",
        "middle",
        "right",
        "start",
        "center",
        "end",
      ]),
      alignY: (global.PropTypes || guac["prop-types"]).oneOf([
        "top",
        "middle",
        "bottom",
        "start",
        "center",
        "end",
      ]),
      style: (global.PropTypes || guac["prop-types"]).object,
      children: (global.PropTypes || guac["prop-types"]).element,
    });
    class H extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("VerticalBox") {}
    a._(H, "propTypes", {
      align: M.propTypes.alignX.isRequired,
      style: (global.PropTypes || guac["prop-types"]).object,
      children: (global.PropTypes || guac["prop-types"]).element,
    });
    class z extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("HorizontalBox") {}
    a._(z, "propTypes", {
      align: M.propTypes.alignX.isRequired,
      style: (global.PropTypes || guac["prop-types"]).object,
      children: (global.PropTypes || guac["prop-types"]).element,
    });
    class U extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("Modal") {}
    a._(U, "propTypes", {
      children: (global.PropTypes || guac["prop-types"]).node.isRequired,
      onClose: (global.PropTypes || guac["prop-types"]).func.isRequired,
      closeOnClickOutside: (global.PropTypes || guac["prop-types"]).bool,
      preventShrink: (global.PropTypes || guac["prop-types"]).bool,
      width: (global.PropTypes || guac["prop-types"]).number,
    }),
      a._(U, "defaultProps", {
        closeOnClickOutside: !1,
        preventShrink: !1,
      });
    class D extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("Modal", "Popup") {}
    a._(D, "propTypes", {
      id: (global.PropTypes || guac["prop-types"]).string,
      children: (global.PropTypes || guac["prop-types"]).node.isRequired,
      onClose: (global.PropTypes || guac["prop-types"]).func.isRequired,
      closeOnClickOutside: (global.PropTypes || guac["prop-types"]).bool,
      preventShrink: (global.PropTypes || guac["prop-types"]).bool,
      width: (global.PropTypes || guac["prop-types"]).number,
      styles: (global.PropTypes || guac["prop-types"]).shape({
        bodyWrapper: (global.PropTypes || guac["prop-types"]).object,
        body: (global.PropTypes || guac["prop-types"]).object,
        content: (global.PropTypes || guac["prop-types"]).object,
        closeIcon: (global.PropTypes || guac["prop-types"]).object,
      }),
    }),
      a._(D, "defaultProps", {
        closeOnClickOutside: !1,
        preventShrink: !1,
      });
    class X extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("Modal", "Body") {}
    a._(X, "propTypes", {
      id: (global.PropTypes || guac["prop-types"]).string,
      children: (global.PropTypes || guac["prop-types"]).node.isRequired,
      onClose: (global.PropTypes || guac["prop-types"]).func.isRequired,
      preventShrink: (global.PropTypes || guac["prop-types"]).bool,
      width: (global.PropTypes || guac["prop-types"]).number,
      closeOnClickOutside: (global.PropTypes || guac["prop-types"]).bool,
      styles: (global.PropTypes || guac["prop-types"]).object,
    }),
      a._(X, "defaultProps", {
        preventShrink: !1,
      });
    class O extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("Modal", "Overlay") {}
    a._(O, "propTypes", {
      children: (global.PropTypes || guac["prop-types"]).node.isRequired,
      style: (global.PropTypes || guac["prop-types"]).object,
    }),
      (U.Popup = D),
      (U.Body = X),
      (U.Overlay = O);
    class _ extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("ProductCard") {}
    a._(_, "propTypes", {
      assetProps: (global.PropTypes || guac["prop-types"]).shape({
        banner: (global.PropTypes || guac["prop-types"]).oneOfType([
          (global.PropTypes || guac["prop-types"]).shape({
            text: (global.PropTypes || guac["prop-types"]).string,
            productName: (global.PropTypes || guac["prop-types"]).string,
          }),
          (global.PropTypes || guac["prop-types"]).bool,
        ]),
        name: (global.PropTypes || guac["prop-types"]).string,
        assets: (global.PropTypes || guac["prop-types"]).array,
        defaultAssetUrl: (global.PropTypes || guac["prop-types"]).string,
      }),
      product: (global.PropTypes || guac["prop-types"]).shape({
        id: (global.PropTypes || guac["prop-types"]).number,
        slug: (global.PropTypes || guac["prop-types"]).string,
        name: (global.PropTypes || guac["prop-types"]).string,
        description_raw: (global.PropTypes || guac["prop-types"]).string,
        updated_at: (global.PropTypes || guac["prop-types"]).string,
        created_at: (global.PropTypes || guac["prop-types"]).string,
        currency: (global.PropTypes || guac["prop-types"]).string,
        price: (global.PropTypes || guac["prop-types"]).oneOfType([
          (global.PropTypes || guac["prop-types"]).shape({
            display: (global.PropTypes || guac["prop-types"]).string,
            numeric: (global.PropTypes || guac["prop-types"]).number,
            currency: (global.PropTypes || guac["prop-types"]).string,
          }),
          (global.PropTypes || guac["prop-types"]).string,
        ]),
        sale_price: (global.PropTypes || guac["prop-types"]).oneOfType([
          (global.PropTypes || guac["prop-types"]).shape({
            display: (global.PropTypes || guac["prop-types"]).string,
            numeric: (global.PropTypes || guac["prop-types"]).number,
            currency: (global.PropTypes || guac["prop-types"]).string,
          }),
          (global.PropTypes || guac["prop-types"]).string,
        ]),
        relative_url: (global.PropTypes || guac["prop-types"]).string,
        "on_sale?": (global.PropTypes || guac["prop-types"]).bool,
        variant_count: (global.PropTypes || guac["prop-types"]).number,
        has_price_range: (global.PropTypes || guac["prop-types"]).bool,
        ship_free: (global.PropTypes || guac["prop-types"]).bool,
        product_type: (global.PropTypes || guac["prop-types"]).string,
        defaultAssetUrl: (global.PropTypes || guac["prop-types"]).string,
        measurement_system: (global.PropTypes || guac["prop-types"]).string,
      }),
      determineStyles: (global.PropTypes || guac["prop-types"]).func,
      dataAids: (global.PropTypes || guac["prop-types"]).objectOf(
        (global.PropTypes || guac["prop-types"]).string
      ),
      imageCropMethod: (global.PropTypes || guac["prop-types"]).string,
      showBorder: (global.PropTypes || guac["prop-types"]).bool,
      imageShape: (global.PropTypes || guac["prop-types"]).string,
      translate: (global.PropTypes || guac["prop-types"]).func,
      children: (global.PropTypes || guac["prop-types"]).any,
      productsPerRow: (global.PropTypes || guac["prop-types"]).number,
    });
    class W extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("Intro") {}
    a._(W, "propTypes", {
      alignment: (global.PropTypes || guac["prop-types"]).oneOf([
        "left",
        "center",
        "right",
      ]),
      heading: (global.PropTypes || guac["prop-types"]).object,
      text: (global.PropTypes || guac["prop-types"]).object,
    });
    class N extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("ZeroStateOverlay") {}
    a._(N, "propTypes", {
      beforeContent: (global.PropTypes || guac["prop-types"]).any,
      button: (global.PropTypes || guac["prop-types"]).object,
      secondaryButton: (global.PropTypes || guac["prop-types"]).object,
      afterContent: (global.PropTypes || guac["prop-types"]).any,
    });
    class V extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("Alert") {}
    a._(V, "propTypes", {
      children: (global.PropTypes || guac["prop-types"]).any,
      icon: (global.PropTypes || guac["prop-types"]).node,
      onClose: (global.PropTypes || guac["prop-types"]).func,
    });
    class j extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("EmbedVideo") {}
    a._(j, "propTypes", {
      "data-field-route": (global.PropTypes || guac["prop-types"]).string,
      "data-field-id": (global.PropTypes || guac["prop-types"]).string,
      "data-aid": (global.PropTypes || guac["prop-types"]).string,
      embedUrl: (global.PropTypes || guac["prop-types"]).string,
      style: (global.PropTypes || guac["prop-types"]).object,
    });
    class F extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("HeaderBackground") {}
    a._(F, "propTypes", {
      backgroundImage: (global.PropTypes || guac["prop-types"]).string
        .isRequired,
      backgroundInfo: {
        treatmentLayout: (global.PropTypes || guac["prop-types"]).string,
      },
      category: (global.PropTypes || guac["prop-types"]).string,
    });
    class $ extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("Picture") {}
    a._($, "propTypes", {
      xsSrc: (global.PropTypes || guac["prop-types"]).string,
      smSrc: (global.PropTypes || guac["prop-types"]).string,
      mdSrc: (global.PropTypes || guac["prop-types"]).string,
      lgSrc: (global.PropTypes || guac["prop-types"]).string,
      xlSrc: (global.PropTypes || guac["prop-types"]).string,
      imgSrc: (global.PropTypes || guac["prop-types"]).string,
      imgAlt: (global.PropTypes || guac["prop-types"]).string,
    });
    class G extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("InputGroup") {}
    a._(G, "propTypes", {
      input: (global.PropTypes || guac["prop-types"]).shape({
        placeholder: (global.PropTypes || guac["prop-types"]).string,
        value: (global.PropTypes || guac["prop-types"]).string,
        name: (global.PropTypes || guac["prop-types"]).string,
        handleChange: (global.PropTypes || guac["prop-types"]).func,
        style: (global.PropTypes || guac["prop-types"]).object,
        "data-route": (global.PropTypes || guac["prop-types"]).string,
      }),
      button: (global.PropTypes || guac["prop-types"]).shape({
        "data-tccl": (global.PropTypes || guac["prop-types"]).string,
        "data-aid": (global.PropTypes || guac["prop-types"]).string,
        "data-route": (global.PropTypes || guac["prop-types"]).string,
        style: (global.PropTypes || guac["prop-types"]).object,
        children: (global.PropTypes || guac["prop-types"]).string,
      }),
      error: (global.PropTypes || guac["prop-types"]).string,
      errorProps: (global.PropTypes || guac["prop-types"]).object,
    });
    class q extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("CommerceCard", "Overlay") {}
    a._(q, "propTypes", {
      name: (global.PropTypes || guac["prop-types"]).string,
      price: (global.PropTypes || guac["prop-types"]).string,
      salePrice: (global.PropTypes || guac["prop-types"]).string,
      imageUrl: (global.PropTypes || guac["prop-types"]).string,
      priceText: (global.PropTypes || guac["prop-types"]).string,
      productType: (global.PropTypes || guac["prop-types"]).string,
      cardType: (global.PropTypes || guac["prop-types"]).string,
      dataAids: (global.PropTypes || guac["prop-types"]).objectOf(
        (global.PropTypes || guac["prop-types"]).string
      ),
      category: (global.PropTypes || guac["prop-types"]).string,
      isImageShown: (global.PropTypes || guac["prop-types"]).bool,
      isPriceShown: (global.PropTypes || guac["prop-types"]).bool,
      linkText: (global.PropTypes || guac["prop-types"]).string,
      overlayAlpha: (global.PropTypes || guac["prop-types"]).number,
    });
    class Y extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("CommerceCard", "Item") {}
    a._(Y, "propTypes", {
      name: (global.PropTypes || guac["prop-types"]).string.isRequired,
      duration: (global.PropTypes || guac["prop-types"]).oneOfType([
        (global.PropTypes || guac["prop-types"]).string,
        (global.PropTypes || guac["prop-types"]).element,
      ]),
      price: (global.PropTypes || guac["prop-types"]).string.isRequired,
      imageUrl: (global.PropTypes || guac["prop-types"]).string,
      ribbonText: (global.PropTypes || guac["prop-types"]).string,
      cardSize: (global.PropTypes || guac["prop-types"]).object,
      imageShape: (global.PropTypes || guac["prop-types"]).string,
      imageCropMethod: (global.PropTypes || guac["prop-types"]).string,
      hasImageBorder: (global.PropTypes || guac["prop-types"]).bool,
      productType: (global.PropTypes || guac["prop-types"]).string,
      isBoxed: (global.PropTypes || guac["prop-types"]).bool,
      style: (global.PropTypes || guac["prop-types"]).object,
      eyebrowText: (global.PropTypes || guac["prop-types"]).string,
      footerText: (global.PropTypes || guac["prop-types"]).string,
      footerAlert: (global.PropTypes || guac["prop-types"]).bool,
      eventDate: (global.PropTypes || guac["prop-types"]).string,
      buttonText: (global.PropTypes || guac["prop-types"]).string,
      priceText: (global.PropTypes || guac["prop-types"]).string,
      salePrice: (global.PropTypes || guac["prop-types"]).string,
      ratings: (global.PropTypes || guac["prop-types"]).element,
      dataAids: (global.PropTypes || guac["prop-types"]).objectOf(
        (global.PropTypes || guac["prop-types"]).string
      ),
      dataRoutes: (global.PropTypes || guac["prop-types"]).objectOf(
        (global.PropTypes || guac["prop-types"]).string
      ),
    });
    class Z extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("CommerceCard", "PictureContainer") {}
    a._(Z, "propTypes", {
      children: (global.PropTypes || guac["prop-types"]).element,
      backgroundColor: (global.PropTypes || guac["prop-types"]).string,
      imageShape: (global.PropTypes || guac["prop-types"]).string,
      hasImageBorder: (global.PropTypes || guac["prop-types"]).bool,
      containerStyles: (global.PropTypes || guac["prop-types"]).object,
      canHaveBorder: (global.PropTypes || guac["prop-types"]).bool,
    });
    class J extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("CommerceCard", "Content") {}
    a._(J, "propTypes", {
      name: (global.PropTypes || guac["prop-types"]).string.isRequired,
      duration: (global.PropTypes || guac["prop-types"]).oneOfType([
        (global.PropTypes || guac["prop-types"]).string,
        (global.PropTypes || guac["prop-types"]).element,
      ]),
      eventDate: (global.PropTypes || guac["prop-types"]).string,
      price: (global.PropTypes || guac["prop-types"]).string.isRequired,
      salePrice: (global.PropTypes || guac["prop-types"]).string,
      priceText: (global.PropTypes || guac["prop-types"]).string,
      productType: (global.PropTypes || guac["prop-types"]).string,
      eyebrowText: (global.PropTypes || guac["prop-types"]).string,
      footerText: (global.PropTypes || guac["prop-types"]).string,
      footerAlert: (global.PropTypes || guac["prop-types"]).bool,
      ratings: (global.PropTypes || guac["prop-types"]).element,
      titleProps: (global.PropTypes || guac["prop-types"]).object,
      cardType: (global.PropTypes || guac["prop-types"]).string,
      isBoxed: (global.PropTypes || guac["prop-types"]).bool,
      dataAids: (global.PropTypes || guac["prop-types"]).objectOf(
        (global.PropTypes || guac["prop-types"]).string
      ),
      dataRoutes: (global.PropTypes || guac["prop-types"]).objectOf(
        (global.PropTypes || guac["prop-types"]).string
      ),
      buttonText: (global.PropTypes || guac["prop-types"]).string,
      isLinkShown: (global.PropTypes || guac["prop-types"]).bool,
      isPriceShown: (global.PropTypes || guac["prop-types"]).bool,
      isImageShown: (global.PropTypes || guac["prop-types"]).bool,
      linkText: (global.PropTypes || guac["prop-types"]).string,
      linkCategory: (global.PropTypes || guac["prop-types"]).string,
      isPriceFeatured: (global.PropTypes || guac["prop-types"]).bool,
      style: (global.PropTypes || guac["prop-types"]).object,
    });
    class Q extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("CommerceCard", "Picture") {}
    a._(Q, "propTypes", {
      assetUrl: (global.PropTypes || guac["prop-types"]).string,
      overlayAlpha: (global.PropTypes || guac["prop-types"]).number,
      imageCropMethod: (global.PropTypes || guac["prop-types"]).string,
      dataAids: (global.PropTypes || guac["prop-types"]).objectOf(
        (global.PropTypes || guac["prop-types"]).string
      ),
    });
    class K extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("CommerceCard", "Title") {}
    a._(K, "propTypes", {
      title: (global.PropTypes || guac["prop-types"]).string.isRequired,
      isDigitalProduct: (global.PropTypes || guac["prop-types"]).bool,
      dataAids: (global.PropTypes || guac["prop-types"]).objectOf(
        (global.PropTypes || guac["prop-types"]).string
      ),
    });
    class ee extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("CommerceCard", "PriceDisplay") {}
    a._(ee, "propTypes", {
      price: (global.PropTypes || guac["prop-types"]).string.isRequired,
      salePrice: (global.PropTypes || guac["prop-types"]).string,
      cardType: (global.PropTypes || guac["prop-types"]).string,
      priceText: (global.PropTypes || guac["prop-types"]).string,
      duration: (global.PropTypes || guac["prop-types"]).oneOfType([
        (global.PropTypes || guac["prop-types"]).string,
        (global.PropTypes || guac["prop-types"]).element,
      ]),
      dataAids: (global.PropTypes || guac["prop-types"]).objectOf(
        (global.PropTypes || guac["prop-types"]).string
      ),
      isLinkShown: (global.PropTypes || guac["prop-types"]).bool,
      isPriceFeatured: (global.PropTypes || guac["prop-types"]).bool,
    });
    class te extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("CommerceCard", "Ribbon") {}
    a._(te, "propTypes", {
      children: (global.PropTypes || guac["prop-types"]).string,
      dataAids: (global.PropTypes || guac["prop-types"]).objectOf(
        (global.PropTypes || guac["prop-types"]).string
      ),
      cardSize: (global.PropTypes || guac["prop-types"]).object,
    });
    class ae extends (
      global.Core || guac["@wsb/guac-widget-core"]
    ).UX2.utils.createElement("Video") {}
    a._(ae, "propTypes", {
      "data-field-route": (global.PropTypes || guac["prop-types"]).string,
      "data-field-id": (global.PropTypes || guac["prop-types"]).string,
      "data-aid": (global.PropTypes || guac["prop-types"]).string,
      url: (global.PropTypes || guac["prop-types"]).string,
      poster: (global.PropTypes || guac["prop-types"]).string,
      alt: (global.PropTypes || guac["prop-types"]).string,
      lazyLoad: (global.PropTypes || guac["prop-types"]).bool,
      height: (global.PropTypes || guac["prop-types"]).string,
      width: (global.PropTypes || guac["prop-types"]).string,
      containerStyle: (global.PropTypes || guac["prop-types"]).object,
      columnCountMap: (global.PropTypes || guac["prop-types"]).object,
    });
    var re = {
      __proto__: null,
      Background: s,
      ContentBasic: d,
      ContentWrap: h,
      HeadingPair: m,
      Rating: y,
      CardBanner: b,
      Grid: C,
      MediaObject: T,
      Header: P,
      Page: k,
      Widget: v,
      WidgetBanner: E,
      WidgetSplit: R,
      ContentCard: A,
      ContentCards: B,
      SplitLayout: I,
      Box: M,
      VerticalBox: H,
      HorizontalBox: z,
      Modal: U,
      ProductCard: _,
      Intro: W,
      ZeroStateOverlay: N,
      Alert: V,
      EmbedVideo: j,
      HeaderBackground: F,
      Picture: $,
      InputGroup: G,
      CommerceCardOverlay: q,
      CommerceCardItem: Y,
      CommerceCardPictureContainer: Z,
      CommerceCardContent: J,
      CommerceCardPicture: Q,
      CommerceCardTitle: K,
      CommerceCardPriceDisplay: ee,
      CommerceCardRibbon: te,
      Video: ae,
    };

    function oe(e = {}) {
      (global.Core || guac["@wsb/guac-widget-core"]).utils.register({
        Group: {
          Blog: ["List", "Main", "Aside", "Content"],
          Card: ["Link", "Banner"],
          Carousel: [],
          Clock: ["Value"],
          ContactBar: [],
          Content: ["Big", "Card", "OverlayCard"],
          Featured: [],
          Form: ["Search"],
          GoogleTranslate: [],
          Group: [],
          Hero: ["Left", "Center", "Right", "Header1"],
          Layout: [],
          Logo: ["Heading"],
          Map: ["Banner"],
          Media: ["Object"],
          Membership: [],
          Menu: [],
          MobileNav: ["Link", "SubLink"],
          Nav: ["Footer", "Menu", "Vertical", "Horizontal", "MoreMenu"],
          NavigationDrawer: ["Sub"],
          Product: ["Asset", "Banner", "Label", "Name", "Prices"],
          CommerceOverlay: [
            "Major",
            "Medium",
            "Mobile",
            "Heading",
            "Icon",
            "Wrapper",
            "MoreLink",
          ],
          CommerceItem: [
            "Heading",
            "Icon",
            "Label",
            "Price",
            "Button",
            "Wrapper",
          ],
          PromoBanner: ["Seasonal"],
          SearchPopout: [],
          Section: ["Banner", "Split"],
          SlideshowArrows: [],
          SocialLinks: ["Drawer"],
          SplitItem: ["Image"],
          UtilitiesMenu: [],
          HeaderMedia: [r.F, r.b, r.I, r.B, r.L],
          Sidebar: [],
          SubMenu: [],
        },
        Element: {
          Address: [],
          Background: [],
          Block: [],
          Button: [
            "Previous",
            "Next",
            "FullWidth",
            "Primary",
            "Secondary",
            "Spotlight",
            "External",
          ],
          CloseIcon: [],
          Container: ["Fluid", "Split"],
          Details: ["Minor"],
          DisplayHeading: ["Sub"],
          Divider: [],
          Dot: ["Active"],
          Dropdown: [],
          Element: [],
          Embed: ["Container"],
          Error: [],
          FigCaption: ["Overlay"],
          Figure: [],
          FooterLink: [],
          FooterDetails: [],
          FooterText: [],
          Heading: ["Sub", "Major", "Minor", "Middle", "Product"],
          HR: [],
          Icon: ["Hamburger", "Search", "Social"],
          Image: ["Thumbnail", "Logo", "Responsive"],
          Input: [
            "FloatLabel",
            "TextArea",
            "Checkbox",
            "Select",
            "Radio",
            "Search",
          ],
          Label: ["Minor"],
          Link: [
            "Arrow",
            "Active",
            "Content",
            "Icon",
            "Nested",
            "NestedActive",
            "Dropdown",
            "DropdownActive",
          ],
          List: ["Nested"],
          ListItem: ["Inline"],
          Loader: [],
          MoreLink: ["Expand", "Forward", "Backward", "Menu"],
          Option: [],
          Phone: [],
          Pipe: [],
          Price: ["Major"],
          Ribbon: [],
          SVG: [],
          Table: ["Header", "Row", "Cell"],
          Tagline: [],
          SubTagline: [],
          SupTagline: [],
          Text: ["Major", "Action"],
          Wrapper: ["Image", "Video"],
          Video: [],
        },
        Component: { ...re, ...e },
      });
    }
    oe();
    var le = {
      fontDial: function (e) {
        const { fontDials: t = [], locale: a, language: r } = this.base,
          o = {
            locale: a,
            language: r,
          };
        let l = !1;
        return (
          t.some((t) => {
            const a =
                (t && t.getMetaWithOverrides && t.getMetaWithOverrides(o)) ||
                (t && t.meta),
              r = a && (global._ || guac.lodash).get(a, e, void 0);
            return r && (l = r), l;
          }),
          l || e
        );
      },
    };
    const ne = "xs",
      ie = "md",
      ce = "lg";
    var se = [ne, "sm", ie, ce, "xl"];
    const ge = {
        [ne]: {
          xsmall: 12,
          small: 14,
          medium: 16,
          mlarge: 18,
          large: 22,
          xlarge: 28,
          xxlarge: 32,
          xxxlarge: 40,
          jumbo: 44,
          xjumbo: 48,
        },
        sm: {
          xsmall: 12,
          small: 14,
          medium: 16,
          mlarge: 18,
          large: 22,
          xlarge: 30,
          xxlarge: 38,
          xxxlarge: 48,
          jumbo: 62,
          xjumbo: 72,
        },
        [ie]: {
          xsmall: 12,
          small: 14,
          medium: 16,
          mlarge: 18,
          large: 22,
          xlarge: 30,
          xxlarge: 38,
          xxxlarge: 48,
          jumbo: 62,
          xjumbo: 72,
        },
        [ce]: {
          xsmall: 12,
          small: 14,
          medium: 16,
          mlarge: 18,
          large: 22,
          xlarge: 32,
          xxlarge: 44,
          xxxlarge: 62,
          jumbo: 72,
          xjumbo: 96,
        },
        xl: {
          xsmall: 14,
          small: 16,
          medium: 18,
          mlarge: 20,
          large: 24,
          xlarge: 36,
          xxlarge: 48,
          xxxlarge: 64,
          jumbo: 74,
          xjumbo: 98,
        },
      },
      {
        fontScales: { DEFAULT_WEBSITE_FONT_SCALES: pe },
        fontSizes: {
          XSMALL: ue,
          SMALL: de,
          MEDIUM: he,
          LARGE: me,
          XLARGE: ye,
          XXLARGE: be,
          XXXLARGE: fe,
          JUMBO: Ce,
          XJUMBO: xe,
          CUSTOM: we,
        },
      } = (global.Core || guac["@wsb/guac-widget-core"]).constants,
      Te = [ue, de, he, "mlarge", me, ye, be, fe, Ce, xe, we];

    function Pe(e, t) {
      const a = t && se.indexOf(t) >= 0;
      if (Te.indexOf(e) < 0) return e;
      const r = this.mappedValues.fontSizeMapping || ge,
        o = r.xs.medium,
        l = this.base.theme.mapPropValue("fontDial", this.base.fontFamily),
        n = l ? (l.size || o) / o : 1,
        i = a ? r[t][e] : r.xs[e];
      return Math.round(i * n);
    }

    function ke(e, t) {
      const a = (this.mappedValues.fontSizeMapping || ge)[t];
      return a ? (global._ || guac.lodash).clamp(e, a.xsmall, a.xjumbo) : e;
    }
    const ve = "lighter",
      Ee = "light",
      Re = "normal",
      Se = "bold",
      Le = "bolder";
    var Ae = [ve, Ee, Re, Se, Le];
    const Be = {};
    var Ie = {
      ...le,
      ...{
        fontSize: function (e = "") {
          const t = (function (e) {
              if (!(global._ || guac.lodash).isString(e)) return;
              const t = se.find((t) => 0 === e.indexOf(t));
              if (!t) return;
              const a = (global._ || guac.lodash).lowerFirst(
                e.substr(t.length)
              );
              return -1 !== Te.indexOf(a)
                ? {
                    deviceSize: t,
                    newFontSize: a,
                  }
                : void 0;
            })(e),
            a = this.base.fontScale,
            r = this.base.props.isLogo;
          let o = "number" == typeof a ? a : (!r && pe[a]) || pe.medium;
          const l = this.base.fontScaleMultiplier;
          if ((l && (o *= Number(l) || 1), !t)) {
            if (Te.indexOf(e) >= 0) {
              const t = Pe.call(this, e, ne);
              return ke.call(this, Math.round(t * o), ne);
            }
            return e;
          }
          const n = Pe.call(this, t.newFontSize, t.deviceSize);
          return ke.call(this, Math.round(n * o), t.deviceSize);
        },
      },
      fontFamily: function (e) {
        const t = this.mapPropValue("fontDial", e);
        return (t && t.family) || e;
      },
      fontWeight: function (e) {
        return -1 === Ae.indexOf(e)
          ? e
          : (function (e, t = []) {
              let a = t.indexOf(e);
              -1 === a && (t.unshift(e), (a = 0));
              const r = [e, ...t].join();
              if (!(r in Be)) {
                const o = t.slice(0, a + 1),
                  l = o.length,
                  n = t.slice(a),
                  i = n.length;
                Be[r] = {
                  [ve]: o[0],
                  [Ee]: (l > 1 && o[Math.round(l / 3)]) || e,
                  [Re]: e,
                  [Se]: (i > 1 && n[Math.round(i / 3)]) || e,
                  [Le]: n[i - 1],
                };
              }
              return Be[r];
            })(
              this.mapPropValue(
                "fontDial",
                `${this.base.fontFamily || "primary"}.weight`
              ) || 400,
              this.mapPropValue(
                "fontDial",
                `${this.base.fontFamily || "primary"}.weights`
              )
            )[e];
      },
      hasFontSet: function (e = [], t = "old-standard-tt") {
        return e.find((e) => e === t);
      },
    };
    const { CTAButton: Me } = (global.Core || guac["@wsb/guac-widget-core"])
      .components;
    class He extends (global.React || guac.react).Component {
      render() {
        const { action: e } = this.props,
          { children: t, link: a, ...r } = e,
          o = {
            element: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
              .Button.Secondary,
            ctaButton: {
              label: t,
              enabled: !0,
              ...a,
            },
            ...r,
          };
        return (global.React || guac.react).createElement(
          (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
          {
            children: (global.React || guac.react).createElement(Me, o),
          }
        );
      }
    }
    a._(He, "propTypes", {
      action: (global.PropTypes || guac["prop-types"]).shape({
        children: (global.PropTypes || guac["prop-types"]).any,
        link: (global.PropTypes || guac["prop-types"]).shape({
          url: (global.PropTypes || guac["prop-types"]).string,
          pageId: (global.PropTypes || guac["prop-types"]).string,
          widgetId: (global.PropTypes || guac["prop-types"]).string,
          linkId: (global.PropTypes || guac["prop-types"]).string,
          target: (global.PropTypes || guac["prop-types"]).string,
        }),
        target: (global.PropTypes || guac["prop-types"]).string,
      }),
    });
    const { Link: ze } = (global.Core || guac["@wsb/guac-widget-core"])
        .components,
      Ue = (global.PropTypes || guac["prop-types"]).shape({
        url: (global.PropTypes || guac["prop-types"]).string,
        pageId: (global.PropTypes || guac["prop-types"]).string,
        widgetId: (global.PropTypes || guac["prop-types"]).string,
        linkId: (global.PropTypes || guac["prop-types"]).string,
        target: (global.PropTypes || guac["prop-types"]).string,
      });
    class De extends (global.React || guac.react).Component {
      render() {
        const { heading: e, style: t = {} } = this.props,
          { link: r, ...l } = e && o.s(e),
          n = (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Heading,
            a.a(
              {
                style: t,
              },
              l
            )
          );
        return l.children
          ? r
            ? (global.React || guac.react).createElement(
                ze,
                {
                  linkData: r,
                },
                " ",
                n,
                " "
              )
            : n
          : null;
      }
    }
    a._(De, "propTypes", {
      heading: (global.PropTypes || guac["prop-types"]).oneOfType([
        (global.PropTypes || guac["prop-types"]).string,
        (global.PropTypes || guac["prop-types"]).shape({
          children: (global.PropTypes || guac["prop-types"]).any.isRequired,
          link: Ue,
        }),
      ]),
      style: (global.PropTypes || guac["prop-types"]).object,
    });
    const {
        renderModes: { EDIT: Xe },
      } = (global.Core || guac["@wsb/guac-widget-core"]).constants,
      Oe = 340,
      _e = 60;
    class We extends (global.React || guac.react).Component {
      getPlainCaption(e) {
        let t;
        const a = e.blocks;
        if (a.length > 1) {
          const e = [];
          a.forEach((t) => ("" === t.text ? e.push("\n\n") : e.push(t.text))),
            (t = e.join(""));
        } else t = a[0].text;
        return t;
      }
      getShortenedCaption(e, t, a) {
        if (!e) return t.slice(0, a);
        let r,
          o = 0;
        e.blocks.some((e, t) => ((o += e.text.length), (r = t), o >= a));
        const l = e.blocks
            .map((e, t) => {
              if (t === r) {
                const t = e.text.slice(0, -(o - a));
                return { ...e, text: t };
              }
              return t > r ? null : e;
            })
            .filter(Boolean),
          n = { ...e, blocks: l };
        return JSON.stringify(n);
      }
      renderCollapsedText(e) {
        const { alignment: t } = this.props,
          { children: r, textCollapseProps: o = {} } = e,
          {
            collapseThreshold: l = Oe,
            collapseMinOverflow: n = _e,
            expandIconProps: i = {},
            collapseIconProps: c = {},
            renderMode: s,
          } = o;
        let g;
        try {
          g = JSON.parse(r);
        } catch (e) {}
        const p = (g ? this.getPlainCaption(g).length : r.length) > l + n,
          u = p && s === Xe,
          d = (global._ || guac.lodash).uniqueId("collapsedTextBlock"),
          h = (global._ || guac.lodash).uniqueId("expandedTextBlock"),
          m = (global._ || guac.lodash).uniqueId("expandTextToggle"),
          y = {
            id: m,
            type: "checkbox",
            role: "button",
            style: {
              display: "none",
              [`:checked ~ #${h}`]: {
                display: "block",
              },
              [`:checked ~ #${d}`]: {
                display: "none",
              },
              [`:not(:checked) ~ #${h}`]: {
                display: "none",
              },
              [`:not(:checked) ~ #${d}`]: {
                display: "block",
              },
            },
          },
          b = (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            {
              id: d,
              style: {
                display: u ? "none" : "block",
              },
            },
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text,
              a.a(
                {
                  alignment: t,
                },
                (global._ || guac.lodash).omit(e, "textCollapseProps"),
                {
                  children: this.getShortenedCaption(g, r, l),
                }
              )
            ),
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Label,
              {
                for: m,
              },
              (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                  .MoreLink.Expand,
                a.a(
                  {
                    style: {
                      marginVertical: "xsmall",
                    },
                  },
                  i
                )
              )
            )
          ),
          f = (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            {
              id: h,
              style: {
                display: u ? "block" : "none",
              },
            },
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text,
              a.a(
                {
                  alignment: t,
                },
                (global._ || guac.lodash).omit(e, "textCollapseProps")
              )
            ),
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Label,
              {
                for: m,
              },
              (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                  .MoreLink.Expand,
                a.a(
                  {
                    style: {
                      marginVertical: "xsmall",
                    },
                    expanded: !0,
                  },
                  c
                )
              )
            )
          );
        return p
          ? (global.React || guac.react).createElement(
              (global.React || guac.react).Fragment,
              null,
              !u &&
                (global.React || guac.react).createElement(
                  (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                    .Input,
                  y
                ),
              b,
              f
            )
          : (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text,
              a.a(
                {
                  alignment: t,
                },
                (global._ || guac.lodash).omit(e, "textCollapseProps")
              )
            );
      }
      render() {
        const { text: e, alignment: t } = this.props,
          r =
            e &&
            o.s({
              style: {
                flexGrow: 1,
              },
              ...e,
            }),
          { children: l, textCollapseProps: n = {} } = r;
        return l
          ? n.enabled
            ? this.renderCollapsedText(r)
            : (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text,
                a.a(
                  {
                    alignment: t,
                  },
                  (global._ || guac.lodash).omit(r, "textCollapseProps")
                )
              )
          : null;
      }
    }
    a._(We, "propTypes", {
      text: (global.PropTypes || guac["prop-types"]).oneOfType([
        (global.PropTypes || guac["prop-types"]).string,
        (global.PropTypes || guac["prop-types"]).shape({
          children: (global.PropTypes || guac["prop-types"]).any.isRequired,
          richtext: (global.PropTypes || guac["prop-types"]).bool,
          textCollapseProps: (global.PropTypes || guac["prop-types"]).shape({
            enabled: (global.PropTypes || guac["prop-types"]).bool,
            renderMode: (global.PropTypes || guac["prop-types"]).string
              .isRequired,
            collapseThreshold: (global.PropTypes || guac["prop-types"]).number,
            expandIconProps: (global.PropTypes || guac["prop-types"]).shape({
              children: (global.PropTypes || guac["prop-types"]).any,
              "data-aid": (global.PropTypes || guac["prop-types"]).string,
            }),
            collapseIconProps: (global.PropTypes || guac["prop-types"]).shape({
              children: (global.PropTypes || guac["prop-types"]).any,
              "data-aid": (global.PropTypes || guac["prop-types"]).string,
            }),
          }),
        }),
      ]),
      alignment: (global.PropTypes || guac["prop-types"]).string,
    });
    const Ne = {
      left: "flex-start",
      right: "flex-end",
    };

    function Ve({
      alignment: e = "center",
      heading: t,
      text: a,
      actionComponent: r,
      action: l,
      ...n
    }) {
      const i = t && o.s(t),
        c = a && o.s(a),
        s = {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          "> *": {
            maxWidth: "100%",
          },
          alignItems: Ne[e] || e,
          textAlign: e,
          ...o.a("medium"),
          "@xs-only": o.a(
            "about2" === this.base.widgetPreset ? "small" : "medium"
          ),
        };
      return (
        l &&
          (r = (global.React || guac.react).createElement(He, {
            key: "action",
            action: l,
          })),
        this.merge(
          {
            tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
              .Block,
            group: "Content",
            children: [
              !!i &&
                i.children &&
                (global.React || guac.react).createElement(De, {
                  key: "heading",
                  heading: i,
                }),
              !!c &&
                c.children &&
                (global.React || guac.react).createElement(We, {
                  key: "text",
                  text: c,
                  alignment: e,
                }),
              !!r && r,
            ],
            style: s,
          },
          n
        )
      );
    }

    function je({
      data: e = [],
      render: t = (e) => e,
      cellProps: r,
      cellStyle: o,
      alignmentOption: l = "center",
      ...n
    }) {
      const i = e.length;
      let c;
      c =
        i > 1
          ? i < 6 && i % 2 == 0
            ? {
                xs: 12,
                sm: 6,
                md: 6,
              }
            : {
                xs: 12,
                sm: 6,
                md: 4,
              }
          : {
              xs: 12,
              sm: 8,
            };
      return this.merge(
        {
          tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component
            .Grid,
          children: e.map((e, l) =>
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Grid
                .Cell,
              a.a({}, r || c, {
                key: e.key || l,
                children: t(e, l),
                style: o,
              })
            )
          ),
          style: {
            textAlign: "center",
            justifyContent: {
              left: "flex-start",
              center: "center",
              right: "flex-end",
            }[l],
          },
        },
        n
      );
    }

    function Fe({ heading: e, subheading: t, ...r }) {
      const l = e && o.s(e),
        n = t && o.s(t);
      return this.merge(
        {
          tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
          children: [
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                .Heading,
              a.a(
                {
                  key: "heading",
                },
                l
              )
            ),
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Heading
                .Sub,
              a.a(
                {
                  key: "sub",
                },
                n
              )
            ),
          ],
          style: { ...o.a("small") },
        },
        r
      );
    }

    function $e({ rating: e, ...t }) {
      let a = 5,
        r = e;
      const o = this.base.keyId,
        l = "ZILLOW" === this.base.widgetType ? "rgb(28,182,71)" : "#FBCF1E",
        n = [];
      for (; a--; )
        r >= 1 ? n.push(100) : r < 1 && r > 0 ? n.push(100 * r) : n.push(0),
          r--;
      return this.merge(
        {
          tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
          section: "default",
          category: "neutral",
          children: n.map((e, t) =>
            (function (e) {
              const {
                width: t,
                fill: a,
                color: r,
                emptyColor: o,
                key: l,
                keyId: n,
              } = e;
              return (global.React || guac.react).createElement(
                "div",
                {
                  key: l,
                  style: {
                    width: `${t}px`,
                  },
                },
                (global.React || guac.react).createElement(
                  (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                    .SVG,
                  {
                    viewBox: "0 0 50 50",
                    style: {
                      width: "100%",
                      height: "auto",
                    },
                  },
                  (global.React || guac.react).createElement(
                    "defs",
                    null,
                    (global.React || guac.react).createElement(
                      "linearGradient",
                      {
                        id: `fillStyle-${n}-${l}`,
                      },
                      (function (e, t, a) {
                        if (100 === e)
                          return [
                            (global.React || guac.react).createElement("stop", {
                              offset: "0%",
                              stopColor: t,
                              key: "gradient1",
                            }),
                            (global.React || guac.react).createElement("stop", {
                              offset: "100%",
                              stopColor: t,
                              key: "gradient2",
                            }),
                          ];
                        return [
                          (global.React || guac.react).createElement("stop", {
                            offset: "0%",
                            stopColor: t,
                            key: "gradient3",
                          }),
                          (global.React || guac.react).createElement("stop", {
                            offset: `${e}%`,
                            stopColor: t,
                            key: "gradient4",
                          }),
                          (global.React || guac.react).createElement("stop", {
                            offset: `${e}%`,
                            stopColor: a,
                            key: "gradient5",
                          }),
                          (global.React || guac.react).createElement("stop", {
                            offset: "100%",
                            stopColor: a,
                            key: "gradient6",
                          }),
                        ];
                      })(a, r, o)
                    )
                  ),
                  (global.React || guac.react).createElement("path", {
                    d: "m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z",
                    fill: `url(#fillStyle-${n}-${l})`,
                  })
                )
              );
            })({
              key: `star-${t}`,
              fill: e,
              width: "20",
              color: l,
              emptyColor: "rgb(224,224,224)",
              keyId: o,
            })
          ),
          style: {
            display: "flex",
            backgroundColor: "section",
          },
        },
        t
      );
    }

    function Ge({ heading: e, headingProps: t = {}, action: r, ...o }) {
      return this.merge(
        {
          tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
            .Container,
          group: "Card",
          groupType: "Banner",
          children: (global.React || guac.react).createElement(
            (global.React || guac.react).Fragment,
            null,
            e &&
              (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                  .Block,
                null,
                (global.React || guac.react).createElement(
                  (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                    .Heading,
                  a.a(
                    {
                      level: 2,
                    },
                    t
                  ),
                  e
                )
              ),
            r &&
              (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                  .Block,
                null,
                r
              )
          ),
        },
        o
      );
    }

    function qe(e) {
      const {
          size: t,
          xs: a = t,
          sm: r = a,
          md: o = r,
          lg: l = o,
          spacing: n,
          spacingXs: i = n,
          spacingSm: c = i,
          spacingMd: s = c,
          spacingLg: g = s,
          tag: p,
          children: u,
          wrap: d,
          equal: h,
          bottom: m,
          gutter: y,
          column: b,
          reverse: f,
          inset: C,
        } = e,
        {
          Grid: x,
          Grid: { Cell: w },
        } = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component,
        T = {
          display: "flex",
          boxSizing: "border-box",
          flexDirection: b ? "column" : "row",
          flexWrap: d ? "wrap" : "nowrap",
        };
      f && (T.flexDirection += "-reverse"), x.applySizingStyles(T, e, this);
      const P = {
          gutter: y,
          bottom: m,
          equal: h,
          column: b,
          spacing: n,
          spacingXs: i,
          spacingSm: c,
          spacingMd: s,
          spacingLg: g,
          gridXs: a,
          gridSm: r,
          gridMd: o,
          gridLg: l,
        },
        k = C ? { ...P, inset: C } : P,
        v = (global.React || guac.react).Children.toArray(u)
          .filter((e) => {
            const t = typeof e;
            return "object" === t
              ? (global.React || guac.react).isValidElement(e)
              : "string" !== t || !!e;
          })
          .map((e, t) => {
            const a = e && e.type;
            let r;
            if (a && a.prototype) {
              if (a === w || a.prototype instanceof w)
                return (global.React || guac.react).cloneElement(e, k);
              (a === x || a.prototype instanceof x) &&
                (r = { ...(e && e.props && e.props.style), margin: 0 });
            }
            return (global.React || guac.react).createElement(
              w,
              {
                key: t,
                ...k,
                style: r,
              },
              e
            );
          });
      return v.length
        ? this.merge(
            {
              tag: p,
              style: T,
              children: v,
            },
            (global._ || guac.lodash).omit(e, Object.keys(x.propTypes))
          )
        : null;
    }

    function Ye(e) {
      const {
          tag: t,
          children: a,
          first: r,
          last: o,
          equal: l,
          column: n,
          inset: i,
        } = e,
        { Grid: c } = (global.Core || guac["@wsb/guac-widget-core"]).UX2
          .Component,
        s = {
          boxSizing: "border-box",
          flexGrow: "1",
          flexShrink: "1",
          flexBasis: n ? "auto" : "0%",
          maxWidth: "100%",
        };
      l && ((s.display = "flex"), (s.flexWrap = "wrap")),
        r ? (s.order = -1) : o && (s.order = 1);
      const g = i
        ? { ...e, gridSm: 12, sm: 10, pushSm: 1, md: 8, pushMd: 2 }
        : e;
      return (
        c.Cell.applySizingStyles(s, e, this),
        c.Cell.applyPushPullStyles(s, g),
        c.Cell.applySizeStyles(s, g),
        this.merge(
          {
            tag: t,
            style: s,
            children: l
              ? (global.React || guac.react).Children.map(a, (e) =>
                  (global.React || guac.react).cloneElement(e, {
                    style: {
                      ...(e.props && e.props.style),
                      flexGrow: "1",
                      flexShrink: "1",
                      flexBasis: "100%",
                    },
                  })
                )
              : a,
          },
          (global._ || guac.lodash).omit(e, Object.keys(c.Cell.propTypes))
        )
      );
    }

    function Ze({ heading: e, subheading: t, media: a, ...r }) {
      return this.merge(
        {
          tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
          children: [
            a &&
              a.url &&
              (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component
                  .Background,
                {
                  key: "background",
                  backgroundImage: a.url,
                }
              ),
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component
                .HeadingPair,
              {
                key: "heading",
                heading: e,
                subheading: t,
              }
            ),
          ],
          style: {
            textAlign: "left",
            display: "flex",
            flexDirection: "row",
            ...o.b("medium"),
          },
        },
        r
      );
    }

    function Je({
      children: e,
      style: t,
      backgroundImage: a = "",
      backgroundPosition: o,
      backgroundSize: i,
      backgroundImage2: c,
      backgroundSize2: s,
      mobileImage: g,
      mobileSize: p = "cover",
      imageData: u = {},
      ...d
    }) {
      const { _instance: h } = this.base,
        m = this.base.state || {},
        {
          id: y,
          responsiveImage: b,
          backgroundImage: f,
          isResponsive: C,
          layers: x = [],
          widgetType: w,
          widgetPreset: T,
        } = m,
        P = {
          backgroundPosition: o || "center",
          backgroundSize: i || "cover",
          backgroundBlendMode: "normal",
          backgroundRepeat: "no-repeat",
          textShadow: "none",
          ...t,
          transition:
            (t && t.transition ? t.transition + ", " : "") +
            "opacity 0.25s, background-size 0.25s, background-position 0.25s",
          ...(m.backgroundBlendMode && {
            backgroundBlendMode: m.backgroundBlendMode,
          }),
          ...(m.backgroundSize && {
            backgroundSize: m.backgroundSize,
          }),
          ...(m.backgroundPosition && {
            backgroundPosition: m.backgroundPosition,
          }),
        };
      let k, v;
      a &&
        !h &&
        (k = {
          "data-guac-image": "loading",
        });
      const E = d.overlay || this.constructor.getDefaultImageOverlayType(w, T);
      if (E !== l.a) {
        const { category: e } = this.base;
        let t = "accentOverlay";
        if (E === l.C) t = "sectionOverlay";
        else if (E === l.P) t = "primaryOverlay";
        else if (E === l.N) t = "neutralOverlay";
        else if (E === l.A) t = "accentOverlay";
        else if (E === l.L)
          if ("primary" === e) {
            t = (global.Core || guac["@wsb/guac-widget-core"]).UX2.utils
              .getTheme(this.base.context, {
                category: "primary",
                section: "default",
              })
              .mapPropValue("backgroundColor", "section")
              .isLight()
              ? "neutralOverlay"
              : "accentOverlay";
          } else t = "sectionOverlay";
        (t = (global.Core || guac["@wsb/guac-widget-core"]).UX2.utils
          .getTheme(this.base.context, {
            category: e,
            section: "overlay",
          })
          .mapPropValue("backgroundColor", t)),
          void 0 !== d.overlayAlpha
            ? (t.alpha = d.overlayAlpha)
            : void 0 !== u.overlayAlpha
            ? (t.alpha = u.overlayAlpha)
            : (t.alpha = this.constructor.getDefaultImageOverlayOpacity(w, T)),
          x.push && x.push(`linear-gradient(to bottom, ${t} 0%, ${t} 100%)`);
      }
      if (f) {
        if (("HEADER" !== w && (P.textShadow = n.a), C)) {
          const e =
            b ||
            (global.Core || guac["@wsb/guac-widget-core"]).utils.Image.getUrl(
              r.a(f, {
                qt: "q:1",
              }),
              {
                x: 50,
                y: 50,
              }
            );
          P.backgroundImage = `url("${r.c(e.replace(/"/g, '\\"'))}")`;
          const t =
              x.length > 0
                ? {
                    useTreatmentData: !0,
                    backgroundLayers: x,
                  }
                : {},
            a = [
              `new guacImage("${f}"`,
              `document.getElementById('${y}')`,
              `${JSON.stringify(t)})`,
            ].join(",");
          v = (global.React || guac.react).createElement("script", {
            key: y,
            dangerouslySetInnerHTML: {
              __html: a,
            },
          });
        } else
          a &&
            ((a = r.c(a)),
            (P.backgroundImage = `url("${a.replace(/"/g, '\\"')}")`));
        if (x.length > 0) {
          const e = `url("${null == u ? void 0 : u.image}")`;
          P.backgroundImage = []
            .concat(x, [P.backgroundImage || e || ""])
            .filter(Boolean)
            .join(", ");
        }
        if (
          (c &&
            ((P.backgroundImage = `${P.backgroundImage}, url("${c.replace(
              /"/g,
              '\\"'
            )}")`),
            s && (P.backgroundSize = `${P.backgroundSize}, ${s}`)),
          x.length &&
            (P.backgroundSize = `${"auto, ".repeat(x.length)}${
              P.backgroundSize
            }`),
          g)
        ) {
          const e = {
            backgroundImage: `${
              x.length
                ? `${x.join(", ")}, url("${g.replace(/"/g, '\\"')}")`
                : `url("${g.replace(/"/g, '\\"')}")`
            } !important`,
            backgroundSize: p,
          };
          (P["@xs-only"] = { ...e, ...P["@xs-only"] }),
            (P["@sm-only"] = { ...e, ...P["@sm-only"] });
        }
      }
      return this.merge(
        {
          id: y,
          style: P,
          tag: "div",
          role: "img",
          children: [e, v],
          ...k,
        },
        (global._ || guac.lodash).omit(d, "title")
      );
    }
    const {
      XS_MAX: Qe,
      SM_MIN: Ke,
      SM_MAX: et,
      MD_MIN: tt,
      MD_MAX: at,
      LG_MIN: rt,
      LG_MAX: ot,
      XL_MIN: lt,
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants.breakpoints;

    function nt({
      xsSrc: e,
      smSrc: t = e,
      mdSrc: a = t,
      lgSrc: r = a,
      xlSrc: o = r,
      imgSrc: l = a || r || o,
      imgAlt: n = "",
      ...i
    }) {
      const { dataAid: c, style: s = {} } = i;
      return this.merge(
        {
          tag: "picture",
          "data-aid": c,
          style: s,
          children: (global.React || guac.react).createElement(
            (global.React || guac.react).Fragment,
            null,
            e &&
              (global.React || guac.react).createElement("source", {
                srcSet: e,
                media: `(max-width: ${Qe}px)`,
              }),
            t &&
              (global.React || guac.react).createElement("source", {
                srcSet: t,
                media: `(min-width: ${Ke}px) and (max-width: ${et}px)`,
              }),
            a &&
              (global.React || guac.react).createElement("source", {
                srcSet: a,
                media: `(min-width: ${tt}px) and (max-width: ${at}px)`,
              }),
            r &&
              (global.React || guac.react).createElement("source", {
                srcSet: r,
                media: `(min-width: ${rt}px) and (max-width: ${ot}px)`,
              }),
            o &&
              (global.React || guac.react).createElement("source", {
                srcSet: o,
                media: `(min-width: ${lt}px)`,
              }),
            l &&
              (global.React || guac.react).createElement("img", {
                src: l,
                alt: n,
              })
          ),
        },
        i
      );
    }
    const { PUBLISH: it } = (global.Core || guac["@wsb/guac-widget-core"])
        .constants.renderModes,
      {
        XS_MAX: ct,
        SM_MIN: st,
        SM_MAX: gt,
        MD_MIN: pt,
        MD_MAX: ut,
        LG_MIN: dt,
        LG_MAX: ht,
        XL_MIN: mt,
      } = (global.Core || guac["@wsb/guac-widget-core"]).constants.breakpoints;

    function yt(e) {
      return e.replace(/"/g, '\\"');
    }

    function bt(
      e,
      { gradient: t, lowResBg: a, desktopWidth: o, mobileWidth: l }
    ) {
      const n = [1, 2, 3];
      return [
        {
          max: ct,
        },
        {
          min: st,
          max: gt,
        },
        {
          min: pt,
          max: ut,
        },
        {
          min: dt,
          max: ht,
        },
        {
          min: mt,
          max: 1920,
        },
        {
          min: 1921,
        },
      ].reduce(
        (i, c) => (
          n.forEach((n) => {
            const s = c.min ? o : l;
            i[
              (function ({ min: e, max: t, density: a }) {
                const r = [
                  e ? `(min-width: ${e}px)` : "",
                  t ? `(max-width: ${t}px)` : "",
                ]
                  .filter(Boolean)
                  .join(" and ");
                return `@media ${r} and (-webkit-min-device-pixel-ratio: ${a}), ${r} and (min-resolution: ${
                  96 * a
                }dpi)`;
              })({ ...c, density: n })
            ] = {
              backgroundImage: [
                t,
                `url("${yt(
                  r.a(e, { rs: c.max ? `w:${s * c.max * n},m` : "w:100%25" })
                )}")`,
                a,
              ]
                .filter(Boolean)
                .join(", "),
            };
          }),
          i
        ),
        {}
      );
    }

    function ft({
      style: e,
      backgroundImage: t,
      backgroundPosition: a,
      backgroundSize: o,
      mobileImage: i,
      mobileSize: c = "cover",
      imageData: s = {},
      backgroundImage2: g,
      backgroundSize2: p,
      children: u,
      mobileWidth: d = 1,
      desktopWidth: h = 1,
      blur: m,
      ...y
    }) {
      const {
          widgetType: b,
          widgetPreset: f,
          renderMode: C,
          id: x,
        } = this.base,
        w = this.constructor.getDefaultBackgroundFilter(b, f);
      let T = {
        backgroundPosition: s.position || a || "center",
        backgroundSize: o || "cover",
        backgroundBlendMode: "normal",
        backgroundRepeat: "no-repeat",
        textShadow: "none",
        ...e,
      };
      const P = y.overlay || this.constructor.getDefaultImageOverlayType(b, f);
      let k = "";
      if (
        ((t = s.image
          ? r.g({
              filter: w,
              ...s,
            })
          : t),
        m &&
          (t = r.a(t, {
            "fx-bl": "s:90",
          })),
        P !== l.a)
      ) {
        const { category: e } = this.base;
        let t = "accentOverlay";
        if (P === l.C) t = "sectionOverlay";
        else if (P === l.P) t = "primaryOverlay";
        else if (P === l.N) t = "neutralOverlay";
        else if (P === l.A) t = "accentOverlay";
        else if (P === l.L)
          if ("primary" === e) {
            t = (global.Core || guac["@wsb/guac-widget-core"]).UX2.utils
              .getTheme(this.base.context, {
                category: "primary",
                section: "default",
              })
              .mapPropValue("backgroundColor", "section")
              .isLight()
              ? "neutralOverlay"
              : "accentOverlay";
          } else t = "sectionOverlay";
        (t = (global.Core || guac["@wsb/guac-widget-core"]).UX2.utils
          .getTheme(this.base.context, {
            category: e,
            section: "overlay",
          })
          .mapPropValue("backgroundColor", t)),
          void 0 !== y.overlayAlpha
            ? (t.alpha = y.overlayAlpha)
            : void 0 !== s.overlayAlpha
            ? (t.alpha = s.overlayAlpha)
            : (t.alpha = this.constructor.getDefaultImageOverlayOpacity(b, f)),
          (k = `linear-gradient(to bottom, ${t} 0%, ${t} 100%)`);
      }
      "HEADER" !== b && (T.textShadow = n.a), (t = r.c(t));
      let v;
      if (r.i(t)) {
        t = t
          .replace(
            /\/rs=w:{width},h:{height},cg:true,m\/cr=w:{width},h:{height},a[x]?:[^/]*/,
            ""
          )
          .replace(/\/:$/, "");
        const e = `url("${yt(r.a(t, { rs: "w:50,cg:true,mx", qt: "q:1" }))}")`;
        T = {
          ...T,
          ...bt(t, {
            gradient: k,
            lowResBg: e,
            desktopWidth: h,
            mobileWidth: d,
          }),
        };
      } else
        T.backgroundImage = [k, `url("${yt(t)}")`].filter(Boolean).join(", ");
      if (
        C === it &&
        ("BACKGROUND_IMAGE_RENDERED" === y["data-aid"] ||
          "BACKGROUND_IMAGE2_RENDERED" === y["data-aid"])
      ) {
        const e = `var bgEl=document.getElementById("${x}"),match=bgEl&&/url\\(\\"([^\\)]*)\\"\\)/.exec(window.getComputedStyle(bgEl).getPropertyValue("background-image"));if(match&&match[1]){${l.c}; var e=match[1],t=new Image;t.onload=t.onerror=window.markVisuallyComplete,t.src=e;}`;
        v = (global.React || guac.react).createElement("script", {
          key: x,
          dangerouslySetInnerHTML: {
            __html: e,
          },
        });
      }
      if (
        (g &&
          ((T.backgroundImage = `${T.backgroundImage}, url("${g.replace(
            /"/g,
            '\\"'
          )}")`),
          p && (T.backgroundSize = `${T.backgroundSize}, ${p}`)),
        i)
      ) {
        const e = {
          backgroundImage: `${
            k
              ? `${k}, url("${i.replace(/"/g, '\\"')}")`
              : `url("${i.replace(/"/g, '\\"')}")`
          } !important`,
          backgroundSize: c,
        };
        (T["@xs-only"] = { ...e, ...T["@xs-only"] }),
          (T["@sm-only"] = { ...e, ...T["@sm-only"] });
      }
      return this.merge(
        {
          style: T,
          tag: "div",
          role: "img",
          id: x,
          children: [u, v],
          backgroundImage: t,
        },
        (global._ || guac.lodash).omit(y, ["title"])
      );
    }

    function Ct(e) {
      return this.BackgroundResponsive({ ...e, desktopWidthMultiplier: 0.5 });
    }

    function xt({
      backgroundImage: e,
      imageTreatments: t,
      backgroundInfo: a,
      ...r
    }) {
      const { treatmentLayout: o, overlayAlpha: l = 20 } = a;
      let n, i;
      const c = (t[o] || "").split("-");
      if ("Fit" === o || "Fill" === o)
        (n = {
          backgroundImage: `url("${e.replace(/"/g, '\\"')}")`,
          backgroundSize: "Fill" === o ? "cover" : "contain",
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
        }),
          c.length > 1 &&
            "overlay" === c[1] &&
            (i = (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
              {
                style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "section",
                  opacity: l / 100,
                },
                section: "default",
                category: "category" === c[0] ? r.category : c[0],
              }
            ));
      else {
        const t = {
          maxWidth: "60%",
          maxHeight: "60%",
        };
        (i = (global.React || guac.react).createElement("img", {
          src: e,
          style: t,
          alt: "",
        })),
          (n = {
            backgroundColor: "section",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }),
          "Blur" === o &&
            ((n.backgroundImage = `url("${e.replace(
              /"/g,
              '\\"'
            )}/fx-bl=s:90")`),
            (n.backgroundSize = "cover"),
            (n.backgroundPosition = "center"));
      }
      return this.merge(
        {
          tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
          style: n,
          children: i,
        },
        r
      );
    }
    const wt = {
      "@sm": {
        maxWidth: "smContainer",
      },
      "@md": {
        maxWidth: "mdContainer",
      },
      "@lg": {
        maxWidth: "lgContainer",
      },
    };

    function Tt({ fixedWidth: e, children: t, innerContainerStyle: a, ...r }) {
      const o = {
        backgroundColor: "section",
        width: "100%",
        "> div": {
          position: "relative",
          overflow: "hidden",
          margin: "auto",
          ...(e ? wt : {}),
        },
      };
      return this.merge(
        {
          tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
          category: "neutral",
          section: "default",
          children: (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            {
              className: "page-inner",
              style: a,
            },
            t
          ),
          style: o,
        },
        r
      );
    }
    const {
        renderModes: Pt,
        widgetTypes: { HEADER: kt, FOOTER: vt },
      } = (global.Core || guac["@wsb/guac-widget-core"]).constants,
      Et = [
        "theme",
        "category",
        "section",
        "style",
        "className",
        "groupType",
        "id",
      ];

    function Rt({ children: e, ...t }) {
      const { widgetType: a } = this.base,
        r = a === kt ? "main" : a === vt ? "contentinfo" : "region",
        o =
          "HEADER" === this.base.widgetType && !t.tagline && t.isHomepage
            ? (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                  .Element,
                {
                  style: {
                    display: "none",
                  },
                  "data-route": "tagline",
                }
              )
            : null,
        l =
          this.base.renderMode === Pt.EDIT
            ? (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                  .Element,
                {
                  "data-field-id": "widgetSibling",
                }
              )
            : null;
      return this.merge(
        {
          tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
            .Widget,
          children: (global.React || guac.react).createElement(
            "div",
            null,
            l,
            " ",
            e,
            " ",
            o
          ),
          group: "Widget",
          role: r,
          style: {
            backgroundColor: "section",
          },
        },
        (global._ || guac.lodash).pickBy(
          t,
          (e, t) => -1 !== Et.indexOf(t) || 0 === t.indexOf("data-")
        )
      );
    }

    function St(e) {
      return this.Widget(
        this.merge(
          {
            groupType: "Banner",
          },
          e
        )
      );
    }

    function Lt(e) {
      return this.Widget(
        this.merge(
          {
            groupType: "Split",
          },
          e
        )
      );
    }
    const { Link: At } = (global.Core || guac["@wsb/guac-widget-core"])
        .components,
      Bt = (global.PropTypes || guac["prop-types"]).shape({
        url: (global.PropTypes || guac["prop-types"]).string,
        pageId: (global.PropTypes || guac["prop-types"]).string,
        widgetId: (global.PropTypes || guac["prop-types"]).string,
        linkId: (global.PropTypes || guac["prop-types"]).string,
        target: (global.PropTypes || guac["prop-types"]).string,
      });
    class It extends (global.React || guac.react).Component {
      render() {
        const { image: e, widgetPreset: t } = this.props,
          {
            link: r,
            type: o = "image",
            style: l = {},
            imageStyle: n = {},
            height: i,
            width: c,
            enableInlineImageEdit: s,
            ...g
          } = e;
        let p = {
          imageData: {
            image: e,
          },
          style: {
            height: i,
            width: c,
            ...n,
          },
        };
        const u = {
            style: {
              marginLeft: "auto",
              marginRight: "auto",
              ...l,
            },
          },
          d = "image" === o;
        d || (u.style.width = "100%"),
          s
            ? (p = { ...p, ...g })
            : Object.keys(g).forEach((e) => {
                ("data-route" === e || e.startsWith("data-field") ? u : p)[e] =
                  g[e];
              });
        const h =
            "about1" === t
              ? (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Image
                  .Thumbnail
              : (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                  .Image,
          m = d
            ? (global.React || guac.react).createElement(
                h,
                a.a(
                  {
                    tag: "img",
                  },
                  p
                )
              )
            : (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component
                  .Background,
                a.a({}, e, {
                  backgroundImage: e.src,
                  style: p.style,
                })
              ),
          y = r
            ? (global.React || guac.react).createElement(
                At,
                {
                  linkData: r,
                },
                m
              )
            : m;
        return (global.React || guac.react).createElement(
          (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Wrapper
            .Image,
          u,
          y
        );
      }
    }
    a._(It, "propTypes", {
      image: (global.PropTypes || guac["prop-types"]).shape({
        alt: (global.PropTypes || guac["prop-types"]).string,
        src: (global.PropTypes || guac["prop-types"]).string,
        link: Bt,
        type: (global.PropTypes || guac["prop-types"]).oneOf([
          "image",
          "background",
        ]),
        height: (global.PropTypes || guac["prop-types"]).oneOfType([
          (global.PropTypes || guac["prop-types"]).number,
          (global.PropTypes || guac["prop-types"]).string,
        ]),
        width: (global.PropTypes || guac["prop-types"]).oneOfType([
          (global.PropTypes || guac["prop-types"]).number,
          (global.PropTypes || guac["prop-types"]).string,
        ]),
        backgroundSize: (global.PropTypes || guac["prop-types"]).oneOf([
          "contain",
          "cover",
        ]),
        style: (global.PropTypes || guac["prop-types"]).object,
        imageStyle: (global.PropTypes || guac["prop-types"]).object,
        enableInlineImageEdit: (global.PropTypes || guac["prop-types"]).bool,
        imageData: (global.PropTypes || guac["prop-types"]).object,
      }),
      widgetPreset: (global.PropTypes || guac["prop-types"]).string,
    });
    const { getSelectedVideoProps: Mt } = (
      global.Core || guac["@wsb/guac-widget-core"]
    ).utils;

    function Ht({
      heading: e,
      text: t,
      action: n,
      image: i,
      video: c,
      alignment: s = "center",
      longestHeadingArray: g = [],
      columnCountMap: p,
      ...u
    }) {
      const d =
          e &&
          (global.React || guac.react).createElement(De, {
            style: g.length
              ? {
                  width: "inherit",
                  top: 0,
                  "@sm": {
                    position: "absolute",
                  },
                }
              : {},
            key: "heading",
            heading: e,
          }),
        h =
          i &&
          (global.React || guac.react).createElement(It, {
            key: "image",
            image: i,
            widgetPreset: this.base.widgetPreset,
          }),
        m =
          c &&
          (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Video,
            a.a(
              {
                containerStyle: {
                  "@sm": {
                    paddingBottom: "50%",
                  },
                },
              },
              Mt(c),
              {
                columnCountMap: p,
              }
            )
          );
      n &&
        (global._ || guac.lodash).isPlainObject(t) &&
        (t.style = {
          flexGrow: 0,
        });
      const y =
          t &&
          t.children &&
          (global.React || guac.react).createElement(We, {
            key: "description",
            text: t,
          }),
        b =
          n &&
          (global.React || guac.react).createElement(He, {
            key: "action",
            action: n,
          }),
        f = [
          [
            e,
            g.length
              ? (global.React || guac.react).createElement(
                  (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                    .Block,
                  {
                    key: "heading",
                    style: {
                      order: d && d.style && d.style.order,
                      width: "100%",
                      position: "relative",
                      "> :nth-child(n)": {
                        marginBottom: 0,
                      },
                    },
                  },
                  [d, g]
                )
              : d,
          ],
          [i, h],
          [c, m],
          [t, y],
          [n, b],
        ].filter((e) => e[1]),
        C = (global._ || guac.lodash)
          .sortBy(f, (e) => {
            const t = (global._ || guac.lodash).get(e[0], "style.order", 0);
            return (global._ || guac.lodash).isNil(t) ? 0 : t;
          })
          .map((e) => e[1]);
      let x = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
        w = {
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems:
            {
              left: "flex-start",
              right: "flex-end",
            }[s] || s,
          textAlign: s,
          justifyContent: "flex-start",
          width: "100%",
          "> *": {
            maxWidth: "100%",
          },
          ...o.a("medium"),
          "@xs-only": o.a(
            "about3" === this.base.widgetPreset ? "small" : "medium"
          ),
        },
        T = {};
      const {
        src: P,
        type: k,
        overlay: v = l.A,
        overlayAlpha: E,
        style: R,
        imageData: L,
        ...A
      } = i || {};
      if (k === S) {
        (x = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component
          .Background),
          (T = {
            backgroundImage: r.g(L) || P,
            overlay: v || l.A,
            groupType: "OverlayCard",
            overlayAlpha: E,
            ...A,
          }),
          (P || (L && L.image)) &&
            ((T.category = "accent"), (T.section = "overlay")),
          (w = (global._ || guac.lodash).merge(
            w,
            {
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              paddingHorizontal: "xlarge",
              paddingVertical: "xxxlarge",
              "@md-only": {
                paddingHorizontal: "large",
              },
            },
            R
          ));
        const e = C.findIndex((e) => "image" === e.key);
        !(global._ || guac.lodash).isNil(e) && C.splice(e, 1);
      }
      return this.merge(
        {
          tag: x,
          group: "Content",
          groupType: "Card",
          children: C,
          style: w,
        },
        T,
        u
      );
    }

    function zt(e, t) {
      return Math.floor(t / e);
    }

    function Ut({ cards: e = [], cellStyle: t = {}, ...r }) {
      const l = 1 === e.length,
        n = 4 === e.length,
        i = (function (e = [], t) {
          const a = (t) => {
            const a = (global._ || guac.lodash).clone(e);
            return new Array(Math.ceil(e.length / t))
              .fill()
              .map(() => a.splice(0, t))
              .map((e) =>
                e.reduce(
                  (e, t) =>
                    (t.heading &&
                      t.heading.children &&
                      t.heading.children.length) > e.length
                      ? t.heading.children
                      : e,
                  ""
                )
              );
          };
          return {
            sm: a(2),
            md: a(t ? 2 : 3),
          };
        })(e, n),
        c = {
          "@md": l ? 1 : n ? 2 : 3,
          "@sm": l ? 1 : 2,
        },
        s = e.map((t, r) => {
          const { style: o = {}, id: l, ...s } = t,
            g = {
              visibility: "hidden",
              position: "absolute",
              marginBottom: "medium",
              width: "inherit",
              top: 0,
            },
            p = i.md[zt(n ? 2 : 3, r)],
            u = i.sm[zt(2, r)],
            d =
              e.length > 1 && (p || u)
                ? [
                    (global.React || guac.react).createElement(De, {
                      key: "hidden-heading-md",
                      style: {
                        ...g,
                        "@md": {
                          position: "relative",
                        },
                      },
                      heading: p,
                    }),
                    (global.React || guac.react).createElement(De, {
                      key: "hidden-heading-sm",
                      style: {
                        ...g,
                        "@sm-only": {
                          position: "relative",
                        },
                      },
                      heading: u,
                    }),
                  ]
                : [];
          return (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component
              .ContentCard,
            a.a(
              {
                key: l || r,
                style: {
                  flexGrow: 1,
                  ...o,
                },
                longestHeadingArray: d,
                columnCountMap: c,
              },
              s
            )
          );
        }),
        g = {
          data: s,
          cellStyle: {
            display: "flex",
            ...t,
          },
          style: {
            "@xs-only": o.a("medium"),
          },
        };
      return (
        "about1" === this.base.widgetPreset &&
          ((g.cellProps = {
            xs: 12,
            sm: 6,
            md: 4,
            ...(4 === s.length
              ? {
                  pushMd: 0.001,
                  pullMd: 0.001,
                }
              : {}),
          }),
          (g.style = {
            ...g.styles,
            justifyContent: s.length <= 4 ? "center" : "flex-start",
          })),
        this.ContentWrap(this.merge(g, r))
      );
    }

    function Dt({
      contentElement: e,
      mediaElement: t,
      reverse: r,
      bleed: o,
      fluid: l,
      gridProps: n = {},
      ...i
    }) {
      const c = this.parseSizedUnit(this.mapPropValue("spacing", "medium"))[0],
        s = l
          ? {
              marginHorizontal: `-${c}px`,
            }
          : {},
        g = o
          ? {
              "@md": {
                height: "100%",
                [`margin${
                  r ? "Left" : "Right"
                }`]: `calc(100% - (50vw - ${c}px))`,
              },
            }
          : {},
        p = [
          e
            ? (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component
                  .Grid.Cell,
                {
                  key: "slot1",
                },
                e
              )
            : null,
          t
            ? (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component
                  .Grid.Cell,
                {
                  key: "slot2",
                  style: {
                    flex: 1,
                    "@md": {
                      flex: 1,
                    },
                  },
                },
                (global.React || guac.react).createElement(
                  (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                    .Block,
                  {
                    style: { ...s, ...g, position: "relative" },
                  },
                  t
                )
              )
            : null,
        ].filter(Boolean);
      return this.merge(
        {
          tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
            .Container,
          fluid: l,
          children: (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Grid,
            a.a(
              {
                xs: 1,
                md: p.length || 1,
              },
              n
            ),
            r ? p.reverse() : p
          ),
        },
        i
      );
    }

    function Xt({ align: e, ...t }) {
      return this.HorizontalBox(
        this.merge(
          {
            alignX: e || "middle",
            style: {
              flexDirection: "column",
              width: "auto",
              height: "100%",
            },
          },
          t
        )
      );
    }

    function Ot({ align: e, ...t }) {
      return this.Box(
        this.merge(
          {
            alignX: e || "left",
            style: {
              height: "auto",
              width: "100%",
            },
          },
          t
        )
      );
    }

    function _t({ alignX: e, alignY: t, ...a }) {
      const r = {
        top: "flex-start",
        left: "flex-start",
        start: "flex-start",
        middle: "center",
        center: "center",
        bottom: "flex-end",
        right: "flex-end",
        end: "flex-end",
      };
      return this.merge(
        {
          tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
          style: {
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: r[e] || "normal",
            alignItems: r[t] || "stretch",
          },
        },
        a
      );
    }

    function Wt({
      children: e,
      onClose: t,
      closeOnClickOutside: a,
      preventShrink: r,
      width: o,
      style: l,
      ...n
    }) {
      const i = (global._ || guac.lodash).merge(
          {
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            border: "0",
            position: "fixed",
            zIndex: "1002",
            overflowY: "auto",
            backgroundColor: "accentOverlay",
          },
          l
        ),
        c = (global.React || guac.react).createElement(
          (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Modal
            .Body,
          {
            children: e,
            onClose: t,
            preventShrink: r,
            width: o,
          }
        );
      return this.merge(
        {
          tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
          category: "neutral",
          style: i,
          children: c,
          onClick: a ? t : null,
        },
        n
      );
    }
    const Nt = ({ id: e, onClose: t, style: a }) => {
      const r = (global._ || guac.lodash).merge(
        {
          icon: {
            color: "highContrast",
            cursor: "pointer",
          },
          container: {
            display: "flex",
            justifyContent: "flex-end",
            paddingHorizontal: "small",
            paddingTop: "small",
            paddingBottom: "xsmall",
          },
        },
        a
      );
      return (global.React || guac.react).createElement(
        (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
        {
          style: r.container,
        },
        (global.React || guac.react).createElement(
          (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon,
          {
            id: e && `${e}-close-icon`,
            icon: "close",
            size: "medium",
            style: r.icon,
            onClick: t,
          }
        )
      );
    };
    Nt.propTypes = {
      id: (global.PropTypes || guac["prop-types"]).string,
      onClose: (global.PropTypes || guac["prop-types"]).func.isRequired,
      style: (global.PropTypes || guac["prop-types"]).object,
    };
    const Vt = ({ children: e, style: t }) =>
      (global.React || guac.react).createElement(
        (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
        {
          children: e,
          style: {
            alignSelf: "center",
            maxWidth: "100%",
            height: "100%",
            overflowY: "auto",
            paddingHorizontal: "small",
            "@sm": {
              overflowY: "visible",
              paddingHorizontal: "small",
            },
            ...t,
          },
        }
      );

    function jt({
      id: e,
      onClose: t,
      children: a,
      preventShrink: r,
      width: o,
      styles: l = {},
      ...n
    }) {
      const i = {
          "@sm": {
            position: "relative",
            width: "auto",
            transform: "translate(0,0)",
            maxWidth: o ? `${o}px` : "600px",
            marginVertical: "medium",
            marginHorizontal: "auto",
            display: "flex",
            alignItems: "center",
            pointerEvents: "none",
            ":before": {
              display: "block",
              height: "90vh",
              content: '""',
            },
          },
        },
        c = {
          position: "relative",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "neutral",
          boxShadow: "0 4px 12px 0 rgba(117,117,117,0.4)",
          paddingBottom: "small",
          "@sm": {
            width: "100%",
            pointerEvents: "auto",
            borderRadius: "large",
          },
        },
        s = (global._ || guac.lodash).merge(
          {
            bodyWrapper: {
              ...i,
              "@xs-only": r
                ? { ...i }
                : {
                    position: "fixed",
                    left: "0",
                    right: "0",
                    top: "0",
                    bottom: "0",
                    marginVertical: "0",
                    marginHorizontal: "0",
                  },
            },
            body: {
              ...c,
              "@xs-only": r
                ? { ...c }
                : {
                    position: "fixed",
                    left: "0",
                    right: "0",
                    top: "0",
                    bottom: "0",
                    borderRadius: "0",
                  },
            },
          },
          l
        ),
        g = (global.React || guac.react).createElement(
          (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
          {
            style: s.body,
            onClick: (e) => {
              e.stopPropagation();
            },
          },
          (global.React || guac.react).createElement(Nt, {
            id: e,
            onClose: t,
            style: l.closeIcon,
          }),
          (global.React || guac.react).createElement(Vt, {
            children: a,
            style: l.content,
          })
        );
      return this.merge(
        {
          tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
          role: "dialog",
          children: g,
          style: s.bodyWrapper,
        },
        n
      );
    }
    Vt.propTypes = {
      children: (global.PropTypes || guac["prop-types"]).node.isRequired,
      style: (global.PropTypes || guac["prop-types"]).object,
    };
    const { NEUTRAL: Ft } = (global.Core || guac["@wsb/guac-widget-core"])
        .constants.categoryTypes,
      { EDIT: $t } = (global.Core || guac["@wsb/guac-widget-core"]).constants
        .renderModes,
      { SIDELINE_SIDEBAR_ZINDEX: Gt } = (
        global.Core || guac["@wsb/guac-widget-core"]
      ).constants.themeConstants;

    function qt({
      children: e,
      onClose: t,
      closeOnClickOutside: a,
      preventShrink: r,
      width: o,
      styles: l = {},
      ...n
    }) {
      const { renderMode: i } = this.base,
        c = {
          modal: {
            position: i === $t ? "absolute" : "fixed",
            display: "flex",
            justifyContent: "center",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            border: "0",
            zIndex: Gt + 1,
            overflowY: "auto",
            backgroundColor: "modalOverlay",
          },
          bodyWrapper: {
            "@sm": {
              position: "absolute",
              width: "100%",
              transform: "none",
              justifyContent: "center",
            },
          },
          body: {
            position: "fixed",
            padding: "xlarge",
            height: "max-content",
            "@xs-only": {
              width: "auto",
              margin: "small",
              borderRadius: "large",
            },
            "@sm": {
              maxWidth: "80%",
            },
            "@md": {
              maxWidth: "50%",
            },
          },
          closeIcon: {
            position: "absolute",
            paddingRight: "medium",
            right: 0,
            top: "20px",
            paddingTop: 0,
            paddingBottom: 0,
            "@sm": {
              paddingRight: "large",
            },
          },
          content: {
            alignSelf: "center",
            width: "100%",
            maxWidth: "100%",
            height: "auto",
            overflowY: "hidden",
            paddingHorizontal: "medium",
            "> *:not(:last-child)": {
              marginBottom: "large",
            },
            "@sm": {
              overflowY: "hidden",
              paddingHorizontal: "large",
            },
          },
        },
        s = (global._ || guac.lodash).merge(c, l),
        g = (global.React || guac.react).createElement(
          (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Modal
            .Body,
          {
            id: n.id,
            children: e,
            onClose: t,
            preventShrink: r,
            width: o,
            styles: s,
          }
        );
      return this.merge(
        {
          tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
          category: Ft,
          style: s.modal,
          children: g,
          onClick: a ? t : null,
        },
        n
      );
    }
    const { POPUP: Yt } = (global.Core || guac["@wsb/guac-widget-core"])
      .constants.widgetTypes;

    function Zt({ style: e = {}, ...t }) {
      const { widgetType: a } = this.base,
        r = {
          ...(a === Yt && {
            position: "absolute",
          }),
          padding: "0",
          top: "0",
          left: "0",
          bottom: "0",
          right: "0",
          border: "0",
          borderRadius: "0",
          zIndex: "1002",
          width: "100%",
          height: "100%",
          opacity: "0.75",
          backgroundColor: "accentOverlay",
          ...e,
        };
      return this.merge(
        {
          tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
          style: r,
        },
        t
      );
    }

    function Jt({
      assetProps: e,
      product: t,
      determineStyles: r,
      dataAids: o = {},
      imageCropMethod: l,
      translate: n,
      children: i,
      productsPerRow: c,
      ...s
    }) {
      const { renderMode: g } = s,
        p = Number(c) && r ? r.bind(null, c) : () => !1,
        u = {
          product: t,
          getStyles: p,
          translate: n,
        };
      return this.merge(
        {
          tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
          group: "Product",
          groupType: "Card",
          children: [
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Product
                .Asset,
              a.a(
                {
                  key: "asset",
                },
                e,
                {
                  dataAids: o,
                  imageCropMethod: l,
                }
              )
            ),
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Product
                .Name,
              {
                key: "name",
                product: t,
                getStyles: p,
              }
            ),
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Product
                .Prices,
              a.a(
                {
                  key: "price",
                },
                u,
                {
                  renderMode: g,
                  dataAids: o,
                }
              )
            ),
            t.variant_count && t.variant_count >= 2
              ? (global.React || guac.react).createElement(
                  (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group
                    .Product.Label,
                  {
                    key: "options",
                    children: `[${n("products.more_options")}]`,
                    getStyles: p,
                    "data-aid": o.options,
                  }
                )
              : null,
            t.ship_free &&
              (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Product
                  .Label,
                {
                  key: "shipping",
                  shipping: !0,
                  children: n("products.free_shipping"),
                  getStyles: p,
                  "data-aid": o.shipFree,
                }
              ),
          ].concat(i),
        },
        s
      );
    }

    function Qt({
      alignment: e = "left",
      heading: t = {},
      text: r = {},
      ...o
    }) {
      const l = t && t.children,
        n = r && r.children;
      if (!l && !n) return null;
      const i = {
          paddingTop: l ? "xsmall" : 0,
          "@md": {
            paddingTop: l ? "small" : 0,
          },
        },
        c = {
          marginBottom: 0,
          "@md": {
            marginBottom: 0,
          },
        },
        s = n
          ? (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Grid,
              {
                key: "intro",
                inset: "center" === e,
                bottom: !1,
              },
              (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text,
                a.a(
                  {
                    style: i,
                  },
                  r
                )
              )
            )
          : null,
        g = l
          ? (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                .Heading,
              a.a(
                {
                  key: "heading",
                  style: c,
                },
                t
              )
            )
          : null;
      return this.merge(
        {
          tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
          style: {
            marginBottom: l ? "xlarge" : "medium",
            textAlign: e,
          },
          children: [g, s],
        },
        o
      );
    }

    function Kt({
      beforeContent: e,
      button: t = {},
      secondaryButton: r,
      afterContent: o,
      renderMode: l,
      ...n
    }) {
      const i = {
        container: {
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          height: "inherit",
          border: "1px solid rgba(255,255,255,0.15)",
          backgroundColor: "!rgba(0,0,0,.7)",
          boxShadow: "0 4px 12px 0 rgba(117,117,117,0.4)",
          borderRadius: "8px",
          "> :first-child": {
            marginTop: "large",
          },
          "> :last-child": {
            marginBottom: "large",
          },
          paddingHorizontal: "100px",
          "@xs-only": {
            paddingHorizontal: "large",
          },
        },
        buttonGroupWrapper: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginVertical: "32px",
          "> button": {
            marginHorizontal: "8px",
          },
          "@xs-only": {
            marginVertical: "24px",
            flexDirection: "column",
            "> button": {
              width: "100%",
              marginHorizontal: "0",
              marginVertical: "8px",
            },
          },
        },
        buttonStyle: { ...t.style },
        ...(r && {
          secondaryButtonStyle: { ...r.style },
        }),
      };
      let c = null;
      if (
        l ===
        (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes
          .EDIT
      ) {
        const l = (global._ || guac.lodash).get(
          window,
          "ux.Button",
          (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Button
        );
        c = (global.React || guac.react).createElement(
          (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Container
            .Fluid,
          {
            "data-edit-interactive": !0,
            category: "accent",
            section: "overlay",
            style: i.container,
          },
          e,
          (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            {
              style: i.buttonGroupWrapper,
            },
            (global.React || guac.react).createElement(
              l,
              a.a(
                {
                  className: "keep-defaults",
                  style: i.buttonStyle,
                },
                t
              )
            ),
            r &&
              (global.React || guac.react).createElement(
                l,
                a.a(
                  {
                    design: "defaultLightSecondary",
                    className: "keep-defaults",
                    style: i.secondaryButtonStyle,
                  },
                  r
                )
              )
          ),
          o
        );
      }
      return this.merge(
        {
          children: c,
        },
        {
          style: {
            margin: "0 auto",
          },
        },
        n
      );
    }
    const { DEFAULT: ea, ALT: ta } = (
      global.Core || guac["@wsb/guac-widget-core"]
    ).constants.sectionTypes;

    function aa({ children: e, icon: t, onClose: a, section: r, ...o }) {
      const l = {
          container: {
            display: "flex",
            alignItems: "flex-start",
            padding: "small",
            backgroundColor: "section",
          },
          icon: {
            flexShrink: 0,
            marginRight: "xsmall",
            color: "section",
          },
          text: {
            alignSelf: "center",
          },
          closeContainer: {
            flexShrink: 0,
            paddingLeft: "small",
            marginLeft: "auto",
          },
          link: {
            color: "section",
          },
          ...o.style,
        },
        n = (global.React || guac.react).createElement(
          (global.React || guac.react).Fragment,
          null,
          Boolean(t) &&
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon,
              {
                icon: t,
                style: l.icon,
              }
            ),
          (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text,
            {
              children: e,
              style: l.text,
            }
          ),
          Boolean(a) &&
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
              {
                style: l.closeContainer,
              },
              (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Link,
                {
                  onClick: a,
                  style: l.link,
                },
                (global.React || guac.react).createElement(
                  (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                    .Icon,
                  {
                    icon: "close",
                  }
                )
              )
            )
        );
      return this.merge(
        {
          tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
          style: l.container,
          children: n,
          section: r === ea ? ta : ea,
        },
        o
      );
    }

    function ra({
      input: e = {},
      button: t = {},
      error: r,
      errorProps: o = {},
      ...l
    }) {
      const n = {
          wrapper: {
            display: "flex",
            flexDirection: "column",
            "@sm": {
              flexDirection: "row",
            },
          },
          errorWrapperDesktop: {
            "@xs-only": {
              display: "none",
            },
          },
          errorWrapperMobile: {
            "@sm": {
              display: "none",
            },
            marginBottom: "medium",
          },
          inputWrapper: {
            display: "flex",
            flexGrow: 1,
            marginBottom: r ? 0 : "medium",
            "@sm": {
              marginVertical: "xxsmall",
            },
          },
          input: {
            width: "100%",
            "@sm": {
              marginRight: "medium",
              height: "100%",
            },
            ...(e.style || {}),
          },
          button: {
            width: "100%",
            marginHorizontal: 0,
            "@xs-only": {
              marginVertical: 0,
            },
            "@sm": {
              marginVertical: "xxsmall",
              maxWidth: "30%",
            },
            ...(t.style || {}),
          },
          error: {
            position: "static",
            "@sm": {
              position: "absolute",
            },
            ...(o.style || {}),
          },
        },
        i = (global.React || guac.react).createElement(
          (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Input
            .FloatLabel,
          a.a({}, e, {
            style: n.input,
          })
        ),
        c = (global.React || guac.react).createElement(
          (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Button
            .Primary,
          a.a(
            {
              tag: "button",
              type: "submit",
            },
            t,
            {
              style: n.button,
            }
          )
        ),
        s =
          r &&
          (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Error,
            a.a(
              {
                alert: !0,
              },
              o,
              {
                style: n.error,
              }
            ),
            r
          ),
        g = (global.React || guac.react).createElement(
          (global.React || guac.react).Fragment,
          null,
          (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            {
              style: n.wrapper,
            },
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
              {
                style: n.inputWrapper,
              },
              " ",
              i,
              " "
            ),
            s &&
              (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                  .Block,
                {
                  style: n.errorWrapperMobile,
                },
                " ",
                s,
                " "
              ),
            c
          ),
          s &&
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
              {
                style: n.errorWrapperDesktop,
              },
              " ",
              s,
              " "
            )
        );
      return this.merge(
        {
          tag: (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Form,
          children: g,
        },
        l
      );
    }
    const oa = "major",
      la = "medium",
      na = {
        mobile: {
          display: "block",
          "@md": {
            display: "none",
          },
        },
        desktop: {
          display: "none",
          "@md": {
            display: "block",
          },
        },
      };

    function ia({
      name: e,
      imageUrl: t,
      cardType: r,
      category: o,
      isImageShown: l,
      overlayAlpha: n,
      priceText: i,
      linkText: c,
      productType: s,
      isPriceShown: g,
      price: p,
      salePrice: u,
      dataAids: d,
      ...h
    }) {
      let m = "neutral",
        y = "neutral";
      "primary" !== o && ((m = "primary"), (y = "primaryOverlay"));
      const b = l
        ? {
            category: "accent",
          }
        : {
            category: m,
          };
      let f = "accent";
      l || (f = "primary" === m ? "primary" : "neutral");
      const C = l ? "transparent" : y;
      let x = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group
        .CommerceOverlay;
      r === oa
        ? (x = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group
            .CommerceOverlay.Major)
        : r === la &&
          (x = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group
            .CommerceOverlay.Medium);
      const w = {
          name: e,
          linkCategory: f,
          cardType: r,
          isImageShown: l,
          isPriceFeatured: !0,
          priceText: i,
          linkText: c,
          productType: s,
          isPriceShown: g,
          price: p,
          salePrice: u,
          titleProps: {
            align: r === oa || r === la ? "center" : "left",
          },
          dataAids: d,
        },
        T = (global.React || guac.react).createElement(
          x,
          null,
          (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component
              .CommerceCardPictureContainer,
            a.a(
              {
                backgroundColor: C,
              },
              b
            ),
            (global.React || guac.react).createElement(
              (global.React || guac.react).Fragment,
              null,
              l &&
                (global.React || guac.react).createElement(
                  (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component
                    .CommerceCardPicture,
                  {
                    assetUrl: t,
                    overlayAlpha: n,
                  }
                ),
              r !== oa &&
                (global.React || guac.react).createElement(
                  (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group
                    .CommerceOverlay.Mobile,
                  null,
                  (global.React || guac.react).createElement(
                    (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component
                      .CommerceCardContent,
                    a.a({}, w, {
                      style: na.mobile,
                    })
                  )
                ),
              (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component
                  .CommerceCardContent,
                a.a({}, w, {
                  style: r === oa ? {} : na.desktop,
                })
              )
            )
          )
        );
      return this.merge(
        {
          children: T,
        },
        h
      );
    }

    function ca({
      name: e,
      duration: t,
      price: a,
      imageUrl: r,
      ribbonText: o,
      cardSize: l,
      imageShape: n,
      imageCropMethod: i,
      hasImageBorder: c,
      productType: s,
      isBoxed: g,
      style: p,
      eyebrowText: u,
      footerText: d,
      footerAlert: h,
      eventDate: m,
      buttonText: y,
      priceText: b,
      salePrice: f,
      ratings: C,
      dataAids: x,
      dataRoutes: w,
      ...T
    }) {
      const P = g
          ? (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Card.Link
          : (global.React || guac.react).Fragment,
        k = g && {
          style: {
            flexGrow: 1,
          },
        },
        v = {
          cursor: "pointer",
          ...p,
        },
        E = g
          ? {
              display: "flex",
              height: "100%",
              ...v,
            }
          : { ...v },
        R = Boolean(r),
        S = {
          name: e,
          duration: t,
          price: a,
          productType: s,
          isBoxed: g,
          hasImage: R,
          eyebrowText: u,
          footerText: d,
          footerAlert: h,
          eventDate: m,
          buttonText: y,
          priceText: b,
          salePrice: f,
          dataAids: x,
          dataRoutes: w,
          ratings: C,
          titleProps: {
            align: !R && g ? "center" : "left",
          },
          isPriceShown: !0,
        },
        L = (global.React || guac.react).createElement(
          P,
          k,
          (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group
              .CommerceItem,
            null,
            R &&
              (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component
                  .CommerceCardPictureContainer,
                {
                  imageShape: n,
                  containerStyles: {
                    marginBottom: "small",
                  },
                  canHaveBorder: !g,
                  hasImageBorder: c,
                },
                (global.React || guac.react).createElement(
                  (global.React || guac.react).Fragment,
                  null,
                  (global.React || guac.react).createElement(
                    (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component
                      .CommerceCardPicture,
                    {
                      assetUrl: r,
                      imageCropMethod: i,
                      dataAids: x,
                    }
                  ),
                  o &&
                    (global.React || guac.react).createElement(
                      (global.Core || guac["@wsb/guac-widget-core"]).UX2
                        .Component.CommerceCardRibbon,
                      {
                        dataAids: x,
                        cardSize: l,
                      },
                      o
                    )
                )
              ),
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component
                .CommerceCardContent,
              S
            )
          )
        );
      return this.merge(
        {
          children: L,
          style: E,
        },
        T
      );
    }
    const sa = {
      vertical: "133%",
      square: "100%",
      horizontal: "75%",
    };

    function ga({
      children: e,
      backgroundColor: t,
      imageShape: a,
      hasImageBorder: r,
      containerStyles: o,
      canHaveBorder: l,
      ...n
    }) {
      const i = {
          position: "relative",
          paddingTop: sa[a] || sa.square,
          paddingRight: "100%",
          ...(l
            ? {
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: r ? "section" : "transparent",
              }
            : {}),
          ...o,
          ":before": {
            content: '""',
            position: "absolute",
            top: "0px",
            bottom: "0px",
            left: "0px",
            right: "0px",
            backgroundColor: t,
          },
        },
        c = (global.React || guac.react).createElement(
          (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Wrapper,
          {
            children: e,
          }
        );
      return this.Block(
        this.merge(
          {
            children: c,
            style: i,
          },
          n
        )
      );
    }
    const pa = {
      eyebrow: {
        marginBottom: "xsmall",
        textTransform: "uppercase",
      },
      priceRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
      },
      eventDate: {
        marginTop: "xxsmall",
      },
      footer: {
        marginTop: "small",
      },
      button: {
        marginTop: "xsmall",
      },
    };

    function ua({
      name: e,
      duration: t,
      eventDate: r,
      price: o,
      salePrice: l,
      priceText: n,
      productType: i,
      eyebrowText: c,
      footerText: s,
      footerAlert: g,
      ratings: p,
      cardType: u,
      isBoxed: d,
      dataAids: h = {},
      dataRoutes: m = {},
      buttonText: y,
      isPriceShown: b,
      isImageShown: f,
      linkText: C,
      linkCategory: x,
      isPriceFeatured: w,
      style: T,
      hasImage: P,
      titleProps: k,
      ...v
    }) {
      const E =
          !P && d
            ? {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flexGrow: 1,
                marginVertical: "large",
              }
            : {},
        R = this.merge(
          {
            position: "relative",
            paddingHorizontal: d ? "small" : "0",
            paddingBottom: d && P ? "medium" : "0",
            ...E,
          },
          T
        ),
        S =
          b && p
            ? (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block
            : (global.React || guac.react).Fragment,
        L = b &&
          p && {
            style: pa.priceRow,
          },
        A = (global.React || guac.react).createElement(
          (global.React || guac.react).Fragment,
          null,
          c &&
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Details
                .Minor,
              {
                style: pa.eyebrow,
                "data-aid": h.eyebrow,
              },
              c
            ),
          (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component
              .CommerceCardTitle,
            a.a(
              {
                title: e,
                isDigitalProduct: "digital" === i,
                dataAids: h,
              },
              k
            )
          ),
          r &&
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Details
                .Minor,
              {
                style: pa.eventDate,
                "data-aid": h.eventDate,
              },
              r
            ),
          (global.React || guac.react).createElement(
            S,
            L,
            b &&
              (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component
                  .CommerceCardPriceDisplay,
                {
                  price: o,
                  salePrice: l,
                  priceText: n,
                  duration: t,
                  isLinkShown: Boolean(C),
                  cardType: u,
                  dataAids: h,
                  isPriceFeatured: w,
                  styles: {
                    marginRight: p ? "xxsmall" : "0",
                  },
                }
              ),
            p &&
              (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                  .Block,
                null,
                p
              )
          ),
          s &&
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Details
                .Minor,
              {
                style: pa.footer,
                "data-aid": h.footer,
                alert: g,
              },
              s
            ),
          y &&
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Button
                .Spotlight,
              {
                style: pa.button,
                "data-aid": h.button,
                "data-route": m.button,
              },
              y
            ),
          C &&
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                .MoreLink,
              {
                category: x,
                section: f ? "overlay" : "default",
                tag: "span",
              },
              C
            )
        );
      return this.Block(
        this.merge(
          {
            children: A,
            style: R,
          },
          v
        )
      );
    }

    function da({
      price: e,
      salePrice: t,
      cardType: r,
      priceText: o,
      duration: l,
      dataAids: n = {},
      isLinkShown: i,
      isPriceFeatured: c,
      styles: s,
      ...g
    }) {
      const p = t && {
          priceState: "expired",
        },
        u = {
          container: {
            display: "flex",
            justifyContent: r === oa ? "center" : "flex-start",
            marginBottom: i ? "xxsmall" : 0,
            "@sm": {
              marginBottom: i ? "xsmall" : 0,
              justifyContent: r === oa || r === la ? "center" : "flex-start",
            },
            ...s,
          },
          duration: {
            display: "inline-block",
            ":after": {
              content: '"|"',
              marginHorizontal: "xsmall",
            },
          },
          range: {
            display: "inline-block",
            marginRight: "xsmall",
          },
          original: {
            display: "inline-block",
            fontWeight: c && !t ? "bold" : "normal",
            ...(!c && t
              ? {
                  color: "neutral",
                }
              : {}),
          },
          sale: {
            display: "inline-block",
            marginLeft: "xsmall",
            fontWeight: c ? "bold" : "normal",
          },
        },
        d = (global.React || guac.react).createElement(
          (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
          {
            active: !0,
            style: u.container,
          },
          l &&
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Price,
              {
                children: l,
                featured: !0,
                style: u.duration,
              }
            ),
          o &&
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Price,
              {
                children: o,
                featured: !0,
                style: u.range,
              }
            ),
          (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Price,
            a.a(
              {
                key: "original",
                "data-aid": n.price,
                style: u.original,
              },
              p,
              {
                children: e,
              }
            )
          ),
          t &&
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Price,
              {
                key: "sale",
                "data-aid": n.salePrice,
                style: u.sale,
                children: t,
              }
            )
        );
      return this.merge(
        {
          children: d,
        },
        g
      );
    }

    function ha({ title: e, isDigitalProduct: t, dataAids: r = {}, ...o }) {
      const l = (global.React || guac.react).createElement(
        (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Heading,
        a.a(
          {
            featured: !0,
            "data-aid": r.name,
          },
          o
        ),
        t &&
          (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon,
            {
              icon: "digitalProduct",
            }
          ),
        e
      );
      return this.merge(
        {
          children: l,
        },
        o
      );
    }

    function ma({
      assetUrl: e,
      overlayAlpha: t,
      imageCropMethod: a,
      dataAids: o = {},
      ...l
    }) {
      if (!e) return null;
      const n = {
          position: "absolute",
          top: "0px",
          bottom: "0px",
          left: "0px",
          right: "0px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "shrink_to_fit" === a ? "contain" : "cover",
        },
        i = r.r(e, "/:/rs=w:{width},h:{height},cg:false,m"),
        c = (global.React || guac.react).createElement(
          (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component
            .Background,
          {
            backgroundImage: i,
            overlayAlpha: t,
            style: n,
            "data-aid": o.image,
          }
        );
      return this.merge(
        {
          children: c,
        },
        l
      );
    }

    function ya({ children: e, dataAids: t = {}, cardSize: a, ...r }) {
      const o = (global.React || guac.react).createElement(
        (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Label,
        {
          "data-aid": t.ribbon,
          size: a,
        },
        e
      );
      return this.merge(
        {
          children: o,
        },
        r
      );
    }

    function ba(e) {
      return this.Group(this.merge(e));
    }

    function fa(e) {
      return this.merge(
        {
          tag: "main",
          section: "default",
          style: {
            paddingVertical: "large",
            "@md": {
              paddingVertical: "0",
              paddingHorizontal: "xlarge",
            },
          },
        },
        e
      );
    }

    function Ca(e) {
      return this.LinkArrow(
        this.merge(
          {
            style: {
              marginBottom: "xlarge",
            },
          },
          e
        )
      );
    }

    function xa(e) {
      return this.HeadingMiddle(
        this.merge(
          {
            level: 2,
            style: {
              marginBottom: "xsmall",
            },
          },
          e
        )
      );
    }

    function wa(e) {
      return this.Details(
        this.merge(
          {
            level: 5,
            style: {
              marginBottom: "xlarge",
            },
          },
          e
        )
      );
    }

    function Ta(e) {
      return this.merge(
        {
          tag: "aside",
          style: {
            height: "100%",
            paddingVertical: "large",
            borderWidth: "0",
            borderStyle: "solid",
            borderColor: "section",
            borderLeftWidth: "0px",
            borderTopWidth: "1px",
            "@md": {
              paddingVertical: "0",
              paddingHorizontal: "xlarge",
              borderLeftWidth: "1px",
              borderTopWidth: "0px",
            },
          },
        },
        e
      );
    }

    function Pa(e) {
      return this.HeadingMinor(
        this.merge(
          {
            level: 4,
            style: {
              marginBottom: "xlarge",
            },
          },
          e
        )
      );
    }

    function ka(e) {
      return this.Text(
        this.merge(
          {
            style: {
              "> *": {
                marginBottom: "20px !important",
              },
              "> *:last-child": {
                marginBottom: "0 !important",
              },
            },
          },
          e
        )
      );
    }

    function va(e) {
      const t = this.base.groupType || this.base.kind,
        a = e.size || "default",
        r =
          "Link" === t
            ? {
                ":hover": {
                  boxShadow: "card",
                },
              }
            : {};
      return this.Group(
        this.merge(
          {
            category: "neutral",
            section: "default",
            style: {
              backgroundColor: "section",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "section",
              ...{
                small: {
                  height: "375px",
                },
                default: {},
                large: {
                  height: "435px",
                },
              }[a],
              "@md": { ...r },
            },
          },
          e
        )
      );
    }

    function Ea(e) {
      return this.HeadingMinor(
        this.merge(
          {
            style: {
              lineHeight: "1",
            },
          },
          e
        )
      );
    }

    function Ra(e) {
      return this.Heading(
        this.merge(
          {
            level: 6,
          },
          e
        )
      );
    }

    function Sa(e) {
      return this.HeadingMinor(e);
    }

    function La(e) {
      const { richtext: t } = e;
      let a = {};
      if (t) {
        const e = {
          textAlign: "left",
          display: "block",
          paddingLeft: "1.3em",
          marginHorizontal: "large",
          marginVertical: "auto",
        };
        a = {
          "> p > ol": e,
          "> p > ul": e,
          "> ul": e,
          "> ol": e,
        };
      }
      return this.Text(
        this.merge(
          {
            style: a,
          },
          e
        )
      );
    }

    function Aa(e) {
      return this.ContentBasic(
        this.merge(
          {
            style: { ...o.a("small") },
          },
          e
        )
      );
    }

    function Ba(e) {
      return this.HeadingMiddle(e);
    }

    function Ia(e) {
      return this.TextMajor(
        this.merge(
          {
            featured: "overlay" === this.base.section,
            style: {
              lineHeight: this.mapPropValue("lineHeightLevel", 4),
            },
          },
          e
        )
      );
    }

    function Ma(e) {
      return e;
    }

    function Ha(e) {
      return this.LinkContent(
        this.merge(
          {
            style: {
              color: "inherit",
              ":hover": {
                color: "inherit",
              },
            },
          },
          e
        )
      );
    }

    function za(e) {
      return this.merge(
        {
          tag: "div",
        },
        e
      );
    }

    function Ua(e) {
      return this.Tagline(e);
    }

    function Da(e) {
      return this.Heading(
        this.merge(
          {
            typography: "LogoAlpha",
            style: {
              lineHeight: "1.2",
              wordWrap: "break-word",
              overflowWrap: "break-word",
              maxWidth: "100%",
            },
          },
          e
        )
      );
    }

    function Xa(e) {
      return this.Background(
        this.merge(
          {
            section: "alt",
            style: {
              backgroundColor: "section",
              flexShrink: "0",
              height: "100px",
              width: "100px",
            },
          },
          e
        )
      );
    }

    function Oa(e) {
      return this.HeadingMinor(e);
    }

    function _a(e) {
      return this.Heading(
        this.merge(
          {
            level: "5",
          },
          e
        )
      );
    }
    const {
      NONE: Wa,
      INLINE: Na,
      SMALL_UNDERLINE: Va,
      FULL_UNDERLINE: ja,
    } = n.s;

    function Fa(e) {
      return this.Group(
        this.merge(
          {
            tag: "section",
            style: {
              backgroundColor: "section",
              paddingVertical: "xxlarge",
              "@xs-only": {
                paddingVertical: "xlarge",
              },
            },
          },
          e
        )
      );
    }

    function $a(e, t, a) {
      const r = {
          fontSize: "unset",
          color: "inherit",
          fontFamily: "unset",
          textTransform: "unset",
          letterSpacing: "unset",
        },
        o = {
          content: '""',
          height: "1px",
          marginTop: "-1px",
          background: "currentColor",
          position: "absolute",
          top: ".75em",
          width: "100vw",
          display: "block",
        },
        l = {
          ...r,
          display: "inline-block",
          position: "relative",
          maxWidth: "80%",
          ":before": {
            right: "100%",
            marginRight: "medium",
            ...o,
          },
          ":after": {
            left: "100%",
            marginLeft: "medium",
            ...o,
          },
        };
      if (t === Na)
        return (global.React || guac.react).createElement(
          (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Element,
          {
            style: l,
            richtext: a,
          },
          e
        );
      if (t === Va) {
        const o = {
            width: "100%",
            lineHeight: "0px",
          },
          l = {
            display: "inline-block",
          };
        return [
          (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Base,
            {
              key: "child",
              richtext: a,
              style: r,
            },
            e
          ),
          (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
            {
              key: "hr",
              style: o,
            },
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.HR,
              {
                group: "SectionHeading",
                sectionHeadingHR: t,
                style: l,
              }
            )
          ),
        ];
      }
      if (t === ja) {
        const o = {
          marginBottom: "0",
        };
        return [
          (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Base,
            {
              key: "child",
              richtext: a,
              style: r,
            },
            e
          ),
          (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.HR,
            {
              key: "hr",
              group: "SectionHeading",
              sectionHeadingHR: t,
              style: o,
            }
          ),
        ];
      }
      return "string" == typeof e
        ? (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Base,
            {
              key: "child",
              richtext: a,
              nakedElement: !0,
              style: r,
            },
            e
          )
        : e;
    }

    function Ga({ children: e, sectionHeadingHR: t = Wa, richtext: a, ...r }) {
      return this.Heading(
        this.merge(
          {
            level: 2,
            typography: "HeadingBeta",
            children: $a(e, t, a),
            style: {
              lineHeight: "1.4",
              overflow: "hidden",
              marginTop: 0,
              marginBottom: "xlarge",
            },
          },
          r
        )
      );
    }

    function qa({ sectionHeadingHR: e, ...t }) {
      const a = {
        [Wa]: {
          display: "none",
        },
        [Va]: {
          borderBottomWidth: "small",
          marginTop: "medium",
          marginBottom: "0",
          width: "50px",
        },
        [ja]: {
          borderColor: "lowContrast",
          borderBottomWidth: "xsmall",
          marginTop: "small",
          marginBottom: "large",
          width: "100%",
        },
      };
      return this.HR(
        this.merge(
          {
            style: a[e] || {},
          },
          t
        )
      );
    }

    function Ya(e) {
      return this.Heading(
        this.merge(
          {
            level: 4,
            style: {
              color: "highContrast",
              textAlign: "center",
              lineHeight: "1.5",
              maxWidth: "90%",
              marginBottom: "xlarge",
              marginHorizontal: "auto",
              "@md": {
                maxWidth: "80%",
              },
            },
          },
          e
        )
      );
    }

    function Za(e) {
      return this.Section(
        this.merge(
          {
            style: {
              backgroundColor: "transparent",
            },
          },
          e
        )
      );
    }

    function Ja(e) {
      return this.HeadingMajor(
        this.merge(
          {
            style: {
              textAlign: "center",
              marginBottom: e.reducedMargin ? "large" : "xxlarge",
            },
          },
          e
        )
      );
    }

    function Qa(e) {
      return this.Section(this.merge({}, e));
    }

    function Ka(e) {
      const t = e.alignmentOption ? e.alignmentOption : "left";
      return this.SectionHeading(
        this.merge(
          {
            style: {
              textAlign: t,
              "@md": {
                textAlign: t,
              },
              "@xs": {
                textAlign: "center",
              },
            },
          },
          e
        )
      );
    }

    function er(e) {
      return this.merge(
        {
          tag: "form",
          "aria-live": "polite",
          style: {
            marginBottom: "0",
          },
        },
        e
      );
    }

    function tr(e) {
      return this.Form(
        this.merge(
          {
            style: {
              width: "100%",
              "@md": {
                margin: "0",
                position: "relative",
              },
            },
          },
          e
        )
      );
    }

    function ar(e) {
      return this.Error(
        this.merge(
          {
            style: {
              marginTop: "xxsmall",
            },
          },
          e
        )
      );
    }

    function rr({ hasNav: e, pipe: t, ...a }) {
      return this.merge(
        {
          style: {
            display: "flex",
            alignItems: "center",
            lineHeight: "0",
            "@md": {
              "> :first-child": {
                marginLeft: e ? "medium" : t ? "small" : 0,
              },
            },
          },
        },
        a
      );
    }

    function or(e) {
      return this.merge(
        {
          style: {
            "> div": {
              paddingVertical: 0,
            },
          },
        },
        e
      );
    }

    function lr(e) {
      return this.merge(
        {
          style: {
            position: "relative",
          },
        },
        e
      );
    }
    const { Z_INDEX_NAV_DRAWER: nr } = (
      global.Core || guac["@wsb/guac-widget-core"]
    ).constants.layers;

    function ir({ category: e = "accent", left: t = !0, ...a }) {
      const r = {
        left: t ? 0 : "unset",
        right: t ? "unset" : 0,
      };
      return this.merge(
        {
          category: e,
          section: "default",
          style: {
            backgroundColor: "sectionOverlay",
            position: "fixed",
            top: 0,
            width: "100%",
            height: "100%",
            maxWidth: 0,
            overflowY: "auto",
            zIndex: nr,
            paddingTop: "xxlarge",
            WebkitOverflowScrolling: "touch",
            transition: "max-width .3s ease-in-out",
            ...r,
          },
          role: "navigation",
        },
        a
      );
    }

    function cr(e) {
      return this.List(
        this.merge(
          {
            role: "menu",
          },
          e
        )
      );
    }

    function sr(e) {
      return this.ListItem(
        this.merge(
          {
            style: {
              display: "block",
              marginBottom: "0",
              borderColor: "uLowContrastOverlay",
              borderBottomWidth: 1,
              borderBottomStyle: "solid",
              ":last-child": {
                borderBottom: "none",
              },
            },
            role: "menuitem",
          },
          e
        )
      );
    }

    function gr(e) {
      return this.Link(
        this.merge(
          {
            typography: "NavBeta",
            style: {
              paddingVertical: "small",
              paddingHorizontal: "medium",
              display: "flex",
              alignItems: "center",
              minWidth: 200,
              justifyContent: "space-between",
              "@md": {
                minWidth: 300,
              },
            },
          },
          e
        )
      );
    }

    function pr(e) {
      return this.NavigationDrawerLink(
        this.merge(
          {
            active: !0,
          },
          e
        )
      );
    }

    function ur(e) {
      return this.NavigationDrawerLink(
        this.merge(
          {
            typography: "SubNavBeta",
            style: {
              display: "block",
              paddingVertical: "xsmall",
              paddingLeft: "xlarge",
              paddingRight: "medium",
            },
          },
          e
        )
      );
    }

    function dr(e) {
      return this.NavigationDrawerSubLink(
        this.merge(
          {
            active: !0,
          },
          e
        )
      );
    }

    function hr(e) {
      return this.Input(
        this.merge(
          {
            style: {
              backgroundColor: "searchMobileDark",
              borderWidth: "none",
              borderRadius: "none",
              paddingVertical: "small",
              paddingHorizontal: "xlarge",
            },
            role: "searchbox",
          },
          e
        )
      );
    }

    function mr(e) {
      return this.merge(
        {
          tag: "div",
          style: {
            display: "flex",
            flexGrow: 1,
            flexShrink: 0,
            maxWidth: "100%",
            position: "relative",
            "@md": {
              flexBasis: "50%",
              maxWidth: "50%",
              justifyContent: "center",
              "> *": {
                maxWidth: "70%",
              },
            },
            ":only-child": {
              "@md": {
                flexBasis: "100%",
                maxWidth: "100%",
                "> *": {
                  maxWidth: "100%",
                },
              },
            },
          },
        },
        e
      );
    }

    function yr(e) {
      return this.SplitItem(
        this.merge(
          {
            style: {
              minHeight: "inherit",
              "> *": {
                flexGrow: 1,
              },
              "@xs-only": {
                order: -1,
              },
              "@sm-only": {
                order: -1,
              },
              "@md": {
                "> *": {
                  maxWidth: "100%",
                  width: "100%",
                },
              },
            },
          },
          e
        )
      );
    }

    function br(e) {
      return this.ContentText(
        this.merge(
          {
            style: {
              width: "100%",
            },
          },
          e
        )
      );
    }

    function fr(e) {
      const t =
        "about1" === this.base.widgetPreset
          ? {
              textAlign: "center",
              alignSelf: "center",
            }
          : {};
      return this.ContentHeading(
        this.merge(
          {
            style: t,
          },
          e
        )
      );
    }

    function Cr(e) {
      const t =
        "about1" === this.base.widgetPreset
          ? {
              alignSelf: "center",
            }
          : {};
      return this.Button(
        this.merge(
          {
            style: t,
          },
          e
        )
      );
    }

    function xr(e) {
      return this.Wrapper(
        this.merge(
          {
            style: {
              marginHorizontal: "auto",
              textAlign: "center",
            },
          },
          e
        )
      );
    }

    function wr(e) {
      return this.ImageThumbnail(e);
    }

    function Tr(e) {
      return this.ContentBigText(e);
    }

    function Pr(e) {
      return this.ContentBigHeading(e);
    }

    function kr(e) {
      return this.ContentCardButton(
        this.merge(
          {
            style: {
              marginBottom: "0px !important",
            },
          },
          e
        )
      );
    }

    function vr(e) {
      return this.merge(
        {
          tag: "div",
        },
        e
      );
    }

    function Er(e) {
      return this.Map(e);
    }

    function Rr(e) {
      return e;
    }

    function Sr(e) {
      return this.merge(
        {
          tag: "nav",
        },
        e
      );
    }

    function Lr(e) {
      return this.Link(
        this.merge(
          {
            typography: "NavAlpha",
            style: {
              display: "block",
            },
          },
          e
        )
      );
    }

    function Ar(e) {
      return this.NavLink(
        this.merge(
          {
            active: !0,
          },
          e
        )
      );
    }

    function Br(e) {
      return this.Link(
        this.merge(
          {
            style: {
              display: "inline-block",
              paddingVertical: "xxsmall",
            },
            typography: "SubNavAlpha",
          },
          e
        )
      );
    }

    function Ir(e) {
      return this.NavMenuLink(
        this.merge(
          {
            active: !0,
          },
          e
        )
      );
    }
    const Mr = {
      marginVertical: "xsmall",
      lineHeight: 1.5,
      display: "inline-block",
    };

    function Hr(e) {
      return this.NavLink(
        this.merge(
          {
            style: Mr,
          },
          e
        )
      );
    }

    function zr(e) {
      return this.NavLinkActive(
        this.merge(
          {
            style: Mr,
          },
          e
        )
      );
    }

    function Ur(e) {
      return this.NavMenuLink(e);
    }

    function Dr(e) {
      return this.NavMenuLinkActive(e);
    }

    function Xr(e) {
      return this.NavLink(e);
    }

    function Or(e) {
      return this.MobileNavLink(e);
    }

    function _r(e) {
      return this.Nav(
        this.merge(
          {
            style: {
              "@xs-only": {
                display: "flex",
                flexDirection: "column",
              },
            },
          },
          e
        )
      );
    }

    function Wr(e) {
      return this.Link(
        this.merge(
          {
            typography: "NavAlpha",
            style: {
              paddingVertical: "xsmall",
              paddingHorizontal: "xsmall",
              "@xs-only": {
                paddingVertical: "xxsmall",
              },
            },
          },
          e
        )
      );
    }

    function Nr(e) {
      return this.NavFooterLink(e);
    }

    function Vr(e) {
      return this.Heading(
        this.merge(
          {
            typography: "HeadingDelta",
            style: {
              marginBottom: "medium",
            },
          },
          e
        )
      );
    }

    function jr(e) {
      return this.List(
        this.merge(
          {
            style: {
              ul: {
                marginTop: "medium",
                marginLeft: "small",
              },
            },
          },
          e
        )
      );
    }

    function Fr(e) {
      return this.ListItem(
        this.merge(
          {
            style: {
              listStyle: "none",
            },
          },
          e
        )
      );
    }

    function $r(e) {
      return this.Link(
        this.merge(
          {
            typography: "NavGamma",
            style: {
              display: "block",
            },
          },
          e
        )
      );
    }

    function Gr(e) {
      return this.NavVerticalLink(
        this.merge(
          {
            active: !0,
          },
          e
        )
      );
    }

    function qr(e) {
      return this.List(
        this.merge(
          {
            style: {
              textAlign: "center",
            },
          },
          e
        )
      );
    }

    function Yr(e) {
      return this.ListItemInline(e);
    }

    function Zr(e) {
      return this.Link(
        this.merge(
          {
            typography: "NavGamma",
          },
          e
        )
      );
    }

    function Jr(e) {
      return this.NavHorizontalLink(
        this.merge(
          {
            active: !0,
          },
          e
        )
      );
    }

    function Qr(e) {
      return this.List(
        this.merge(
          {
            style: {
              marginLeft: "medium",
            },
          },
          e
        )
      );
    }

    function Kr(e) {
      return this.NavLink(
        this.merge(
          {
            style: {
              display: "flex",
              alignItems: "center",
            },
          },
          e
        )
      );
    }

    function eo(e) {
      return this.NavLinkActive(
        this.merge(
          {
            style: {
              display: "flex",
              alignItems: "center",
            },
          },
          e
        )
      );
    }

    function to(e) {
      return this.Block(
        this.merge(
          {
            role: "banner",
            style: {
              backgroundColor: "section",
              paddingVertical: "xxsmall",
            },
          },
          e
        )
      );
    }

    function ao(e) {
      return this.PromoBanner(e);
    }

    function ro(e) {
      return this.Container(
        this.merge(
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          },
          e
        )
      );
    }

    function oo(e) {
      return this.Text(
        this.merge(
          {
            typography: "BodyAlpha",
            featured: !0,
            "data-style-fixed": !0,
            style: {
              textAlign: "center",
            },
          },
          e
        )
      );
    }

    function lo(e) {
      return this.merge(
        {
          style: {
            "@xs": {
              borderBottomRightRadius: "10%",
            },
            "@md": {
              right: 0,
              left: "unset",
              borderBottomLeftRadius: "10%",
            },
            zIndex: 1200,
            display: "flex",
            cursor: "pointer",
            alignItems: "center",
            position: "absolute",
            color: "highContrast",
            transition: "top 750ms cubic-bezier(0.38, 0.12, 0.12, 0.85)",
            padding: "xsmall",
            backgroundColor: "sectionOverlay",
            opacity: 0.8,
            top: 0,
          },
        },
        e
      );
    }

    function no(e) {
      return this.Group(e);
    }

    function io(e) {
      return this.ContentHeading(e);
    }

    function co(e) {
      return this.ContentText(e);
    }
    const { themeConstants: so } = (
      global.Core || guac["@wsb/guac-widget-core"]
    ).constants;

    function go({ renderMode: e, sidebarWidth: t, hasContainer: a, ...r }) {
      const o = "DISPLAY" === e || "PREVIEW_RENDER_MODE" === e;
      let l;
      return (
        (l = "PUBLISH" === e ? "fixed" : a ? "relative" : "absolute"),
        this.merge(
          {
            tag: "nav",
            className: "zoom-scale-container",
            style: {
              pointerEvents: o ? "none" : "auto",
              display: "none",
              backgroundColor: "section",
              top: 0,
              left: 0,
              height: "100vh",
              width: t,
              maxWidth: 0,
              zIndex: so.SIDELINE_SIDEBAR_ZINDEX,
              transition: "max-width 0.4s ease-in-out, height 0.3s",
              boxShadow: "0 0 4px 0px rgba(0,0,0,0.2)",
              "@md": {
                display: "block",
                position: l,
              },
              "@lg": {
                display: "block",
                maxWidth: "unset !important",
                position: l,
              },
            },
          },
          r
        )
      );
    }

    function po(e) {
      return this.Container(
        this.merge(
          {
            style: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "inherit",
              height: "100%",
            },
          },
          e
        )
      );
    }

    function uo(e) {
      return this.List(
        this.merge(
          {
            style: {
              paddingLeft: 0,
              listStyleType: "none",
            },
          },
          e
        )
      );
    }
    const { themeConstants: ho } = (
      global.Core || guac["@wsb/guac-widget-core"]
    ).constants;

    function mo({ sidebarWidth: e, ...t }) {
      const { renderMode: a } = this.base;
      return this.merge(
        {
          tag: "div",
          style: {
            display: "flex",
            flexDirection: "column",
            position: "PUBLISH" === a ? "fixed" : "absolute",
            top: 0,
            left: e,
            height: "100vh",
            backgroundColor: "section",
            marginVertical: 0,
            listStyleType: "none",
            maxWidth: 0,
            overflowX: "hidden",
            zIndex: ho.SIDELINE_SIDEBAR_ZINDEX,
          },
        },
        t
      );
    }

    function yo(e) {
      return this.List(
        this.merge(
          {
            style: {
              paddingHorizontal: "xlarge",
              width: "100%",
            },
          },
          e
        )
      );
    }

    function bo(e) {
      return this.ListItem(
        this.merge(
          {
            style: {
              display: "flex !important",
              justifyContent: "center",
              whiteSpace: "nowrap",
              width: "100%",
              lineHeight: "45px",
            },
          },
          e
        )
      );
    }

    function fo(e) {
      return null !== e && "object" == typeof e;
    }

    function Co({
      product: e,
      getStyles: t = () => !1,
      translate: r,
      renderMode: o,
      dataAids: l,
      styleOverrides: n = {},
      ...i
    }) {
      if ("DISPLAY" === o) return null;
      const c = e.has_price_range ? r("products.from") : "",
        s = (function (e) {
          return fo(e.sale_price)
            ? e["on_sale?"] &&
                null !== e.sale_price.numeric &&
                void 0 !== e.sale_price.numeric
            : (function (e) {
                return (
                  e["on_sale?"] &&
                  null !== e.sale_price &&
                  void 0 !== e.sale_price
                );
              })(e);
        })(e),
        { price: g, sale_price: p } = e,
        u = {
          rangeLabel: {
            display: "inline-block",
            marginRight: "xsmall",
            ...(t()
              ? {
                  fontSize: t(),
                }
              : {}),
            ...n.rangeLabel,
          },
          original: {
            display: "inline-block",
            textAlign: "center",
            ...(t()
              ? {
                  fontSize: t(),
                }
              : {}),
            ...n.original,
          },
          sale: {
            display: "inline-block",
            marginLeft: "xsmall",
            ...(t()
              ? {
                  fontSize: t(),
                }
              : {}),
            ...n.sale,
          },
        },
        d = s
          ? {
              priceState: "expired",
            }
          : {};
      return this.Block(
        this.merge(
          {
            group: "Product",
            groupType: "Prices",
            children: [
              c &&
                (global.React || guac.react).createElement(
                  (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                    .Text,
                  {
                    key: "range",
                    children: c,
                    style: u.rangeLabel,
                  }
                ),
              (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                  .Price,
                a.a(
                  {
                    key: "original",
                    price: g,
                    "data-aid": l.price,
                    style: u.original,
                  },
                  d,
                  {
                    children: fo(g) ? g.display : g,
                  }
                )
              ),
              s &&
                (global.React || guac.react).createElement(
                  (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                    .Price,
                  {
                    key: "sale",
                    price: p,
                    "data-aid": l.salePrice,
                    style: u.sale,
                    priceState: "alert",
                    children: fo(p) ? p.display : p,
                  }
                ),
            ],
            style: {
              marginTop: "xsmall",
              textAlign: "center",
            },
          },
          i
        )
      );
    }

    function xo({
      assets: e,
      banner: t = !1,
      boxed: a = !0,
      defaultAssetUrl: o,
      getStyles: l = () => !1,
      unboxedSize: n = 100,
      dataAids: i = {},
      imageCropMethod: c,
      showBorder: s = !0,
      imageShape: g,
      noProductImage: p,
      ...u
    }) {
      const d = e && e.length ? e[0].large_url : p,
        h = o || d;
      if (!h) return null;
      const m = r.r(h, "/:/rs=w:{width},h:{height},cg:false,m"),
        y = {
          outer: {
            borderColor: s ? "section" : "transparent",
            borderWidth: "xsmall",
            borderStyle: "solid",
            position: "relative",
            paddingTop: sa[g] || sa.square,
            paddingRight: "100%",
            backgroundColor: "!rgba(255,255,255,0.1)",
          },
          inner: {
            position: "absolute",
            top: "0px",
            bottom: "0px",
            left: "0px",
            right: "0px",
            backgroundSize: "expand_to_fill" === c ? "cover" : "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          },
        };
      return a
        ? this.Block(
            this.merge(
              {
                group: "Product",
                groupType: "Asset",
                style: y.outer,
                children: [
                  (global.React || guac.react).createElement(
                    (global.Core || guac["@wsb/guac-widget-core"]).UX2.Component
                      .Background,
                    {
                      key: "background",
                      backgroundImage: m,
                      style: y.inner,
                      "data-aid": i.image,
                    }
                  ),
                  t &&
                    null !== t.text &&
                    (global.React || guac.react).createElement(
                      (global.Core || guac["@wsb/guac-widget-core"]).UX2.Group
                        .Product.Banner,
                      {
                        key: "banner",
                        getStyles: l,
                        "data-aid": i.saleBanner,
                      },
                      t.text
                    ),
                ],
              },
              u
            )
          )
        : this.Image(
            this.merge(
              {
                group: "Product",
                groupType: "Asset",
                src: r.r(h, `/:/rs=w:${n},h:${n}`),
                style: {
                  display: "block",
                  maxWidth: "100%",
                },
              },
              u
            )
          );
    }

    function wo({ getStyles: e = () => !1, ...t }) {
      return this.Block(
        this.merge(
          {
            style: {
              position: "absolute",
              bottom: "0px",
              right: "0px",
              width: "auto",
              paddingVertical:
                e({
                  saleBannerPaddingVertical: !0,
                }) || "xsmall",
              paddingHorizontal: "xsmall",
              backgroundColor: "action",
              fontColor: "action",
              fontSize: "small",
              "@md": e() || {},
              "@lg": e() || {},
              "@sm-only": {
                paddingVertical: "xxsmall",
                paddingHorizontal: "xsmall",
              },
            },
          },
          t
        )
      );
    }

    function To({ product: e, getStyles: t = () => !1, ...a }) {
      const r = "digital" === e.product_type,
        o = t({
          isProductName: !0,
        }),
        l = {
          name: {
            marginTop: "small",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "small",
            "@sm": {
              justifyContent: "center",
            },
          },
          text: {
            textAlign: "center",
            ...(o && {
              fontSize: o,
            }),
          },
          digitalProductIcon: {
            marginRight: "xxsmall",
            verticalAlign: "bottom",
            display: "inline-flex",
          },
        };
      return this.Block(
        this.merge(
          {
            group: "Product",
            groupType: "Name",
            children: (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text,
              {
                style: l.text,
                featured: !0,
              },
              r &&
                (global.React || guac.react).createElement(
                  (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                    .Element,
                  {
                    style: l.digitalProductIcon,
                  },
                  (global.React || guac.react).createElement(
                    (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                      .Icon,
                    {
                      icon: "digitalProduct",
                      style: l.digitalProductIcon,
                    }
                  )
                ),
              e.name
            ),
            style: l.name,
          },
          a
        )
      );
    }

    function Po({ getStyles: e = () => !1, shipping: t = !1, ...a }) {
      const r = e({
          isOptionOrFreeShipping: !0,
        }),
        o = {
          group: "Product",
          groupType: "Label",
          style: {
            marginTop: "small",
            textAlign: "center",
            ...(r && {
              fontSize: r,
            }),
            "@md": {
              marginTop: "xsmall",
            },
          },
        };
      return !0 === t
        ? this.DetailsMinor(this.merge(o, a))
        : this.Details(this.merge(o, a));
    }

    function ko(e) {
      return this.Container(
        this.merge(
          {
            fluid: !0,
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              paddingHorizontal: "0px",
            },
          },
          e
        )
      );
    }

    function vo({ hasBorder: e, ...t }) {
      return this.Block(
        this.merge(
          {
            style: {
              position: "relative",
              display: "flex",
              alignItems: "center",
              paddingHorizontal: "xsmall",
              backgroundColor: "section",
              ...(e && {
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                borderColor: "input",
              }),
            },
          },
          t
        )
      );
    }

    function Eo(e) {
      return this.IconSearch(
        this.merge(
          {
            style: {
              color: "highContrast",
              marginLeft: "xsmall",
              zIndex: 1,
            },
          },
          e
        )
      );
    }

    function Ro(e) {
      return this.InputSearch(
        this.merge(
          {
            style: {
              ":focus": {
                boxShadow: "none",
              },
            },
          },
          e
        )
      );
    }

    function So(e) {
      return this.Group(
        this.merge(
          {
            style: {
              width: "100%",
              textAlign: "center",
              paddingVertical: "small",
              backgroundColor: "section",
            },
          },
          e
        )
      );
    }

    function Lo(e) {
      return this.Address(
        this.merge(
          {
            style: {
              display: "block",
              "@sm": {
                display: "inline-block",
              },
            },
          },
          e
        )
      );
    }

    function Ao(e) {
      return this.Pipe(
        this.merge(
          {
            style: {
              display: "inline-block",
              marginHorizontal: "small",
            },
          },
          e
        )
      );
    }

    function Bo(e) {
      return this.Phone(
        this.merge(
          {
            style: {
              display: "inline-block",
            },
          },
          e
        )
      );
    }

    function Io(e) {
      return e;
    }

    function Mo({ align: e = "left", ...t }) {
      return this.Heading(
        this.merge(
          {
            typography: "HeadingDelta",
            section: "default",
            active: !0,
            style: {
              textAlign: e,
              marginBottom: "xxsmall",
            },
          },
          t
        )
      );
    }

    function Ho(e) {
      return this.Icon(
        this.merge(
          {
            style: {
              display: "inline-block",
              marginRight: "xxsmall",
              marginLeft: "-xxsmall",
            },
          },
          e
        )
      );
    }

    function zo(e) {
      return this.Wrapper(
        this.merge(
          {
            style: {
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              padding: "xsmall",
              "@sm": {
                padding: "small",
              },
              "@lg": {
                padding: "medium",
              },
            },
          },
          e
        )
      );
    }

    function Uo(e) {
      return this.MoreLink(
        this.merge(
          {
            icon: "arrowRight",
            iconSize: "1.4em",
            right: !0,
            active: !0,
            style: {
              display: "block",
            },
          },
          e
        )
      );
    }

    function Do(e) {
      return this.Price(
        this.merge(
          {
            featured: !0,
            section: "default",
          },
          e
        )
      );
    }

    function Xo(e) {
      return this.CommerceOverlayWrapper(
        this.merge(
          {
            style: {
              alignItems: "center",
              justifyContent: "center",
              padding: "medium",
              textAlign: "center",
            },
          },
          e
        )
      );
    }

    function Oo(e) {
      return this.CommerceOverlayMoreLink(
        this.merge(
          {
            style: {
              marginLeft: "xsmall",
            },
          },
          e
        )
      );
    }

    function _o(e) {
      return this.CommerceOverlayWrapper(
        this.merge(
          {
            style: {
              "@sm": {
                alignItems: "center",
                justifyContent: "center",
                padding: "medium",
                textAlign: "center",
              },
            },
          },
          e
        )
      );
    }

    function Wo(e) {
      return this.Heading(
        this.merge(
          {
            typography: "DetailsAlpha",
            section: "default",
            active: !0,
            style: {
              marginBottom: "xxsmall",
            },
          },
          e
        )
      );
    }

    function No(e) {
      return this.MoreLink(
        this.merge(
          {
            typography: "DetailsBeta",
            active: !0,
            icon: "arrowRight",
            iconSize: "1.4em",
            right: !0,
            style: {
              display: "block",
            },
          },
          e
        )
      );
    }

    function Vo(e) {
      return this.Text(
        this.merge(
          {
            typography: "DetailsBeta",
            section: "default",
          },
          e
        )
      );
    }

    function jo(e) {
      return this.Price(
        this.merge(
          {
            typography: "DetailsBeta",
            featured: !0,
            section: "default",
          },
          e
        )
      );
    }

    function Fo(e) {
      return this.Block(
        this.merge(
          {
            style: {
              display: "flex",
              flexDirection: "column",
              height: "100%",
            },
          },
          e
        )
      );
    }

    function $o({ align: e, ...t }) {
      return this.Heading(
        this.merge(
          {
            typography: "BodyAlpha",
            active: !0,
            featured: !0,
            style: {
              marginBottom: "xsmall",
              textAlign: e,
            },
          },
          t
        )
      );
    }

    function Go(e) {
      return this.Icon(
        this.merge(
          {
            style: {
              display: "inline-block",
              marginRight: "xxsmall",
              marginLeft: "-xxsmall",
            },
          },
          e
        )
      );
    }

    function qo(e) {
      return this.Price(
        this.merge(
          {
            typography: "DetailsAlpha",
          },
          e
        )
      );
    }

    function Yo(e) {
      return this.Wrapper(
        this.merge(
          {
            style: {
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
            },
          },
          e
        )
      );
    }

    function Zo({
      size: e = {
        xs: "large",
      },
      ...t
    }) {
      const a = {},
        r = {
          paddingHorizontal: "medium",
          paddingVertical: "small",
          top: "10px",
          right: "10px",
        };
      for (const t of Object.keys(e))
        a[t] =
          "large" === e[t]
            ? { ...r }
            : {
                paddingHorizontal: "small",
                paddingVertical: "xxsmall",
                top: "5px",
                right: "5px",
              };
      const o = {
        position: "absolute",
        display: "block",
        backgroundColor: "section",
        ...r,
        ...a.xs,
        "@sm": { ...a.sm },
        "@md": { ...a.md },
        "@lg": { ...a.lg },
        "@xl": { ...a.xl },
      };
      return this.DetailsMinor(
        this.merge(
          {
            style: o,
            category: "primary",
          },
          t
        )
      );
    }

    function Jo(e) {
      return this.Button(
        this.merge(
          {
            size: "small",
          },
          e
        )
      );
    }

    function Qo(e) {
      return this.Block(
        this.merge(
          {
            style: {
              display: "inline-grid",
              textAlign: "center",
              gridTemplateColumns: "auto",
              gridAutoFlow: "column",
              gridAutoColumns: "1fr",
              gridColumnGap: this.mapPropValue("spacing", "xsmall"),
              "@sm": {
                gridColumnGap: this.mapPropValue("spacing", "medium"),
              },
            },
          },
          e
        )
      );
    }

    function Ko(e) {
      return this.Block(
        this.merge(
          {
            style: {
              lineHeight: 1.1,
              "@xs-only": {
                backgroundColor: "actionContrast",
                padding: "xsmall",
              },
            },
          },
          e
        )
      );
    }

    function el(e) {
      return this.Block(
        this.merge(
          {
            style: {
              "@sm": {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridAutoFlow: "column",
                gridAutoColumns: "1fr",
                gridGap: this.mapPropValue("spacing", "xsmall"),
                "> span": {
                  backgroundColor: "actionContrast",
                  paddingVertical: "xsmall",
                  paddingHorizontal: "small",
                },
              },
            },
            typography: "DataAlpha",
          },
          e
        )
      );
    }

    function tl(e) {
      return this.DetailsMinor(
        this.merge(
          {
            style: {
              display: "block",
              "@xs-only": {
                color: "actionContrast",
              },
              "@sm": {
                marginTop: "xsmall",
              },
            },
          },
          e
        )
      );
    }
    const {
      buttons: { shapes: al, fills: rl },
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants;
    const ol = {
      [al.NONE]: () => ({}),
      [al.SQUARE]: function () {
        return {
          borderRadius: 0,
        };
      },
      [al.ROUND]: function () {
        return {
          borderRadius: 4,
        };
      },
      [al.PILL]: function () {
        return {
          borderRadius: 48,
        };
      },
    };
    var ll = ({ fill: e, shape: t = al.SQUARE }) =>
      e === rl.OPEN
        ? {}
        : (al[t] ||
            (console.error(`Button: shape type of ${t} is not valid.`),
            (t = al.SQUARE)),
          {
            style: ol[t](),
          });
    const {
        buttons: { fills: nl, colors: il },
      } = (global.Core || guac["@wsb/guac-widget-core"]).constants,
      cl = {
        PRIMARY: {
          color: "action",
          bgColorDefault: "action",
          bgColorActive: "actionActive",
          bgColorDefaultHover: "actionHover",
        },
        HIGHCONTRAST: {
          color: "actionContrast",
          bgColorDefault: "actionContrast",
          bgColorActive: "actionContrastActive",
          bgColorDefaultHover: "actionContrastHover",
        },
      },
      sl = {
        PRIMARY: {
          color: "highlight",
          colorHover: "action",
          borderColorHover: "actionBg",
          bgColorHover: "action",
        },
        HIGHCONTRAST: {
          color: "highContrast",
          colorHover: "actionContrast",
          borderColorHover: "actionContrastBg",
          bgColorHover: "actionContrast",
        },
      },
      gl = {
        active: {},
        default: {},
        disabled: {
          opacity: "0.4",
        },
      },
      pl = {
        PRIMARY: {
          color: "highlight",
          colorHover: "highlightHover",
          colorActive: "highlightActive",
        },
        HIGHCONTRAST: {
          color: "highContrast",
          colorHover: "section",
          colorActive: "lowContrast",
        },
      },
      ul = {
        active: {},
        default: {},
        disabled: {
          opacity: "0.4",
        },
      };
    const dl = {
      [nl.NONE]: () => ({}),
      [nl.SOLID]: function (e, t) {
        const a = {
          active: {
            backgroundColor: cl[t].bgColorActive,
          },
          default: {
            backgroundColor: cl[t].bgColorDefault,
            ":hover": {
              backgroundColor: cl[t].bgColorDefaultHover,
            },
          },
          disabled: {
            backgroundColor: cl[t].bgColorDefault,
            opacity: "0.4",
            ":active": {
              backgroundColor: cl[t].bgColorDefault,
            },
          },
        };
        return {
          color: cl[t].color,
          ...a[e],
        };
      },
      [nl.GHOST]: function (e, t, a) {
        return {
          borderWidth: a.customBorderWidth,
          borderStyle: "solid",
          backgroundColor: a.solid ? "section" : "transparent",
          color: sl[t].color,
          borderColor: "currentColor",
          ...gl[e],
          ":hover": {
            color: sl[t].colorHover,
            backgroundColor: sl[t].bgColorHover,
            borderColor: sl[t].borderColorHover,
          },
        };
      },
      [nl.OPEN]: function (e, t) {
        return {
          backgroundColor: "transparent",
          color: pl[t].color,
          alignItems: "flex-end",
          ...ul[e],
          ":hover": {
            color: pl[t].colorHover,
          },
          ":active": {
            color: pl[t].colorActive,
          },
        };
      },
    };
    var hl = ({
      fill: e = nl.SOLID,
      color: t = il.PRIMARY,
      state: a = "default",
      ...r
    }) => (
      nl[e] ||
        (console.error(`Button: fill type of ${e} is not valid.`),
        (e = nl.SOLID)),
      {
        style: dl[e](a, t, r),
      }
    );
    const {
      buttons: { shadows: ml, fills: yl, colors: bl },
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants;
    const fl = {
      [ml.NONE]: () => ({}),
      [ml.SHADOW1]: function () {
        const e =
          "accent" !== this.base.category
            ? "rgba(0, 0, 0, 0.2)"
            : "rgba(255, 255, 255, 0.2)";
        return {
          position: "relative",
          zIndex: 1,
          ":after": {
            content: '""',
            backgroundColor: "transparent",
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            margin: "auto",
            width: "100%",
            height: "100%",
            transition: "all .3s ease",
            zIndex: -1,
            boxShadow: `5px 5px 0 ${e}`,
            borderRadius: "inherit",
            opacity: 1,
          },
          ":hover": {
            ":after": {
              boxShadow: `1px 1px 0 ${e}`,
              backgroundPosition: "100% 0",
            },
          },
        };
      },
      [ml.SHADOW2]: function (e) {
        const t = this.mapPropValue(
          "backgroundColor",
          {
            PRIMARY: {
              bgColor: "action",
            },
            HIGHCONTRAST: {
              bgColor: "actionContrast",
            },
          }[e].bgColor
        );
        return {
          borderStyle: "solid",
          borderTopWidth: "0",
          borderLeftWidth: "0",
          borderRightWidth: "0",
          borderBottomWidth: "medium",
          borderBottomColor: (t.lightness > 30
            ? t.darken(15)
            : t.lighten(50)
          ).toString(),
        };
      },
    };

    function Cl({ fill: e, shadow: t = ml.NONE, color: a = bl.PRIMARY }) {
      return e !== yl.SOLID && t !== ml.NONE
        ? (console.warn("Button: shadow can only be applied to fills.SOLID."),
          {})
        : ml[t]
        ? {
            style: fl[t].call(this, a),
          }
        : (console.error(`Button: shadow type of ${t} is not valid.`), {});
    }
    const {
        buttons: { decorations: xl, fills: wl },
      } = (global.Core || guac["@wsb/guac-widget-core"]).constants,
      Tl = {
        position: "unset",
        opacity: "unset",
        zIndex: "unset",
        border: "unset",
        transition: "unset",
      };

    function Pl({ fill: e }) {
      return e !== wl.OPEN
        ? (console.warn(
            "Button: arrow decoration must be used with shapes.OPEN."
          ),
          {})
        : {
            icon: "chevronRight",
            iconLeft: !1,
            iconSize: "small",
            style: {
              paddingVertical: 0,
              svg: {
                transform: "translateX(0)",
                transition: "transform .5s ease",
              },
              ":hover svg": {
                transform: "translateX(4px)",
              },
            },
          };
    }
    const kl = {
      [xl.NONE]: () => ({}),
      [xl.UNDERLINE]: function (e) {
        return e.fill !== wl.OPEN
          ? (console.warn(
              "Button: underline decoration must be used with shapes.OPEN."
            ),
            {})
          : {
              style: {
                borderWidth: 0,
                borderBottomWidth: e.customBorderWidth,
                borderStyle: "solid",
                borderColor: "currentColor",
                paddingTop: 0,
                paddingBottom: "xxsmall",
                alignItems: "flex-end",
              },
            };
      },
      [xl.ARROW]: Pl,
      [xl.LINES]: function ({ size: e }) {
        if ("small" === e) return {};
        const t =
            this.base.renderMode ===
            (global.Core || guac["@wsb/guac-widget-core"]).constants.renderModes
              .EDIT
              ? Tl
              : {},
          a = {
            content: '""',
            display: "inline-block",
            height: 0.1,
            width: 18,
            borderTop: "1px solid !important",
          };
        return {
          style: {
            alignItems: "center",
            ":before": {
              marginRight: "xsmall",
              ...a,
            },
            ":after": {
              marginLeft: "xsmall",
              ...t,
              ...a,
            },
          },
        };
      },
      [xl.UNDERLINE_WITH_ARROW]: function (e) {
        return e.fill !== wl.OPEN
          ? (console.warn(
              "Button: underline with arrow decoration must be used with shapes.OPEN."
            ),
            {})
          : (global._ || guac.lodash).merge(
              {
                style: {
                  svg: {
                    marginTop: "-2px",
                  },
                  ".iconText": {
                    borderWidth: 0,
                    borderBottomWidth: e.customBorderWidth,
                    borderStyle: "solid",
                    borderColor: "currentColor",
                    paddingBottom: "xxsmall",
                  },
                },
              },
              Pl.call(this, e)
            );
      },
    };

    function vl(e) {
      const { decoration: t = xl.NONE } = e;
      return xl[t]
        ? kl[t].call(this, e)
        : (console.error(`Button: decoration type of ${t} is not valid.`), {});
    }
    const {
      buttons: { shapes: El, decorations: Rl, fills: Sl },
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants;
    var Ll = ({ fill: e, decoration: t, shape: a, size: r = "default" }) => {
      let o = "default";
      e === Sl.OPEN
        ? (o = "open")
        : t === Rl.LINES
        ? (o = "lines")
        : a === El.PILL && (o = "pill");
      const l = {
        default: {
          small: "small",
          default: "large",
          large: "xlarge",
        },
        pill: {
          small: "medium",
          default: "xlarge",
          large: "xlarge",
        },
        lines: {
          small: a === El.PILL ? "medium" : "small",
          default: a === El.PILL ? "medium" : "small",
          large: a === El.PILL ? "medium" : "small",
        },
        open: {
          small: 0,
          default: 0,
          large: 0,
        },
      };
      return {
        style: {
          small: {
            paddingHorizontal: l[o].small,
            paddingVertical: "xxsmall",
            minHeight: 32,
          },
          default: {
            paddingHorizontal: l[o].default,
            paddingVertical: "xsmall",
            minHeight: e === Sl.OPEN ? 32 : 48,
          },
          large: {
            paddingHorizontal: l[o].large,
            paddingVertical: "xsmall",
            minHeight: e === Sl.OPEN ? 32 : 48,
          },
        }[r],
      };
    };

    function Al({ fullWidth: e, ...t }) {
      const {
          state: a = "default",
          shape: r,
          fill: o,
          decoration: l,
          shadow: n,
          color: i,
          customBorderWidth: c = "xsmall",
          ...s
        } = t,
        g = "OPEN" === o,
        p = {
          cursor: "disabled" === a ? "not-allowed" : "pointer",
          borderStyle: "none",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          textDecoration: "none",
          overflowWrap: "break-word",
          wordWrap: "break-word",
          position: "relative",
          maxWidth: "100%",
          width: g ? "auto" : "100%",
          "@sm": {
            width: e && !g ? "100%" : "auto",
          },
        },
        u = (global._ || guac.lodash).merge(this.getButtonDefaults(), {
          shape: r,
          fill: o,
          decoration: l,
          shadow: n,
          color: i,
          customBorderWidth: c,
        });
      return this.merge(
        {},
        t,
        {
          style: p,
        },
        ...[Ll, ll, hl, vl, Cl].map((e) => e.call(this, { ...s, ...u }))
      );
    }

    function Bl({ children: e, ...t }) {
      const { state: a = "default", size: r = "default" } = t,
        o = t.href || t.target || "link" === t.theme ? "a" : "button",
        l =
          "a" === o && "_blank" === t.target
            ? {
                rel: "noopener",
              }
            : {},
        i = "small" === r ? "small" : "default",
        { icon: c, iconLeft: s = !0, iconSize: g = i, ...p } = Al.call(this, t),
        u = t.btnAddon
          ? (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                .Element,
              {
                className: "btnAddon",
              }
            )
          : null,
        d = {
          default: {
            icon: n.B,
            adjustment: "-xsmall",
          },
          small: {
            icon: n.b,
            adjustment: "-xxsmall",
          },
        },
        h =
          "OPEN" !== p.fill
            ? {
                marginLeft: s ? d[g].adjustment : 0,
                marginRight: s ? 0 : d[g].adjustment,
              }
            : {},
        m = `calc(${d[g].icon} + 8px)`,
        y = {
          common: {
            fontSize: "inherit",
            fontFamily: "inherit",
            textTransform: "inherit",
            letterSpacing: "inherit",
          },
          wrapper: {
            position: "relative",
            ...h,
          },
          icon: {
            width: d[g].icon,
            height: d[g].icon,
            position: "absolute",
            top: "50%",
            left: s ? 0 : "auto",
            right: s ? "auto" : 0,
            lineHeight: 0,
            transform: "translateY(-50%)",
            "> img": {
              display: "block",
            },
          },
          text: {
            display: "block",
            textAlign: "center",
            marginLeft: s ? m : 0,
            marginRight: s ? 0 : m,
          },
        },
        b = (global.React || guac.react).createElement(
          (global.React || guac.react).Fragment,
          null,
          u,
          (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Element,
            {
              style: { ...y.common, ...y.wrapper },
            },
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                .Element,
              {
                style: y.icon,
              },
              "string" == typeof c
                ? (global.React || guac.react).createElement(
                    (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                      .Icon,
                    {
                      icon: c,
                      size: d[g].icon,
                    }
                  )
                : c
            ),
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                .Element,
              {
                className: "iconText",
                style: { ...y.common, ...y.text },
              },
              e
            )
          )
        );
      return this.merge(
        {
          tag: o,
          disabled: "disabled" === a,
          tcclTracking: "click",
          typography: "ButtonAlpha",
          ...l,
          children: c
            ? b
            : (global.React || guac.react).createElement(
                (global.React || guac.react).Fragment,
                null,
                u,
                e
              ),
          "data-ux-btn": this.base.kind.toLowerCase(),
        },
        p,
        t
      );
    }
    const Il = {
      outline: "none",
      boxShadow: "inset 0 0 0 1px currentColor",
    };

    function Ml({
      convertToAbsolute: e,
      href: t,
      mobileIconSize: a = "large",
      domainName: r = "",
      ...o
    }) {
      const l = (global._ || guac.lodash).clone(o.children);
      if (
        (e && t && 0 !== t.indexOf("http") && (t = `https://${r}${t}`),
        "HEADER" !== this.base.widgetType &&
          t &&
          (n = t) &&
          new RegExp(
            /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/
          ).test(n) &&
          l &&
          "string" != typeof l &&
          !Array.isArray(l) &&
          l.props &&
          l.props.icon)
      ) {
        const { props: e } = l,
          t = {
            width: this.mapPropValue("iconSize", a),
            height: this.mapPropValue("iconSize", a),
          };
        l.props = {
          ...e,
          style: {
            "@sm-only": t,
            "@xs-only": t,
            ...(e.style || {}),
          },
        };
      }
      var n;
      const i = t && "#" !== t && "/" !== t ? "link" : "button",
        c = {
          role: i,
          "aria-haspopup": "button" === i ? "menu" : "_blank" === o.target,
        };
      return this.merge(
        {
          tag: "a",
          rel: "_blank" === o.target ? "noopener" : "",
          tcclTracking: "click",
          typography: "LinkAlpha",
          style: {
            textDecoration: "none",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            display: "inline",
            cursor: "pointer",
          },
          ...c,
        },
        {
          ...(global._ || guac.lodash).omit(o, [
            "renderMode",
            "domainName",
            "pageRoute",
            "isAnchor",
            "convertToAbsolute",
            "activeStyle",
            "item",
          ]),
          href: t,
          children: l,
        }
      );
    }

    function Hl(e) {
      return this.Link(
        this.merge(
          {
            style: {
              display: "flex",
              alignItems: "center",
              "> svg": {
                margin: 0,
                color: "highContrast",
                ":hover": {
                  color: "highlight",
                },
              },
            },
          },
          e
        )
      );
    }

    function zl({ left: e = !0, ...t }) {
      return (
        console.warn(
          `LinkArrow is deprecated. Use MoreLinkBackward or MoreLinkBackward. The issue is probably in ${this.base.widgetPreset}`
        ),
        !0 === e ? this.MoreLinkBackward(t) : this.MoreLinkForward(t)
      );
    }

    function Ul(e) {
      return this.Link(
        this.merge(
          {
            style: {
              textDecoration: "underline",
            },
          },
          e
        )
      );
    }

    function Dl({ refCallback: e, ...t }) {
      return this.merge(
        {
          tag: "input",
          typography: "InputAlpha",
          style: {
            backgroundColor: "input",
            borderColor: "input",
            borderWidth: 0,
            width: "100%",
            "::placeholder": {
              color: "inherit",
            },
            ":focus": { ...Il },
          },
          ref: e && ((t) => e(t)),
          role: "textbox",
          "aria-multiline": !1,
        },
        t
      );
    }

    function Xl({ searchFormLocation: e, ...t }) {
      return this.Input(
        this.merge(
          {
            style: {
              width: "100%",
              paddingLeft: n.S,
              paddingRight: "xsmall",
              paddingVertical: "xsmall",
              cursor: "auto",
              ...(e === i.D
                ? {
                    paddingLeft: "40px",
                    backgroundColor: "transparent",
                    borderStyle: "none",
                    height: "40px",
                  }
                : {
                    backgroundColor: "section",
                    borderRadius: "medium",
                    borderStyle: "solid",
                    borderWidth: "xsmall",
                  }),
            },
            role: "searchbox",
          },
          t
        )
      );
    }

    function Ol({
      placeholder: e,
      value: t,
      name: r,
      handleChange: o,
      labelFocusStyleOverrides: l = {},
      ...n
    }) {
      const { Label: i, Input: c } = (
          global.Core || guac["@wsb/guac-widget-core"]
        ).UX2.Element,
        s = {
          fontSize: "12px",
          top: "8px",
          color: "inputHighlight",
          ...l,
        },
        g = (global._ || guac.lodash).uniqueId("input");
      return this.merge(
        {
          tag: "div",
          children: [
            (global.React || guac.react).createElement(
              c,
              a.a(
                {
                  id: g,
                  key: "input",
                  group: "InputFloatLabel",
                  type: "text",
                  onChange: o,
                  name: r,
                  value: t,
                  labelFocusStyles: s,
                },
                n
              )
            ),
            (global.React || guac.react).createElement(i, {
              key: "label",
              group: "InputFloatLabel",
              for: g,
              children: e,
            }),
          ],
          style: {
            position: "relative",
          },
        },
        n
      );
    }

    function _l({ labelFocusStyles: e, ...t }) {
      return this.Input(
        this.merge(
          {
            tag: "input",
            type: "text",
            style: {
              paddingTop: "23px",
              paddingBottom: "7px",
              ":focus + label": { ...e },
              ':not([value=""]) + label': { ...e },
            },
          },
          t
        )
      );
    }

    function Wl(e) {
      return this.Label(
        this.merge(
          {
            tag: "label",
            typography: "InputAlpha",
            featured: !1,
            style: {
              position: "absolute",
              top: "30%",
              left: "15px",
              transition: "all .15s ease",
              pointerEvents: "none",
            },
          },
          e
        )
      );
    }

    function Nl(e) {
      return this.Input(
        this.merge(
          {
            tag: "textarea",
            rows: 4,
            "aria-label": e.placeholder,
            style: {
              resize: "vertical",
            },
            role: "textbox",
            "aria-multiline": !0,
          },
          e
        )
      );
    }

    function Vl(e) {
      return this.merge(
        {
          tag: "button",
          children: (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon,
            {
              icon: "chevronLeft",
              "data-edit-interactive": !0,
            }
          ),
        },
        e
      );
    }

    function jl(e) {
      return this.merge(
        {
          tag: "button",
          children: (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon,
            {
              icon: "chevronRight",
              "data-edit-interactive": !0,
            }
          ),
        },
        e
      );
    }

    function Fl(e) {
      return this.Button(
        this.merge(
          {
            fullWidth: !0,
          },
          e
        )
      );
    }

    function $l({ skin: e, ...t }) {
      const a = {
        whatsapp: {
          style: {
            color: "brandLividContrast",
            fontSize: "medium",
            fontWeight: "700",
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            backgroundColor: "brandLivid",
            ":hover": {
              backgroundColor: "brandLividHover",
            },
          },
          icon: "whatsApp",
          typography: !1,
        },
      };
      return this.Button(this.merge({ ...a[e] }, t));
    }
    const Gl = {
        section: "overlay",
        category: "accent",
        style: {
          border: "none",
          paddingVertical: "xsmall",
          paddingHorizontal: 0,
          outline: "none",
          borderRadius: 0,
          color: "highContrast",
          fontSize: "small",
          "@md": {
            paddingVertical: "xsmall",
            paddingHorizontal: "xxsmall",
          },
        },
      },
      ql = {
        style: {
          top: "50%",
          transform: "translateY(-50%)",
          position: "absolute",
          zIndex: 1,
          backgroundColor: "section",
          ":hover": {
            backgroundColor: "section",
          },
          ":active": {
            backgroundColor: "section",
          },
        },
      };

    function Yl(e) {
      return this.ButtonPrevious(
        this.merge(
          {
            style: {
              left: 0,
            },
          },
          Gl,
          ql,
          e
        )
      );
    }

    function Zl(e) {
      return this.ButtonNext(
        this.merge(
          {
            style: {
              right: 0,
            },
          },
          Gl,
          ql,
          e
        )
      );
    }
    const Jl = {
      style: {
        backgroundColor: "transparent",
        zIndex: 2,
        ":active": {
          backgroundColor: "transparent",
        },
        ":hover": {
          backgroundColor: "transparent",
        },
        "@sm": {
          backgroundColor: "sectionOverlaySoft",
          ":hover": {
            backgroundColor: "sectionOverlaySoft",
          },
          ":active": {
            backgroundColor: "sectionOverlaySoft",
          },
        },
        "@md": {
          ":hover": {
            backgroundColor: "section",
          },
        },
      },
    };

    function Ql(e) {
      return this.ButtonPrevious(this.merge(Gl, Jl, e));
    }

    function Kl(e) {
      return this.ButtonNext(this.merge(Gl, Jl, e));
    }

    function en({ label: e, style: t, textProps: r = {}, ...o }) {
      if (!e && !r.children)
        return this.merge(
          {
            tag: "input",
            type: "checkbox",
          },
          {
            style: t,
            ...o,
          }
        );
      const {
          Input: l,
          Text: n,
          Element: i,
        } = (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element,
        { category: c } = o,
        s = {
          label: {
            display: "flex",
            justifyContent: "center",
            position: "relative",
            ":hover > div": {
              borderColor: "primary" === c ? "neutral" : "primary",
            },
          },
          input: {
            position: "absolute",
            zIndex: "-1",
            opacity: "0",
            ":disabled ~ div": {
              pointerEvents: "none",
              backgroundColor: "inputDisabled",
              borderColor: "inputDisabled",
            },
            ":disabled ~ *": {
              cursor: "default",
            },
            ":checked ~ div": {
              borderColor: "primary" === c ? "neutral" : "primary",
            },
            ":checked ~ div:after": {
              content: "''",
              display: "block",
              top: "3px",
              left: "7px",
              width: "4px",
              height: "8px",
              transform: "rotate(45deg)",
              borderColor: "primary" === c ? "neutral" : "primary",
              borderStyle: "solid",
              borderWidth: "0 2px 2px 0",
              position: "absolute",
            },
            ":focus ~ div": { ...Il },
          },
          customCheckbox: {
            marginTop: "2px",
            display: "inline-block",
            left: "0",
            minWidth: "19px",
            height: "19px",
            borderColor: "lowContrastOverlay",
            borderWidth: "xsmall",
            borderRadius: "2px",
            borderStyle: "solid",
            boxShadow: "0px 1px 3px",
            color: "lowContrast",
            cursor: "pointer",
            position: "relative",
          },
          text: {
            display: "inline-block",
            position: "static",
            lineHeight: "inherit",
            cursor: "pointer",
            marginLeft: "xsmall",
            verticalAlign: "top",
            textAlign: "left",
            overflowWrap: "anywhere",
          },
        };
      return this.merge(
        {
          tag: "label",
          children: [
            (global.React || guac.react).createElement(
              l,
              a.a(
                {
                  key: "checkbox",
                  tag: "input",
                  type: "checkbox",
                  group: "InputCheckbox",
                  style: s.input,
                  tabIndex: 0,
                },
                o
              )
            ),
            (global.React || guac.react).createElement(i, {
              key: "custom-checkbox",
              tag: "div",
              group: "InputCheckbox",
              style: s.customCheckbox,
            }),
            (global.React || guac.react).createElement(
              n,
              a.a(
                {
                  key: "text",
                  group: "InputCheckbox",
                  style: s.text,
                  children: e,
                },
                r
              )
            ),
          ],
          style: { ...s.label, ...t },
        },
        o
      );
    }

    function tn(e) {
      return this.merge(
        {
          tag: "input",
          type: "radio",
        },
        e
      );
    }

    function an({
      children: e,
      defaultValue: t,
      id: a,
      value: r,
      disabled: o = !1,
      state: l = "default",
      ...n
    }) {
      const { Icon: i, Element: c } = (
        global.Core || guac["@wsb/guac-widget-core"]
      ).UX2.Element;
      return this.merge(
        {
          tag: "div",
          children: [
            (global.React || guac.react).createElement(i, {
              key: "icon",
              group: "InputSelect",
            }),
            (global.React || guac.react).createElement(c, {
              id: a,
              key: "select",
              group: "InputSelect",
              disabled: o,
              value: r,
              defaultValue: t,
              children: e,
            }),
          ],
          typography: "InputAlpha",
          style: {
            borderWidth: "none",
            backgroundColor: "input",
            position: "relative",
            ...{
              default: {
                borderColor: "input",
              },
              error: {
                borderColor: "inputError",
              },
              disabled: {
                opacity: ".2",
              },
            }[o ? "disabled" : l],
          },
        },
        (global._ || guac.lodash).omit(n, "id")
      );
    }

    function rn(e) {
      return this.merge(
        {
          tag: "select",
          style: {
            backgroundColor: "transparent",
            borderStyle: "none",
            borderRadius: "0",
            color: "inherit",
            cursor: "pointer",
            display: "block",
            position: "relative",
            width: "100%",
            "-webkit-appearance": "none",
            "-moz-appearance": "none",
            "::-ms-expand": {
              display: "none",
            },
            ":focus": { ...Il },
            "> *": {
              color: "#000",
              backgroundColor: "#fff",
            },
          },
        },
        e
      );
    }

    function on(e) {
      return this.Icon(
        this.merge(
          {
            size: "small",
            icon: "chevronDown",
            style: {
              position: "absolute",
              top: "50%",
              right: "15px",
              transform: "translateY(-50%)",
            },
          },
          e
        )
      );
    }

    function ln(e) {
      return this.merge(
        {
          tag: "option",
        },
        e
      );
    }

    function nn(e) {
      return this.merge(
        {
          tag: "ul",
          groupType: "Menu",
          style: {
            borderRadius: "medium",
            boxShadow: "0 3px 6px 3px rgba(0,0,0,0.24)",
            backgroundColor: "section",
            paddingVertical: "small",
            paddingHorizontal: "small",
          },
        },
        e
      );
    }
    const cn = {
      style: {
        lineHeight: "0",
      },
      typography: "NavAlpha",
    };

    function sn(e) {
      return this.Link(this.merge({ ...cn }, e));
    }

    function gn(e) {
      return this.Icon(this.merge({ ...cn }, e));
    }

    function pn(e) {
      return this.Button(
        this.merge(
          {
            style: {
              margin: 0,
            },
          },
          e
        )
      );
    }

    function un({
      icon: e = "chevronLeft",
      right: t = !1,
      children: a,
      rotate: r,
      iconSize: o = "1em",
      ...l
    }) {
      const n = a
          ? [
              (global.React || guac.react).createElement(
                (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                  .Element,
                {
                  key: "span",
                  style: {
                    verticalAlign: "middle",
                  },
                  children: a,
                }
              ),
            ]
          : [],
        i = (global.React || guac.react).createElement(
          (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon,
          {
            "data-aid": e,
            key: "svg",
            icon: e,
            rotate: r,
            size: o,
            style: {
              verticalAlign: "middle",
            },
          }
        );
      return (
        t ? n.push(i) : n.unshift(i),
        this.Link(
          this.merge(
            {
              children: n,
              style: {
                display: "inline-block",
                "> :nth-child(2)": {
                  marginLeft: ".25em",
                },
              },
            },
            l
          )
        )
      );
    }

    function dn({ icon: e, right: t, rotate: a, iconSize: r, ...o }) {
      const l = "LinkAlpha";
      return e
        ? this.LinkIcon(
            this.merge(
              {
                icon: e,
                right: t,
                rotate: a,
                iconSize: r,
                typography: l,
              },
              o
            )
          )
        : this.Link(
            this.merge(
              {
                typography: l,
              },
              o
            )
          );
    }

    function hn({ expanded: e, ...t }) {
      const a = e ? "minus" : "plus";
      return this.MoreLink(
        this.merge(
          {
            icon: a,
            "aria-expanded": e,
          },
          t
        )
      );
    }

    function mn(e) {
      return this.MoreLink(
        this.merge(
          {
            icon: "chevronLeft",
          },
          e
        )
      );
    }

    function yn(e) {
      return this.MoreLink(
        this.merge(
          {
            icon: "chevronRight",
            right: !0,
          },
          e
        )
      );
    }

    function bn({ expanded: e, ...t }) {
      const a = e ? 180 : 0;
      return this.MoreLink(
        this.merge(
          {
            icon: "chevronDown",
            rotate: a,
            right: !0,
          },
          t
        )
      );
    }

    function fn(e) {
      return this.Link(
        this.merge(
          {
            typography: "LinkAlpha",
          },
          e
        )
      );
    }

    function Cn(e) {
      return this.merge(
        {
          tag: "div",
          role: "button",
          "data-edit-interactive": !0,
          style: {
            background: "transparent",
            borderColor: "highContrast",
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "50%",
            cursor: "pointer",
            height: "12px",
            width: "12px",
            marginVertical: "xxsmall",
            marginHorizontal: "12px",
            color: "highContrast",
          },
        },
        e
      );
    }

    function xn(e) {
      return this.Dot(
        this.merge(
          {
            style: {
              background: "currentColor",
            },
          },
          e
        )
      );
    }

    function wn(e) {
      return this.Link(
        this.merge(
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          },
          e
        )
      );
    }

    function Tn(e) {
      return this.LinkDropdown(e);
    }

    function Pn(e) {
      return this.Button(e);
    }

    function kn(e) {
      return this.Button(e);
    }

    function vn(e) {
      return this.Button(e);
    }

    function En(e) {
      return this.merge(
        {
          tag: "hr",
          style: {
            borderColor: "section",
            borderBottomWidth: "xsmall",
            borderStyle: "solid",
            marginVertical: "0",
            width: "100%",
          },
          "aria-hidden": !0,
          role: "separator",
        },
        e
      );
    }

    function Rn(e) {
      return this.merge(
        {
          children: (global.React || guac.react).createElement(
            (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
              .Container,
            null,
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.HR,
              {
                group: "Divider",
              }
            )
          ),
          style: {
            backgroundColor: "section",
          },
        },
        e
      );
    }

    function Sn(e) {
      return this.merge(
        {
          style: {
            width: 1,
            border: 0,
            backgroundColor: "sectionContrast",
            height: "1em",
            display: "inline-block",
          },
        },
        e
      );
    }

    function Ln(e) {
      return this.HR(e);
    }

    function An(e) {
      return this.merge(
        {
          tag: "iframe",
          style: {
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "100%",
            border: "0",
          },
        },
        e
      );
    }

    function Bn(e) {
      return this.merge(
        {
          style: {
            position: "relative",
            paddingBottom: "56.25%",
            overflow: "hidden",
            maxWidth: "100%",
          },
        },
        e
      );
    }

    function In({ fluid: e = !1, ...t }) {
      const a = {
        marginLeft: "auto",
        marginRight: "auto",
        paddingHorizontal: "medium",
        maxWidth: "100%",
      };
      return (
        e ||
          ((a["@sm"] = {
            width: "smContainer",
          }),
          (a["@md"] = {
            width: "mdContainer",
          }),
          (a["@lg"] = {
            width: "lgContainer",
          }),
          (a["@xl"] = {
            width: "xlContainer",
          })),
        this.merge(
          {
            tag: "div",
            style: a,
          },
          t
        )
      );
    }

    function Mn(e) {
      return this.Container(
        this.merge(e, {
          fluid: !0,
        })
      );
    }

    function Hn(e) {
      return this.ContainerFluid(
        this.merge(
          {
            style: {
              marginHorizontal: 0,
              paddingHorizontal: 0,
              display: "flex",
              flexDirection: "column",
              "@md": {
                flexWrap: "nowrap",
                flexDirection: "row",
              },
            },
          },
          e
        )
      );
    }

    function zn(e) {
      return this.merge(
        {
          tag: "span",
        },
        e
      );
    }

    function Un(e) {
      return this.merge(
        {
          tag: "div",
        },
        e
      );
    }

    function Dn(e) {
      return this.Container(
        this.merge(
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              paddingVertical: "medium",
              "> div:nth-child(2)": {
                paddingTop: "medium",
              },
              "@md": {
                flexDirection: "row",
                justifyContent: "space-around",
                "> div:first-child": {
                  justifyContent: "flex-end",
                  paddingRight: "xsmall",
                  flexShrink: 1,
                },
                "> div:only-child": {
                  justifyContent: "center",
                  textAlign: "center",
                  paddingHorizontal: 0,
                },
                "> div:nth-child(2)": {
                  justifyContent: "flex-start",
                  paddingTop: 0,
                  paddingLeft: "xsmall",
                  flexShrink: 0,
                  maxWidth: "50%",
                },
              },
            },
          },
          e
        )
      );
    }

    function Xn(e) {
      return this.Block(
        this.merge(
          {
            style: {
              display: "flex",
              flexGrow: 1,
              textAlign: "center",
              paddingVertical: 0,
              flexBasis: "auto",
              "@md": {
                textAlign: "left",
              },
            },
          },
          e
        )
      );
    }

    function On({ tag: e = "ul", ...t }) {
      return this.merge(
        {
          tag: e,
          style: {
            marginVertical: "0",
            marginHorizontal: "0",
            "-webkit-margin-before": "0",
            "-webkit-margin-after": "0",
            "-webkit-padding-start": "0",
          },
        },
        t
      );
    }

    function _n(e) {
      return this.merge(
        {
          tag: "li",
          style: {
            color: "section",
            marginBottom: "medium",
            ":last-child": {
              marginBottom: "0",
            },
          },
        },
        e
      );
    }

    function Wn(e) {
      return this.merge(
        {
          tag: "li",
          style: {
            color: "section",
            marginLeft: "medium",
            marginBottom: "none",
            display: "inline-block",
            listStyle: "none",
            ":first-child": {
              marginLeft: "0",
            },
          },
        },
        e
      );
    }
    const Nn = {
      loaderScale:
        "@keyframes loaderscale { 0% { transform: scale(1); opacity: 1; } 45% { transform: scale(0.1); opacity: 0.7; } 80% { transform: scale(1); opacity: 1; }}",
      loaderRipple:
        "@keyframes ripple { 0% { opacity: 1; transform: scale(0); stroke-width: 4; } 100% { opacity: 0; stroke-width: 2; }}",
      loaderBalance:
        "@keyframes balance { 0% { transform: rotate(0deg); } 100% { transform: rotate(180deg); }}",
      loaderCascade:
        "@keyframes cascade { 0% { opacity: 1; } 100% { opacity: 0; }}",
      loaderBlink:
        "@keyframes blink { 0%, 100% { opacity: 0; } 50% { opacity: 1; }}",
    };

    function Vn({ className: e = "", ...t }) {
      const { SVG: a } = (global.Core || guac["@wsb/guac-widget-core"]).UX2
          .Element,
        r = {
          viewBox: "0 0 64 64",
          fill: "currentColor",
          style: {
            width: "1em",
            height: "1em",
          },
        },
        o = {
          cx: "32",
          cy: "32",
          r: "24",
        };
      return this.merge(
        {
          tag: "div",
          className: `${e}`,
          "data-loading-indicator": !0,
          children: (global.React || guac.react).createElement(
            (global.React || guac.react).Fragment,
            null,
            (global.React || guac.react).createElement(
              a,
              r,
              (global.React || guac.react).createElement("circle", o)
            ),
            (global.React || guac.react).createElement(
              a,
              r,
              (global.React || guac.react).createElement("circle", o)
            ),
            (global.React || guac.react).createElement(
              a,
              r,
              (global.React || guac.react).createElement("circle", o)
            ),
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX.Style,
              null,
              Nn.loaderScale
            )
          ),
          style: {
            color: "section",
            display: "inline-block",
            "> svg:nth-child(1)": {
              animation:
                "loaderscale 0.75s -0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);",
            },
            "> svg:nth-child(2)": {
              animation:
                "loaderscale 0.75s -0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);",
            },
            "> svg:nth-child(3)": {
              animation:
                "loaderscale 0.75s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);",
            },
          },
        },
        t
      );
    }
    var jn = {
      __proto__: null,
      magGlass: (global.React || guac.react).createElement("path", {
        d: "M19.126 20a.783.783 0 0 1-.606-.253l-3.728-3.718-.288.2a6.547 6.547 0 0 1-3.8 1.18 6.62 6.62 0 0 1-2.603-.528 6.754 6.754 0 0 1-2.144-1.428 6.731 6.731 0 0 1-1.428-2.144A6.606 6.606 0 0 1 4 10.705c0-.904.178-1.78.529-2.604a6.722 6.722 0 0 1 1.428-2.144 6.752 6.752 0 0 1 2.144-1.429A6.62 6.62 0 0 1 10.705 4c.903 0 1.78.178 2.603.528a6.746 6.746 0 0 1 2.145 1.43A6.736 6.736 0 0 1 16.88 8.1c.35.824.528 1.7.528 2.604a6.55 6.55 0 0 1-1.18 3.799l-.2.288 3.72 3.72c.171.172.251.366.251.614 0 .24-.083.434-.26.612a.822.822 0 0 1-.614.262zM10.705 5.75c-1.358 0-2.537.488-3.502 1.453-.965.965-1.454 2.144-1.454 3.502 0 1.358.49 2.535 1.454 3.5.965.966 2.144 1.456 3.502 1.456 1.358 0 2.535-.49 3.5-1.456.966-.965 1.455-2.142 1.455-3.5s-.49-2.537-1.455-3.502c-.965-.965-2.142-1.454-3.5-1.454z",
      }),
      account: (global.React || guac.react).createElement("path", {
        d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
      }),
      gmb: (global.React || guac.react).createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd",
          transform: "translate(2 2)",
        },
        (global.React || guac.react).createElement("circle", {
          cx: 10,
          cy: 10,
          r: "9.5",
          fill: "#F3F3F3",
          stroke: "#CCC",
        }),
        (global.React || guac.react).createElement(
          "g",
          {
            transform: "translate(5.556 5.5)",
          },
          (global.React || guac.react).createElement("path", {
            fill: "#4285F4",
            d: "M8.494 4.375c0-.303-.028-.595-.079-.875H4.334v1.655h2.332c-.1.535-.406.988-.865 1.291V7.52h1.4c.82-.744 1.293-1.841 1.293-3.144z",
          }),
          (global.React || guac.react).createElement("path", {
            fill: "#34A853",
            d: "M4.334 8.556c1.17 0 2.15-.383 2.868-1.037l-1.4-1.073c-.389.257-.885.408-1.468.408-1.129 0-2.084-.752-2.425-1.763H.46v1.108a4.338 4.338 0 0 0 3.873 2.357z",
          }),
          (global.React || guac.react).createElement("path", {
            fill: "#FBBC05",
            d: "M1.909 5.09a2.542 2.542 0 0 1-.136-.812c0-.282.05-.556.136-.813V2.357H.46a4.231 4.231 0 0 0 0 3.842l1.448-1.108z",
          }),
          (global.React || guac.react).createElement("path", {
            fill: "#EA4335",
            d: "M4.334 1.701c.636 0 1.207.216 1.656.64l1.243-1.227C6.483.424 5.502 0 4.333 0 2.64 0 1.175.959.462 2.357l1.448 1.108c.34-1.011 1.296-1.764 2.425-1.764z",
          })
        )
      ),
      fbRecommends: (global.React || guac.react).createElement("path", {
        fill: "#F277A7",
        fillRule: "evenodd",
        d: "M6 18l-4 2 2-4V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6zm7-4.367L15.472 15 15 12.106l2-2.05-2.764-.423L13 7l-1.236 2.633L9 10.056l2 2.05L10.528 15 13 13.633z",
      }),
      fbDoesNotRecommend: (global.React || guac.react).createElement("path", {
        fill: "#A5A5A5",
        fillRule: "evenodd",
        d: "M6 18l-4 2 2-4V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6zm7-4.367L15.472 15 15 12.106l2-2.05-2.764-.423L13 7l-1.236 2.633L9 10.056l2 2.05L10.528 15 13 13.633z",
      }),
      buttonRight: (global.React || guac.react).createElement("path", {
        d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1.25a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5zM9.883 6.956l.965-.823 4.902 5.363L10.857 17l-.976-.81 4.156-4.682-4.154-4.552z",
      }),
      buttonLeft: (global.React || guac.react).createElement("path", {
        d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.25a8.75 8.75 0 1 0 0-17.5 8.75 8.75 0 0 0 0 17.5zm2.117-3.706l-.965.823-4.902-5.363L13.143 7l.976.81-4.156 4.682 4.154 4.552z",
      }),
      hamburger: (global.React || guac.react).createElement("path", {
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "square",
        strokeWidth: "1.5",
        d: "M4 6.5h16H4zM4 12h16H4zm0 5.5h16H4z",
      }),
      video: (global.React || guac.react).createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd",
        },
        (global.React || guac.react).createElement("rect", {
          width: 24,
          height: 24,
        }),
        (global.React || guac.react).createElement("path", {
          fill: "currentColor",
          fillRule: "nonzero",
          d: "M21 5.538v12.924c0 .846-.675 1.538-1.5 1.538h-15c-.825 0-1.5-.692-1.5-1.538V5.538C3 4.692 3.675 4 4.5 4h15c.825 0 1.5.692 1.5 1.538zM6.6 18.154v-1.23a.612.612 0 0 0-.6-.616H4.8c-.328 0-.6.279-.6.615v1.23c0 .337.272.616.6.616H6c.328 0 .6-.279.6-.615zm0-3.692V13.23a.612.612 0 0 0-.6-.616H4.8c-.328 0-.6.28-.6.616v1.23c0 .337.272.616.6.616H6c.328 0 .6-.279.6-.615zm0-3.693V9.54a.612.612 0 0 0-.6-.616H4.8c-.328 0-.6.279-.6.615v1.231c0 .337.272.616.6.616H6c.328 0 .6-.28.6-.616zm9.6 7.385V13.23a.612.612 0 0 0-.6-.616H8.4c-.328 0-.6.28-.6.616v4.923c0 .336.272.615.6.615h7.2c.328 0 .6-.279.6-.615zM6.6 7.077v-1.23A.612.612 0 0 0 6 5.23H4.8c-.328 0-.6.279-.6.615v1.231c0 .337.272.615.6.615H6c.328 0 .6-.278.6-.615zm13.2 11.077v-1.23a.612.612 0 0 0-.6-.616H18c-.328 0-.6.279-.6.615v1.23c0 .337.272.616.6.616h1.2c.328 0 .6-.279.6-.615zm-3.6-7.385V5.846a.612.612 0 0 0-.6-.615H8.4c-.328 0-.6.279-.6.615v4.923c0 .337.272.616.6.616h7.2c.328 0 .6-.28.6-.616zm3.6 3.693V13.23a.612.612 0 0 0-.6-.616H18c-.328 0-.6.28-.6.616v1.23c0 .337.272.616.6.616h1.2c.328 0 .6-.279.6-.615zm0-3.693V9.54a.612.612 0 0 0-.6-.616H18c-.328 0-.6.279-.6.615v1.231c0 .337.272.616.6.616h1.2c.328 0 .6-.28.6-.616zm0-3.692v-1.23a.612.612 0 0 0-.6-.616H18c-.328 0-.6.279-.6.615v1.23c0 .337.272.616.6.616h1.2c.328 0 .6-.279.6-.615z",
        })
      ),
      globe: (global.React || guac.react).createElement("path", {
        d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm2.842 14.167a.642.642 0 0 0 .341-.575.708.708 0 0 0-.658-.4c-.225-.059-.408-.2-.65-.275-.242-.075-.508-.084-.758-.15-.225-.859-1.034-1.025-1.709-1.4a2.142 2.142 0 0 0-.833-.509c-.258-.025-.95.1-.883-.316-.125.075-.25.075-.375.075-.059-.392-.575.083-.7.166-.27.097-.564.097-.834 0v.1a.742.742 0 0 1-.066-1.066.733.733 0 0 0-.084-.125.833.833 0 0 1-.65-.109c-.166-.2.117-.3.2-.541.3-.892-.716.008-1.016-.175-.3-.184 0-.534.1-.734.027-.271.1-.536.216-.783.284-.392.434 0 .767 0a.917.917 0 0 1 .533-.067c.35.217.217 1.05.575.975a.658.658 0 0 1 .167-.2v.05a1.092 1.092 0 0 1-.05-.35c-.058-.29.005-.59.175-.833.097-.007.195-.007.292 0a.833.833 0 0 0 .291-.292c.138-.357.455-.614.834-.675v-.191c.033-.167.05-.067.133-.167.108-.098.208-.204.3-.317a.392.392 0 0 1 0 .384c.417.007.818-.16 1.108-.459h-.583a1.042 1.042 0 0 0 0-.316.983.983 0 0 1-.375-.067.55.55 0 0 1 .617-.058c.077.046.17.06.258.041.125-.033.183-.175.292-.175a1.058 1.058 0 0 0-.259.492c.242-.033.7.217.834-.075a1.092 1.092 0 0 1-.467-.358 1.392 1.392 0 0 0-.217-.55 4.508 4.508 0 0 1-.491-.417c-.084-.117.016-.233-.175-.233a.767.767 0 0 0-.292.108c-.092-.308-.292-.667-.608-.375-.154.32-.373.603-.642.833a.3.3 0 0 1 0 .284c-.117-.125-.192-.309-.308-.442a1.983 1.983 0 0 1-.375-.4c-.117-.267-.034-.308.216-.433a.533.533 0 0 1 .467-.092v.142a.933.933 0 0 0 .567-.2c.133-.125.25-.417.491-.292.014.115.033.229.059.342h-.167c.25.066 1.175.55 1.083-.117-.118-.2-.267-.38-.441-.533-.192-.292-.05-.409.258-.55.124.126.275.223.442.283.14.2.229.432.258.675.083.308.533 1.067.917.992 0-.29.072-.577.208-.834.216-.155.397-.354.533-.583a.942.942 0 0 1-.425-.525A8.333 8.333 0 0 0 12 3.667a8.333 8.333 0 0 0-1.183.091l-.484.075a.5.5 0 0 1 .1.35.392.392 0 0 0-.316.234c-.15-.192.116-.192.116-.35a.317.317 0 0 0-.083-.184l-.308.075c-.092.225-.242.492-.417.284.075-.059.075-.134.15-.217l-.3.108a.225.225 0 0 1-.083.159.983.983 0 0 0-.067-.1 8.333 8.333 0 0 0-4.1 3.275c-.042.116-.117.233-.117.366a3.233 3.233 0 0 0-.133 1.434c.034.179.085.354.15.525.3-.334-.05-1.025.2-1.425.043.59.043 1.184 0 1.775.008.275.2 1.291.6 1.291.183-.266.4.15.525.275.086.116.184.222.292.317.083.092.258.033.35.092.341.225.441 1.108.941 1.108 0-.292.292-.225.434-.025a.967.967 0 0 1 0 .733c-.084.234-.375.317-.434.525.049.222.06.45.034.675h-.084a5 5 0 0 0 .684 1.434c.283.433.741.525 1.058.9a2.95 2.95 0 0 1 .267 1.666 3.175 3.175 0 0 0-.059.834c.337.096.68.171 1.025.225a.392.392 0 0 1 .142-.209c.237-.035.46-.136.642-.291.083-.042.141-.159.225-.159.11-.007.219-.026.325-.058.124-.141.24-.289.35-.442a2.9 2.9 0 0 0 .508-.341c0-.117-.067-.217 0-.325a.717.717 0 0 1 .3-.209c.23-.074.454-.16.675-.258.132-.158.234-.339.3-.533.154-.163.253-.37.283-.592a1 1 0 0 1 .334-.608zm-5.917-5.092c-.025-.033-.042-.1-.133-.15.2.075.591 1.125.933.617a1.408 1.408 0 0 0-.383-.342c-.225.133-.259-.167-.392-.267a1.017 1.017 0 0 1-.483-.275v-.066a.583.583 0 0 1 0 .075.925.925 0 0 0-.834.058c.23.091.467.161.709.208.208.092.383.367.583.142zm7.817-4.533c.264.113.492.298.658.533a.958.958 0 0 0-.425.1c.006.277.11.542.292.75a.525.525 0 0 0 .258.242l.383-.117a.7.7 0 0 0 0-.733.967.967 0 0 1 .317-.65c.083.095.14.21.167.333.033.122.086.238.158.342a.208.208 0 0 0 .133-.167 8.392 8.392 0 0 0-1.666-1.767.283.283 0 0 1-.125-.05c.075.2.275.575 0 .7a1.133 1.133 0 0 0-.509-.408 1.725 1.725 0 0 0-.608-.317c.067.367.633.342.633.784a1.825 1.825 0 0 1-.483-.317.458.458 0 0 0 .233.467.3.3 0 0 1 .409-.042.442.442 0 0 1 .433-.158 1.717 1.717 0 0 0-.117.433.525.525 0 0 1-.141.042zm3.333 6.016l-.017-.008a.25.25 0 0 1 .275.058V12a8.283 8.283 0 0 0-1.008-3.95.625.625 0 0 1-.158-.075c-.125-.108-.359-.425-.5-.35-.142.075-.209.392-.4.5a1.3 1.3 0 0 0-.517.308 1.25 1.25 0 0 0-.142.834c-.072.27-.188.525-.341.758-.08.176-.122.366-.125.558a.575.575 0 0 0 .225.25.833.833 0 0 1 0 .75c.001.3.098.592.275.834.123.045.26.045.383 0 .208.041.117.083.208.233a.517.517 0 0 0 .667.383.833.833 0 0 1 .7-.125c.11-.17.28-.295.475-.35z",
      }),
      freeship: (global.React || guac.react).createElement("path", {
        d: "M18.545 9.375L21 12.75v4.219h-1.636c0 1.4-1.097 2.531-2.455 2.531s-2.454-1.13-2.454-2.531h-4.91c0 1.4-1.096 2.531-2.454 2.531s-2.455-1.13-2.455-2.531H3V7.687C3 6.76 3.736 6 4.636 6h11.455v3.375h2.454zm-.409 1.266h-2.045v2.109h3.649l-1.604-2.11zM7.091 18.234c.679 0 1.227-.565 1.227-1.265s-.548-1.266-1.227-1.266c-.68 0-1.227.565-1.227 1.266 0 .7.548 1.265 1.227 1.265zm9.818 0c.68 0 1.227-.565 1.227-1.265s-.548-1.266-1.227-1.266-1.227.565-1.227 1.266c0 .7.548 1.265 1.227 1.265z",
      }),
      ok: (global.React || guac.react).createElement("path", {
        d: "M3.111 12c0 4.91 3.98 8.889 8.889 8.889 4.91 0 8.889-3.98 8.889-8.889 0-4.91-3.98-8.889-8.889-8.889A8.888 8.888 0 0 0 3.111 12zM2 12C2 6.477 6.476 2 12 2c5.523 0 10 4.476 10 10 0 5.523-4.476 10-10 10-5.523 0-10-4.476-10-10zm6.458.426l1.539 1.659 5.607-4.876a.854.854 0 0 1 1.181.06.796.796 0 0 1-.062 1.146l-6.15 5.352c-.39.34-.99.3-1.33-.067l-2.028-2.188a.796.796 0 0 1 .062-1.147.854.854 0 0 1 1.18.06z",
      }),
      tumblr: (global.React || guac.react).createElement("path", {
        d: "M11.93 2c5.476 0 9.93 4.455 9.93 9.93 0 5.476-4.454 9.93-9.93 9.93-5.475 0-9.93-4.454-9.93-9.93C2 6.455 6.455 2 11.93 2zm3.358 14.664h-.001V14.96c-.54.356-1.085.533-1.631.533-.308 0-.58-.072-.82-.215a1.003 1.003 0 0 1-.41-.466c-.068-.177-.06-.54-.06-1.165V10.88h2.497V8.952h-2.496V6.455H10.83c-.069.556-.195 1.016-.379 1.375-.182.361-.425.67-.728.928-.302.257-.794.454-1.218.592v1.53h1.468v3.786c0 .494.052.87.155 1.13.104.26.289.506.557.736.268.23.592.408.971.534.379.124.671.186 1.164.186.435 0 .839-.044 1.213-.13.375-.088.794-.242 1.254-.458z",
      }),
      tripadvisor: (global.React || guac.react).createElement("path", {
        d: "M15.717 11.402a1.21 1.21 0 0 1 1.204 1.212c0 .668-.547 1.215-1.213 1.213a1.223 1.223 0 0 1-1.212-1.217 1.217 1.217 0 0 1 1.22-1.208zm0 1.827a.615.615 0 0 0-.004-1.23.61.61 0 0 0-.617.62c0 .338.276.61.62.61zm-7.49-3.573a2.989 2.989 0 0 1 2.999 3.004 2.994 2.994 0 0 1-5.989.041c-.028-1.714 1.378-3.06 2.99-3.045zm.048 4.813a1.857 1.857 0 0 0 1.767-1.858 1.848 1.848 0 0 0-1.855-1.85 1.85 1.85 0 0 0-1.862 1.851 1.859 1.859 0 0 0 1.95 1.857zM11.975 2c5.508 0 9.974 4.466 9.974 9.974 0 5.51-4.466 9.975-9.975 9.975C6.466 21.949 2 17.483 2 11.974 2 6.466 6.466 2 11.974 2zm5.733 13.847c.853-.54 1.414-1.303 1.655-2.282.274-1.116.065-2.15-.592-3.094-.032-.047-.029-.087-.015-.134.126-.444.34-.846.59-1.229l.104-.158c.002-.004 0-.01 0-.024-.059-.003-.118-.01-.177-.01-.738 0-1.475 0-2.213-.003a.306.306 0 0 1-.153-.044 8.453 8.453 0 0 0-2.004-.913 8.056 8.056 0 0 0-1.235-.29c-.568-.079-1.423-.192-2.492-.11-.438.03-.872.088-1.304.172a9.2 9.2 0 0 0-1.31.355 8.12 8.12 0 0 0-1.69.82.193.193 0 0 1-.097.031H4.51c-.013 0-.025-.002-.038-.003v.03c.063.087.131.17.188.26a4.2 4.2 0 0 1 .527 1.134.147.147 0 0 1-.016.11c-.273.388-.471.81-.585 1.27-.04.158-.197.81-.068 1.486.113.725.414 1.362.898 1.91a3.699 3.699 0 0 0 1.829 1.14c.51.141 1.028.171 1.552.088a3.73 3.73 0 0 0 2.345-1.336c.003-.003.008-.004.026-.013l.79 1.18.805-1.197c.07.08.134.154.201.226a3.772 3.772 0 0 0 1.844 1.088 3.7 3.7 0 0 0 2.9-.46zm-9.537-4.445a1.212 1.212 0 1 1 .014 2.426 1.224 1.224 0 0 1-1.217-1.215 1.22 1.22 0 0 1 1.203-1.211zm.015 1.833a.62.62 0 0 0-.002-1.242.61.61 0 0 0-.62.617c0 .354.27.625.622.625zm7.467-3.568a2.978 2.978 0 0 1 3.06 2.992 2.984 2.984 0 0 1-2.995 2.998c-1.652.006-2.997-1.348-2.997-3.006a2.99 2.99 0 0 1 2.932-2.984zm.135 4.803a1.858 1.858 0 0 0 1.78-1.86 1.85 1.85 0 0 0-1.856-1.85c-.992-.018-1.86.802-1.86 1.854 0 1.04.86 1.897 1.936 1.856zM13.17 9.886c-.662.606-1.047 1.365-1.194 2.254-.144-.9-.54-1.665-1.214-2.279-.676-.614-1.476-.932-2.386-.987 1.218-.511 2.493-.704 3.804-.679 1.154.022 2.275.223 3.338.696-.896.067-1.685.386-2.348.995z",
      }),
      spotify: (global.React || guac.react).createElement("path", {
        d: "M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm4.087 14.124a.578.578 0 0 0-.145-.771 1.57 1.57 0 0 0-.15-.095 9.556 9.556 0 0 0-1.843-.847 11.556 11.556 0 0 0-3.6-.575c-.414.026-.833.037-1.247.073-.742.071-1.478.192-2.204.364a1.09 1.09 0 0 0-.17.047.57.57 0 0 0-.343.655.556.556 0 0 0 .557.458c.092-.004.183-.018.273-.04a15.23 15.23 0 0 1 2.698-.364c.702-.028 1.406.01 2.102.116a8.807 8.807 0 0 1 3.192 1.124c.05.03.1.059.153.084.265.118.578.02.727-.23zm1.146-2.546a.727.727 0 0 0-.244-.996l-.109-.066a11.116 11.116 0 0 0-2.298-1.025 14.135 14.135 0 0 0-4.87-.662c-.774.026-1.544.122-2.301.287-.31.07-.615.15-.916.24a.705.705 0 0 0-.495.666.727.727 0 0 0 .43.698c.167.06.351.06.52 0a11.52 11.52 0 0 1 3.232-.455c.827 0 1.652.077 2.465.23a11.04 11.04 0 0 1 2.986.989c.207.105.407.225.607.338a.727.727 0 0 0 .993-.244zm.109-2.647a.87.87 0 0 0 1.309-.746c-.026-.061-.026-.123-.026-.185a.865.865 0 0 0-.447-.585 11.19 11.19 0 0 0-1.996-.906c-1.69-.56-3.456-.86-5.237-.887-.727-.022-1.456 0-2.181.065-.683.058-1.361.163-2.03.313-.269.062-.541.13-.803.218a.85.85 0 0 0-.578.833.87.87 0 0 0 .625.814.902.902 0 0 0 .498 0c.273-.072.542-.149.819-.207.745-.155 1.501-.25 2.261-.283a16.727 16.727 0 0 1 3.895.222c.904.15 1.79.394 2.644.727.428.174.845.377 1.247.607z",
      }),
      cart1: (global.React || guac.react).createElement("path", {
        d: "M9.838 18.545c0 .394-.136.735-.406 1.023-.271.288-.592.432-.962.432s-.69-.144-.961-.432a1.443 1.443 0 0 1-.406-1.023c0-.393.135-.734.406-1.022.27-.288.59-.432.961-.432.37 0 .691.144.962.432.27.288.406.629.406 1.022zm9.572 0c0 .394-.135.735-.406 1.023-.27.288-.59.432-.961.432-.37 0-.691-.144-.962-.432a1.443 1.443 0 0 1-.406-1.023c0-.393.136-.734.406-1.022.27-.288.591-.432.962-.432.37 0 .69.144.961.432.27.288.406.629.406 1.022zm1.368-12.363V12a.73.73 0 0 1-.177.483.664.664 0 0 1-.432.244L9.015 14.114c.093.454.139.72.139.795 0 .121-.086.364-.257.727h9.83c.185 0 .345.072.48.216a.721.721 0 0 1 .203.512.721.721 0 0 1-.203.511.638.638 0 0 1-.48.216H7.786a.638.638 0 0 1-.481-.216.721.721 0 0 1-.203-.511c0-.084.028-.203.085-.358.057-.156.114-.292.171-.41.057-.117.134-.268.23-.454s.151-.297.165-.335l-1.89-9.352h-2.18a.638.638 0 0 1-.481-.216A.721.721 0 0 1 3 4.727c0-.197.068-.367.203-.511A.638.638 0 0 1 3.683 4H6.42a.63.63 0 0 1 .513.25c.05.068.096.161.139.278.042.118.07.216.085.296a63.658 63.658 0 0 1 .107.63h12.831c.185 0 .345.073.48.216a.721.721 0 0 1 .204.512z",
      }),
      download: (global.React || guac.react).createElement("path", {
        d: "M21 16.125v3.75c0 .621-.465 1.125-1.038 1.125H4.038C3.465 21 3 20.496 3 19.875v-3.75C3 15.504 3.465 15 4.038 15h5.03l1.46 1.594c.401.422.92.656 1.472.656.552 0 1.07-.234 1.471-.656L14.942 15h5.02c.573 0 1.038.504 1.038 1.125zm-4.154 2.413a.697.697 0 0 0-.692-.692.697.697 0 0 0-.692.692c0 .38.313.693.692.693a.697.697 0 0 0 .692-.693zm2.77 0a.697.697 0 0 0-.693-.692.697.697 0 0 0-.692.692c0 .38.313.693.692.693a.697.697 0 0 0 .692-.693zM17.483 8.96a.68.68 0 0 1-.151.758l-4.846 4.846a.663.663 0 0 1-.487.205.663.663 0 0 1-.487-.205L6.667 9.718a.68.68 0 0 1-.151-.758.7.7 0 0 1 .638-.422h2.77V3.692c0-.378.313-.692.691-.692h2.77c.378 0 .692.314.692.692v4.846h2.77a.7.7 0 0 1 .637.422z",
      }),
      chevronRight: (global.React || guac.react).createElement("path", {
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "square",
        strokeWidth: "1.5",
        d: "M16.258 12.242l.242.258-.242-.258L16.5 12l-.242.242zm0 0L8.493 3.993l7.765 8.25-7.765 7.764 7.765-7.765z",
      }),
      chevronUp: (global.React || guac.react).createElement("path", {
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "square",
        strokeWidth: "1.5",
        d: "M12.25 8.242L12.006 8l.242.242.258-.242-.258.242zm0 0l7.764 7.765-7.765-7.765L4 16.007l8.25-7.765z",
      }),
      chevronLeft: (global.React || guac.react).createElement("path", {
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "square",
        strokeWidth: "1.5",
        d: "M7.742 11.758L7.5 11.5l.242.258L7.5 12l.242-.242zm0 0l7.765 8.249-7.765-8.25 7.765-7.764-7.765 7.765z",
      }),
      chevronDown: (global.React || guac.react).createElement("path", {
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "square",
        strokeWidth: "1.5",
        d: "M11.765 15.765l.242.242-.242-.242-.258.242.258-.242zm0 0L20.014 8l-8.25 7.765L4 8l7.765 7.765z",
      }),
      arrowRight: (global.React || guac.react).createElement("path", {
        d: "M13.569 8.28075L16.664 11.3767L5.75 11.3767C5.75 11.3767 5 11.3767 5 12.1267C5 12.8767 5.75 12.8767 5.75 12.8767L16.645 12.8767L13.566 15.9737C13.274 16.2677 13.275 16.7437 13.569 17.0357C13.863 17.3267 14.338 17.3257 14.63 17.0317L19.52 12.1097L14.63 7.21975C14.337 6.92675 13.862 6.92675 13.569 7.21975C13.276 7.51175 13.276 7.98775 13.569 8.28075Z",
      }),
      close: (global.React || guac.react).createElement("path", {
        fill: "currentColor",
        stroke: "currentColor",
        strokeLinecap: "square",
        strokeWidth: "1.5",
        d: "M12 12l-8 8 8-8 8 8-8-8zm0 0l8-8-8 8-8-8 8 8z",
      }),
      money: (global.React || guac.react).createElement("path", {
        d: "M13.455 7H4v9.495h16V7h-6.545zm-8.727 7.03V7.71l2.022.02h12.544l-.021 1.734v6.3H4.754l-.026-1.734zm4-2.283c0 1.99 1.444 3.652 3.272 3.652 1.828 0 3.273-1.662 3.273-3.652 0-1.99-1.445-3.652-3.273-3.652s-3.273 1.662-3.273 3.652zm.727 0c0-1.639 1.16-2.922 2.545-2.922s2.546 1.283 2.546 2.922c0 1.639-1.16 2.921-2.546 2.921-1.385 0-2.545-1.282-2.545-2.921zm7.036-.182a.79.79 0 0 0 .782.785.789.789 0 0 0 .782-.785.79.79 0 0 0-.782-.786.79.79 0 0 0-.782.786zm-10.505 0c0 .407.336.744.741.744a.749.749 0 0 0 .742-.744.749.749 0 0 0-.742-.745.748.748 0 0 0-.741.745z",
      }),
      person: (global.React || guac.react).createElement("path", {
        fillRule: "evenodd",
        d: "M9.705 12.462a4.498 4.498 0 0 1-2.382-3.967A4.5 4.5 0 0 1 11.818 4a4.5 4.5 0 0 1 4.494 4.495c0 1.716-.966 3.21-2.382 3.967 3.167.889 5.528 3.724 5.705 7.128a.398.398 0 0 1-.793.026c-.2-3.691-3.258-6.61-6.995-6.626h-.059c-3.736.015-6.795 2.935-6.995 6.626A.398.398 0 0 1 4.4 20a.397.397 0 0 1-.4-.41c.177-3.404 2.538-6.24 5.705-7.128zm2.172-.29a7.845 7.845 0 0 0-.118 0 3.682 3.682 0 0 1-3.62-3.677 3.682 3.682 0 0 1 3.679-3.678 3.682 3.682 0 0 1 3.677 3.678 3.682 3.682 0 0 1-3.618 3.677z",
      }),
      questionBubble: (global.React || guac.react).createElement("path", {
        fillRule: "evenodd",
        d: "M5.84 19.72c.365-.381 1.155-1.502 1.394-2.935C6.156 16.138 4 14.11 4 11.164 4 7.482 7.433 4 12.159 4c4.726 0 8.357 3.184 8.357 7.164 0 3.98-3.857 7.113-8.407 7.113a7.525 7.525 0 0 1-1.89-.248c-.448.564-1.95 1.691-4.378 1.691zm1.394-.796c1.353-.199 2.387-1.21 2.736-1.691.298.116 1.144.348 2.139.348 4.875 0 7.71-3.383 7.71-6.417 0-3.781-3.581-6.468-7.66-6.468-4.08 0-7.463 3.035-7.463 6.468 0 2.746 2.156 4.626 3.234 5.223 0 0 .1 1.194-.696 2.537zm4.427-4.129v-1.044h.896v1.044h-.896zm.547-3.631c.647-.796 1.294-.946 1.294-1.89 0-.946-.846-1.095-1.343-1.095-.498 0-1.344.298-1.344 1.542H9.92c.017-.763.487-2.288 2.239-2.288 2.188 0 2.437 1.74 2.238 2.487-.199.746-1.194 1.293-1.592 1.89-.276.415-.298.946-.248 1.095h-.896c-.033-.315.03-1.105.547-1.741z",
      }),
      okCalendar: (global.React || guac.react).createElement("path", {
        fillRule: "evenodd",
        d: "M6.78 4.71c0-.313.255-.71.653-.71h.766c.34 0 .68.369.68.71v.68h6.27v-.68c0-.341.284-.71.624-.71h.766c.255 0 .68.312.68.71v.68h2.086c.425 0 .695.313.695.625v13.82c0 .369-.241.681-.695.681H4.681c-.426 0-.681-.284-.681-.681V6.015c0-.284.227-.624.68-.624h2.1v-.682zm12.525 4.455H4.681v10.67h14.624V9.165zM8.88 6.015v.738c0 .397-.398.68-.681.68h-.766c-.227 0-.653-.311-.653-.652v-.766H4.681v2.469h14.624v-2.47H17.22v.767c0 .369-.34.653-.68.653h-.767c-.397 0-.624-.37-.624-.653v-.766H8.88zM7.46 4.625V6.78h.738V4.624H7.46zm9.078 0h-.738V6.78h.738V4.624zM11.66 15.72l3.008-4.625.595.368-3.489 5.307-2.695-2.412.482-.51 2.1 1.872z",
      }),
      location: (global.React || guac.react).createElement("path", {
        fillRule: "evenodd",
        d: "M12.246 20C8.934 16.164 7 12.092 7 9.213 7 6.334 9.349 4 12.246 4c2.897 0 5.246 2.334 5.246 5.213 0 2.88-1.967 6.984-5.246 10.787zm0-1.115c2.869-3.336 4.59-7.131 4.59-9.657 0-2.525-2.055-4.572-4.59-4.572-2.535 0-4.59 2.047-4.59 4.573 0 2.525 1.692 6.291 4.59 9.656zm0-7.016a2.295 2.295 0 1 1 0-4.59 2.295 2.295 0 0 1 0 4.59zm0-.656a1.64 1.64 0 1 0 0-3.279 1.64 1.64 0 0 0 0 3.28z",
      }),
      digitalProduct: (global.React || guac.react).createElement("path", {
        d: "M21.521 11.297c0 1.627-.727 2.793-1.92 3.542-.411.259-.85.448-1.288.58-.265.08-.474.125-.657.146h-1.208v-.805l1.152.004a4.517 4.517 0 0 0 1.573-.607c.97-.61 1.543-1.527 1.543-2.86 0-1.9-1.54-3.462-3.463-3.462h-.413l-.11-.227c-1.196-2.465-4.182-3.5-6.712-2.309-1.566.746-2.677 2.39-2.75 4.083l-.021.475-.465-.098c-1.332-.28-2.63.57-2.896 1.86l-.02.128c-.049.143-.06.276-.06.517 0 1.14.476 1.824 1.295 2.2.49.226.997.301 1.35.296h1.542v.805h-1.53a4.021 4.021 0 0 1-1.699-.369C3.67 14.693 3 13.731 3 12.264c0-.323.018-.523.08-.644l.008-.08a3.25 3.25 0 0 1 3.414-2.632c.24-1.83 1.472-3.527 3.171-4.336 2.85-1.342 6.208-.242 7.666 2.458a4.269 4.269 0 0 1 4.182 4.267zm-9.663 7.162v-7.081h.805v7.08l1.729-1.728.569.57-2.7 2.7-2.701-2.7.57-.57 1.728 1.729z",
      }),
      yelpLogoPositive: (global.React || guac.react).createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd",
          transform: "translate(2 2)",
        },
        (global.React || guac.react).createElement("rect", {
          width: 20,
          height: 20,
          fill: "#CCC",
          fillRule: "nonzero",
          rx: 3,
        }),
        (global.React || guac.react).createElement("rect", {
          width: 18,
          height: 18,
          x: 1,
          y: 1,
          fill: "#FFF",
          fillRule: "nonzero",
          rx: 2,
        }),
        (global.React || guac.react).createElement("path", {
          fill: "#D32323",
          d: "M11.543 11.84l2.43.789a.527.527 0 0 1 .313.727 4.554 4.554 0 0 1-1.216 1.556.525.525 0 0 1-.782-.125l-1.354-2.167a.527.527 0 0 1 .609-.78zm2.47-1.55l-2.455.699a.527.527 0 0 1-.582-.8l1.43-2.119a.523.523 0 0 1 .78-.096c.502.44.9.985 1.163 1.597a.527.527 0 0 1-.336.72zM8.275 4.33A7.363 7.363 0 0 1 9.602 4.1a.525.525 0 0 1 .565.525v4.8a.525.525 0 0 1-.982.264L6.793 5.532a.525.525 0 0 1 .22-.736c.405-.194.828-.35 1.262-.466zM7.49 14.365l1.71-1.897a.525.525 0 0 1 .91.37l-.081 2.547a.527.527 0 0 1-.616.5 4.56 4.56 0 0 1-1.83-.74.527.527 0 0 1-.093-.78zm-.919-4.728l2.297 1.132a.527.527 0 0 1-.103.985l-2.48.606a.525.525 0 0 1-.659-.452 4.501 4.501 0 0 1 .207-1.965.527.527 0 0 1 .738-.306z",
        })
      ),
      yelpLogoNegative: (global.React || guac.react).createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd",
          transform: "translate(2 2)",
        },
        (global.React || guac.react).createElement("path", {
          fill: "#D32323",
          fillRule: "nonzero",
          d: "M3.846 0h12.308c1.337 0 1.822.14 2.311.4.49.262.873.646 1.134 1.135.262.489.401.974.401 2.31v12.31c0 1.336-.14 1.821-.4 2.31a2.726 2.726 0 0 1-1.135 1.134c-.489.262-.974.401-2.31.401H3.844c-1.336 0-1.821-.14-2.31-.4A2.726 2.726 0 0 1 .4 18.464C.139 17.976 0 17.491 0 16.155V3.844c0-1.336.14-1.821.4-2.31A2.726 2.726 0 0 1 1.536.4C2.024.139 2.509 0 3.845 0z",
        }),
        (global.React || guac.react).createElement("path", {
          fill: "#FFF",
          d: "M8.256 4.267c.439-.118.888-.196 1.342-.231a.531.531 0 0 1 .57.53V9.42a.531.531 0 0 1-.992.267L6.758 5.482a.531.531 0 0 1 .222-.744c.41-.196.837-.354 1.276-.471zM6.533 9.633l2.323 1.134a.533.533 0 0 1-.105.995l-2.507.625a.531.531 0 0 1-.666-.458 4.551 4.551 0 0 1 .209-1.987.533.533 0 0 1 .746-.309zm.93 4.78l1.728-1.917a.531.531 0 0 1 .927.373l-.09 2.582a.533.533 0 0 1-.621.507 4.611 4.611 0 0 1-1.851-.75.533.533 0 0 1-.094-.795zm4.093-2.553l2.462.807a.533.533 0 0 1 .315.735 4.604 4.604 0 0 1-1.222 1.565.531.531 0 0 1-.791-.127l-1.369-2.191a.533.533 0 0 1 .605-.789zm2.502-1.567l-2.482.711a.533.533 0 0 1-.59-.808l1.458-2.143a.529.529 0 0 1 .792-.102c.506.445.908.997 1.175 1.616a.533.533 0 0 1-.353.726z",
        })
      ),
      plus: (global.React || guac.react).createElement("path", {
        d: "M13 11h6v2h-6v6h-2v-6h-6v-2h6v-6h2v6z",
        fill: "currentColor",
        fillRule: "nonzero",
      }),
      minus: (global.React || guac.react).createElement("path", {
        fill: "currentColor",
        fillRule: "nonzero",
        d: "M5 13.5h14v-2H5z",
      }),
      yotpo: (global.React || guac.react).createElement(
        "g",
        {
          fill: "none",
          fillRule: "evenodd",
        },
        (global.React || guac.react).createElement("ellipse", {
          cx: "11.826",
          cy: "11.936",
          fill: "#2F84ED",
          fillRule: "nonzero",
          rx: "10.54",
          ry: "10.872",
        }),
        (global.React || guac.react).createElement("path", {
          fill: "#FFF",
          fillRule: "nonzero",
          d: "M5.935 7.728h1.242l.955 1.753.924-1.753h1.178l-1.56 2.805v1.499H7.527v-1.467L5.935 7.728zm3.949 2.168c0-1.308 1.05-2.2 2.26-2.2 1.21 0 2.261.924 2.261 2.2 0 1.307-1.05 2.232-2.26 2.232-1.21-.032-2.261-.925-2.261-2.232zm3.343 0c0-.67-.414-1.212-1.114-1.212-.7 0-1.115.542-1.115 1.212 0 .67.414 1.211 1.115 1.211.732 0 1.114-.542 1.114-1.211zm2.229-1.212h-1.114v-.956h3.375v.956h-1.115v3.348h-1.146V8.684zM7.4 16.751H6.286v-4.305h1.592c1.146 0 1.783.734 1.783 1.69 0 .957-.637 1.69-1.783 1.69H7.4v.925zm.414-1.913c.51 0 .7-.287.7-.702 0-.414-.19-.733-.7-.733H7.4v1.435h.414zm2.038-.224c0-1.307 1.05-2.2 2.26-2.2 1.21 0 2.261.925 2.261 2.2 0 1.308-1.05 2.232-2.26 2.232-1.21-.032-2.261-.924-2.261-2.232zm3.375 0c0-.67-.414-1.211-1.114-1.211-.7 0-1.115.542-1.115 1.211 0 .67.414 1.212 1.115 1.212.7 0 1.114-.542 1.114-1.212zm1.146 1.595c0-.383.287-.638.605-.638.319 0 .605.255.605.638 0 .382-.286.637-.605.637-.318-.032-.605-.287-.605-.637z",
        })
      ),
      whatsApp: (global.React || guac.react).createElement(
        "svg",
        {
          viewBox: "0 0 496 497",
        },
        (global.React || guac.react).createElement(
          "defs",
          null,
          (global.React || guac.react).createElement(
            "linearGradient",
            {
              id: "a",
              x1: "247.32",
              x2: "247.32",
              y1: "446.09",
              y2: "39.9",
              gradientUnits: "userSpaceOnUse",
            },
            (global.React || guac.react).createElement("stop", {
              offset: "0",
              stopColor: "#20b038",
            }),
            (global.React || guac.react).createElement("stop", {
              offset: "1",
              stopColor: "#60d66a",
            })
          ),
          (global.React || guac.react).createElement(
            "linearGradient",
            {
              id: "b",
              x1: "247.32",
              x2: "247.32",
              y1: "453.37",
              y2: "32.61",
              gradientUnits: "userSpaceOnUse",
            },
            (global.React || guac.react).createElement("stop", {
              offset: "0",
              stopColor: "#f9f9f9",
            }),
            (global.React || guac.react).createElement("stop", {
              offset: "1",
              stopColor: "#fff",
            })
          )
        ),
        (global.React || guac.react).createElement("path", {
          d: "M37.88 453.37l29.59-108A208 208 0 0 1 39.63 241.1c0-115 93.6-208.49 208.56-208.49a208.57 208.57 0 0 1 208.57 208.66c-.05 115-93.62 208.49-208.57 208.49h-.08a208.41 208.41 0 0 1-99.67-25.38zm115.68-66.73l6.34 3.75a173.18 173.18 0 0 0 88.23 24.16h.06c95.55 0 173.31-77.75 173.35-173.3A173.34 173.34 0 0 0 248.26 67.83c-95.62 0-173.38 77.73-173.42 173.28a172.94 172.94 0 0 0 26.5 92.23l4.13 6.55L88 403.84z",
        }),
        (global.React || guac.react).createElement("path", {
          fill: "url(#a)",
          d: "M45.13 446.09l28.57-104.3a200.82 200.82 0 0 1-26.88-100.62c0-111 90.36-201.27 201.34-201.27A201.35 201.35 0 0 1 449.5 241.32c0 111-90.37 201.28-201.33 201.28h-.09a201.31 201.31 0 0 1-96.21-24.49z",
        }),
        (global.React || guac.react).createElement("path", {
          fill: "url(#b)",
          d: "M37.88 453.37l29.59-108A208 208 0 0 1 39.63 241.1c0-115 93.6-208.49 208.56-208.49a208.57 208.57 0 0 1 208.57 208.66c-.05 115-93.62 208.49-208.57 208.49h-.08a208.41 208.41 0 0 1-99.67-25.38zm115.68-66.73l6.34 3.75a173.18 173.18 0 0 0 88.23 24.16h.06c95.55 0 173.31-77.75 173.35-173.3A173.34 173.34 0 0 0 248.26 67.83c-95.62 0-173.38 77.73-173.42 173.28a172.94 172.94 0 0 0 26.5 92.23l4.13 6.55L88 403.84z",
        }),
        (global.React || guac.react).createElement("path", {
          fill: "#fff",
          d: "M196.07 153.94c-3.91-8.68-8-8.85-11.73-9-3-.14-6.51-.13-10-.13a19.15 19.15 0 0 0-13.89 6.52c-4.78 5.22-18.24 17.82-18.24 43.46s18.67 50.42 21.28 53.9 36.05 57.77 89 78.66c44 17.36 53 13.91 62.53 13s30.83-12.61 35.18-24.78 4.34-22.59 3-24.77-4.78-3.48-10-6.08-30.83-15.22-35.61-16.95-8.25-2.61-11.73 2.61-13.45 16.94-16.5 20.42-6.08 3.92-11.29 1.31-22-8.11-41.9-25.86c-15.5-13.82-26-30.87-29-36.09s-.32-8 2.29-10.63c2.34-2.34 5.21-6.09 7.82-9.13s3.47-5.21 5.21-8.69.87-6.52-.44-9.13-11.35-28.34-15.98-38.64z",
        })
      ),
      chat: (global.React || guac.react).createElement(
        "g",
        {
          fill: "currentColor",
        },
        (global.React || guac.react).createElement("rect", {
          x: 4,
          y: 6,
          width: 16,
          height: 10.222,
          rx: 1.129,
        }),
        (global.React || guac.react).createElement("path", {
          d: "M8.977 18.578l.2-2.722a.564.564 0 01.564-.523h3.61c.548 0 .774.705.327 1.024l-3.81 2.721a.564.564 0 01-.89-.5z",
        })
      ),
      direction: (global.React || guac.react).createElement(
        "svg",
        {
          width: "24",
          height: "24",
          xmlns: "http://www.w3.org/2000/svg",
        },
        (global.React || guac.react).createElement("path", {
          d: "M19.94 6.078l-7.273 14.546c-.129.265-.345.398-.648.398a.962.962 0 01-.17-.023.716.716 0 01-.557-.705V13.75H4.746a.716.716 0 01-.704-.557.736.736 0 01.045-.477.687.687 0 01.33-.341L18.962 5.1a.683.683 0 01.33-.08c.204 0 .375.073.511.217a.678.678 0 01.21.392.69.69 0 01-.073.448z",
          fill: "currentColor",
        })
      ),
      alert: (global.React || guac.react).createElement(
        "g",
        {
          fillRule: "evenodd",
          fill: "currentColor",
        },
        (global.React || guac.react).createElement("path", {
          d: "M12.005 7.75C12.4208 7.75 12.7579 8.08421 12.7579 8.5V13.1C12.7579 13.5158 12.4208 13.85 12.005 13.85C11.5892 13.85 11.2521 13.5158 11.2521 13.1V8.5C11.2521 8.08421 11.5892 7.75 12.005 7.75ZM12.78 15.43C12.78 15.858 12.433 16.21 12.005 16.21C11.577 16.21 11.23 15.858 11.23 15.43C11.23 15.0019 11.577 14.66 12.005 14.66C12.433 14.66 12.78 15.0019 12.78 15.43Z",
        }),
        (global.React || guac.react).createElement("path", {
          d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z",
        })
      ),
      uxcoreComments: (global.React || guac.react).createElement("path", {
        fillRule: "evenodd",
        d: "M7 2v6H1v15l4.3-3.18H17v-5.98h1.7l4.3 3.08V2H7zm8 15.8H4.68L3 19.05V10h4v3.86h8v3.94zm6-4.72l-1.69-1.22H9V4h12v9.08zM11 8a1 1 0 112 0 1 1 0 01-2 0zm3 0a1 1 0 112 0 1 1 0 01-2 0zm3 0a1 1 0 112 0 1 1 0 01-2 0z",
        clipRule: "evenodd",
      }),
      android: (global.React || guac.react).createElement("path", {
        d: "M8.11966 8.92126H15.9515C15.8971 7.71857 15.3093 6.59347 14.3326 5.82296L15.1802 4.7795C15.3328 4.54166 15.2576 4.23205 15.0107 4.08117C14.7686 3.93286 14.446 3.99326 14.2817 4.21763L13.324 5.38952C12.4952 5.15007 11.6099 5.15007 10.7811 5.38952L9.79792 4.24171C9.70024 4.09126 9.52672 3.99997 9.34022 4.00091C9.23774 3.99906 9.13713 4.02708 9.05203 4.08117C8.79967 4.24102 8.73143 4.5641 8.89945 4.80357L9.74707 5.82296C8.77308 6.59637 8.18337 7.71907 8.11966 8.92126ZM14.4513 6.9788C14.7462 6.9788 14.9853 7.20521 14.9853 7.48448C14.9853 7.76376 14.7462 7.99016 14.4513 7.99016C14.1564 7.99016 13.9173 7.76376 13.9173 7.48448C13.9173 7.20521 14.1564 6.9788 14.4513 6.9788ZM9.6284 6.9788C9.77003 6.9788 9.90584 7.03208 10.006 7.12691C10.1061 7.22175 10.1624 7.35037 10.1624 7.48448C10.1624 7.76376 9.92331 7.99016 9.6284 7.99016C9.33349 7.99016 9.09441 7.76376 9.09441 7.48448C9.09441 7.35037 9.15067 7.22175 9.25081 7.12691C9.35096 7.03208 9.48678 6.9788 9.6284 6.9788ZM7.12797 9.84432C7.08088 9.36562 6.65667 8.99959 6.14899 8.99959C5.6413 8.99959 5.21709 9.36562 5.17 9.84432V13.5607C5.21709 14.0394 5.6413 14.4054 6.14899 14.4054C6.65667 14.4054 7.08088 14.0394 7.12797 13.5607V9.84432ZM15.9431 9.84432H8.11119V15.8403C8.11119 16.1195 8.35027 16.3459 8.64518 16.3459H9.08594V19.1553C9.13303 19.634 9.55723 20 10.0649 20C10.5726 20 10.9968 19.634 11.0439 19.1553V16.3459H13.0103V19.1553C13.0575 19.634 13.4817 20 13.9893 20C14.497 20 14.9212 19.634 14.9683 19.1553V16.3459H15.4176C15.7124 16.3459 15.9515 16.1195 15.9515 15.8403L15.9431 9.84432ZM18.8843 9.84432C18.8371 9.36562 18.413 8.99959 17.9053 8.99959C17.3976 8.99959 16.9733 9.36562 16.9262 9.84432V13.5607C16.9733 14.0394 17.3976 14.4054 17.9053 14.4054C18.413 14.4054 18.8371 14.0394 18.8843 13.5607V9.84432Z",
      }),
      apple: (global.React || guac.react).createElement(
        "g",
        {
          fillRule: "evenodd",
        },
        (global.React || guac.react).createElement("path", {
          d: "M15.189 7.86576C13.8721 7.76812 12.7542 8.60169 12.1309 8.60169C11.498 8.60169 10.523 7.88686 9.48868 7.90625C8.13105 7.92616 6.87945 8.69672 6.17934 9.91223C4.76892 12.3602 5.81929 15.9877 7.19319 17.9744C7.86474 18.9453 8.66663 20.0388 9.71925 19.9989C10.7322 19.9594 11.1159 19.3441 12.3406 19.3441C13.5648 19.3441 13.9101 19.9989 14.9816 19.9792C16.0722 19.9594 16.7632 18.9886 17.4301 18.0123C18.202 16.8857 18.5196 15.7948 18.5382 15.7374C18.5139 15.7288 16.4126 14.9218 16.3913 12.5003C16.3723 10.4758 18.0436 9.50259 18.12 9.45542C17.1708 8.05841 15.7053 7.90392 15.189 7.86576Z",
        }),
        (global.React || guac.react).createElement("path", {
          d: "M14.3762 6.55453C14.9356 5.8784 15.3121 4.93673 15.2088 4C14.4032 4.03194 13.4296 4.53661 12.8518 5.21213C12.3348 5.81081 11.8805 6.76953 12.004 7.6867C12.9012 7.75637 13.8174 7.23084 14.3762 6.55453Z",
        })
      ),
      msOutlook: (global.React || guac.react).createElement(
        "g",
        {
          fillRule: "evenodd",
        },
        (global.React || guac.react).createElement("path", {
          d: "M13.9835 7.39233V10.522L15.0771 11.2106C15.1059 11.2189 15.1686 11.2196 15.1973 11.2106L19.9043 8.03695C19.9043 7.6614 19.554 7.39233 19.3562 7.39233H13.9835Z",
        }),
        (global.React || guac.react).createElement("path", {
          d: "M13.9835 11.6898L14.9815 12.3753C15.1222 12.4787 15.2917 12.3753 15.2917 12.3753C15.1227 12.4787 19.905 9.30221 19.905 9.30221V15.0544C19.905 15.6807 19.504 15.9431 19.0534 15.9431H13.9827V11.6898H13.9835Z",
        }),
        (global.React || guac.react).createElement("path", {
          d: "M8.81548 10.2466C8.47511 10.2466 8.20414 10.4065 8.00401 10.7255C7.80387 11.045 7.70357 11.4673 7.70357 11.9931C7.70357 12.5267 7.80387 12.9486 8.00401 13.2586C8.20414 13.5695 8.4668 13.7237 8.79124 13.7237C9.12615 13.7237 9.39165 13.5728 9.58751 13.2714C9.78336 12.9695 9.882 12.5507 9.882 12.0152C9.882 11.4569 9.78693 11.0224 9.59654 10.7117C9.40591 10.4018 9.14588 10.2466 8.81548 10.2466Z",
        }),
        (global.React || guac.react).createElement("path", {
          d: "M10.313 13.9949C9.91937 14.5128 9.40596 14.7724 8.77275 14.7724C8.15546 14.7724 7.65322 14.5214 7.26435 14.0194C6.87621 13.5172 6.68153 12.8633 6.68153 12.0568C6.68153 11.2054 6.87859 10.5166 7.27339 9.99078C7.66819 9.46476 8.19088 9.20188 8.84192 9.20188C9.45658 9.20188 9.95431 9.45288 10.3334 9.95679C10.713 10.4602 10.9029 11.1234 10.9029 11.9475C10.9036 12.7941 10.7066 13.4768 10.313 13.9949ZM4.08 5.80289V18.0471L13.3944 20V4L4.08 5.80289Z",
        })
      ),
      google: (global.React || guac.react).createElement("path", {
        d: "M12.312 11.28V13.4667H17.4075C17.2516 14.6933 16.853 15.5911 16.2463 16.2222C15.5011 16.9867 14.3398 17.8222 12.312 17.8222C9.17493 17.8222 6.72247 15.2267 6.72247 12.0089C6.72247 8.79111 9.17493 6.19556 12.312 6.19556C14.0018 6.19556 15.241 6.88 16.151 7.76L17.6502 6.22222C16.385 4.96 14.6864 4 12.312 4C8.01369 4 4.4 7.59111 4.4 12C4.4 16.4089 8.01369 20 12.312 20C14.6345 20 16.385 19.2178 17.7542 17.76C19.1581 16.32 19.6 14.2844 19.6 12.6489C19.6 12.1422 19.5654 11.6711 19.4874 11.28H12.312Z",
      }),
      paperclip: (global.React || guac.react).createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15.6 11.6L17 13l-5.9 5.9c-1.3 1.3-2.9 1.9-4.6 1.9-1.7 0-3.2-.7-4.5-2-2.5-2.5-2.5-6.6 0-9.2l7.1-7.1.1-.1c1.9-2 5.1-2 7.1 0l.1.1c2 2 2 5.1 0 7.1l-6.9 6.6c-.7.7-1.6 1.1-2.5 1.2h-.3c-.9 0-1.7-.3-2.2-.9-.7-.7-1-1.6-.9-2.6.1-.9.5-1.8 1.2-2.5l5.5-5.8L11.7 7l-5.5 5.9c-.4.4-.6.8-.6 1.3 0 .2 0 .7.3 1 .3.3.7.3 1 .3.4 0 .9-.3 1.3-.6L15 8.2C16.2 7 16.2 5.1 15 4l-.1-.1c-1.2-1.2-3.1-1.2-4.3 0l-.7.7-6.5 6.5c-1.8 1.8-1.8 4.6 0 6.3 1.8 1.7 4.6 1.8 6.3 0l5.9-5.8z",
      }),
    };
    const { PUBLISH: Fn } = (global.Core || guac["@wsb/guac-widget-core"])
        .constants.renderModes,
      { HEADER: $n, RSS: Gn } = (global.Core || guac["@wsb/guac-widget-core"])
        .constants.widgetTypes,
      {
        SM_MIN: qn,
        MD_MIN: Yn,
        LG_MIN: Zn,
        XL_MIN: Jn,
      } = (global.Core || guac["@wsb/guac-widget-core"]).constants.breakpoints;
    let Qn = 0;
    const Kn = (e) => e;

    function ei(e) {
      return this.merge(
        {
          tag: "svg",
        },
        e
      );
    }

    function ti({
      icon: e,
      size: t = "medium",
      rotate: a = !1,
      iconPack: r = {},
      color: o = !1,
      minTarget: l = !1,
      ...i
    }) {
      const c = Object.assign({}, jn, r);
      let s = this.mapPropValue("iconSize", t),
        g = !1;
      return c[e]
        ? (o && (e = c[e + "Color"] ? e + "Color" : e),
          l &&
            "number" == typeof s &&
            s < n.M &&
            ((g = (n.M - s) / 2 + "px"), (s = n.M + "px")),
          this.merge(
            {
              tag: "svg",
              children: c[e],
              viewBox: "0 0 24 24",
              fill: "currentColor",
              width: s,
              height: s,
              style: {
                color: "inherit",
                display: "inline-block",
                padding: g,
                transition: a && "transform .33s ease-in-out",
                transform: a && `rotate(${a}deg)`,
                verticalAlign: "middle",
              },
            },
            i
          ))
        : (console.warn(
            `Incorrect icon name ${e} - the issue is probably in ${this.base.widgetPreset}`
          ),
          !1);
    }

    function ai({ animation: e, icon: t = "hamburger", ...r }) {
      const o = {
        verticalAlign: "top",
      };
      if (e) {
        const {
          animationIcon: t,
          iconPack: l,
          animationStyle: n,
          keyFrame: i,
        } = e;
        return this.merge({
          tag: "div",
          children: (global.React || guac.react).createElement(
            (global.React || guac.react).Fragment,
            null,
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon,
              a.a(
                {
                  icon: t,
                  iconPack: l,
                  style: { ...n, ...o },
                },
                r
              )
            ),
            (global.React || guac.react).createElement(
              (global.Core || guac["@wsb/guac-widget-core"]).UX.Style,
              null,
              i
            )
          ),
        });
      }
      return this.Icon(
        this.merge(
          {
            icon: t,
            style: o,
          },
          r
        )
      );
    }

    function ri(e) {
      const t = {
        top: "50%",
        transform: "translateY(-50%)",
        left: 8,
      };
      return this.Icon(
        this.merge(
          {
            style: {
              "@xs-only": t,
              "@sm-only": t,
            },
          },
          e
        )
      );
    }

    function oi(e) {
      const t = "neutral" === this.base.category;
      return this.Icon(
        this.merge(
          {
            color: t,
            style: {
              color: "highContrast",
            },
          },
          e
        )
      );
    }

    function li(e) {
      return this.Icon(
        this.merge(
          {
            size: "medium",
            icon: "close",
            minTarget: !0,
            style: {
              color: "highContrast",
              ":hover": {
                color: "highlight",
              },
              cursor: "pointer",
              lineHeight: "1.3em",
              fontStyle: "normal",
            },
          },
          e
        )
      );
    }

    function ni({
      src: e,
      alt: t,
      title: a,
      imageData: o,
      backgroundImage: l,
      imageSrcCallback: n = Kn,
      useSrcSet: i = !0,
      lazyLoad: c = !0,
      preprocessed: s,
      ...g
    }) {
      var p;
      const {
          imageDimensionStyles: u,
          parsedImageData: d,
          enableImageDimension: h,
        } = r.d(o),
        { renderMode: m } = (this.base && this.base.context) || {},
        { widgetType: y = null } = this.base,
        b = r.j(d),
        f = b.aspectRatio || d.editedAspectRatio,
        C = s ? e : n(r.e(d, e, l)),
        x = r.c(C),
        w = i && !h ? r.f(x) : null,
        T = "undefined" != typeof window,
        P =
          c && m === Fn && !T && r.i(C)
            ? {
                src:
                  y === $n && f
                    ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                    : b.outputHeight && b.outputWidth
                    ? r.a(
                        "//img1.wsimg.com/isteam/ip/static/transparent_placeholder.png",
                        {
                          rs: `w:${b.outputWidth},h:${b.outputHeight},cg:true,m,i:true`,
                          qt: "q:1",
                        }
                      )
                    : r.a(C, {
                        qt: "q:1",
                      }),
                "data-srcLazy": x,
                "data-srcSetLazy": w,
              }
            : {
                src: x,
                srcSet: w,
              },
        k = h
          ? u
          : {
              borderRadius:
                (null === (p = g.style) || void 0 === p
                  ? void 0
                  : p.borderRadius) || 0,
            };
      return (
        (g.style = { ...g.style, ...k }),
        this.merge(
          {
            tag: "img",
            style: {
              width: "auto",
              maxWidth: "100%",
              marginHorizontal: "auto",
              marginVertical: "0",
              verticalAlign: "middle",
              "@xs-only":
                m === Fn && f
                  ? {
                      height: `calc((100vw - 48px)/${f})`,
                    }
                  : {},
            },
            alt: t || (global._ || guac.lodash).get(d, "alt") || "image" + ++Qn,
            ...P,
          },
          g
        )
      );
    }
    const ii = [qn, Yn, Zn, Jn];

    function ci(e, t) {
      return r.a(e, {
        rs: `w:${t}`,
      });
    }

    function si(e, t) {
      return t.map((t) => `${ci(e, t)} ${t}w`);
    }

    function gi(e) {
      return e.map((t, a) => {
        if (a === e.length - 1) return `(min-width: ${t}px) ${t}px`;
        const r = e[a + 1] - 1;
        return `(min-width: ${t}px) and (max-width: ${r}px) ${r}px`;
      });
    }

    function pi({
      src: e,
      imageData: t,
      backgroundImage: a,
      imageSrcCallback: o = Kn,
      sizes: l = ii,
      ...n
    }) {
      const i = o(r.e(t, e, a));
      return this.Image(
        this.merge(
          {
            src: ci(i, l[0]),
            srcSet: si(i, l).join(", "),
            sizes: gi(l).join(", "),
            useSrcSet: !1,
            preprocessed: !0,
            imageData: t,
          },
          n
        )
      );
    }

    function ui(e) {
      return this.Image(
        this.merge(
          {
            style: {
              borderRadius: "50%",
              objectFit: "cover",
            },
          },
          e
        )
      );
    }

    function di({ hasOverhang: e, ...t }) {
      const a = {
        display: "block",
        margin: "0 auto",
        maxHeight: e ? 88 : 80,
      };
      return this.Image(
        this.merge(
          {
            style: {
              maxWidth: "100%",
              objectFit: "contain",
              "@xs-only": {
                maxWidth: 224,
                ...a,
              },
              "@sm-only": { ...a },
            },
          },
          t
        )
      );
    }

    function hi({ children: e, ...t }) {
      const a = [e],
        { renderMode: o } = (this.base && this.base.context) || {};
      if (
        o === Fn &&
        e &&
        "BACKGROUND_IMAGE_RENDERED" === e.props["data-aid"]
      ) {
        const {
            imageData: t,
            src: o,
            backgroundImage: l,
            imageSrcCallback: n = (e) => e,
          } = e.props,
          i = n(r.e(t, o, l));
        a.push(
          (global.React || guac.react).createElement("script", {
            dangerouslySetInnerHTML: {
              __html: r.h(i),
            },
          })
        );
      }
      return this.merge(
        {
          tag: "figure",
          children: a,
          style: {
            position: "relative",
            display: "inline-block",
            margin: 0,
          },
        },
        t
      );
    }

    function mi(e) {
      const t = (function (e) {
          const t = {
            clear: "both",
            maxWidth: "50%",
          };
          switch (e) {
            case "left":
              return Object.assign(
                {
                  float: "left",
                  marginRight: "medium",
                },
                t
              );
            case "right":
              return Object.assign(
                {
                  float: "right",
                  marginLeft: "medium",
                },
                t
              );
            default:
              return null;
          }
        })(e.alignment),
        { widgetType: a = null } = this.base,
        r = {
          display: a === Gn ? "block" : "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100%",
          marginLeft: "0",
          marginTop: "0",
          marginRight: "0",
          marginBottom: "medium",
          textAlign: "center",
        };
      return (
        t && (r["@md"] = t),
        this.merge(
          {
            tag: "figure",
            style: r,
          },
          e
        )
      );
    }

    function yi(e) {
      return this.Text(
        this.merge(
          {
            tag: "figcaption",
            typography: "DetailsAlpha",
            style: {
              backgroundColor: "section",
              paddingVertical: "xxsmall",
              paddingHorizontal: "xsmall",
            },
          },
          e,
          {
            section: "alt",
          }
        )
      );
    }

    function bi(e) {
      return this.Text(
        this.merge(
          {
            tag: "div",
            typography: "BodyAlpha",
            style: {
              textAlign: "center",
              paddingVertical: 0,
              margin: "0 auto",
              overflowWrap: "break-word",
              wordWrap: "break-word",
              "@sm": {
                maxWidth: 700,
              },
            },
          },
          e
        )
      );
    }

    function fi(e) {
      return this.Text(
        this.merge(
          {
            category: "accent",
            section: "overlay",
            typography: "BodyAlpha",
            featured: !0,
            style: {
              backgroundColor: "transparent",
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "flex-end",
              position: "absolute",
              bottom: 0,
              "> *": {
                backgroundColor: "section",
                padding: "xsmall",
                flexBasis: "auto",
              },
              "> :first-child": {
                flexGrow: 1,
              },
              "> :last-child": {
                flexGrow: 0,
              },
            },
          },
          e
        )
      );
    }

    function Ci(e) {
      return this.merge(
        {
          tag: "video",
        },
        e
      );
    }

    function xi({ tag: e, level: t }) {
      const a = e && (e.match(/\d+/) || [])[0];
      return t || parseInt(a, 10);
    }
    const wi = (global.React || guac.react).lazy(
        () =>
          new Promise(function (t, a) {
            e.require(
              ["@wsb/guac-widget-shared@^1/lib/components/RichText"],
              t,
              a
            );
          })
      ),
      { sectionTypes: Ti } = (global.Core || guac["@wsb/guac-widget-core"])
        .constants,
      Pi = {
        wordWrap: "break-word",
        overflowWrap: "break-word",
      };

    function ki({
      children: e,
      tag: t,
      level: a = 4,
      saveOriginalText: r,
      wrapWithTag: o,
      ...l
    }) {
      const { widgetType: n, widgetId: i, renderMode: c, order: s } = this.base,
        g = this.mapPropValue("lineHeightLevel", a),
        p = r
          ? {
              originalText: e,
            }
          : {},
        u = "undefined" != typeof window && "PUBLISH" === c;
      let d = t ? parseInt(t.substring(1), 10) : a,
        h = !1;
      const m = xi({
        tag: t,
        level: a,
      });
      if (
        this.prevWidgetId !== i &&
        d &&
        1 !== d &&
        (!this.hasH1 || u) &&
        "HEADER" !== n &&
        e &&
        d <= 4
      )
        if (u) {
          const e = document.querySelector("h1");
          (!e ||
            (e.getAttribute("data-promoted-from") === `${d}` &&
              e.getAttribute("data-order") === `${s}`)) &&
            (h = !0);
        } else h = !0;
      h && ((l["data-promoted-from"] = d), (l["data-order"] = s), (d = 1)),
        (this.prevWidgetId = i),
        (this.hasH1 = this.hasH1 || 1 === d);
      const y =
        !l.richtext && "string" == typeof e && e.includes("\n")
          ? "pre-line"
          : void 0;
      if (l.dangerouslySetInnerHTML) {
        const { __html: e } = l.dangerouslySetInnerHTML;
        l.dangerouslySetInnerHTML = {
          __html: o ? `<${o}>${e}</${o}>` : e,
        };
      } else
        l.children =
          e && o ? (global.React || guac.react).createElement(o, null, e) : e;
      const b = d ? `h${d}` : t;
      return this.merge(
        {
          tag: l.richtext
            ? (e) =>
                (global.React || guac.react).createElement(
                  (global.React || guac.react).Suspense,
                  {
                    fallback: (global.React || guac.react).createElement(
                      "div",
                      null
                    ),
                  },
                  (global.React || guac.react).createElement(wi, e)
                )
            : b,
          typography: {
            1: "HeadingAlpha",
            2: "HeadingBeta",
            3: "HeadingGamma",
            4: "HeadingDelta",
            5: "BodyAlpha",
            6: "DetailsBeta",
          }[m],
          richTextContainer: l.richtext && b,
          featured: Boolean(
            {
              5: !0,
              6: !0,
            }[m]
          ),
          role: "heading",
          "aria-level": d,
          style: {
            ...Pi,
            lineHeight: g,
            marginHorizontal: "0",
            marginVertical: "0",
            whiteSpace: y,
          },
          ...p,
        },
        (global._ || guac.lodash).omit(l, ["layout", "tag", "font"])
      );
    }

    function vi(e) {
      return this.Heading(
        this.merge(
          {
            tag: "h2",
            typography: "HeadingBeta",
          },
          e
        )
      );
    }

    function Ei(e) {
      return this.Heading(
        this.merge(
          {
            tag: "h3",
            typography: "HeadingGamma",
          },
          e
        )
      );
    }

    function Ri(e) {
      return this.Heading(
        this.merge(
          {
            tag: "h4",
            typography: "HeadingDelta",
          },
          e
        )
      );
    }

    function Si(e) {
      return this.HeadingMinor(
        this.merge(
          {
            featured: !0,
          },
          e
        )
      );
    }

    function Li({
      noWidow: e,
      linkify: t,
      linkStyle: a,
      phoneProps: r,
      urlProps: o,
      emailProps: l,
      children: n,
      tag: i = "p",
      ...c
    }) {
      let s;
      "string" == typeof n &&
        (!c.richtext && n.includes("\n") && (s = "pre-line"),
        t
          ? (n = (global.Core || guac["@wsb/guac-widget-core"]).utils.linkify(
              n,
              {
                linkStyle: a,
                phoneProps: r,
                urlProps: o,
                emailProps: l,
              }
            ))
          : e &&
            (c.dangerouslySetInnerHTML = {
              __html: n.replace(/\s(?=[^\s]*$)/, "&nbsp;"),
            })),
        c.dangerouslySetInnerHTML || (c.children = n),
        "h1" === i && (this.hasH1 = !0);
      return this.merge(
        {
          tag: c.richtext
            ? (e) =>
                (global.React || guac.react).createElement(
                  (global.React || guac.react).Suspense,
                  {
                    fallback: (global.React || guac.react).createElement(
                      "div",
                      null
                    ),
                  },
                  (global.React || guac.react).createElement(wi, e)
                )
            : i,
          typography: "BodyAlpha",
          richTextContainer: c.richtext && i,
          style: {
            ...Pi,
            lineHeight: "1.5",
            marginTop: "0",
            marginBottom: "0",
            whiteSpace: s,
          },
        },
        c
      );
    }

    function Ai(e) {
      return this.Text(
        this.merge(
          {
            typography: "BodyBeta",
          },
          e,
          {
            style: {
              textShadow: this.base.section === Ti.OVERLAY ? n.O : "none",
            },
          }
        )
      );
    }

    function Bi(e) {
      return this.Text(e);
    }

    function Ii(e) {
      return this.Text(
        this.merge(
          {
            typography: "DetailsAlpha",
          },
          e
        )
      );
    }

    function Mi(e) {
      return this.Details(
        this.merge(
          {
            typography: "DetailsBeta",
          },
          e
        )
      );
    }

    function Hi({ priceState: e = "featured", ...t }) {
      return this.Text(
        this.merge(
          {
            tag: "div",
            typography: "BodyAlpha",
            [e]: !0,
          },
          t
        )
      );
    }

    function zi(e) {
      return this.Price(
        this.merge(
          {
            typography: "BodyBeta",
          },
          e
        )
      );
    }

    function Ui(e) {
      return this.HeadingMajor(e);
    }

    function Di(e) {
      return this.merge(
        {
          tag: "label",
          typography: "BodyAlpha",
          featured: !0,
          style: { ...Pi },
        },
        e
      );
    }

    function Xi({ children: e, ...t }) {
      return this.merge(
        {
          tag: "label",
          children: (global.React || guac.react).createElement(
            "strong",
            null,
            e
          ),
          style: { ...Pi },
          typography: "DetailsAlpha",
          featured: !0,
        },
        t
      );
    }

    function Oi(e) {
      return this.Details(
        this.merge(
          {
            typography: "DetailsAlpha",
          },
          e
        )
      );
    }

    function _i(e) {
      return this.Text(
        this.merge(
          {
            typography: "BodyAlpha",
            featured: !0,
          },
          e
        )
      );
    }

    function Wi(e) {
      return this.Heading(
        this.merge(
          {
            tag: "h1",
            typography: "HeadingAlpha",
          },
          e
        )
      );
    }

    function Ni(e) {
      return this.Text(
        this.merge(
          {
            typography: "BodyBeta",
            featured: !0,
          },
          e
        )
      );
    }

    function Vi(e) {
      return this.Heading(
        this.merge(
          {
            tag: "h2",
            typography: "BodyBeta",
            featured: !0,
          },
          e
        )
      );
    }

    function ji(e) {
      return this.Text(e);
    }

    function Fi(e) {
      return this.Heading(
        this.merge(
          {
            level: 3,
            typography: "HeadingGamma",
          },
          e
        )
      );
    }

    function $i(e) {
      return this.Heading(
        this.merge(
          {
            level: 3,
            typography: "BodyAlpha",
            featured: !0,
          },
          e
        )
      );
    }

    function Gi(e) {
      return this.Text(
        this.merge(
          {
            typography: "BodyAlpha",
            alert: !0,
            role: "alertdialog",
            "aria-live": "assertive",
          },
          e
        )
      );
    }

    function qi(e) {
      return this.Text(
        this.merge(
          {
            typography: "BodyBeta",
            featured: !0,
            style: {
              a: {
                textDecoration: "none",
              },
            },
          },
          e
        )
      );
    }

    function Yi(e) {
      return this.Text(
        this.merge(
          {
            typography: "BodyAlpha",
            style: {
              paddingHorizontal: "medium",
              paddingBottom: 0,
              cursor: "auto",
            },
          },
          e
        )
      );
    }

    function Zi(e) {
      return this.merge(
        {
          tag: "table",
          typography: "DetailsAlpha",
          style: {
            display: "flex",
            flexDirection: "column",
            borderWidth: "xsmall",
            borderStyle: "solid",
            borderColor: "input",
            borderRadius: "medium",
          },
        },
        e
      );
    }

    function Ji(e) {
      return this.LabelMinor(
        this.merge(
          {
            tag: "th",
            style: {
              flex: 1,
              textAlign: "left",
              verticalAlign: "middle",
              paddingHorizontal: "small",
              paddingVertical: "xxsmall",
              borderRightWidth: "xsmall",
              borderRightStyle: "solid",
              borderColor: "input",
              ":last-child": {
                borderColor: "transparent",
              },
            },
          },
          e
        )
      );
    }

    function Qi(e) {
      return this.merge(
        {
          tag: "tr",
          style: {
            display: "flex",
            flexDirection: "row",
            borderBottomWidth: "xsmall",
            borderBottomStyle: "solid",
            borderColor: "input",
            ":last-child": {
              borderColor: "transparent",
            },
          },
        },
        e
      );
    }

    function Ki(e) {
      return this.merge(
        {
          tag: "td",
          style: {
            flex: 1,
            paddingHorizontal: "small",
            paddingVertical: "xxsmall",
            borderRightWidth: "xsmall",
            borderRightStyle: "solid",
            borderColor: "input",
            textAlign: "left",
            overflowWrap: "break-word",
            ":last-child": {
              borderColor: "transparent",
            },
          },
        },
        e
      );
    }

    function ec(e, t, a) {
      return Array.isArray(a)
        ? a.map((a) => e.mapPropValue(t, a))
        : e.mapPropValue(t, a);
    }

    function tc(e, t) {
      return ec(e, "colorDial", t);
    }

    function ac(e, t) {
      return ec(e, "color", t);
    }

    function rc(e, t) {
      return ec(e, "backgroundColor", t);
    }

    function oc(e, t) {
      return ec(e, "borderColor", t);
    }
    const { Color: lc } = (global.Core || guac["@wsb/guac-widget-core"]).UX2
        .utils,
      nc = new lc("rgba(255,255,255,1)"),
      ic = new lc("rgba(0,0,0,1)"),
      cc = new lc("rgba(69,90,100,1)"),
      sc = new lc("#ff0000"),
      gc = new lc("rgba(0, 0, 0, 0.3)"),
      pc = new lc("rgba(255, 255, 255, 0.3)"),
      { Color: uc } = (global.Core || guac["@wsb/guac-widget-core"]).UX2.utils,
      dc = {},
      hc = 0.02;

    function mc({
      threshold: e,
      backgroundRgb: t,
      hue: a,
      saturation: r,
      initialValue: o,
      isCurrentValueAccessible: l,
    }) {
      for (let n = o; n <= 100; n++) {
        const o = uc.contrastRatio(t, uc.hsvToRgb(a, r, n));
        if (l && o < e + hc) return n - 1;
        if (!l && o >= e + hc) return n;
      }
    }

    function yc(e, t, a, r = 1) {
      if (uc.contrastRatio(a, t) >= e + hc) return [a];
      const [o, l, n] = a.toHsv();
      return (function (e, t, a, r) {
        const o = [e, t.toHex(), r].join();
        if (!(o in dc)) {
          const l = [],
            n = t.toRgb(!1, !1),
            i = a.toRgb(!1, !1),
            c = mc({
              threshold: e,
              backgroundRgb: n,
              hue: r,
              saturation: 0,
              initialValue: 0,
              isCurrentValueAccessible: uc.contrastRatio(i, n) >= e + hc,
            });
          if ("number" != typeof c) return [];
          l.push(c);
          for (let a = 1; a <= 100; a++) {
            const o = mc({
              threshold: e,
              backgroundRgb: n,
              hue: r,
              saturation: a,
              initialValue: l[a - 1],
              isCurrentValueAccessible: t.isLight(),
            });
            if (!o) break;
            l.push(o);
          }
          dc[o] = l;
        }
        return dc[o];
      })(e, t, a, o)
        .map((e, t) => {
          return {
            saturation: t,
            value: e,
            distance:
              ((a = {
                saturation: t,
                value: e,
              }),
              (r = {
                saturation: l,
                value: n,
              }),
              Math.pow(a.saturation - r.saturation, 2) +
                Math.pow(a.value - r.value, 2)),
          };
          var a, r;
        })
        .sort((e, t) => e.distance - t.distance)
        .slice(0, r)
        .map((e) => uc.fromHSV(o, e.saturation, e.value));
    }
    const { Color: bc, accessibility: fc } = (
        global.Core || guac["@wsb/guac-widget-core"]
      ).UX2.utils,
      { PRIMARY: Cc } = (global.Core || guac["@wsb/guac-widget-core"]).constants
        .categoryTypes,
      { DEFAULT_WEBSITE_FONT_SCALES: xc } = (
        global.Core || guac["@wsb/guac-widget-core"]
      ).constants.fontScales,
      { OVERLAY: wc } = (global.Core || guac["@wsb/guac-widget-core"]).constants
        .sectionTypes,
      { AA: Tc } = (global.Core || guac["@wsb/guac-widget-core"]).constants
        .accessibility.CONFORMANCE_LEVEL;

    function Pc() {
      const {
          fontSize: e,
          fontFamily: t,
          fontScale: a,
          forceBreakpoint: r,
        } = this.base,
        o = Pe.call(this, e, r) * xc[a],
        l = ec(this, "fontDial", `${t}.weight`);
      return fc.textContrastThresholds(o, l)[Tc];
    }

    function kc(e) {
      const t = tc(this, "background"),
        a = Pc.call(this);
      if (bc.contrastRatio(e, t) < a) {
        const r = (global._ || guac.lodash).first(yc(a, t, e));
        if (r) return r;
      }
      return e;
    }

    function vc(e, t, a = 55) {
      return !(!e && !t) && Math.abs(e.lightness - t.lightness) <= a;
    }
    var Ec = {
      __proto__: null,
      colorSection: function () {
        const [e, t] = tc(this, ["background", "multiplier"]);
        return e.setAlpha(100).contrast(60 * t);
      },
      colorBackground: function () {
        return tc(this, "background");
      },
      colorError: function () {
        const [e, t, a] = tc(this, ["background", "multiplier", "error"]);
        return a.contrastWith(e, 50 * t, !0);
      },
      colorPrimary: function () {
        const [e, t, a] = tc(this, ["primary", "background", "multiplier"]);
        return e.contrastWith(t, 40 * a, !0);
      },
      colorAccent: function () {
        const [e, t, a] = tc(this, ["accent", "background", "multiplier"]);
        return e.contrastWith(t, 40 * a, !0);
      },
      colorNeutral: function () {
        const [e, t, a] = tc(this, ["neutral", "background", "multiplier"]);
        return e.contrastWith(t, 40 * a, !0);
      },
      colorHighContrast: function () {
        const [e, t] = tc(this, ["background", "multiplier"]);
        return e.setAlpha(100).contrast(90 * t);
      },
      colorLowContrast: function () {
        const [e, t] = tc(this, ["background", "multiplier"]);
        return e.setAlpha(100).contrast(62 * t);
      },
      colorUltraLowContrast: function () {
        const [e, t] = tc(this, ["background", "multiplier"]);
        return e.setAlpha(100).contrast(20 * t);
      },
      colorHighlight: function () {
        const [e, t, a, r] = tc(this, [
            "background",
            "multiplier",
            "highlight",
            "primary",
          ]),
          { category: o, section: l } = this.base;
        return o === Cc || l === wc
          ? a.contrastWith(e, 50 * t, !0)
          : kc.call(this, r);
      },
      colorHighlightHover: function () {
        const [e, t, a, r] = tc(this, [
            "background",
            "multiplier",
            "highlight",
            "primary",
          ]),
          { section: o } = this.base;
        if (o === wc) return r.contrastWith(e, 40 * t, !0);
        let l = a.contrastWith(e, 70 * t, !0);
        return (
          (l = l.lightness > 90 ? l.darken(20) : l),
          (l = l.lightness < 10 ? l.lighten(20) : l),
          l
        );
      },
      colorHighlightActive: function () {
        const [e, t, a] = tc(this, ["background", "multiplier", "highlight"]);
        return a.contrastWith(e, 80 * t, !0);
      },
      colorHighlightDisabled: function () {
        return ac(this, "highlight").setAlpha(70);
      },
      colorAction: function () {
        const e = rc(this, "action"),
          t = tc(this, "multiplier");
        return e.contrast(80 * t);
      },
      colorActionHover: function () {
        return ac(this, "action");
      },
      colorActionActive: function () {
        return ac(this, "action");
      },
      colorActionDisabled: function () {
        return ac(this, "action").setAlpha(70);
      },
      colorActionContrast: function () {
        const e = rc(this, "actionContrast"),
          t = tc(this, "multiplier");
        return e.contrast(100 * t);
      },
      colorActionContrastHover: function () {
        return ac(this, "actionContrast");
      },
      colorActionContrastActive: function () {
        return ac(this, "actionContrast");
      },
      colorActionContrastDisabled: function () {
        return ac(this, "actionContrast").setAlpha(70);
      },
      colorInput: function () {
        const e = rc(this, "input"),
          t = tc(this, "multiplier");
        return e.setAlpha(100).contrast(70 * t);
      },
      colorInputHover: function () {
        return ac(this, "input");
      },
      colorInputActive: function () {
        return ac(this, "input");
      },
      colorInputDisabled: function () {
        return ac(this, "input").setAlpha(70);
      },
      colorInputPlaceholder: function () {
        return ac(this, "inputDisabled");
      },
      colorInputHighlight: function () {
        const e = rc(this, "input"),
          t = tc(this, "multiplier");
        return ac(this, "highlight").contrastWith(e, 30 * t, !0);
      },
      colorLightnessSimilarity: vc,
      colorBrandLividContrast: function () {
        return rc(this, "brandLivid").lightness > 50 ? ic : nc;
      },
    };
    const { Color: Rc } = (global.Core || guac["@wsb/guac-widget-core"]).UX2
        .utils,
      { categoryTypes: Sc, sectionTypes: Lc } = (
        global.Core || guac["@wsb/guac-widget-core"]
      ).constants;
    var Ac = {
      __proto__: null,
      colorDial: function (e) {
        const { colorDials: t = [] } = this.base;
        let a = !1;
        if (
          (t.some((t) => {
            const r = (t.getMeta && t.getMeta(e)) || (t.meta && t.meta[e]);
            return r && (a = new Rc(r)), a;
          }),
          !a)
        )
          throw new Error(`Unable to load color dial: '${e}'`);
        return a;
      },
      colorDialBackground: function () {
        const { category: e, section: t } = this.base,
          a = this.mapPropValue("colorDial", e);
        if (e === Sc.PRIMARY) {
          if (t === Lc.ALT) {
            const [, , e] = a.toHsv();
            return e < 25 ? a.lighten(5) : a.darken(5);
          }
          return t === Lc.OVERLAY ? a.setAlpha(50) : a;
        }
        return e === Sc.ACCENT
          ? t === Lc.ALT
            ? a.darken(8)
            : t === Lc.OVERLAY
            ? a.setAlpha(50)
            : a
          : e === Sc.NEUTRAL
          ? t === Lc.ALT
            ? a.darken(3)
            : t === Lc.OVERLAY
            ? a.setAlpha(50)
            : a
          : a;
      },
      colorDialHighlight: function () {
        const { category: e } = this.base,
          t = tc(this, Sc.PRIMARY);
        return e === Sc.PRIMARY
          ? t.isDark()
            ? tc(this, Sc.NEUTRAL)
            : tc(this, Sc.ACCENT)
          : t;
      },
      colorDialOutline: function () {
        const e = tc(this, "background");
        return e.lightness > 90 && e.alpha > 80;
      },
      colorDialMultiplier: function () {
        return (100 - tc(this, "background").alpha) / 50 + 1;
      },
      colorDialError: function () {
        return sc;
      },
    };
    const { Color: Bc } = (global.Core || guac["@wsb/guac-widget-core"]).UX2
      .utils;

    function Ic() {
      const [e, t] = tc(this, ["background", "multiplier"]);
      return e.setAlpha(100).contrast(50 * t);
    }

    function Mc() {
      const [e, t] = tc(this, ["background", "multiplier"]);
      return e.setAlpha(100).contrast(90 * t);
    }

    function Hc() {
      const [e, t] = tc(this, ["background", "multiplier"]);
      return e.setAlpha(100).contrast(25 * t);
    }
    var zc = {
      ...Ec,
      ...Ac,
      ...{
        __proto__: null,
        backgroundColorSection: function () {
          return tc(this, "background");
        },
        backgroundColorSectionOverlay: function () {
          const e = tc(this, "background"),
            t = 100 === e.alpha ? 90 : 90 === e.alpha ? 50 : 30;
          return e.setAlpha(t);
        },
        backgroundColorSectionOverlaySoft: function () {
          return tc(this, "background").setAlpha(10);
        },
        backgroundColorSectionContrast: function () {
          const [e, t] = tc(this, ["background", "multiplier"]);
          return e.setAlpha(100).contrast(90 * t);
        },
        backgroundColorSectionLowContrast: function () {
          const [e, t] = tc(this, ["background", "multiplier"]);
          return e.setAlpha(100).contrast(50 * t);
        },
        backgroundColorSectionUltraLowContrast: function () {
          const [e, t] = tc(this, ["background", "multiplier"]);
          return e.setAlpha(100).contrast(15 * t);
        },
        backgroundColorNeutral: function () {
          return tc(this, "neutral");
        },
        backgroundColorNeutralOverlay: function () {
          const [e, t] = tc(this, ["neutral", "background"]),
            a = 100 === t.alpha ? 90 : 90 === t.alpha ? 50 : 30;
          return e.setAlpha(a);
        },
        backgroundColorAccentOverlay: function () {
          const [e] = tc(this, ["background"]),
            t = 100 === e.alpha ? 90 : 90 === e.alpha ? 50 : 30;
          return ic.setAlpha(t);
        },
        backgroundColorPrimary: function () {
          return tc(this, "primary");
        },
        backgroundColorPrimaryOverlay: function () {
          const [e, t] = tc(this, ["primary", "background"]),
            a = 100 === t.alpha ? 90 : 90 === t.alpha ? 50 : 30;
          return e.setAlpha(a);
        },
        backgroundColorModalOverlay: function () {
          return ic.setAlpha(60);
        },
        backgroundColorAccent: function () {
          return tc(this, "accent");
        },
        backgroundColorAction: function () {
          const [e, t, a] = tc(this, ["highlight", "background", "multiplier"]);
          return e.contrastWith(t, 10 * a);
        },
        backgroundColorActionHover: function () {
          const [e, t] = tc(this, ["background", "multiplier"]),
            a = rc(this, "action");
          return (a.lightness > 10 ? a.lighten(10) : a.darken(10)).contrastWith(
            e,
            15 * t
          );
        },
        backgroundColorActionActive: function () {
          const e = rc(this, "action");
          return e.lightness > 10 ? e.darken(15) : e.lighten(15);
        },
        backgroundColorActionDisabled: function () {
          return rc(this, "action").setAlpha(70);
        },
        backgroundColorActionContrast: function () {
          const [e, t] = tc(this, ["background", "multiplier"]);
          return e.setAlpha(100).contrast(100 * t);
        },
        backgroundColorActionContrastHover: function () {
          const [e, t] = tc(this, ["background", "multiplier"]);
          return e.setAlpha(100).contrast(85 * t);
        },
        backgroundColorActionContrastActive: function () {
          return rc(this, "actionContrast");
        },
        backgroundColorActionContrastDisabled: function () {
          return rc(this, "actionContrast").setAlpha(70);
        },
        backgroundColorInput: function () {
          const [e, t] = tc(this, ["outline", "background"]);
          return e ? t.setAlpha(100).setLightness(100) : t.setAlpha(0);
        },
        backgroundColorInputHover: function () {
          return rc(this, "input");
        },
        backgroundColorInputActive: function () {
          return rc(this, "input");
        },
        backgroundColorInputDisabled: function () {
          return rc(this, "input").setAlpha(70);
        },
        backgroundColorNavSolid: function () {
          return tc(this, "background").setAlpha(100);
        },
        backgroundColorSearchMobileDark: function () {
          return new Bc("rgb(255, 255, 255)").setAlpha(15);
        },
        backgroundColorSearchMobileGray: function () {
          return new Bc("rgb(0, 0, 0)").setAlpha(8);
        },
        backgroundColorSearchMobileLight: function () {
          return new Bc("rgb(245, 245, 245)").setAlpha(100);
        },
        backgroundColorBrandLivid: function () {
          const e = tc(this, "background"),
            { alpha: t, lightness: a } = e;
          return a + (100 - t) >= 85 || 0 === t || 100 === a ? cc : nc;
        },
        backgroundColorBrandLividHover: function () {
          const e = rc(this, "brandLivid");
          return e.lightness > 50 ? e.darken(5) : e.lighten(5);
        },
      },
      ...{
        __proto__: null,
        borderColorLowContrast: Ic,
        borderColorHighContrast: Mc,
        borderColorUltraLowContrast: Hc,
        borderColorLowContrastOverlay: function () {
          const e = Ic.call(this);
          return e.setAlpha(0.5 * e.alpha);
        },
        borderColorHighContrastOverlay: function () {
          const e = Mc.call(this);
          return e.setAlpha(0.5 * e.alpha);
        },
        borderColorULowContrastOverlay: function () {
          const e = Hc.call(this);
          return e.setAlpha(0.5 * e.alpha);
        },
        borderColorSection: function () {
          const e = tc(this, "background");
          return e.alpha < 100
            ? e.isLight()
              ? gc
              : pc
            : e.contrast(10 * tc(this, "multiplier"), !0);
        },
        borderColorPrimary: function () {
          const [e, t, a] = tc(this, ["primary", "background", "multiplier"]);
          return e.contrastWith(t, 40 * a, !0);
        },
        borderColorAccent: function () {
          const [e, t, a] = tc(this, ["accent", "background", "multiplier"]);
          return e.contrastWith(t, 40 * a, !0);
        },
        borderColorNeutral: function () {
          const [e, t, a] = tc(this, ["neutral", "background", "multiplier"]);
          return e.contrastWith(t, 40 * a, !0);
        },
        borderColorInput: function () {
          const [e, t] = tc(this, ["outline", "background"]);
          return e
            ? rc(this, "input").contrastWith(t, 10 * tc(this, "multiplier"), !0)
            : t.setAlpha(100).setLightness(t.isDark() ? 100 : 0);
        },
        borderColorInputDisabled: function () {
          return oc(this, "input").setAlpha(70);
        },
        borderColorInputError: function () {
          const [e, t, a] = tc(this, ["error", "background", "multiplier"]);
          return e.contrastWith(t.setAlpha(100), 20 * a, !0);
        },
        borderColorHighlight: function () {
          const [e, t, a] = tc(this, ["background", "multiplier", "highlight"]);
          return a.contrastWith(e, 50 * t, !0);
        },
        borderColorHighlightDisabled: function () {
          return oc(this, "highlight").setAlpha(70);
        },
        borderColorAction: function () {
          const e = rc(this, "action"),
            t = tc(this, "multiplier");
          return e.contrast(80 * t);
        },
        borderColorActionBg: function () {
          return rc(this, "action");
        },
        borderColorActionContrastBg: function () {
          return rc(this, "actionContrast");
        },
      },
      ...{
        __proto__: null,
        fillPrimaryOverlay: function () {
          const [e, t] = tc(this, ["primary", "background"]),
            a = 100 === t.alpha ? 90 : 90 === t.alpha ? 50 : 30;
          return e.setAlpha(a);
        },
      },
    };
    const Uc = {
        useSecondBackground: !1,
        useSubtagline: !0,
        useWelcomeLine: !1,
        useAddress: !1,
        useCropBackground: !1,
        useBigLogo: !1,
        useSocialLinks: !1,
        useTextBackground: !1,
        coverImagePivot: {
          isSectionControl: !0,
          sectionControlLabel: "cover",
          showOnTop: !0,
          showThumbnail: !0,
        },
        headerTreatmentsConfig: {
          headerTreatments: [r.F, r.b, r.I, r.B],
          defaultHeaderTreatment: r.F,
        },
        usePhone: !0,
        phoneOnSecondaryPage: !1,
        showOverlayOpacityControls: !1,
        hasNavBackgroundToggle: !1,
        secondBackgroundArguments: {},
        socialLinksOnSecondaryPage: !0,
        useMediaTypeSelector: !1,
        showVideosTab: !0,
        useSlideshow: !1,
        useForegroundImage: !1,
        disablePaintjobs: !1,
        hasLogoAlign: !1,
        hasLogoBackground: !0,
        showAddressDefault: !1,
        useVideoEmbed: !0,
      },
      Dc = {
        enableCircularImage: !1,
      };

    function Xc(e, t) {
      return "function" == typeof e ? e.call(this, t) : e;
    }

    function Oc({
      richtext: e,
      fontSizeMap: t,
      children: a,
      dangerouslySetInnerHTML: r = {},
    }) {
      return t
        ? ((a = a || r.__html),
          (global._ || guac.lodash).reduce(
            t,
            (t, r, l) => {
              if ((global._ || guac.lodash).startsWith(l, "@"))
                t[l] = Oc({
                  fontSizeMap: r,
                  children: a,
                });
              else {
                let n;
                "string" == typeof a && e && (n = o.c(a)),
                  (n = n || (global._ || guac.lodash).get(a, "length", 0));
                const [i = 0, c = Number.MAX_VALUE] = r;
                n >= i && n <= c && (t.fontSize = l);
              }
              return t;
            },
            {}
          ))
        : {};
    }

    function _c(e, t) {
      var a;
      return (global._ || guac.lodash).merge(
        {},
        Xc.call(this, this.mappedValues.typographyMapping[e], t),
        Xc.call(
          this,
          null === (a = this.mappedValues.typographyOverrides) || void 0 === a
            ? void 0
            : a[e],
          t
        ) || {},
        Xc.call(this, this.mappedValues[`typography${e}`], t) || {},
        t.fontSizeMap
          ? (function (e) {
              return {
                style: Oc(e),
              };
            })(t)
          : {}
      );
    }

    function Wc(e, t, a = {}) {
      return (
        (e &&
          (t.typography && t.typography.toLowerCase()) !==
            (e && e.toLowerCase()) &&
          _c.call(this, t.typography, t)[e.toLowerCase()]) ||
        a
      );
    }

    function Nc(e, t) {
      return e
        ? e
            .split(/(?=[A-Z])/)
            .reduce(
              (e, a) =>
                (global._ || guac.lodash).merge({}, e, _c.call(this, a, t)),
              {}
            )
        : {};
    }
    const Vc = {
        secondary: ["shape"],
        spotlight: ["shape", "decoration", "shadow"],
        external: ["shape"],
      },
      jc = ["Active", "Featured", "Disabled", "Alert", "Expired"],
      Fc = {
        style: {
          font: "primary",
          color: "highContrast",
          fontSize: "xlarge",
          fontWeight: "normal",
          letterSpacing: "normal",
          textTransform: "none",
        },
      };
    class $c extends (global.Core || guac["@wsb/guac-widget-core"]).UX2.Theme {
      constructor() {
        super(),
          oe(),
          (this.mappedValues = {
            ...this.mappedValues,
            spacingXxsmall: "4px",
            spacingXsmall: "8px",
            spacingSmall: "16px",
            spacingMedium: "24px",
            spacingLarge: "32px",
            spacingXlarge: "40px",
            spacingXlarger: "48px",
            spacingXxlarge: "56px",
            spacingXxlarger: "64px",
            spacingXxxlarge: "72px",
            borderNone: "0",
            borderXsmall: "1px",
            borderSmall: "2px",
            borderMedium: "4px",
            borderLarge: "6px",
            borderXlarge: "8px",
            fontSizeLevel1: "xxxlarge",
            fontSizeLevel2: "xxlarge",
            fontSizeLevel3: "xlarge",
            fontSizeLevel4: "large",
            fontSizeLevel5: "medium",
            fontSizeLevel6: "small",
            lineHeightLevel1: "1.05",
            lineHeightLevel2: "1.125",
            lineHeightLevel3: "1.25",
            lineHeightLevel4: "1.25",
            lineHeightLevel5: "1.25",
            lineHeightLevel6: "1.25",
            iconSizeXsmall: 8,
            iconSizeSmall: 16,
            iconSizeMedium: 28,
            iconSizeLarge: 32,
            iconSizeXlarge: 48,
            iconSizeXxlarge: 72,
            iconSizeButton: `${n.B}em`,
            transitionDurationMedium: ".3s",
            boxShadowCard: "0 0 28px -3px #bbb",
            borderRadius: (e) => this.mapPropValue("border", e),
            borderWidth: (e) => this.mapPropValue("border", e),
            borderBottomWidth: (e) => this.mapPropValue("border", e),
            borderTopWidth: (e) => this.mapPropValue("border", e),
            borderRightWidth: (e) => this.mapPropValue("border", e),
            borderLeftWidth: (e) => this.mapPropValue("border", e),
            padding: (e) => this.mapPropValue("spacing", e),
            maxWidth: (e) => this.mapPropValue("width", e),
            margin: (e) => this.mapPropValue("spacing", e),
            top: (e) => this.mapPropValue("spacing", e),
            left: (e) => this.mapPropValue("spacing", e),
            right: (e) => this.mapPropValue("spacing", e),
            bottom: (e) => this.mapPropValue("spacing", e),
            colorDialAccent: new (
              global.Core || guac["@wsb/guac-widget-core"]
            ).UX2.utils.Color("rgb(22, 22, 22)"),
            themeFontMultipliers: {},
            ...zc,
            ...Ie,
            typographyMapping: {
              LogoAlpha: { ...Fc },
              HeadingAlpha: {
                style: {
                  font: "primary",
                  color: "highContrast",
                  fontSize: "xxxlarge",
                  fontWeight: "normal",
                  letterSpacing: "normal",
                  textTransform: "none",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  lineHeight: 1.2,
                },
              },
              HeadingBeta: {
                style: {
                  font: "primary",
                  fontSize: "xxlarge",
                  color: "highContrast",
                  fontWeight: "normal",
                  letterSpacing: "normal",
                  textTransform: "none",
                },
              },
              HeadingGamma: { ...Fc },
              HeadingDelta: {
                style: {
                  font: "alternate",
                  color: "highContrast",
                  fontSize: "large",
                  fontWeight: "normal",
                  letterSpacing: "normal",
                  textTransform: "none",
                },
              },
              BodyAlpha: {
                style: {
                  font: "alternate",
                  color: "section",
                  fontSize: "medium",
                  fontWeight: "normal",
                  letterSpacing: "normal",
                  textTransform: "none",
                },
              },
              BodyBeta: {
                style: {
                  font: "alternate",
                  color: "section",
                  fontSize: "large",
                  fontWeight: "normal",
                  letterSpacing: "normal",
                  textTransform: "none",
                },
              },
              DetailsAlpha: {
                style: {
                  font: "alternate",
                  color: "lowContrast",
                  fontSize: "small",
                  fontWeight: "normal",
                  letterSpacing: "normal",
                  textTransform: "none",
                },
              },
              DetailsBeta: {
                style: {
                  font: "alternate",
                  color: "lowContrast",
                  fontSize: "xsmall",
                  fontWeight: "normal",
                  letterSpacing: "normal",
                  textTransform: "none",
                },
              },
              LinkAlpha: {
                style: {
                  font: "alternate",
                  color: "highlight",
                  fontSize: "inherit",
                  fontWeight: "inherit",
                  letterSpacing: "inherit",
                  textTransform: "inherit",
                  ":hover": {
                    color: "highlightHover",
                  },
                  ":active": {
                    color: "highlightActive",
                  },
                },
              },
              NavAlpha: {
                style: {
                  font: "alternate",
                  color: "highContrast",
                  fontSize: "small",
                  fontWeight: "normal",
                  letterSpacing: "normal",
                  textTransform: "none",
                  ":hover": {
                    color: "highlightHover",
                  },
                  ":active": {
                    color: "highlight",
                  },
                },
                active: {
                  style: {
                    fontWeight: "bold",
                    color: "highlight",
                    ":hover": {
                      color: "highlightHover",
                    },
                  },
                },
              },
              SubNavAlpha: {
                style: {
                  font: "alternate",
                  color: "highContrast",
                  fontSize: "small",
                  fontWeight: "normal",
                  letterSpacing: "normal",
                  textTransform: "none",
                  ":hover": {
                    color: "highlightHover",
                  },
                  ":active": {
                    color: "highlight",
                  },
                },
                active: {
                  style: {
                    fontWeight: "bold",
                    color: "highlight",
                    ":hover": {
                      color: "highlightHover",
                    },
                  },
                },
              },
              NavBeta: {
                style: {
                  font: "alternate",
                  color: "highContrast",
                  fontSize: "large",
                  fontWeight: "normal",
                  letterSpacing: "normal",
                  textTransform: "none",
                  ":hover": {
                    color: "highlightHover",
                  },
                  ":active": {
                    color: "highlight",
                  },
                },
              },
              SubNavBeta: {
                style: {
                  font: "alternate",
                  color: "section",
                  fontSize: "medium",
                  fontWeight: "normal",
                  letterSpacing: "normal",
                  textTransform: "none",
                  ":hover": {
                    color: "highlightHover",
                  },
                  ":active": {
                    color: "highlight",
                  },
                },
              },
              NavGamma: {
                style: {
                  font: "alternate",
                  color: "highContrast",
                  fontSize: "medium",
                  fontWeight: "normal",
                  letterSpacing: "normal",
                  textTransform: "inherit",
                  ":hover": {
                    color: "highlightHover",
                  },
                  ":active": {
                    color: "highlightActive",
                  },
                },
                active: {
                  style: {
                    color: "highlight",
                    fontWeight: "bold",
                  },
                },
              },
              ButtonAlpha: (e) => {
                const { size: t = "default" } = e;
                return {
                  style: {
                    font: "alternate",
                    fontWeight: "bold",
                    letterSpacing: "normal",
                    textTransform: "none",
                    textShadow: "none",
                    ...{
                      small: {
                        fontSize: "xsmall",
                      },
                      default: {
                        fontSize: "small",
                      },
                      large: {
                        fontSize: "mlarge",
                      },
                    }[t],
                  },
                  disabled: {
                    style: {},
                  },
                };
              },
              InputAlpha: (e) =>
                (global._ || guac.lodash).merge(
                  _c.call(this, "DetailsAlpha", e),
                  {
                    style: {
                      color: "input",
                    },
                  }
                ),
              DataAlpha: {
                style: {
                  font: "alternate",
                  color: "actionContrast",
                  fontSize: "xlarge",
                  fontWeight: "bold",
                  letterSpacing: "normal",
                  textTransform: "none",
                },
              },
              Featured: (e) =>
                Wc.call(this, "featured", e, {
                  style: {
                    color: "highContrast",
                  },
                }),
              Alert: (e) =>
                Wc.call(this, "alert", e, {
                  style: {
                    color: "error",
                  },
                }),
              Disabled: (e) =>
                Wc.call(this, "disabled", e, {
                  style: {
                    color: "inputDisabled",
                  },
                }),
              Expired: (e) =>
                Wc.call(this, "expired", e, {
                  style: {
                    textDecoration: "line-through",
                  },
                }),
              Active: (e) =>
                Wc.call(this, "active", e, {
                  style: {
                    fontWeight: "bold",
                  },
                }),
            },
            typography:
              (e) =>
              (t = {}) => {
                const [a, r = ""] = e.split("-"),
                  o = Nc.call(this, r, t),
                  l = _c.call(this, a, t),
                  n = a !== e ? _c.call(this, e, t) : {};
                return (global._ || guac.lodash).merge(
                  {},
                  Xc.call(this, l, t) || {},
                  o,
                  n
                );
              },
          });
      }
      static getDefaultBackgroundFilter() {
        return (global.Core || guac["@wsb/guac-widget-core"]).constants
          .imageFilters.NONE;
      }
      static getDefaultImageFilter() {
        return (global.Core || guac["@wsb/guac-widget-core"]).constants
          .imageFilters.NONE;
      }
      static getDefaultImageOverlayOpacity(e, t) {
        const a = n.c;
        return a[e] || a[t] || 0;
      }
      static getDefaultImageOverlayType() {
        return l.A;
      }
      static getWidgetDefaultProps(e, t) {
        return {
          alignmentOption: "center",
          ...("HEADER" === e && {
            logo: {
              logoAlign: "left",
            },
          }),
        };
      }
      static getMutatorDefaultProps(e, t) {
        return "HEADER" === e ? Uc : Dc;
      }
      getButtonDefaults() {
        const e =
            "Default" === this.base.kind
              ? "primary"
              : this.base.kind.toLowerCase(),
          t = this.constructor.config
            ? this.constructor.config.buttons.primary
            : {},
          a = (global._ || guac.lodash).omit(
            (this.constructor.config && this.constructor.config.buttons[e]) ||
              {},
            Vc[e]
          );
        return (global._ || guac.lodash).merge({}, t, a);
      }
      getTypographyList() {
        return (global._ || guac.lodash)
          .uniq(
            Object.keys(this.mappedValues.typographyMapping).concat(
              Object.keys(this.mappedValues.typographyOverrides || {})
            )
          )
          .filter((e) => !jc.includes(e))
          .sort();
      }
      Grid() {
        return qe.apply(this, arguments);
      }
      GridCell() {
        return Ye.apply(this, arguments);
      }
      SplitLayout() {
        return Dt.apply(this, arguments);
      }
      Box() {
        return _t.apply(this, arguments);
      }
      HorizontalBox() {
        return Ot.apply(this, arguments);
      }
      VerticalBox() {
        return Xt.apply(this, arguments);
      }
      ContentWrap() {
        return je.apply(this, arguments);
      }
      ContentBasic() {
        return Ve.apply(this, arguments);
      }
      ContentCard() {
        return Ht.apply(this, arguments);
      }
      ContentCards() {
        return Ut.apply(this, arguments);
      }
      ProductCard() {
        return Jt.apply(this, arguments);
      }
      HeadingPair() {
        return Fe.apply(this, arguments);
      }
      CardBanner() {
        return Ge.apply(this, arguments);
      }
      Rating() {
        return $e.apply(this, arguments);
      }
      Background() {
        return Je.apply(this, arguments);
      }
      BackgroundResponsive() {
        return ft.apply(this, arguments);
      }
      BackgroundHalf() {
        return Ct.apply(this, arguments);
      }
      MediaObject() {
        return Ze.apply(this, arguments);
      }
      Page() {
        return Tt.apply(this, arguments);
      }
      Widget() {
        return Rt.apply(this, arguments);
      }
      WidgetBanner() {
        return St.apply(this, arguments);
      }
      WidgetSplit() {
        return Lt.apply(this, arguments);
      }
      HeaderBackground() {
        return xt.apply(this, arguments);
      }
      Modal() {
        return Wt.apply(this, arguments);
      }
      ModalPopup() {
        return qt.apply(this, arguments);
      }
      ModalBody() {
        return jt.apply(this, arguments);
      }
      ModalOverlay() {
        return Zt.apply(this, arguments);
      }
      Intro() {
        return Qt.apply(this, arguments);
      }
      ZeroStateOverlay() {
        return Kt.apply(this, arguments);
      }
      Alert() {
        return aa.apply(this, arguments);
      }
      InputGroup() {
        return ra.apply(this, arguments);
      }
      CommerceCardOverlay() {
        return ia.apply(this, arguments);
      }
      CommerceCardPictureContainer() {
        return ga.apply(this, arguments);
      }
      CommerceCardContent() {
        return ua.apply(this, arguments);
      }
      CommerceCardPicture() {
        return ma.apply(this, arguments);
      }
      CommerceCardTitle() {
        return ha.apply(this, arguments);
      }
      CommerceCardRibbon() {
        return ya.apply(this, arguments);
      }
      CommerceCardPriceDisplay() {
        return da.apply(this, arguments);
      }
      CommerceCardItem() {
        return ca.apply(this, arguments);
      }
      Group(e) {
        return this.merge(
          {
            tag: "div",
          },
          e
        );
      }
      Layout(e) {
        return this.merge(e);
      }
      Nav() {
        return Sr.apply(this, arguments);
      }
      NavFooter() {
        return _r.apply(this, arguments);
      }
      NavMenu(e) {
        return e;
      }
      NavMoreMenu(e) {
        return e;
      }
      NavLink() {
        return Lr.apply(this, arguments);
      }
      NavListNested() {
        return Qr.apply(this, arguments);
      }
      NavLinkActive() {
        return Ar.apply(this, arguments);
      }
      NavLinkDropdown() {
        return Kr.apply(this, arguments);
      }
      NavLinkDropdownActive() {
        return eo.apply(this, arguments);
      }
      NavMenuLink() {
        return Br.apply(this, arguments);
      }
      NavMenuLinkActive() {
        return Ir.apply(this, arguments);
      }
      NavMoreMenuLink() {
        return Hr.apply(this, arguments);
      }
      NavMoreMenuLinkActive() {
        return zr.apply(this, arguments);
      }
      NavMoreMenuLinkNested() {
        return Ur.apply(this, arguments);
      }
      NavMoreMenuLinkNestedActive() {
        return Dr.apply(this, arguments);
      }
      MobileNavLink() {
        return Xr.apply(this, arguments);
      }
      MobileNavSubLink() {
        return Or.apply(this, arguments);
      }
      NavFooterLink() {
        return Wr.apply(this, arguments);
      }
      NavFooterLinkActive() {
        return Nr.apply(this, arguments);
      }
      Hero() {
        return Ma.apply(this, arguments);
      }
      HeroLink() {
        return Ha.apply(this, arguments);
      }
      HeroMedia() {
        return za.apply(this, arguments);
      }
      HeroHeading() {
        return Ua.apply(this, arguments);
      }
      Section() {
        return Fa.apply(this, arguments);
      }
      SectionBanner() {
        return Za.apply(this, arguments);
      }
      SectionBannerHeading() {
        return Ja.apply(this, arguments);
      }
      SectionSplit() {
        return Qa.apply(this, arguments);
      }
      Card() {
        return va.apply(this, arguments);
      }
      Content(e) {
        return this.merge(e);
      }
      ContentCardHeading() {
        return fr.apply(this, arguments);
      }
      ContentCardButton() {
        return Cr.apply(this, arguments);
      }
      ContentCardText() {
        return br.apply(this, arguments);
      }
      ContentCardWrapperImage() {
        return xr.apply(this, arguments);
      }
      ContentCardImageThumbnail() {
        return wr.apply(this, arguments);
      }
      ContentOverlayCardHeading() {
        return Pr.apply(this, arguments);
      }
      ContentOverlayCardButton() {
        return kr.apply(this, arguments);
      }
      ContentOverlayCardText() {
        return Tr.apply(this, arguments);
      }
      Blog() {
        return ba.apply(this, arguments);
      }
      BlogContent() {
        return ka.apply(this, arguments);
      }
      BlogMain() {
        return fa.apply(this, arguments);
      }
      BlogAside() {
        return Ta.apply(this, arguments);
      }
      BlogAsideHeading() {
        return Pa.apply(this, arguments);
      }
      Carousel(e) {
        return this.merge(
          {
            tag: "div",
          },
          e
        );
      }
      PromoBanner() {
        return to.apply(this, arguments);
      }
      ProductAsset() {
        return xo.apply(this, arguments);
      }
      ProductBanner() {
        return wo.apply(this, arguments);
      }
      ProductLabel() {
        return Po.apply(this, arguments);
      }
      ProductName() {
        return To.apply(this, arguments);
      }
      ProductPrices() {
        return Co.apply(this, arguments);
      }
      CommerceOverlay() {
        return Io.apply(this, arguments);
      }
      CommerceOverlayIcon() {
        return Ho.apply(this, arguments);
      }
      CommerceOverlayWrapper() {
        return zo.apply(this, arguments);
      }
      CommerceOverlayHeading() {
        return Mo.apply(this, arguments);
      }
      CommerceOverlayMoreLink() {
        return Uo.apply(this, arguments);
      }
      CommerceOverlayPrice() {
        return Do.apply(this, arguments);
      }
      CommerceOverlayMajorWrapper() {
        return Xo.apply(this, arguments);
      }
      CommerceOverlayMajorMoreLink() {
        return Oo.apply(this, arguments);
      }
      CommerceOverlayMediumWrapper() {
        return _o.apply(this, arguments);
      }
      CommerceOverlayMobileHeading() {
        return Wo.apply(this, arguments);
      }
      CommerceOverlayMobileMoreLink() {
        return No.apply(this, arguments);
      }
      CommerceOverlayMobileText() {
        return Vo.apply(this, arguments);
      }
      CommerceOverlayMobilePrice() {
        return jo.apply(this, arguments);
      }
      CommerceItem() {
        return Fo.apply(this, arguments);
      }
      CommerceItemHeading() {
        return $o.apply(this, arguments);
      }
      CommerceItemIcon() {
        return Go.apply(this, arguments);
      }
      CommerceItemPrice() {
        return qo.apply(this, arguments);
      }
      CommerceItemWrapper() {
        return Yo.apply(this, arguments);
      }
      CommerceItemLabel() {
        return Zo.apply(this, arguments);
      }
      CommerceItemButton() {
        return Jo.apply(this, arguments);
      }
      PromoBannerSeasonal() {
        return ao.apply(this, arguments);
      }
      GoogleTranslate() {
        return lo.apply(this, arguments);
      }
      Featured() {
        return no.apply(this, arguments);
      }
      Membership() {
        return Rr.apply(this, arguments);
      }
      MembershipListItem(e) {
        return this.NavigationDrawerListItem(e);
      }
      MembershipLink(e) {
        return this.NavigationDrawerLink(e);
      }
      MembershipTextAction(e) {
        return this.MembershipLink(e);
      }
      Logo(e) {
        return e;
      }
      Menu(e) {
        return e;
      }
      SlideshowArrows() {
        return ko.apply(this, arguments);
      }
      SearchPopout() {
        return vo.apply(this, arguments);
      }
      SearchPopoutIconSearch() {
        return Eo.apply(this, arguments);
      }
      SearchPopoutInputSearch() {
        return Ro.apply(this, arguments);
      }
      Clock() {
        return Qo.apply(this, arguments);
      }
      ClockValue() {
        return el.apply(this, arguments);
      }
      SectionHeading() {
        return Ga.apply(this, arguments);
      }
      SectionHeadingSub() {
        return Ya.apply(this, arguments);
      }
      SectionHeadingHR() {
        return qa.apply(this, arguments);
      }
      SectionSplitHeading() {
        return Ka.apply(this, arguments);
      }
      BlogMainLinkArrow() {
        return Ca.apply(this, arguments);
      }
      BlogMainHeading() {
        return xa.apply(this, arguments);
      }
      BlogMainHeadingSub() {
        return wa.apply(this, arguments);
      }
      ContentHeading() {
        return Sa.apply(this, arguments);
      }
      ContentText() {
        return La.apply(this, arguments);
      }
      ContentBigContentBasic() {
        return Aa.apply(this, arguments);
      }
      ContentBigHeading() {
        return Ba.apply(this, arguments);
      }
      ContentBigText() {
        return Ia.apply(this, arguments);
      }
      CardHeading() {
        return Ea.apply(this, arguments);
      }
      CardHeadingSub() {
        return Ra.apply(this, arguments);
      }
      Map() {
        return vr.apply(this, arguments);
      }
      MapBanner() {
        return Er.apply(this, arguments);
      }
      Form() {
        return er.apply(this, arguments);
      }
      FormSearch() {
        return tr.apply(this, arguments);
      }
      FormError() {
        return ar.apply(this, arguments);
      }
      LogoHeading() {
        return Da.apply(this, arguments);
      }
      Media(e) {
        return this.merge(e);
      }
      MediaObjectBackground() {
        return Xa.apply(this, arguments);
      }
      MediaObjectHeading() {
        return Oa.apply(this, arguments);
      }
      MediaObjectHeadingSub() {
        return _a.apply(this, arguments);
      }
      NavigationDrawer() {
        return ir.apply(this, arguments);
      }
      Sidebar() {
        return go.apply(this, arguments);
      }
      SubMenu() {
        return mo.apply(this, arguments);
      }
      SplitItem() {
        return mr.apply(this, arguments);
      }
      SplitItemImage() {
        return yr.apply(this, arguments);
      }
      SocialLinks() {
        return or.apply(this, arguments);
      }
      HeaderMedia() {
        return lr.apply(this, arguments);
      }
      PromoBannerText() {
        return oo.apply(this, arguments);
      }
      PromoBannerContainer() {
        return ro.apply(this, arguments);
      }
      FeaturedHeading() {
        return io.apply(this, arguments);
      }
      FeaturedText() {
        return co.apply(this, arguments);
      }
      ContactBar() {
        return So.apply(this, arguments);
      }
      ContactBarAddress() {
        return Lo.apply(this, arguments);
      }
      ContactBarPipe() {
        return Ao.apply(this, arguments);
      }
      ContactBarPhone() {
        return Bo.apply(this, arguments);
      }
      NavVerticalHeading() {
        return Vr.apply(this, arguments);
      }
      NavVerticalList() {
        return jr.apply(this, arguments);
      }
      NavVerticalListItem() {
        return Fr.apply(this, arguments);
      }
      NavHorizontalListItem() {
        return Yr.apply(this, arguments);
      }
      NavVerticalLink() {
        return $r.apply(this, arguments);
      }
      NavVerticalLinkActive() {
        return Gr.apply(this, arguments);
      }
      NavHorizontalList() {
        return qr.apply(this, arguments);
      }
      NavHorizontalLink() {
        return Zr.apply(this, arguments);
      }
      NavHorizontalLinkActive() {
        return Jr.apply(this, arguments);
      }
      NavigationDrawerLink() {
        return gr.apply(this, arguments);
      }
      NavigationDrawerLinkActive() {
        return pr.apply(this, arguments);
      }
      NavigationDrawerSubLink() {
        return ur.apply(this, arguments);
      }
      NavigationDrawerSubLinkActive() {
        return dr.apply(this, arguments);
      }
      NavigationDrawerList() {
        return cr.apply(this, arguments);
      }
      NavigationDrawerListItem() {
        return sr.apply(this, arguments);
      }
      NavigationDrawerInputSearch() {
        return hr.apply(this, arguments);
      }
      SidebarContainer() {
        return po.apply(this, arguments);
      }
      SidebarList() {
        return uo.apply(this, arguments);
      }
      SubMenuList() {
        return yo.apply(this, arguments);
      }
      SubMenuListItem() {
        return bo.apply(this, arguments);
      }
      ClockBlock() {
        return Ko.apply(this, arguments);
      }
      ClockLabel() {
        return tl.apply(this, arguments);
      }
      Link() {
        return Ml.apply(this, arguments);
      }
      LinkDropdown() {
        return wn.apply(this, arguments);
      }
      LinkDropdownActive() {
        return Tn.apply(this, arguments);
      }
      LinkArrow() {
        return zl.apply(this, arguments);
      }
      SocialLinksLink() {
        return Hl.apply(this, arguments);
      }
      LinkContent() {
        return Ul.apply(this, arguments);
      }
      Input() {
        return Dl.apply(this, arguments);
      }
      InputSearch() {
        return Xl.apply(this, arguments);
      }
      InputFloatLabel() {
        return Ol.apply(this, arguments);
      }
      InputFloatLabelInput() {
        return _l.apply(this, arguments);
      }
      InputFloatLabelLabel() {
        return Wl.apply(this, arguments);
      }
      InputTextArea() {
        return Nl.apply(this, arguments);
      }
      Button() {
        return Bl.apply(this, arguments);
      }
      ButtonPrimary() {
        return Pn.apply(this, arguments);
      }
      ButtonSecondary() {
        return kn.apply(this, arguments);
      }
      ButtonSpotlight() {
        return vn.apply(this, arguments);
      }
      ButtonFullWidth() {
        return Fl.apply(this, arguments);
      }
      ButtonExternal() {
        return $l.apply(this, arguments);
      }
      ButtonNext() {
        return jl.apply(this, arguments);
      }
      ButtonPrevious() {
        return Vl.apply(this, arguments);
      }
      CarouselButtonNext() {
        return Zl.apply(this, arguments);
      }
      CarouselButtonPrevious() {
        return Yl.apply(this, arguments);
      }
      SlideshowArrowsButtonNext() {
        return Kl.apply(this, arguments);
      }
      SlideshowArrowsButtonPrevious() {
        return Ql.apply(this, arguments);
      }
      InputCheckbox() {
        return en.apply(this, arguments);
      }
      InputRadio() {
        return tn.apply(this, arguments);
      }
      InputSelect() {
        return an.apply(this, arguments);
      }
      InputSelectElement() {
        return rn.apply(this, arguments);
      }
      InputSelectIcon() {
        return on.apply(this, arguments);
      }
      Option() {
        return ln.apply(this, arguments);
      }
      Dropdown() {
        return nn.apply(this, arguments);
      }
      Wrapper(e) {
        return this.merge(
          {
            tag: "div",
            style: {
              display: "inline-block",
            },
          },
          e
        );
      }
      LinkIcon() {
        return un.apply(this, arguments);
      }
      Dot() {
        return Cn.apply(this, arguments);
      }
      DotActive() {
        return xn.apply(this, arguments);
      }
      List() {
        return On.apply(this, arguments);
      }
      ListItem() {
        return _n.apply(this, arguments);
      }
      ListItemInline() {
        return Wn.apply(this, arguments);
      }
      HR() {
        return En.apply(this, arguments);
      }
      MembershipHR() {
        return Ln.apply(this, arguments);
      }
      Divider() {
        return Rn.apply(this, arguments);
      }
      Pipe() {
        return Sn.apply(this, arguments);
      }
      Loader() {
        return Vn.apply(this, arguments);
      }
      Embed() {
        return An.apply(this, arguments);
      }
      EmbedContainer() {
        return Bn.apply(this, arguments);
      }
      WrapperImage() {
        return hi.apply(this, arguments);
      }
      Image() {
        return ni.apply(this, arguments);
      }
      ImageThumbnail() {
        return ui.apply(this, arguments);
      }
      ImageLogo() {
        return di.apply(this, arguments);
      }
      ImageResponsive() {
        return pi.apply(this, arguments);
      }
      Video() {
        return Ci.apply(this, arguments);
      }
      Picture() {
        return nt.apply(this, arguments);
      }
      SVG() {
        return ei.apply(this, arguments);
      }
      Icon() {
        return ti.apply(this, arguments);
      }
      IconHamburger() {
        return ai.apply(this, arguments);
      }
      IconSearch() {
        return ri.apply(this, arguments);
      }
      IconSocial() {
        return oi.apply(this, arguments);
      }
      Figure() {
        return mi.apply(this, arguments);
      }
      FigCaption() {
        return yi.apply(this, arguments);
      }
      CarouselFigCaption() {
        return bi.apply(this, arguments);
      }
      CarouselFigCaptionOverlay() {
        return fi.apply(this, arguments);
      }
      Container() {
        return In.apply(this, arguments);
      }
      ContainerFluid() {
        return Mn.apply(this, arguments);
      }
      ContainerSplit() {
        return Hn.apply(this, arguments);
      }
      Block() {
        return Un.apply(this, arguments);
      }
      Element() {
        return zn.apply(this, arguments);
      }
      Heading() {
        return ki.apply(this, arguments);
      }
      HeadingMajor() {
        return vi.apply(this, arguments);
      }
      HeadingMiddle() {
        return Ei.apply(this, arguments);
      }
      HeadingMinor() {
        return Ri.apply(this, arguments);
      }
      HeadingProduct() {
        return Si.apply(this, arguments);
      }
      Text() {
        return Li.apply(this, arguments);
      }
      TextMajor() {
        return Ai.apply(this, arguments);
      }
      TextAction() {
        return Bi.apply(this, arguments);
      }
      Label() {
        return Di.apply(this, arguments);
      }
      LabelMinor() {
        return Xi.apply(this, arguments);
      }
      CloseIcon() {
        return li.apply(this, arguments);
      }
      CardBannerContainer() {
        return Dn.apply(this, arguments);
      }
      CardBannerBlock() {
        return Xn.apply(this, arguments);
      }
      CardBannerHeading() {
        return Ui.apply(this, arguments);
      }
      CardBannerButton() {
        return pn.apply(this, arguments);
      }
      Details() {
        return Ii.apply(this, arguments);
      }
      DetailsMinor() {
        return Mi.apply(this, arguments);
      }
      DisplayHeading() {
        return Fi.apply(this, arguments);
      }
      DisplayHeadingSub() {
        return $i.apply(this, arguments);
      }
      FooterLink() {
        return fn.apply(this, arguments);
      }
      FooterDetails() {
        return Oi.apply(this, arguments);
      }
      FooterText() {
        return _i.apply(this, arguments);
      }
      MembershipHeading() {
        return Yi.apply(this, arguments);
      }
      MoreLink() {
        return dn.apply(this, arguments);
      }
      MoreLinkExpand() {
        return hn.apply(this, arguments);
      }
      MoreLinkForward() {
        return yn.apply(this, arguments);
      }
      MoreLinkBackward() {
        return mn.apply(this, arguments);
      }
      MoreLinkMenu() {
        return bn.apply(this, arguments);
      }
      Price() {
        return Hi.apply(this, arguments);
      }
      PriceMajor() {
        return zi.apply(this, arguments);
      }
      Tagline() {
        return Wi.apply(this, arguments);
      }
      SubTagline() {
        return Ni.apply(this, arguments);
      }
      SupTagline() {
        return Vi.apply(this, arguments);
      }
      Error() {
        return Gi.apply(this, arguments);
      }
      Address() {
        return ji.apply(this, arguments);
      }
      UtilitiesMenu() {
        return rr.apply(this, arguments);
      }
      UtilitiesMenuIcon() {
        return gn.apply(this, arguments);
      }
      UtilitiesMenuLink() {
        return sn.apply(this, arguments);
      }
      Phone() {
        return qi.apply(this, arguments);
      }
      Table() {
        return Zi.apply(this, arguments);
      }
      TableHeader() {
        return Ji.apply(this, arguments);
      }
      TableRow() {
        return Qi.apply(this, arguments);
      }
      TableCell() {
        return Ki.apply(this, arguments);
      }
      Header() {
        throw Error("Header is not available");
      }
      EmbedVideo() {
        throw Error("EmbedVideo is not available");
      }
    }
    a._($c, "excludedProps", [
      "address",
      "welcomeLine",
      "background2",
      "foreground",
    ]),
      (t.D = $c),
      (t.L = ce),
      (t.M = ie),
      (t.X = ne),
      (t.a = ge),
      (t.b = function ({
        styleOverrides: e,
        otherStyleOverrides: t,
        renderMode: a,
      }) {
        const r = {
          display: "inline",
          verticalAlign: "baseline",
          boxDecorationBreak: "clone",
          "-webkit-box-decoration-break": "clone",
          ...e,
        };
        return {
          style: {
            borderWidth: "0 !important",
            padding: "0 !important",
            display: "block",
            span: r,
            ...("EDIT" === a
              ? {
                  "@md": {
                    span: void 0,
                    ".mx-inline-field .public-DraftStyleDefault-block": r,
                  },
                }
              : null),
            ...t,
          },
        };
      }),
      (t.c = vc),
      (t.d = rc),
      (t.e = ac),
      (t.f = Ie),
      (t.g = tc),
      (t.h = oc),
      (t.k = Nn),
      (t.l = xi),
      (t.m = _c);
  }
),
  "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-index3-6694a0b1.js.map
