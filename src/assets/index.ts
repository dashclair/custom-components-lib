import { FunctionComponent, SVGAttributes } from "react";
import ArrowIcon from './arrow.svg';
import CrossIcon from './cross.svg';

export type IconMap = { component:FunctionComponent<SVGAttributes<SVGElement>> };
export type  IconName = keyof typeof iconsMap;

export const iconsMap = {
  arrow: { component: ArrowIcon },
  cross:{ component: CrossIcon}
};