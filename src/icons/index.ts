import { FunctionComponent, SVGAttributes } from "react";
import {ReactComponent as ArrowIcon} from './arrow.svg'

export type IconName = "arrow";

export type IconConfig = { component:FunctionComponent<SVGAttributes<SVGElement>> };

export const svgIconsConfig: Record<IconName, IconConfig> = {
  arrow: { component: ArrowIcon },
//   cross:{ component: CrossIcon}
};