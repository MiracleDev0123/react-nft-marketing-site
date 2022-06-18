import { Link as ScrollLink } from "react-scroll";
import Box from "./common/Box";
import Flex from "./common/Flex";
import Image from "./common/Image";

const Service = ({
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
    <Box cssClasses={["col-md-6", "col-lg-3", "p-3", "text-center"]}>
      <div
        data-aos="flip-left"
        data-aos-delay={(index + 1) * 100}
        className="h-100"
      >
        <Box
          cssClasses={[
            "border-gradient",
            "service",
            "bg-5",
            "border-r-20",
            "h-100",
            "position-relative",
          ]}
        >
          <Image cssClasses={["service-icon"]} src={icon} />
          <p className="font-size-md-1 mt-xxl-4 fw-700 mt-3">{title}</p>
          <p className="font-size-sm-1 opacity-color">{desc}</p>
          <Flex
            direction="row"
            justifyContent="center"
            cssClasses={["service-learnmore-container"]}
          >
            <ScrollLink to={"contact"} spy={true}>
              <Box cssClasses={["service-learnmore", "opacity-color", "mt-4"]}>
                Learn More
              </Box>
            </ScrollLink>
          </Flex>
        </Box>
      </div>
    </Box>
  );
};

export default Service;
