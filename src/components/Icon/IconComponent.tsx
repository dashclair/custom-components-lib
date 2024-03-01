import React from "react";
import { iconsMap } from "../../assets/index";
import { IconComponent } from "./IconComponent.types";

const  IconComponent = ({iconName, ...props}: IconComponent) => {
  const Icon = iconsMap[iconName]?.component;
  
  return <Icon {...props} />;
};

export default IconComponent