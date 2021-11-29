define(
  "@widget/LAYOUT/bs-layout21-Theme-publish-Theme-150d4d42.js",
  [
    "exports",
    "@widget/LAYOUT/c/bs-_rollupPluginBabelHelpers",
    "@widget/LAYOUT/c/bs-index3",
    "@widget/LAYOUT/c/bs-legacyOverrides",
    "@widget/LAYOUT/c/bs-modernThinRound",
    "@widget/LAYOUT/c/bs-defaultSocialIconPack",
    "@widget/LAYOUT/c/bs-loaders",
    "@widget/LAYOUT/c/bs-index",
  ],
  function (e, t, r, n, o, a, s, i) {
    "use strict";
    const { colorPackCategories: l, buttons: g } = (
        global.Core || guac["@wsb/guac-widget-core"]
      ).constants,
      {
        LIGHT: d,
        CUSTOM: c,
        LIGHT_ALT: u,
        LIGHT_COLORFUL: p,
        DARK: h,
        DARK_ALT: m,
        DARK_COLORFUL: y,
        COLORFUL: b,
      } = (global.Core || guac["@wsb/guac-widget-core"]).constants.paintJobs;
    var f = {
      id: "layout21",
      name: "mint",
      packs: {
        color: "#53DEBF",
        font: "muli",
      },
      logo: {
        font: "primary",
      },
      packCategories: {
        color: l.PRIMARY,
      },
      headerProperties: {
        alignmentOption: "left",
      },
      paintJobs: [d, u, c, p, b, y, m, h],
      defaultPaintJob: c,
      buttons: {
        primary: {
          fill: g.fills.SOLID,
          shape: g.shapes.ROUND,
          decoration: g.decorations.NONE,
          shadow: g.shadows.NONE,
          color: g.colors.PRIMARY,
        },
        secondary: {
          fill: g.fills.SOLID,
          decoration: g.decorations.NONE,
          shadow: g.shadows.NONE,
          color: g.colors.PRIMARY,
        },
        ...i.C,
      },
    };
    const T = [
        "about1",
        "content4",
        "introduction4",
        "payment1",
        "payment2",
        "membership1",
      ],
      { hasFontSet: x } = r.f,
      { FULL_UNDERLINE: S } = i.s,
      { buttons: w, renderModes: C } = (
        global.Core || guac["@wsb/guac-widget-core"]
      ).constants,
      L = {
        style: {
          font: "primary",
          color: "highContrast",
          fontSize: "xxlarge",
          fontWeight: "normal",
          letterSpacing: "normal",
          textTransform: "none",
        },
      };
    class A extends r.D {
      static get displayName() {
        return "Theme21";
      }
      static getMutatorDefaultProps(e, t) {
        const r = super.getMutatorDefaultProps(e, t),
          n = i.W[t] || r.enableCircularImage;
        return "HEADER" === e
          ? {
              ...r,
              useCropBackground: !0,
              useBigLogo: !0,
              useSubtagline: !1,
              headerTreatmentsConfig: {},
              coverImagePivot: {},
              useAddress: !0,
            }
          : { ...r, enableCircularImage: n };
      }
      static getWidgetDefaultProps(e, t) {
        return {
          ...super.getWidgetDefaultProps(e, t),
          ...(("HEADER" === e || !T.includes(t)) && {
            alignmentOption: "left",
          }),
        };
      }
      constructor() {
        super(),
          (this.mappedValues = {
            ...this.mappedValues,
            borderColorHighlight: () => {
              const [e, t, n, o] = r.g(this, [
                "background",
                "primary",
                "neutral",
                "accent",
              ]);
              return ((e, t) => {
                const n = e.filter(({ precheck: e }) => e);
                if (!n.length) return t;
                const { contrastingColors: o, priorityResolution: a } = n[0];
                return (!r.c.apply(null, o) && a[0]) || a[1];
              })(
                [
                  {
                    precheck: t === e,
                    contrastingColors: [t, n],
                    priorityResolution: [n, o],
                  },
                  {
                    precheck: n === e,
                    contrastingColors: [t, n],
                    priorityResolution: [t, o],
                  },
                  {
                    precheck: o === e,
                    contrastingColors: [t, o],
                    priorityResolution: [t, n],
                  },
                ],
                o
              );
            },
            typographyOverrides: {
              LogoAlpha: { ...L },
              HeadingAlpha: { ...L },
              HeadingBeta: {
                style: {
                  font: "primary",
                  color: "highContrast",
                  fontSize: "xlarge",
                  fontWeight: "normal",
                  letterSpacing: "normal",
                  textTransform: "none",
                },
              },
              HeadingEpsilon: (e) => ({ ...r.m.call(this, "BodyAlpha", e) }),
              NavAlpha: {
                style: {
                  font: "alternate",
                  color: "highContrast",
                  fontSize: "small",
                  fontWeight: "normal",
                  letterSpacing: "0.143em",
                  textTransform: "uppercase",
                },
                active: {
                  style: {
                    color: "highContrast",
                  },
                },
              },
              SubNavAlpha: {
                style: {
                  font: "alternate",
                  color: "section",
                  fontSize: "small",
                  fontWeight: "normal",
                  letterSpacing: "normal",
                  textTransform: "none",
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
                },
              },
              ButtonAlpha: {
                style: {
                  font: "alternate",
                  fontWeight: "bold",
                  letterSpacing: "0.143em",
                  textTransform: "uppercase",
                },
              },
            },
          });
      }
      Section({ children: e, ...t }) {
        const { category: r } = t,
          { widgetType: n } = this.base,
          o = {
            paddingVertical: "xlarge",
            "@xs-only": {
              paddingVertical:
                "FOOTER" === this.base.widgetType ? "none" : "large",
            },
          };
        let a = this.merge(
          {
            style: o,
            children: e,
          },
          t
        );
        return (
          "FOOTER" === n &&
            "neutral" === r &&
            (a = this.merge(
              {
                style: o,
                children: (global.React || guac.react).createElement(
                  (global.React || guac.react).Fragment,
                  null,
                  (global.React || guac.react).createElement(
                    (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                      .Divider,
                    {
                      style: {
                        paddingVertical: "medium",
                      },
                    }
                  ),
                  e
                ),
              },
              t
            )),
          super.Section(a)
        );
      }
      Hero(e) {
        const t = (global._ || guac.lodash).omit(e.style, [
          "> :nth-child(n)",
          " > :last-child",
        ]);
        return super.Hero(
          Object.assign(e, {
            style: t,
          })
        );
      }
      Tagline({ isCenterAligned: e, hasRenderedLogo: t, ...r }) {
        return super.Tagline(
          this.merge(
            {
              style: {
                ...(e && {
                  marginTop: t ? "xsmall" : "0",
                  textAlign: "center",
                }),
              },
              typography: "HeadingEpsilon",
              featured: !0,
            },
            r
          )
        );
      }
      HeroText(e) {
        return super.SubTagline(e);
      }
      SectionHeading(e) {
        const t = {
          style: {
            textAlign:
              "payment2" === this.base.widgetPreset ? "center" : "left",
          },
        };
        return super.SectionHeading(
          this.merge(
            {
              style: {
                "@xs-only": {
                  marginBottom: "medium",
                },
              },
              sectionHeadingHR: S,
            },
            {
              ...t,
              level: 4,
              style: {
                textAlign: "center",
              },
            },
            e
          )
        );
      }
      SectionSplitHeading(e) {
        return this.SectionHeading(
          this.merge(
            {
              style: {
                textAlign: "center",
                "@md": {
                  textAlign: "center",
                },
              },
            },
            e
          )
        );
      }
      SectionHeadingHR(e) {
        return super.HR(
          this.merge(
            {
              style: {
                borderColor: "highlight",
                borderBottomWidth: "small",
                marginTop: "small",
                marginBottom: "large",
                width: "90px",
              },
            },
            e
          )
        );
      }
      ContentBasic(e) {
        const t =
          -1 === T.indexOf(this.base.widgetPreset)
            ? {
                alignment: "left",
              }
            : {};
        return super.ContentBasic(this.merge(t, e));
      }
      ContentCard(e) {
        const { widgetPreset: t } = this.base,
          r =
            -1 === T.indexOf(t)
              ? {
                  alignment: "left",
                }
              : {},
          n =
            "about1" === this.base.widgetPreset
              ? {
                  style: {
                    alignItems: "center",
                  },
                }
              : {};
        return super.ContentCard(this.merge(r, n, e));
      }
      FeaturedText(e) {
        return super.FeaturedText(
          this.merge(
            {
              style: {
                fontStyle: x(this.base.fonts, "old-standard-tt")
                  ? "italic"
                  : "normal !important",
              },
              typography: "BodyBeta",
            },
            e
          )
        );
      }
      Icon(e) {
        return super.Icon(
          this.merge(
            {
              iconPack: { ...o.m, ...a.s },
            },
            e
          )
        );
      }
      Loader(e) {
        return s.B.apply(this, [e]);
      }
      InputSearch(e) {
        return super.InputSearch(
          this.merge(
            {
              style: {
                backgroundColor: "section",
                color: "highContrast",
              },
            },
            e
          )
        );
      }
      IconSearch(e) {
        return super.IconSearch(
          this.merge(
            {
              style: {
                color: "action",
              },
            },
            e
          )
        );
      }
      Button(e) {
        const { renderMode: t } = this.base,
          {
            fill: r = this.getButtonDefaults().fill,
            shadow: n = this.getButtonDefaults().shadow,
          } = e,
          o = t && t === C.EDIT,
          a =
            r !== w.fills.OPEN
              ? {
                  style: {
                    transition: "all 0.3s",
                  },
                }
              : {},
          s =
            r === w.fills.SOLID && n === w.shadows.NONE
              ? {
                  style: {
                    ...(!o && {
                      ":hover": {
                        "@md": {
                          boxShadow: "0 10px 10px -10px rgba(0, 0, 0, 0.5)",
                        },
                      },
                    }),
                  },
                }
              : {};
        return super.Button(this.merge(s, a, e));
      }
      LogoHeading(e) {
        return super.LogoHeading(
          this.merge(
            {
              style: {
                fontStyle: x(this.base.fonts, "old-standard-tt")
                  ? "italic"
                  : "normal !important",
              },
            },
            e
          )
        );
      }
      Heading(e) {
        const { tag: t } = e,
          { widgetType: r, widgetPreset: o } = this.base,
          a =
            "FOOTER" === this.base.widgetType
              ? {
                  level: "5",
                  style: {
                    fontSize: "14px",
                  },
                }
              : null;
        return super.Heading(
          this.merge(
            a,
            {
              style: n.g(t, r, o),
            },
            e
          )
        );
      }
      WrapperImage(e) {
        return super.WrapperImage(
          this.merge(
            {
              style: {
                height: "100%",
              },
            },
            e
          )
        );
      }
      NavLinkActive(e) {
        const { category: t } = e;
        return super.NavLinkActive(
          this.merge(
            {
              style: {
                borderTop: "2px solid",
                borderColor: "primary" === t ? "highlight" : "highContrast",
                paddingTop: "11px",
                marginTop: "-13px",
              },
            },
            e
          )
        );
      }
      NavMoreMenuLinkActive(e) {
        return super.NavMoreMenuLinkActive(
          this.merge(
            {
              style: {
                borderTop: 0,
                paddingTop: 0,
              },
            },
            e
          )
        );
      }
      Dropdown(e) {
        return super.Dropdown(
          this.merge(
            {
              category: "neutral",
            },
            e
          )
        );
      }
      Input(e) {
        return super.Input(
          this.merge(
            {
              style: {
                borderColor: "input",
                borderWidth: "xsmall",
                borderRadius: "none",
                paddingVertical: "small",
                paddingHorizontal: "small",
                borderStyle: "solid",
              },
            },
            e
          )
        );
      }
      InputFloatLabelInput(e) {
        return super.InputFloatLabelInput(
          this.merge(
            {
              style: {
                paddingBottom: "xsmall",
              },
            },
            e
          )
        );
      }
      InputFloatLabelLabel(e) {
        return super.InputFloatLabelLabel(
          this.merge(
            {
              style: {
                left: "16px",
              },
            },
            e
          )
        );
      }
      InputSelect(e) {
        return super.InputSelect(
          this.merge(
            {
              style: {
                borderWidth: "xsmall",
                borderRadius: "medium",
                borderStyle: "solid",
              },
            },
            e
          )
        );
      }
      InputSelectElement(e) {
        return super.InputSelectElement(
          this.merge(
            {
              style: {
                paddingVertical: "small",
                paddingHorizontal: "small",
              },
            },
            e
          )
        );
      }
      CardBannerHeading(e) {
        return this.HeadingMajor(e);
      }
      HeadingMajor(e) {
        return super.HeadingMajor(
          this.merge(
            {
              typography: "HeadingAlpha",
            },
            e
          )
        );
      }
      FooterDetails(e) {
        return super.FooterDetails(
          this.merge(
            {
              featured: !1,
            },
            e
          )
        );
      }
      Phone(e) {
        return super.Phone(
          this.merge(
            {
              typography: "BodyAlpha",
            },
            e
          )
        );
      }
      ContactBarAddress(e) {
        return super.ContactBarAddress(
          this.merge(
            {
              style: {
                "@xs-only": {
                  fontSize: "small",
                },
              },
            },
            e
          )
        );
      }
      PromoBanner(e) {
        return super.PromoBanner(
          this.merge(
            {
              style: {
                paddingVertical: "xsmall",
              },
            },
            e
          )
        );
      }
      PromoBannerText(e) {
        return super.PromoBannerText(
          this.merge(
            {
              style: {
                "@xs-only": {
                  fontSize: "small",
                },
              },
            },
            e
          )
        );
      }
    }
    t._(A, "config", f),
      t._(
        A,
        "excludedProps",
        (global._ || guac.lodash)
          .without(r.D.excludedProps, "address")
          .concat("tagline2")
      ),
      (e.default = A);
  }
),
  "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-layout21-Theme-publish-Theme-150d4d42.js.map
