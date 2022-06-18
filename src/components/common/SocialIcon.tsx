import Box from "./Box";
import Image from "./Image";

export interface SocialIconProps {
  icon: any;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => {
  return (
    <Box cssClasses={["social-icon"]}>
      <Image src={icon} />
    </Box>
  );
};

export default SocialIcon;
