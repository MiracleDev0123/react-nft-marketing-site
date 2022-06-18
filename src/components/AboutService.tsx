import Box from "./common/Box";
import Image from "./common/Image";

const AboutService = ({
  icon,
  title,
  desc,
  index,
}: {
  icon: any;
  title: string;
  desc: string;
  index: number;
}) => {
  return (
    <Box cssClasses={["col-md-6", "col-lg-4", "p-xxl-4", "p-3"]}>
      <div data-aos="flip-left" data-aos-delay={(index + 1) * 100}>
        <Box
          cssClasses={[
            "border-gradient",
            "p-4",
            "bg-5",
            "border-r-20",
            "service",
          ]}
        >
          <Box cssClasses={["p-xxl-2"]}>
            <Image
              cssClasses={[
                "bg-4",
                "py-3",
                "px-4",
                "border-r-20",
                "service-icon",
              ]}
              src={icon}
            />
            <p className="font-size-md-1 mt-4">{title}</p>
            <p className="font-size-sm-1 opacity-color mt-2">{desc}</p>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default AboutService;
