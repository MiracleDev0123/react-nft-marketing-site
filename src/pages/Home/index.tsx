import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Flex from "../../components/common/Flex";
import Box from "../../components/common/Box";
import Image from "../../components/common/Image";
import Button from "../../components/common/Button";
import HeroImage from "../../assets/images/hero_img.png";
import About from "../../components/about";
import { useState } from "react";
import Tab from "../../components/Tab";
import Seller from "../../components/Service";
import Client1 from "../../assets/images/Client-Logos_beckman-coulter.png";
import Client2 from "../../assets/images/Client-Logos_John-Hancock.png";
import Client3 from "../../assets/images/Client-Logos_NXP.png";
import Client4 from "../../assets/images/Client-Logos_AIG.png";
import Client5 from "../../assets/images/Client-Logos_Kuoni.png";
import Star1 from "../../assets/images/star1.png";
import Star2 from "../../assets/images/star2.png";
import BlogImg from "../../assets/images/blog.png";
import Slider from "react-slick";
import SliderArrow from "../../components/common/SliderArrow";
import Blog from "../../components/Blog";
import Bg3 from "../../assets/images/bg3.png";
import Bg4 from "../../assets/images/Ellipse_47.png";
import Bg5 from "../../assets/images/Ellipse_49.png";
import Bg6 from "../../assets/images/Ellipse_48.png";
import Bg7 from "../../assets/images/Ellipse_53.png";
import Bg from "../../assets/images/bg.png";
import Avatar from "../../assets/images/avatar.png";
import AvatarLogo from "../../assets/images/t_logo.png";
import Testimonial from "../../components/Testimonial";
import Service, { ServiceProps } from "../../components/common/Service";
import Crown from "../../assets/images/services/crown.png";
import Ranking from "../../assets/images/services/ranking.png";
import ProfileUser from "../../assets/images/services/profile-2user.png";
import Timer from "../../assets/images/services/timer.png";
import { ABOUT, SERVICES, SELLERS } from "../../constants";

