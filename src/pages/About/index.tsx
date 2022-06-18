import Flex from "../../components/common/Flex";
import Image from "../../components/common/Image";
import Box from "../../components/common/Box";
import HeroImg from "../../assets/images/about/hero.png";
import AboutImg from "../../assets/images/about/about.png";
import About from "../../components/about";
import ServiceIcon1 from "../../assets/images/maximize.png";
import ServiceIcon2 from "../../assets/images/theta-(theta).png";
import ServiceIcon3 from "../../assets/images/nebulas-(nas).png";
import ServiceIcon4 from "../../assets/images/crown.png";
import ServiceIcon5 from "../../assets/images/flag.png";
import ServiceIcon6 from "../../assets/images/coffee.png";
import AboutService from "../../components/AboutService";
import Avatar from "../../assets/images/about/avatar.png";
import Team from "../../components/Team";
import Slider from "react-slick";
import SliderArrow from "../../components/common/SliderArrow";
import Bg from "../../assets/images/bg.png";
import Bg4 from "../../assets/images/Ellipse_47.png";
import Bg1 from "../../assets/images/about/Ellipse.png";

import { ABOUT } from "../../constants";

const AboutUs = () => {
  const services = [
    {
      icon: ServiceIcon1,
      title: "Lorem Ipsum",
      desc: "If you are going to use a passage of    Lorem Ipsum, you need to be sure there   isn't anything embarrassing hidden.",
    },
    {
      icon: ServiceIcon2,
      title: "Lorem Ipsum",
      desc: "If you are going to use a passage of    Lorem Ipsum, you need to be sure there   isn't anything embarrassing hidden.",
    },
    {
      icon: ServiceIcon3,
      title: "Lorem Ipsum",
      desc: "If you are going to use a passage of    Lorem Ipsum, you need to be sure there   isn't anything embarrassing hidden.",
    },
    {
      icon: ServiceIcon4,
      title: "Lorem Ipsum",
      desc: "If you are going to use a passage of    Lorem Ipsum, you need to be sure there   isn't anything embarrassing hidden.",
    },
    {
      icon: ServiceIcon5,
      title: "Lorem Ipsum",
      desc: "If you are going to use a passage of    Lorem Ipsum, you need to be sure there   isn't anything embarrassing hidden.",
    },
    {
      icon: ServiceIcon6,
      title: "Lorem Ipsum",
      desc: "If you are going to use a passage of    Lorem Ipsum, you need to be sure there   isn't anything embarrassing hidden.",
    },
  ];

  const teams = [
    {
      avatar: Avatar,
      name: "Michel Filip",
      role: "Co Founder",
      link: "",
    },
    {
      avatar: Avatar,
      name: "Michel Filip",
      role: "Co Founder",
      link: "",
    },
    {
      avatar: Avatar,
      name: "Michel Filip",
      role: "Co Founder",
      link: "",
    },
    {
      avatar: Avatar,
      name: "Michel Filip",
      role: "Co Founder",
      link: "",
    },
    {
      avatar: Avatar,
      name: "Michel Filip",
      role: "Co Founder",
      link: "",
    },
    {
      avatar: Avatar,
      name: "Michel Filip",
      role: "Co Founder",
      link: "",
    },
    {
      avatar: Avatar,
      name: "Michel Filip",
      role: "Co Founder",
      link: "",
    },
    {
      avatar: Avatar,
      name: "Michel Filip",
      role: "Co Founder",
      link: "",
    },
  ];

  return (
    <>
      <div className="container">
        <Box cssClasses={["hero", "position-relative"]}>
          <Box cssClasses={["hero-overlay"]} />
          <Image src={HeroImg} width="100%" />
          <Flex
            cssClasses={["hero-text", "px-3"]}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box cssClasses={["position-relative"]}>
              <span
                className="font-size-bg position-relative"
                style={{ zIndex: 1 }}
              >
                We are DetaMarketing Team
              </span>
              <span className="font-size-bg gradient-text hero-text-shadow">
                We are DetaMarketing Team
              </span>
            </Box>
          </Flex>
        </Box>
      </div>
      <div className="container position-relative">
        <Image src={Bg1} cssClasses={["about-background"]} />
        <Box cssClasses={["bg-2", "about-section", "border-r-20"]}>
          <Flex
            direction={"row"}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box cssClasses={["col-lg-5", ""]}>
              <p className="section-title" data-aos="fade-up">
                About Us
              </p>
              <p
                className="mt-4 font-size-md-3 opacity-color"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Our mission is to lay down the groundwork to create the
                framework for creators, artists, visionaries and etc. to safely
                promote their brands, products, and collections. With this
                mission, we have started the work to build a trustworthy
                marketing agency and grew up to be one in 10 years of hard work.
                <br />
                <br />
                Specifically vetted team experts, growth analysts, and targeted
                marketing specialists have been gathered together to form our
                team since its foundation. Throughout the years our clients have
                been never left dissatisfied, and the experience further made us
                veterans in the field.
              </p>
            </Box>
            <Box cssClasses={["col-lg-1"]} />
            <Box
              cssClasses={["col-lg-6", "mt-lg-0", "mt-4", "position-relative"]}
            >
              <div data-aos="fade-up">
                <Image src={AboutImg} width="100%" />
              </div>
            </Box>
          </Flex>
        </Box>
        <Flex
          direction="row"
          justifyContent="center"
          cssClasses={["mt-4", "pt-4"]}
        >
          {ABOUT.map((about, index) => (
            <About
              key={index}
              index={index}
              icon={about.icon}
              num={about.num}
              desc={about.desc}
              color={about.color}
              className="about-width"
            />
          ))}
        </Flex>
      </div>
      <div className="section">
        <Box cssClasses={["container"]}>
          <p className="font-size-lg-2 fw-700 text-center">
            Why You Should Work With Us
          </p>
        </Box>
        <Box cssClasses={["position-relative", "container"]}>
          <Image src={Bg} cssClasses={["background-6"]} />
          <Image src={Bg4} cssClasses={["background-7"]} />
          <Flex
            direction={"row"}
            justifyContent="center"
            alignItems="center"
            cssClasses={["col-lg-10", "m-auto", "mt-4", "pt-2"]}
          >
            {services.map((service, index) => (
              <AboutService
                icon={service.icon}
                desc={service.desc}
                title={service.title}
                index={index}
                key={index}
              />
            ))}
          </Flex>
        </Box>
      </div>
      <div className="section container">
        <Box
          cssClasses={[
            "border-gradient",
            "p-xxl-4",
            "p-3",
            "team-section",
            "border-r-20",
            "w-100",
          ]}
        >
          <p className="font-size-lg-2 fw-700 text-center mt-4">
            Meet our team
          </p>
          <Box cssClasses={["mt-4"]}>
            <Flex
              direction="row"
              justifyContent="start"
              alignItems="center"
              cssClasses={["d-md-flex", "d-none"]}
            >
              {teams.map((team, index) => (
                <Team
                  index={index}
                  key={index}
                  name={team.name}
                  role={team.role}
                  avatar={team.avatar}
                  link={team.link}
                />
              ))}
            </Flex>
            <Box cssClasses={["d-md-none", "col-10", "m-auto"]}>
              <Slider
                {...{
                  infinite: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true,
                  nextArrow: <SliderArrow direction="next" />,
                  prevArrow: <SliderArrow direction="prev" />,
                }}
              >
                {teams.map((team, index) => (
                  <Team
                    index={index}
                    key={index}
                    name={team.name}
                    role={team.role}
                    avatar={team.avatar}
                    link={team.link}
                  />
                ))}
              </Slider>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default AboutUs;
