import { Link, useParams } from "react-router-dom";
import Flex from "../../components/common/Flex";
import Crown from "../../assets/images/services/crown.png";
import Ranking from "../../assets/images/services/ranking.png";
import ProfileUser from "../../assets/images/services/profile-2user.png";
import Timer from "../../assets/images/services/timer.png";
import Service, { ServiceProps } from "../../components/common/Service";
import Box from "../../components/common/Box";
import { SERVICES } from "../../constants";
import { useEffect, useState } from "react";
import Standard from "../../assets/images/services/flash.png";
import Business from "../../assets/images/services/3dcube.png";
import Premium from "../../assets/images/services/crown-white.png";
import Pricing from "../../components/Pricing";
import Service1 from "../../assets/images/services/service-1.png";
import Service2 from "../../assets/images/services/service-2.png";
import Service3 from "../../assets/images/services/service-3.png";
import Service4 from "../../assets/images/services/service-4.png";
import Image from "../../components/common/Image";
import Group from "../../assets/images/services/group.png";
import Button from "../../components/common/Button";
import Bg from "../../assets/images/services/bg.png";
import Bg1 from "../../assets/images/services/Ellipse-52.png";
import Bg2 from "../../assets/images/services/Ellipse-53.png";

interface ServiceTabProps {
  activeClass: string;
  activeService: string;
  tabId: string;
  label: string;
  className: string;
  handler?: () => void;
  value: string;
}

export type paramType = {
  service: string;
};

export enum ServiceTypes {
  tiktok = "Tiktok",
  twitter = "Twitter",
  instagram = "Instagram",
  youtube = "YouTube",
}

const ServiceTab: React.FC<ServiceTabProps> = ({
  activeClass,
  activeService,
  tabId,
  label,
  className,
  handler,
  value,
}) => (
  <Flex
    direction={"row"}
    justifyContent="start"
    alignItems="center"
    cssClasses={[
      "py-xxl-3",
      "px-xxl-4",
      "py-2",
      "px-3",
      "border-r-20",
      className,
      `${tabId === activeService ? activeClass : ""}`,
    ]}
    onClick={handler}
  >
    <Box cssClasses={["service-tab-icon", "me-3"]}>
      <i className={`bi bi-${value}`} />
    </Box>
    <p className="font-size-md-1 service-tab-label">{label}</p>
  </Flex>
);

