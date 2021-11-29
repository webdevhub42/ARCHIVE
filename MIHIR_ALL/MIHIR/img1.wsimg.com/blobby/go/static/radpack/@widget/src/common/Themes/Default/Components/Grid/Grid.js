import React, { Children } from "react";
import { UX2 } from "@wsb/guac-widget-core";
import { omit } from "lodash";

export function Grid(props) {
  const {
    size,
    xs = size,
    sm = xs,
    md = sm,
    lg = md,
    spacing,
    spacingXs = spacing,
    spacingSm = spacingXs,
    spacingMd = spacingSm,
    spacingLg = spacingMd,
    tag,
    children,
    wrap,
    equal,
    bottom,
    gutter,
    column,
    reverse,
    inset,
  } = props;

  // eslint-disable-next-line no-shadow
  const {
    Grid,
    Grid: { Cell },
  } = UX2.Component;

  const style = {
    display: "flex",
    boxSizing: "border-box",
    flexDirection: column ? "column" : "row",
    flexWrap: wrap ? "wrap" : "nowrap",
  };

  if (reverse) {
    style.flexDirection += "-reverse";
  }

  Grid.applySizingStyles(style, props, this);

  const cellProps = {
    gutter,
    bottom,
    equal,
    column,
    spacing,
    spacingXs,
    spacingSm,
    spacingMd,
    spacingLg,
    gridXs: xs,
    gridSm: sm,
    gridMd: md,
    gridLg: lg,
  };

  const insetCellProps = inset ? { ...cellProps, inset } : cellProps;

  const content = Children.toArray(children)
    .filter((node) => {
      const type = typeof node;
      if (type === "object") {
        return React.isValidElement(node);
      }
      if (type === "string") {
        return !!node;
      }
      return true;
    })
    .map((child, key) => {
      const type = child && child.type;
      let childStyle;
      if (type && type.prototype) {
        if (type === Cell || type.prototype instanceof Cell) {
          return React.cloneElement(child, insetCellProps);
        }
        if (type === Grid || type.prototype instanceof Grid) {
          childStyle = {
            ...(child && child.props && child.props.style),
            margin: 0,
          };
        }
      }
      return React.createElement(
        Cell,
        {
          key,
          ...insetCellProps,
          style: childStyle,
        },
        child
      );
    });

  return content.length
    ? this.merge(
        {
          tag,
          style,
          children: content,
        },
        omit(props, Object.keys(Grid.propTypes))
      )
    : null;
}
