import React from "react";
import { svgIconsConfig } from "./index";
import { IconName } from "./index";

const  IconComponent = ({ iconName }: { iconName: IconName }) => {
  const Icon = svgIconsConfig[iconName]?.component;
  
  if(!Icon) {
    return null
  }
  return <Icon />;
};

export default IconComponent