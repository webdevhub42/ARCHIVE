import React from "react";
import { omit, without } from "lodash";
import { UX2, constants } from "@wsb/guac-widget-core";
import Default from "../../../common/Themes/Default/Theme";
import * as utils from "../../../common/Themes/Default/Dials/Colors/utils";
import { colorLightnessSimilarity } from "../../../common/Themes/Default/Dials/Colors/Default/colors";
import fonts from "../../../common/Themes/Default/Dials/Fonts/Default";
import { getMenuHeadingStyle } from "../../../common/utils/legacyOverrides";
import * as modernIcons from "../../../common/IconPacks/modernThinRound";
import * as socialIconPack from "../../../common/IconPacks/SocialIcons/defaultSocialIconPack";
import { Balance } from "../../../common/loaders";
import {
  sectionHrTypes,
  WIDGETS_WITH_CIRCULAR_IMAGES,
} from "../../../common/constants";
import { mergeTypographyOverrides } from "../../../common/utils/typography";
import themeConfig from "../themeConfig";

// The Minimal theme left aligns content heading and text.  Add a widget layout to this array for center alignment:
const widgetsWithCenteredText = [
  "about1",
  "content4",
  "introduction4",
  "payment1",
  "payment2",
  "membership1",
];
const { hasFontSet } = fonts;
const { FULL_UNDERLINE } = sectionHrTypes;
const { buttons, renderModes } = constants;

const resolveColor = (colorConfig, defaultColor) => {
  const colorComparison = colorConfig.filter(({ precheck }) => precheck);
  if (!colorComparison.length) return defaultColor;

  const { contrastingColors, priorityResolution } = colorComparison[0];
  return (
    (!colorLightnessSimilarity.apply(null, contrastingColors) &&
      priorityResolution[0]) ||
    priorityResolution[1]
  );
};

const typographyShared1 = {
  style: {
    font: "primary",
    color: "highContrast",
    fontSize: "xxlarge",
    fontWeight: "normal",
    letterSpacing: "normal",
    textTransform: "none",
  },
};

class Theme21 extends Default {
  static config = themeConfig;

  static get displayName() {
    return "Theme21";
  }

  static excludedProps = without(Default.excludedProps, "address").concat(
    "tagline2"
  );

  static getMutatorDefaultProps(widgetType, widgetPreset) {
    const defaultProps = super.getMutatorDefaultProps(widgetType, widgetPreset);
    const enableCircularImage =
      WIDGETS_WITH_CIRCULAR_IMAGES[widgetPreset] ||
      defaultProps.enableCircularImage;

    return widgetType === "HEADER"
      ? {
          ...defaultProps,
          useCropBackground: true,
          useBigLogo: true,
          useSubtagline: false,
          headerTreatmentsConfig: {},
          coverImagePivot: {},
          useAddress: true,
        }
      : {
          ...defaultProps,
          enableCircularImage,
        };
  }

  static getWidgetDefaultProps(widgetType, widgetPreset) {
    return {
      ...super.getWidgetDefaultProps(widgetType, widgetPreset),
      ...((widgetType === "HEADER" ||
        !widgetsWithCenteredText.includes(widgetPreset)) && {
        alignmentOption: "left",
      }),
    };
  }