const Services = () => {
  const { service } = useParams<paramType>();
  const [activeService, setActiveService] =
    useState<keyof typeof ServiceTypes>();

  useEffect(() => {
    if (service) setActiveService(service as keyof typeof ServiceTypes);
    else setActiveService(SERVICES[0]["value"] as keyof typeof ServiceTypes);
  }, [service]);

  const services: ServiceProps[] = [
    { icon: Crown, title: "#1", desc: "Most downloaded app" },
    { icon: Ranking, title: "2.5B+", desc: "TikTok installs worldwide" },
    { icon: ProfileUser, title: "80M+", desc: "Monthly users in USA" },
    { icon: Timer, title: "52", desc: "Mins avg watched user/day" },
  ];

  const pricings = [
    {
      icon: Standard,
      title: "Standard",
      price: "Micro Influencers",
      desc: [
        "If you are going to use",
        "If you are going to use",
        "If you are going to use",
        "If you are going to use",
        "If you are going to use",
        "If you are going to use",
      ],
    },
    {
      icon: Business,
      title: "Business",
      price: "Macro Influencers",
      desc: [
        "If you are going to use",
        "If you are going to use",
        "If you are going to use",
        "If you are going to use",
        "If you are going to use",
        "If you are going to use",
      ],
    },
    {
      icon: Premium,
      title: "Premium",
      price: "Mega Influencers",
      desc: [
        "If you are going to use",
        "If you are going to use",
        "If you are going to use",
        "If you are going to use",
        "If you are going to use",
        "If you are going to use",
      ],
    },
  ];

  return (
    <>
      {activeService && (
        <>
          <Box cssClasses={["container"]}>
            <Flex
              cssClasses={["service-header", "p-4"]}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <div className="col-md-8 text-center py-4">
                <p className="font-size-lg-2 fw-700">
                  Why {ServiceTypes[activeService]} Is A Great Marketing Channel
                </p>
                <p className="opacity-color font-size-md-3 mt-3">
                  If you are going to use a passage of Lorem Ipsum, you need to
                  be sure there isn't anything embarrassing hidden in the middle
                  of text. All the Lorem Ipsum generators on the Internet
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
          </Box>
          <Flex
            direction={"row"}
            justifyContent="center"
            cssClasses={["mx-auto", "mt-4", "container"]}
          >
            <Flex
              direction={"row"}
              justifyContent="center"
              alignItems="center"
              cssClasses={[
                "border-r-20",
                "service-tabs",
                "p-2",
                "border-gradient",
              ]}
            >
              {SERVICES.map((service, index) => (
                <Link to={`/services/${service.value}`} key={index}>
                  <ServiceTab
                    key={index}
                    activeClass="active"
                    className="service-tab"
                    tabId={service.value}
                    activeService={activeService}
                    label={service.label}
                    value={service.value}
                  />
                </Link>
              ))}
            </Flex>
          </Flex>
          <Box cssClasses={["position-relative"]}>
            <Image src={Bg1} cssClasses={["pricing-bg-1"]} />
            <Image src={Bg2} cssClasses={["pricing-bg-2"]} />
            <Box cssClasses={["mt-4", "pt-4", "container"]}>
              <p className="font-size-lg-2 fw-700 text-center pt-4">
                Best Seller Packages
              </p>
              <Flex
                direction={"row"}
                justifyContent="center"
                alignItems="center"
                cssClasses={["col-lg-10", "m-auto", "mt-4", "col-12"]}
              >
                {pricings.map((pricing, index) => (
                  <Pricing key={index} pricing={pricing} />
                ))}
              </Flex>
            </Box>
          </Box>
          <Box cssClasses={["container"]}>
            <Box
              cssClasses={[
                "border-gradient",
                "p-4",
                "w-100",
                "section-1",
                "service-gallery",
                "border-r-20",
              ]}
            >
              <p className="fw-700 font-size-lg-2 text-center mt-4">
                Why {ServiceTypes[activeService]}?
              </p>
              <p className="font-size-md-3 opacity-color col-md-8 text-center m-auto mt-3">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend to
                repeat predefined chunks as necessary, making this the first
                true generator on the Internet.
              </p>
              <Box
                cssClasses={["col-md-11", "m-auto", "mt-4", "pt-xxl-4", "pt-3"]}
              >
                <Flex direction={"row"} justifyContent="center">
                  <Box cssClasses={["col-md-4", "pe-xxl-3", "pe-2"]}>
                    <Image
                      src={Service1}
                      cssClasses={["service-gallery-pic"]}
                    />
                  </Box>
                  <Box
                    cssClasses={[
                      "col-md-8",
                      "ps-xxl-3",
                      "ps-md-2",
                      "pt-md-0",
                      "pt-3",
                    ]}
                  >
                    <Flex
                      direction="row"
                      justifyContent="center"
                      cssClasses={["h-50", "gallery-panel"]}
                    >
                      <Box
                        cssClasses={[
                          "col-md-6",
                          "pe-xxl-3",
                          "pb-xxl-3",
                          "pe-md-2",
                          "pb-md-2",
                          "pb-3",
                        ]}
                      >
                        <Image
                          src={Service2}
                          cssClasses={["service-gallery-pic"]}
                        />
                      </Box>
                      <Box
                        cssClasses={[
                          "col-md-6",
                          "ps-xxl-3",
                          "pb-xxl-3",
                          "ps-md-2",
                          "pb-2",
                        ]}
                      >
                        <Image
                          src={Service3}
                          cssClasses={["service-gallery-pic"]}
                        />
                      </Box>
                    </Flex>
                    <Box
                      cssClasses={["pt-xxl-3", "pt-2", "h-50", "gallery-panel"]}
                    >
                      <Image
                        src={Service4}
                        cssClasses={["service-gallery-pic"]}
                      />
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box cssClasses={["position-relative"]}>
            <Image src={Bg} cssClasses={["group-bg"]} />
            <Flex
              cssClasses={["section", "container"]}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Box cssClasses={["col-md-4"]}>
                <p className="font-size-lg-2 fw-700">Targeted Audience</p>
                <p className="font-size-md-4 opacity-color   mt-xxl-4 mt-3">
                  If you are going to use a passage of Lorem Ipsum, you need to
                  be sure there isn't anything embarrassing hidden in the middle
                  of text. All the Lorem Ipsum generators on the Internet tend
                  to repeat predefined chunks as necessary, making this the
                  first true generator on the Internet.
                  <br />
                  <br /> If you are going to use a passage of Lorem Ipsum, you
                  need to be sure there isn't anything embarrassing hidden in.
                </p>
                <Button cssClasses={["mt-4"]} outline text="Learn More" />
              </Box>
              <Box cssClasses={["col-md-2"]} />
              <Box cssClasses={["col-md-5", "mt-4", "mt-md-0"]}>
                <Image src={Group} width="100%" />
              </Box>
              <Box cssClasses={["col-md-1"]} />
            </Flex>
          </Box>
        </>
      )}
    </>
  );
};

export default Services;
