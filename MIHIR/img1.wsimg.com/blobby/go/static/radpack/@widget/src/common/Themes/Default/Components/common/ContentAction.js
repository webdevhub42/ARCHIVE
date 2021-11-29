import React, { Component } from "react";
import PropTypes from "prop-types";
import { components, UX2 } from "@wsb/guac-widget-core";

const { CTAButton } = components;

export default class ContentAction extends Component {
  static propTypes = {
    action: PropTypes.shape({
      children: PropTypes.any,
      link: PropTypes.shape({
        url: PropTypes.string,
        pageId: PropTypes.string,
        widgetId: PropTypes.string,
        linkId: PropTypes.string,
        target: PropTypes.string,
      }),
      target: PropTypes.string,
    }),
  };

  render() {
    const { action } = this.props;
    const { children, link, ...props } = action;
    const ctaProps = {
      element: UX2.Element.Button.Secondary,
      ctaButton: {
        label: children,
        enabled: true,
        ...link,
      },
      ...props,
    };
    return <UX2.Element.Block children={<CTAButton {...ctaProps} />} />;
  }
}
