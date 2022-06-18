interface ImageProps {
  height?: string;
  width?: string;
  cssClasses?: string[];
  styles?: { [key: string]: string };
  handleClick?: () => void;
  src?: any;
}

const Image = ({
  height,
  width,
  cssClasses,
  styles,
  handleClick,
  src,
}: ImageProps) => {
  return (
    <>
      <img
        width={width}
        height={height}
        src={src}
        style={styles}
        className={cssClasses ? cssClasses.join(" ") : ""}
        onClick={handleClick}
        alt=""
      />
    </>
  );
};

export default Image;
