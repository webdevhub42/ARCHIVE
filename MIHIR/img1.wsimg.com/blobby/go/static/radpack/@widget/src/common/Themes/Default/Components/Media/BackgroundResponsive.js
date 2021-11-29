import React from "react";
import { UX2, constants } from "@wsb/guac-widget-core";
import {
  CATEGORY,
  PRIMARY,
  NEUTRAL,
  ACCENT,
  NONE,
  LIGHT_DARK,
} from "../../../../constants/overlayTypes";
import {
  getValidUrl,
  addImageApiArgs,
  isInternalUrl,
  generateBackgroundUrl,
} from "../../../../utils/image";
import { DEFAULT_OVERLAY_TEXT_SHADOW } from "../../../../constants";
import { omit } from "lodash";
import countVctElement from "../../../../utils/countVCTElement";

const { PUBLISH } = constants.renderModes;
const { XS_MAX, SM_MIN, SM_MAX, MD_MIN, MD_MAX, LG_MIN, LG_MAX, XL_MIN } =
  constants.breakpoints;

const BLUR_RADIUS = 90;
const XL_MAX = 1920;
const XXL_MIN = 1921;

function escapeQuotes(str) {
  return str.replace(/"/g, '\\"');
}

function buildMediaQuery({ min, max, density }) {
  const sizeQuery = [
    min ? `(min-width: ${min}px)` : "",
    max ? `(max-width: ${max}px)` : "",
  ]
    .filter(Boolean)
    .join(" and ");
  return `@media ${sizeQuery} and (-webkit-min-device-pixel-ratio: ${density}), ${sizeQuery} and (min-resolution: ${
    density * 96
  }dpi)`;
}

function buildMediaQueries(
  backgroundImage,
  { gradient, lowResBg, desktopWidth, mobileWidth }
) {
  const ranges = [
    {
      max: XS_MAX,
    },
    {
      min: SM_MIN,
      max: SM_MAX,
    },
    {
      min: MD_MIN,
      max: MD_MAX,
    },
    {
      min: LG_MIN,
      max: LG_MAX,
    },
    {
      min: XL_MIN,
      max: XL_MAX,
    },
    {
      min: XXL_MIN,
    },
  ];
  const densities = [1, 2, 3];

  return ranges.reduce((acc, curr) => {
    densities.forEach((density) => {
      const widthMultiplier = !curr.min ? mobileWidth : desktopWidth;
      acc[buildMediaQuery({ ...curr, density })] = {
        backgroundImage: [
          gradient,
          `url("${escapeQuotes(
            addImageApiArgs(backgroundImage, {
              rs: curr.max
                ? `w:${widthMultiplier * curr.max * density},m`
                : "w:100%25",
            })
          )}")`,
          lowResBg,
        ]
          .filter(Boolean)
          .join(", "),
      };
    });
    return acc;
  }, {});
}

export function BackgroundResponsive({
  style,
  backgroundImage,
  backgroundPosition,
  backgroundSize,
  mobileImage,
  mobileSize = "cover",
  imageData = {},
  backgroundImage2,
  backgroundSize2,
  children,
  mobileWidth = 1,
  desktopWidth = 1,
  blur,
  ...props
}) {
  const { widgetType, widgetPreset, renderMode, id } = this.base;
  const defaultFilter = this.constructor.getDefaultBackgroundFilter(
    widgetType,
    widgetPreset
  );
  let _style = {
    backgroundPosition: imageData.position || backgroundPosition || "center",
    backgroundSize: backgroundSize || "cover",
    backgroundBlendMode: "normal",
    backgroundRepeat: "no-repeat",
    textShadow: "none",
    ...style,
  };

  const overlay =
    props.overlay ||
    this.constructor.getDefaultImageOverlayType(widgetType, widgetPreset);
  let gradient = "";
  backgroundImage = imageData.image
    ? generateBackgroundUrl({
        filter: defaultFilter,
        ...imageData,
      })
    : backgroundImage;

  if (blur) {
    backgroundImage = addImageApiArgs(backgroundImage, {
      "fx-bl": `s:${BLUR_RADIUS}`,
    });
  }

  if (overlay !== NONE) {
    const { category } = this.base;
    let overlayColor = "accentOverlay";
    if (overlay === CATEGORY) {
      overlayColor = "sectionOverlay";
    } else if (overlay === PRIMARY) {
      overlayColor = "primaryOverlay";
    } else if (overlay === NEUTRAL) {
      overlayColor = "neutralOverlay";
    } else if (overlay === ACCENT) {
      overlayColor = "accentOverlay";
    } else if (overlay === LIGHT_DARK) {
      if (category === "primary") {
        const primaryColor = UX2.utils
          .getTheme(this.base.context, {
            category: "primary",
            section: "default",
          })
          .mapPropValue("backgroundColor", "section");
        overlayColor = primaryColor.isLight()
          ? "neutralOverlay"
          : "accentOverlay";
      } else {
        overlayColor = "sectionOverlay";
      }
    }
    overlayColor = UX2.utils
      .getTheme(this.base.context, {
        category,
        section: "overlay",
      })
      .mapPropValue("backgroundColor", overlayColor);
    if (typeof props.overlayAlpha !== "undefined") {
      overlayColor.alpha = props.overlayAlpha;
    } else if (typeof imageData.overlayAlpha !== "undefined") {
      overlayColor.alpha = imageData.overlayAlpha;
    } else {
      overlayColor.alpha = this.constructor.getDefaultImageOverlayOpacity(
        widgetType,
        widgetPreset
      );
    }
    gradient = `linear-gradient(to bottom, ${overlayColor} 0%, ${overlayColor} 100%)`;
  }

  if (widgetType !== "HEADER") {
    _style.textShadow = DEFAULT_OVERLAY_TEXT_SHADOW;
  }

  backgroundImage = getValidUrl(backgroundImage);
  const isInternal = isInternalUrl(backgroundImage);
  let script;

  // Build media queries to render as static HTML
  if (isInternal) {
    backgroundImage = backgroundImage
      .replace(
        /\/rs=w:{width},h:{height},cg:true,m\/cr=w:{width},h:{height},a[x]?:[^/]*/,
        ""
      )
      .replace(/\/:$/, "");

    const lowResBg = `url("${escapeQuotes(
      addImageApiArgs(backgroundImage, {
        rs: "w:50,cg:true,mx",
        qt: "q:1",
      })
    )}")`;
    _style = {
      ..._style,
      ...buildMediaQueries(backgroundImage, {
        gradient,
        lowResBg,
        desktopWidth,
        mobileWidth,
      }),
    };
  } else {
    _style.backgroundImage = [
      gradient,
      `url("${escapeQuotes(backgroundImage)}")`,
    ]
      .filter(Boolean)
      .join(", ");
  }

  const logVisualComplete =
    renderMode === PUBLISH &&
    (props["data-aid"] === "BACKGROUND_IMAGE_RENDERED" ||
      props["data-aid"] === "BACKGROUND_IMAGE2_RENDERED");
  if (logVisualComplete) {
    /**
     * var bgEl = document.getElementById(${id});
     * var match = bgEl && /url\(\"([^\)]*)\"\)/.exec(window.getComputedStyle(bgEl).getPropertyValue('background-image'));
     * if (match && match[1]) {
     *   ${countVctElement}
     *   var bgUrl = match[1];
     *   var img = new Image();
     *   img.onload = img.onerror = window.markVisuallyComplete;
     *   img.src = bgUrl;
     * }
     */
    // eslint-disable-next-line max-len
    const html = `var bgEl=document.getElementById("${id}"),match=bgEl&&/url\\(\\"([^\\)]*)\\"\\)/.exec(window.getComputedStyle(bgEl).getPropertyValue("background-image"));if(match&&match[1]){${countVctElement}; var e=match[1],t=new Image;t.onload=t.onerror=window.markVisuallyComplete,t.src=e;}`;

    script = (
      <script
        key={id}
        dangerouslySetInnerHTML={{
          __html: html,
        }} // eslint-disable-line react/no-danger
      />
    );
  }

  if (backgroundImage2) {
    _style.backgroundImage = `${
      _style.backgroundImage
    }, url("${backgroundImage2.replace(/"/g, '\\"')}")`;
    if (backgroundSize2) {
      _style.backgroundSize = `${_style.backgroundSize}, ${backgroundSize2}`;
    }
  }

  if (mobileImage) {
    const mobileBgImage = gradient
      ? `${gradient}, url("${mobileImage.replace(/"/g, '\\"')}")`
      : `url("${mobileImage.replace(/"/g, '\\"')}")`;
    const mobileImageStyles = {
      backgroundImage: `${mobileBgImage} !important`,
      backgroundSize: mobileSize,
    };
    _style["@xs-only"] = {
      ...mobileImageStyles,
      ..._style["@xs-only"],
    };
    _style["@sm-only"] = {
      ...mobileImageStyles,
      ..._style["@sm-only"],
    };
  }

  return this.merge(
    {
      style: _style,
      tag: "div",
      role: "img",
      id,
      children: [children, script],
      backgroundImage,
    },
    omit(props, ["title"])
  );
}

export function BackgroundHalf(props) {
  return this.BackgroundResponsive({ ...props, desktopWidthMultiplier: 0.5 });
}
