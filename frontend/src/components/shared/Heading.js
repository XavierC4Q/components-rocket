import { createElement } from "react";

function Heading({ ...props }) {
  return createElement("h1", {}, props.text);
}

export default Heading;
