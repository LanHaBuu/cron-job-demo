import React, { FC } from "react";

const ArrowDownIcon: FC<React.SVGAttributes<HTMLOrSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 -960 960 960">
      <path d="M480-360 280-560h400L480-360Z" />
    </svg>
  );
};

export default ArrowDownIcon;
