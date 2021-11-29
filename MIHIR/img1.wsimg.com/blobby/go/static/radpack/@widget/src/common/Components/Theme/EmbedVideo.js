import PropTypes from "prop-types";
import { UX2 } from "@wsb/guac-widget-core";

export class EmbedVideo extends UX2.utils.createElement("EmbedVideo") {
  static propTypes = {
    ["data-field-route"]: PropTypes.string,
    ["data-field-id"]: PropTypes.string,
    ["data-aid"]: PropTypes.string,
    ["embedUrl"]: PropTypes.string,
    ["style"]: PropTypes.object,
  };
}
