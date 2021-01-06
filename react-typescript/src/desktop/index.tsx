import React from "react";
import ReactDOM from "react-dom";
import { RecordHeader } from "./RecordHeader";

((PLUGIN_ID) => {
  "use strict";

  kintone.events.on("app.record.index.show", (event: any) => {
    const header = kintone.app.getHeaderSpaceElement();
    ReactDOM.render(<RecordHeader />, header);
    return event;
  });
})(
  // @ts-expect-error
  kintone.$PLUGIN_ID
);
