import React from "react";

import CopyLink from "./../../assets/icons/copy_link";

const Icon = props => {
  switch (props.name) {
    case "copyLink":
      return <CopyLink {...props} />;
    default:
      return;
  }
};

export default Icon;