const Home = () => {
  const serviceTabs = [
    { value: "sellers", label: "Best Sellers" },
    ...SERVICES,
  ];

  const customers = [
    { image: Client1 },
    { image: Client2 },
    { image: Client3 },
    { image: Client4 },
    { image: Client5 },
    { image: Client5 },
    { image: Client3 },
    { image: Client1 },
    { image: Client2 },
    { image: Client4 },
  ];

  const testimonials = [
    {
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      avatar: Avatar,
      name: "Carl Mahnke",
      role: "HYATT HOTELS",
      logo: AvatarLogo,
    },
    {
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      avatar: Avatar,
      name: "Carl Mahnke",
      role: "HYATT HOTELS",
      logo: AvatarLogo,
    },
    {
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      avatar: Avatar,
      name: "Carl Mahnke",
      role: "HYATT HOTELS",
      logo: AvatarLogo,
    },
    {
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      avatar: Avatar,
      name: "Carl Mahnke",
      role: "HYATT HOTELS",
      logo: AvatarLogo,
    },
    {
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      avatar: Avatar,
      name: "Carl Mahnke",
      role: "HYATT HOTELS",
      logo: AvatarLogo,
    },
    {
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      avatar: Avatar,
      name: "Carl Mahnke",
      role: "HYATT HOTELS",
      logo: AvatarLogo,
    },
    {
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      avatar: Avatar,
      name: "Carl Mahnke",
      role: "HYATT HOTELS",
      logo: AvatarLogo,
    },
    {
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      avatar: Avatar,
      name: "Carl Mahnke",
      role: "HYATT HOTELS",
      logo: AvatarLogo,
    },
    {
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      avatar: Avatar,
      name: "Carl Mahnke",
      role: "HYATT HOTELS",
      logo: AvatarLogo,
    },
    {
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      avatar: Avatar,
      name: "Carl Mahnke",
      role: "HYATT HOTELS",
      logo: AvatarLogo,
    },
  ];

  const blogs = [
    {
      image: BlogImg,
      title: "Business with Bitcoin",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the.",
      link: "",
    },
    {
      image: BlogImg,
      title: "Business with Bitcoin",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the.",
      link: "",
    },
    {
      image: BlogImg,
      title: "Business with Bitcoin",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the.",
      link: "",
    },
    {
      image: BlogImg,
      title: "Business with Bitcoin",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the.",
      link: "",
    },
    {
      image: BlogImg,
      title: "Business with Bitcoin",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the.",
      link: "",
    },
    {
      image: BlogImg,
      title: "Business with Bitcoin",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the.",
      link: "",
    },
  ];

  const services: ServiceProps[] = [
    { icon: Crown, title: "#1", desc: "Most downloaded app" },
    { icon: Ranking, title: "2.5B+", desc: "TikTok installs worldwide" },
    { icon: ProfileUser, title: "80M+", desc: "Monthly users in USA" },
    { icon: Timer, title: "52", desc: "Mins avg watched user/day" },
  ];

  const [activeTab, setActiveTab] = useState<string>("sellers");

  return (
    <>
      <Box cssClasses={["home-content"]}>
        <div id="home" className="home-section text-center container">
          <Box cssClasses={["col-xl-9", "col-lg-10", "m-auto"]}>
            <p className="text-shadow font-size-bg mt-4" data-aos="zoom-in">
              We help Crypto & NFT projects to go viral.
            </p>
            <p
              className="font-size-md-1 mt-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Grow your project with top talent content creators and celebrities
              all around the world.
            </p>
          </Box>
          <div data-aos="fade-up" data-aos-delay="400">
            <ScrollLink to={"contact"} spy={true}>
              <Button cssClasses={["mt-4"]} text="Let’s Talk" />
            </ScrollLink>
          </div>
          <Flex direction="row" justifyContent="center">
            <Box cssClasses={["col-md-10", "mt-3", "col-12"]}>
              <div data-aos="fade-up" data-aos-delay="500">
                <Image src={HeroImage} width="100%" />
              </div>
            </Box>
          </Flex>
        </div>
        <Box cssClasses={["container", "position-relative"]}>
          <Image src={Bg3} cssClasses={["background-3"]} />
          <Image src={Bg} cssClasses={["background-5"]} />
          <div
            id="aboutus"
            className="about-section bg-2 border-r-20 position-relative"
          >
            <Flex direction="row" justifyContent="between" alignItems="center">
              <Box cssClasses={["col-lg-5"]}>
                <p className="section-title" data-aos="fade-up">
                  About Us
                </p>
                <p
                  className="mt-4 font-size-md-3 opacity-color"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Our mission is to lay down the groundwork to create the
                  framework for creators, artists, visionaries and etc. to
                  safely promote their brands, products, and collections. With
                  this mission, we have started the work to build a trustworthy
                  marketing agency and grew up to be one in 10 years of hard
                  work.
                  <br />
                  <br />
                  Specifically vetted team experts, growth analysts, and
                  targeted marketing specialists have been gathered together to
                  form our team since its foundation. Throughout the years our
                  clients have been never left dissatisfied, and the experience
                  further made us veterans in the field.
                </p>
              </Box>
              <Box cssClasses={["col-lg-1"]} />
              <Box
                cssClasses={[
                  "col-lg-6",
                  "mt-4",
                  "mt-lg-0",
                  "position-relative",
                ]}
              >
                <Image src={Bg} cssClasses={["background-4"]} />
                <Flex
                  direction="row"
                  justifyContent="justify-between"
                  alignItems="flex-end"
                  styles={{ margin: "0 -12px" }}
                >
                  {ABOUT.map((about, index) => (
                    <About
                      key={index}
                      index={index}
                      icon={about.icon}
                      num={about.num}
                      desc={about.desc}
                      col={about.col}
                      color={about.color}
                    />
                  ))}
                </Flex>
              </Box>
            </Flex>
          </div>
        </Box>
        <div id="services" className="section">
          <p className="section-title text-center container" data-aos="fade-up">
            Services
          </p>
          <div
            className="position-relative container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Flex
              cssClasses={["mt-4", "pt-2"]}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {serviceTabs.map((tab, index) => (
                <Tab
                  key={index}
                  tab={tab.label}
                  id={tab.value}
                  activeTab={activeTab}
                  setActiveTab={(id) => setActiveTab(id)}
                />
              ))}
            </Flex>
          </div>
          {activeTab === "sellers" && (
            <div className="position-relative">
              <Image src={Bg} cssClasses={["background-6"]} />
              <Image src={Bg4} cssClasses={["background-7"]} />
              <Flex
                cssClasses={["mt-4", "pt-2", "position-relative", "container"]}
                direction={"row"}
                justifyContent="space-between"
              >
                {SELLERS.map((service, index) => (
                  <Seller
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    desc={service.desc}
                    index={index}
                  />
                ))}
              </Flex>
            </div>
          )}
          {activeTab !== "sellers" && (
            <div className="container mt-4 pt-4" data-aos="fade-up">
              {activeTab === "tiktok" && (
                <Flex
                  cssClasses={[
                    "bg-gradient-1",
                    "p-4",
                    "border-0",
                    "border-r-20",
                    "position-relative",
                  ]}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image src={Bg7} cssClasses={["service-bg"]} />
                  <div className="col-md-8 text-center py-4 service-desc">
                    <p className="font-size-lg-2 fw-700">
                      Why TikTok Is A Great Marketing Channel
                    </p>
                    <p className="opacity-color font-size-md-3 mt-3">
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there isn't anything embarrassing hidden in the
                      middle of text. All the Lorem Ipsum generators on the
                      Internet
                    </p>
                  </div>
                  <Flex
                    direction={"row"}
                    justifyContent="center"
                    alignItems="center"
                    cssClasses={["col-md-10", "mt-xxl-3"]}
                  >
                    {services.map((service, index) => (
                      <Service key={index} service={service} />
                    ))}
                  </Flex>
                </Flex>
              )}
              {activeTab === "twitter" && (
                <Flex
                  cssClasses={[
                    "bg-gradient-1",
                    "p-4",
                    "border-0",
                    "border-r-20",
                    "position-relative",
                  ]}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image src={Bg7} cssClasses={["service-bg"]} />
                  <div className="col-md-8 text-center py-4 service-desc">
                    <p className="font-size-lg-2 fw-700">
                      Why Twitter Is A Great Marketing Channel
                    </p>
                    <p className="opacity-color font-size-md-3 mt-3">
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there isn't anything embarrassing hidden in the
                      middle of text. All the Lorem Ipsum generators on the
                      Internet
                    </p>
                  </div>
                  <Flex
                    direction={"row"}
                    justifyContent="center"
                    alignItems="center"
                    cssClasses={["col-md-10", "mt-xxl-3"]}
                  >
                    {services.map((service, index) => (
                      <Service key={index} service={service} />
                    ))}
                  </Flex>
                </Flex>
              )}
              {activeTab === "instagram" && (
                <Flex
                  cssClasses={[
                    "bg-gradient-1",
                    "p-4",
                    "border-0",
                    "border-r-20",
                    "position-relative",
                  ]}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image src={Bg7} cssClasses={["service-bg"]} />
                  <div className="col-md-8 text-center py-4 service-desc">
                    <p className="font-size-lg-2 fw-700">
                      Why Instagram Is A Great Marketing Channel
                    </p>
                    <p className="opacity-color font-size-md-3 mt-3">
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there isn't anything embarrassing hidden in the
                      middle of text. All the Lorem Ipsum generators on the
                      Internet
                    </p>
                  </div>
                  <Flex
                    direction={"row"}
                    justifyContent="center"
                    alignItems="center"
                    cssClasses={["col-md-10", "mt-xxl-3"]}
                  >
                    {services.map((service, index) => (
                      <Service key={index} service={service} />
                    ))}
                  </Flex>
                </Flex>
              )}
              {activeTab === "youtube" && (
                <Flex
                  cssClasses={[
                    "bg-gradient-1",
                    "p-4",
                    "border-0",
                    "border-r-20",
                    "position-relative",
                  ]}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image src={Bg7} cssClasses={["service-bg"]} />
                  <div className="col-md-8 text-center py-4 service-desc">
                    <p className="font-size-lg-2 fw-700">
                      Why YouTube Is A Great Marketing Channel
                    </p>
                    <p className="opacity-color font-size-md-3 mt-3">
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there isn't anything embarrassing hidden in the
                      middle of text. All the Lorem Ipsum generators on the
                      Internet
                    </p>
                  </div>
                  <Flex
                    direction={"row"}
                    justifyContent="center"
                    alignItems="center"
                    cssClasses={["col-md-10", "mt-xxl-3"]}
                  >
                    {services.map((service, index) => (
                      <Service key={index} service={service} />
                    ))}
                  </Flex>
                </Flex>
              )}
              <Box
                cssClasses={[
                  "mt-4",
                  "d-flex",
                  "pt-xxl-2",
                  "justify-content-center",
                ]}
              >
                <Link to={`/services/${activeTab}`}>
                  <Button
                    cssClasses={["font-size-sm-1", "btn-outlint-lg"]}
                    outline
                    text="Learn More"
                  />
                </Link>
              </Box>
            </div>
          )}
        </div>
        <div id="customers" className="section container">
          <Box
            cssClasses={[
              "bg-2",
              "border-r-20",
              "position-relative",
              "m-auto",
              "col-md-12",
              "col-12",
              "py-4",
            ]}
          >
            <Image src={Star1} cssClasses={["star1-img"]} />
            <Image src={Star2} cssClasses={["star2-img"]} />
            <Box cssClasses={["py-xxl-4"]}>
              <p className="section-title2 text-center" data-aos="fade-up">
                Our Customers
              </p>
              <Flex
                direction={"row"}
                justifyContent="center"
                alignItems="center"
                cssClasses={["py-4"]}
              >
                {customers.map((client, index) => (
                  <Box
                    key={index}
                    cssClasses={[
                      "text-center",
                      "client-content",
                      "my-xxl-4",
                      "my-2",
                      "py-xxl-2",
                    ]}
                  >
                    <div data-aos="zoom-in">
                      <Image cssClasses={["client"]} src={client.image} />
                    </div>
                  </Box>
                ))}
              </Flex>
            </Box>
          </Box>
        </div>
        <div id="testimonials" className="section">
          <p className="section-title text-center container" data-aos="zoom-in">
            Words From Our Clients
          </p>
          <Box
            cssClasses={[
              "mt-4",
              "position-relative",
              "col-10",
              "col-md-12",
              "m-auto",
            ]}
          >
            <Image src={Bg5} cssClasses={["background-13"]} />
            <Slider
              className="testimonial-slider"
              {...{
                infinite: true,
                autoplay: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 2,
                centerMode: true,
                centerPadding: "30%",
                arrows: true,
                nextArrow: <SliderArrow direction="next" />,
                prevArrow: <SliderArrow direction="prev" />,
                responsive: [
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      centerMode: false,
                    },
                  },
                ],
              }}
            >
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  index={index}
                  desc={testimonial.desc}
                  avatar={testimonial.avatar}
                  name={testimonial.name}
                  role={testimonial.role}
                  logo={testimonial.logo}
                />
              ))}
            </Slider>
          </Box>
        </div>
        <div id="blogs" className="section position-relative">
          <Image src={Bg5} cssClasses={["background-8"]} />
          <Image src={Bg6} cssClasses={["background-9"]} />
          <div className="container">
            <p className="section-title text-center" data-aos="flip-left">
              Latest Blogs
            </p>
            <Box cssClasses={["mt-4", "pt-2", "m-auto", "col-10", "col-md-12"]}>
              <Slider
                {...{
                  infinite: true,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: true,
                  nextArrow: <SliderArrow direction="next" />,
                  prevArrow: <SliderArrow direction="prev" />,
                  responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      },
                    },
                  ],
                }}
              >
                {blogs.map((blog, index) => (
                  <Blog
                    key={index}
                    img={blog.image}
                    title={blog.title}
                    desc={blog.desc}
                    link={blog.link}
                    index={index}
                  />
                ))}
              </Slider>
            </Box>
            <Box cssClasses={["pt-4"]}>
              <Link to="/blogs">
                <Button
                  text="Read all blogs"
                  outline
                  cssClasses={[
                    "mt-4",
                    "m-auto",
                    "d-flex",
                    "font-size-sm-1",
                    "btn-outlint-lg",
                  ]}
                />
              </Link>
            </Box>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Home;
