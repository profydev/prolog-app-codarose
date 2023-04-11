import React from "react";
import { version } from "package.json";

const AppVersion = () => {
  return <span>Version: {version}</span>;
};

export default AppVersion;
