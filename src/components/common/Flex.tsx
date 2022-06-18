import React from "react";

interface FlexProps {
  direction: any;
  justifyContent: string;
  alignItems?: string;
  styles?: { [key: string]: string };
  cssClasses?: string[];
  children: React.ReactNode;
  onClick?: () => void;
}

const Flex = ({
  direction,
  justifyContent,
  alignItems,
  styles,
  cssClasses,
  children,
  onClick,
}: FlexProps) => {
  return (
    <div
      className={cssClasses ? cssClasses.join(" ") : ""}
      style={{
        ...styles,
        display: "flex",
        flexDirection: direction,
        justifyContent: justifyContent,
        alignItems: alignItems,
        flexWrap: "wrap",
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Flex;
