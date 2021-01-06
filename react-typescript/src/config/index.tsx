import React from "react";
import ReactDOM from "react-dom";
import { Config } from "./Config";

((PLUGIN_ID) => {
  "use strict";
  ReactDOM.render(<Config />, document.getElementById("root"));
})(
  // @ts-expect-error
  kintone.$PLUGIN_ID
);
