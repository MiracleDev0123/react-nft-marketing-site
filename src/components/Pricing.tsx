import { Link as ScrollLink } from "react-scroll";
import Box from "./common/Box";
import Flex from "./common/Flex";
import Image from "./common/Image";

export interface PricingProps {
  icon: React.ReactNode;
  title: string;
  price: string;
  desc: string[];
}

interface Props {
  pricing: PricingProps;
}

const Pricing: React.FC<Props> = ({ pricing }) => {
  return (
    <Box
      cssClasses={["p-xxl-4", "p-lg-3", "p-md-2", "py-3", "col-md-4", "col-12"]}
    >
      <Box
        cssClasses={["border-gradient", "pricing-table", "bg-2", "border-r-20"]}
      >
        <Flex direction="row" justifyContent="center">
          <Box
            cssClasses={[
              "pricing-table-header",
              "py-xxl-3",
              "px-xxl-4",
              "py-2",
              "px-3",
            ]}
          >
            <Box cssClasses={["px-4"]}>
              <Image src={pricing.icon} />
              <p className="font-size-md-2 fw-700 mt-xxl-3 mt-2">
                {pricing.title}
              </p>
            </Box>
          </Box>
        </Flex>
        <Box cssClasses={["pricing-table-body", "mt-4"]}>
          <p className="font-size-lg-3 fw-700">{pricing.price}</p>
          <ul className="mt-xxl-3 d-inline-block p-0 mt-2">
            {pricing.desc.map((desc, index) => (
              <li key={index} className="opacity-color font-size-sm-1 py-2">
                {desc}
              </li>
            ))}
          </ul>
        </Box>
        <Flex direction="row" justifyContent="center">
          <ScrollLink to={"contact"} spy={true}>
            <Box
              cssClasses={[
                "pricing-table-learnmore",
                "opacity-color",
                "mt-xxl-4",
                "mt-2",
                "font-size-sm-1",
                "fw-700",
              ]}
            >
              Learn More
            </Box>
          </ScrollLink>
        </Flex>
      </Box>
    </Box>
  );
};

export default Pricing;
