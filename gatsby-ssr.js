import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="https://apps.elfsight.com/p/platform.js"
      src="https://apps.elfsight.com/p/platform.js"
      defer
    />,
  ]);
};
