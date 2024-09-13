import React, { SVGProps, forwardRef } from "react";

const MySvgComponent = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
    function MySvgComponent(props, ref) {
        return <svg ref={ref} {...props} />;
    }
);

MySvgComponent.displayName = "MySvgComponent";

export default MySvgComponent;