  constructor() {
    super();
    this.mappedValues = {
      ...this.mappedValues,
      borderColorHighlight: () => {
        const [background, primary, neutral, accent] = utils.getDial(this, [
          "background",
          "primary",
          "neutral",
          "accent",
        ]);
        const colorConfig = [
          {
            precheck: primary === background,
            contrastingColors: [primary, neutral],
            priorityResolution: [neutral, accent],
          },
          {
            precheck: neutral === background,
            contrastingColors: [primary, neutral],
            priorityResolution: [primary, accent],
          },
          {
            precheck: accent === background,
            contrastingColors: [primary, accent],
            priorityResolution: [primary, neutral],
          },
        ];
        return resolveColor(colorConfig, accent);
      },
      typographyOverrides: {
        LogoAlpha: {
          ...typographyShared1,
        },
        HeadingAlpha: {
          ...typographyShared1,
        },
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
        HeadingEpsilon: (props) => ({
          ...mergeTypographyOverrides.call(this, "BodyAlpha", props),
        }),
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
    };
  }

  Section({ children, ...props }) {
    const { category } = props;
    const { widgetType } = this.base;
    const style = {
      paddingVertical: "xlarge",
      "@xs-only": {
        paddingVertical: this.base.widgetType === "FOOTER" ? "none" : "large",
      },
    };

    let updatedProps = this.merge(
      {
        style,
        children,
      },
      props
    );

    if (widgetType === "FOOTER" && category === "neutral") {
      updatedProps = this.merge(
        {
          style,
          children: (
            <React.Fragment>
              <UX2.Element.Divider
                style={{
                  paddingVertical: "medium",
                }}
              />{" "}
              {children}{" "}
            </React.Fragment>
          ),
        },
        props
      );
    }

    return super.Section(updatedProps);
  }

  Hero(props) {
    const newStyle = omit(props.style, ["> :nth-child(n)", " > :last-child"]); // remove spacingVertical styles from Minimal
    return super.Hero(
      Object.assign(props, {
        style: newStyle,
      })
    );
  }

  Tagline({ isCenterAligned, hasRenderedLogo, ...props }) {
    return super.Tagline(
      this.merge(
        {
          style: {
            ...(isCenterAligned && {
              marginTop: hasRenderedLogo ? "xsmall" : "0",
              textAlign: "center",
            }),
          },
          typography: "HeadingEpsilon",
          featured: true,
        },
        props
      )
    );
  }

  HeroText(props) {
    return super.SubTagline(props);
  }

  SectionHeading(props) {
    const alignmentStyles = {
      style: {
        textAlign: this.base.widgetPreset === "payment2" ? "center" : "left",
      },
    };
    const mintSectionHeader = {
      level: 4,
      style: {
        textAlign: "center",
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
          sectionHeadingHR: FULL_UNDERLINE,
        },
        { ...alignmentStyles, ...mintSectionHeader },
        props
      )
    );
  }

  SectionSplitHeading(props) {
    return this.SectionHeading(
      this.merge(
        {
          style: {
            textAlign: "center",
            ["@md"]: {
              textAlign: "center",
            },
          },
        },
        props
      )
    );
  }

