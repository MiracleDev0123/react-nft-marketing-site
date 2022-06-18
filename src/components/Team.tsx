import Box from "./common/Box";
import Flex from "./common/Flex";
import Image from "./common/Image";
import LinkedInIcon from "../assets/images/about/LinkedIN.png";

const Team = ({
  avatar,
  name,
  role,
  link,
  index,
}: {
  avatar: any;
  name: string;
  role: string;
  link: string;
  index: number;
}) => {
  return (
    <Box cssClasses={["col-md-6", "col-lg-3", "p-xxl-4", "p-3", "col-12"]}>
      <div data-aos="flip-left" data-aos-delay={(index + 1) * 100}>
        <Box cssClasses={["border-r-10", "overflow-hidden", "bg-2"]}>
          <Image src={avatar} width="100%" />
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            cssClasses={["p-4"]}
          >
            <Box>
              <p className="font-size-md-2">{name}</p>
              <p className="font-size-sm-2">{role}</p>
            </Box>
            <Box>
              <a href={link}>
                <Image cssClasses={["team-linkedin-icon"]} src={LinkedInIcon} />
              </a>
            </Box>
          </Flex>
        </Box>
      </div>
    </Box>
  );
};

export default Team;
