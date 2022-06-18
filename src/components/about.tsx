import Box from "./common/Box";
import Image from "./common/Image";

const About = ({
  icon,
  num,
  desc,
  col,
  color,
  index,
  styles,
  className,
}: {
  icon: any;
  num: number | string;
  desc: string;
  col?: number;
  color: string;
  index: number;
  styles?: { [key: string]: string };
  className?: string;
}) => {
  return (
    <Box
      cssClasses={[
        `col-md-${col ? col : "auto"}`,
        "p-xxl-3",
        "p-2",
        "col-12",
        className ? className : "",
      ]}
    >
      <div data-aos="flip-up" data-aos-delay={index * 100} className="h-100">
        <Box
          cssClasses={[
            "border-gradient",
            "border-r-20",
            "p-xxl-4",
            "p-3",
            "bg-3",
            "w-100",
            "h-100",
          ]}
          styles={{ ...styles, backgroundColor: "rgba(17, 24, 55, 0.5)" }}
        >
          <Box
            cssClasses={[
              "about-icon",
              "p-2",
              "p-xxl-3",
              "border-r-10",
              "bg-1",
              "d-table",
            ]}
          >
            <Image src={icon} width="30px" />
          </Box>
          <Box cssClasses={["mt-xxl-3", "mt-2"]}>
            <p className={`font-size-lg-2 fw-700 ${color}`}>{num}</p>
          </Box>
          <p className="font-size-md-2">{desc}</p>
        </Box>
      </div>
    </Box>
  );
};

export default About;
