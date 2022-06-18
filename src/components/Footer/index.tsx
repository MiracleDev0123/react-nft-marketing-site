import Flex from "../common/Flex";
import Box from "../common/Box";
import Image from "../common/Image";
import Instagram from "../../assets/images/Instagram.png";
import Twitter from "../../assets/images/Twitter.png";
import FaceBook from "../../assets/images/Facebook.png";
import LinkedIN from "../../assets/images/LinkedIN.png";
import Telegram from "../../assets/images/Telegram.png";
import Button from "../common/Button";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import SocialIcon from "../common/SocialIcon";

const Footer = () => {
  const socialIcons = [
    { icon: FaceBook, link: "" },
    { icon: LinkedIN, link: "" },
    { icon: Instagram, link: "" },
    { icon: Twitter, link: "" },
    { icon: Telegram, link: "" },
  ];

  return (
    <Box cssClasses={["footer"]}>
      <Box cssClasses={["footer-container"]}>
        <Flex cssClasses={["container"]} direction="row" justifyContent="start">
          <Box cssClasses={["col-md-3", "col-12"]}>
            <Link to="/" className="navbar-brand pointer p-0">
              <Flex direction="row" justifyContent="start" alignItems="center">
                <Image src={Logo} cssClasses={["footer-logo-img"]} />
                <p className="ms-2 font-size-md-2 font-nulshock gradient-text">
                  DetaMarketing
                </p>
              </Flex>
            </Link>
            <p className="font-size-sm-3 opacity-color mt-2 pe-4">
              There are many variations of passages of
              <br /> majority have suffered alteration in some form
            </p>
            <Flex direction="row" justifyContent="start" cssClasses={["mt-3"]}>
              {socialIcons.map((icon, index) => (
                <Box key={index} cssClasses={["me-xxl-4", "me-3"]}>
                  <SocialIcon icon={icon.icon} />
                </Box>
              ))}
            </Flex>
          </Box>
          <Box cssClasses={["col-md-2", "col-12", "mt-4", "mt-md-0"]}>
            <p className="font-size-md-4 fw-700 text-uppercase mb-4">
              Quick links
            </p>
            <p className="font-size-sm-2 opacity-color mb-3">About Us</p>
            <p className="font-size-sm-2 opacity-color mb-3">Blogs</p>
            <p className="font-size-sm-2 opacity-color mb-3">Testimonials</p>
            <p className="font-size-sm-2 opacity-color">Contact us</p>
          </Box>
          <Box cssClasses={["col-md-2", "col-12", "mt-4", "mt-md-0"]}>
            <p className="font-size-md-4 fw-700 text-uppercase mb-4">Info</p>
            <p className="font-size-sm-2 opacity-color mb-3">Reviews</p>
            <p className="font-size-sm-2 opacity-color mb-3">
              Terms & Conditions
            </p>
            <p className="font-size-sm-2 opacity-color mb-3">
              Privacy Statements
            </p>
          </Box>
          <Box cssClasses={["col-md-2", "col-12", "mt-4", "mt-md-0"]}>
            <p className="font-size-md-4 fw-700 text-uppercase mb-4">
              Contact Us
            </p>
            <p className="font-size-sm-2 opacity-color mb-3">
              Phone: 45749494984947
            </p>
            <p className="font-size-sm-2 opacity-color mb-3">
              support@detamarketing.com
            </p>
            <p className="font-size-sm-2 opacity-color mb-3">
              101 West Broadway, Ste 300
              <br /> San Diego, CA 92101
            </p>
          </Box>
          <Box cssClasses={["col-md-3", "col-12", "mt-4", "mt-md-0"]}>
            <p className="font-size-md-4 fw-700 text-uppercase mb-4">
              Subscribe to newsletter
            </p>
            <Flex
              cssClasses={["mt-4", "m-auto", "border-r-5", "bg-6", "p-1"]}
              direction="row"
              justifyContent="space-between"
            >
              <form className="d-flex w-100">
                <input
                  placeholder="Enter your email here"
                  type="email"
                  className="w-100 text-start border-0 font-size-sm-2 ps-2"
                  required
                />
                <Button
                  text="Subscribe"
                  styles={{ padding: "10px 25px" }}
                  cssClasses={["font-size-sm-2", "border-r-5"]}
                />
              </form>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box
        cssClasses={[
          "bg-6",
          "text-center",
          "font-size-sm-3",
          "container",
          "py-4",
          "opacity-color",
        ]}
      >
        Copyright © 2022 NFTM ® All Rights Reserved
      </Box>
    </Box>
  );
};

export default Footer;
