const Button = ({
  text,
  onClick,
  styles,
  cssClasses,
  outline,
}: {
  text: string;
  onClick?: () => void;
  styles?: { [key: string]: string };
  cssClasses?: string[];
  outline?: boolean;
}) => {
  return (
    <>
      <button
        className={`${
          outline ? "custom-outline-btn border-gradient" : "custom-btn"
        } ${cssClasses ? cssClasses.join(" ") : ""}`}
        onClick={onClick}
        style={{ ...styles }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
