import { HTMLAttributes } from "react";
import clsx from "clsx";

interface SliderArrowProps extends HTMLAttributes<HTMLDivElement> {
  direction: string;
}

const SliderArrow = (props: SliderArrowProps) => {
  const { className, onClick, direction } = props;

  return (
    <div className={clsx(className, "slider-arrow")} onClick={onClick}>
      {direction === "next" && <i className="bi bi-arrow-right" />}
      {direction === "prev" && <i className="bi bi-arrow-left" />}
    </div>
  );
};

export default SliderArrow;
