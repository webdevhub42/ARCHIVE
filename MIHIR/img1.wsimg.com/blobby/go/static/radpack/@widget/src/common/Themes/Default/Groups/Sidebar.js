import { constants } from "@wsb/guac-widget-core";
const { themeConstants } = constants;

export function Sidebar({ renderMode, sidebarWidth, hasContainer, ...props }) {
  const disableClick =
    renderMode === "DISPLAY" || renderMode === "PREVIEW_RENDER_MODE"; // disable click behavior when in onboarding or in theme gallery preview
  let lgPosition;

  if (renderMode === "PUBLISH") {
    lgPosition = "fixed";
  } else if (hasContainer) {
    lgPosition = "relative";
  } else {
    lgPosition = "absolute"; // For the situation that there is no page component, like in playground
  }

  return this.merge(
    {
      tag: "nav",
      className: "zoom-scale-container",
      style: {
        pointerEvents: disableClick ? "none" : "auto",
        display: "none",
        backgroundColor: "section",
        top: 0,
        left: 0,
        height: "100vh",
        width: sidebarWidth,
        maxWidth: 0,
        zIndex: themeConstants.SIDELINE_SIDEBAR_ZINDEX,
        transition: "max-width 0.4s ease-in-out, height 0.3s",
        boxShadow: "0 0 4px 0px rgba(0,0,0,0.2)",
        ["@md"]: {
          display: "block",
          position: lgPosition,
        },
        ["@lg"]: {
          display: "block",
          maxWidth: "unset !important",
          position: lgPosition,
        },
      },
    },
    props
  );
}

export function SidebarContainer(props) {
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
      props
    )
  );
}

export function SidebarList(props) {
  return this.List(
    this.merge(
      {
        style: {
          paddingLeft: 0,
          listStyleType: "none",
        },
      },
      props
    )
  );
}
