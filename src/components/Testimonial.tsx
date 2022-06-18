import Box from "./common/Box";
import LeftQuotes from "../assets/images/left-quotes.png";
import RightQuotes from "../assets/images/right-quotes.png";
import Image from "./common/Image";
import Flex from "./common/Flex";
import Twitter from "../assets/images/twitter-gradient.png";

const Testimonial = ({
  desc,
  avatar,
  name,
  role,
  logo,
  index,
}: {
  desc: string;
  avatar: any;
  name: string;
  role: string;
  logo: any;
  index: number;
}) => {
  return (
    <Box cssClasses={["p-xxl-3", "p-2"]}>
      <div data-aos="flip-down" data-aos-delay={index * 100}>
        <Box
          cssClasses={[
            "p-xxl-4",
            "border-gradient",
            "bg-2",
            "border-r-20",
            "testimonial",
            "p-2",
            "pb-4",
          ]}
        >
          <Box cssClasses={["position-relative"]}>
            <Image src={Twitter} cssClasses={["testimonial-twitter"]} />
            <Image src={LeftQuotes} cssClasses={["left-quotes"]} />
            <Image src={RightQuotes} cssClasses={["right-quotes"]} />
            <Box cssClasses={["p-4"]}>
              <Box cssClasses={["p-xxl-2"]}>
                <p className="font-size-sm-1 testimonial-desc mt-2">{desc}</p>
              </Box>
            </Box>
          </Box>
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
            cssClasses={["px-4", "pb-xxl-4"]}
          >
            <Flex
              direction="row"
              justifyContent="start"
              alignItems="center"
              cssClasses={["px-xxl-2"]}
            >
              <Image
                src={avatar}
                cssClasses={["testimonial-avatar", "me-xxl-3", "me-2"]}
              />
              <Flex direction={"column"} justifyContent="space-between">
                <p className="font-size-md-3">{name}</p>
                <p className="font-size-sm-1 opacity-color">{role}</p>
              </Flex>
            </Flex>
            <Image cssClasses={["testimonial-logo"]} src={logo} />
          </Flex>
        </Box>
      </div>
    </Box>
  );
};

export default Testimonial;