  SectionHeadingHR(props) {
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
        props
      )
    );
  }

  ContentBasic(props) {
    const overrides =
      widgetsWithCenteredText.indexOf(this.base.widgetPreset) === -1
        ? {
            alignment: "left",
          }
        : {};
    return super.ContentBasic(this.merge(overrides, props));
  }

  ContentCard(props) {
    const { widgetPreset } = this.base;
    const overrides =
      widgetsWithCenteredText.indexOf(widgetPreset) === -1
        ? {
            alignment: "left",
          }
        : {};
    const styles =
      this.base.widgetPreset === "about1"
        ? {
            style: {
              alignItems: "center",
            },
          }
        : {};
    return super.ContentCard(this.merge(overrides, styles, props));
  }

  FeaturedText(props) {
    return super.FeaturedText(
      this.merge(
        {
          style: {
            fontStyle: hasFontSet(this.base.fonts, "old-standard-tt")
              ? "italic"
              : "normal !important",
          },
          typography: "BodyBeta",
        },
        props
      )
    );
  }

  Icon(props) {
    return super.Icon(
      this.merge(
        {
          iconPack: { ...modernIcons, ...socialIconPack },
        },
        props
      )
    );
  }

  Loader(props) {
    return Balance.apply(this, [props]);
  }

  InputSearch(props) {
    return super.InputSearch(
      this.merge(
        {
          style: {
            backgroundColor: "section",
            color: "highContrast",
          },
        },
        props
      )
    );
  }

  IconSearch(props) {
    return super.IconSearch(
      this.merge(
        {
          style: {
            color: "action",
          },
        },
        props
      )
    );
  }

  Button(props) {
    const { renderMode } = this.base;
    const {
      fill = this.getButtonDefaults().fill,
      shadow = this.getButtonDefaults().shadow,
    } = props;
    const noHoverState = renderMode && renderMode === renderModes.EDIT;

    const animation =
      fill !== buttons.fills.OPEN
        ? {
            style: {
              transition: "all 0.3s",
            },
          }
        : {};

    const solidOverride =
      fill === buttons.fills.SOLID && shadow === buttons.shadows.NONE
        ? {
            style: {
              ...(!noHoverState && {
                [":hover"]: {
                  ["@md"]: {
                    boxShadow: "0 10px 10px -10px rgba(0, 0, 0, 0.5)",
                  },
                },
              }),
            },
          }
        : {};
    return super.Button(this.merge(solidOverride, animation, props));
  }

  LogoHeading(props) {
    return super.LogoHeading(
      this.merge(
        {
          style: {
            fontStyle: hasFontSet(this.base.fonts, "old-standard-tt")
              ? "italic"
              : "normal !important",
          },
        },
        props
      )
    );
  }

  Heading(props) {
    const { tag } = props;
    const { widgetType, widgetPreset } = this.base;
    const footerStyles =
      this.base.widgetType === "FOOTER"
        ? {
            level: "5",
            style: {
              fontSize: "14px",
            },
          }
        : null;

    return super.Heading(
      this.merge(
        footerStyles,
        {
          style: getMenuHeadingStyle(tag, widgetType, widgetPreset),
        },
        props
      )
    );
  }

  WrapperImage(props) {
    return super.WrapperImage(
      this.merge(
        {
          style: {
            height: "100%",
          },
        },
        props
      )
    );
  }

  NavLinkActive(props) {
    const { category } = props;
    return super.NavLinkActive(
      this.merge(
        {
          style: {
            borderTop: "2px solid",
            borderColor: category === "primary" ? "highlight" : "highContrast",
            paddingTop: "11px", // needs 11px for published side
            marginTop: "-13px",
          },
        },
        props
      )
    );
  }

  NavMoreMenuLinkActive(props) {
    return super.NavMoreMenuLinkActive(
      this.merge(
        {
          style: {
            borderTop: 0,
            paddingTop: 0,
          },
        },
        props
      )
    );
  }

  Dropdown(props) {
    return super.Dropdown(
      this.merge(
        {
          category: "neutral",
        },
        props
      )
    );
  }

  Input(props) {
    return super.Input(
      this.merge(
        {
          style: {
            // Dials Based
            borderColor: "input",
            // Theme Based
            borderWidth: "xsmall",
            borderRadius: "none",
            paddingVertical: "small",
            paddingHorizontal: "small",
            // Static
            borderStyle: "solid",
          },
        },
        props
      )
    );
  }

  InputFloatLabelInput(props) {
    return super.InputFloatLabelInput(
      this.merge(
        {
          style: {
            paddingBottom: "xsmall",
          },
        },
        props
      )
    );
  }

  InputFloatLabelLabel(props) {
    return super.InputFloatLabelLabel(
      this.merge(
        {
          style: {
            left: "16px",
          },
        },
        props
      )
    );
  }

  InputSelect(props) {
    return super.InputSelect(
      this.merge(
        {
          style: {
            // Theme Based
            borderWidth: "xsmall",
            borderRadius: "medium",
            // Static
            borderStyle: "solid",
          },
        },
        props
      )
    );
  }

  InputSelectElement(props) {
    return super.InputSelectElement(
      this.merge(
        {
          style: {
            paddingVertical: "small",
            paddingHorizontal: "small",
          },
        },
        props
      )
    );
  }

  CardBannerHeading(props) {
    return this.HeadingMajor(props);
  }

  HeadingMajor(props) {
    return super.HeadingMajor(
      this.merge(
        {
          typography: "HeadingAlpha",
        },
        props
      )
    );
  }

  FooterDetails(props) {
    return super.FooterDetails(
      this.merge(
        {
          featured: false,
        },
        props
      )
    );
  }

  Phone(props) {
    return super.Phone(
      this.merge(
        {
          typography: "BodyAlpha",
        },
        props
      )
    );
  }

  ContactBarAddress(props) {
    return super.ContactBarAddress(
      this.merge(
        {
          style: {
            "@xs-only": {
              fontSize: "small",
            },
          },
        },
        props
      )
    );
  }

  PromoBanner(props) {
    return super.PromoBanner(
      this.merge(
        {
          style: {
            paddingVertical: "xsmall",
          },
        },
        props
      )
    );
  }

  PromoBannerText(props) {
    return super.PromoBannerText(
      this.merge(
        {
          style: {
            "@xs-only": {
              fontSize: "small",
            },
          },
        },
        props
      )
    );
  }
}

export default Theme21;
