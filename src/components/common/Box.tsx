import React from "react";

interface BoxProps {
  styles?: { [key: string]: string };
  cssClasses?: string[];
  background?: string;
  children?: React.ReactNode;
}

const Box = ({ styles, cssClasses, background, children }: BoxProps) => {
  return (
    <div
      className={cssClasses ? cssClasses.join(" ") : ""}
      style={{
        ...styles,
        background: background,
      }}
    >
      {children}
    </div>
  );
};

export default Box;
