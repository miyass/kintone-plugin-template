import React from "react";
import ReactDOM from "react-dom";
import { Config } from "./Config";

((PLUGIN_ID) => {
  "use strict";
  ReactDOM.render(<Config />, document.getElementById("root"));
})(kintone.$PLUGIN_ID);
