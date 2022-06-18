import { useState } from "react";
import Flex from "../common/Flex";
import Image from "../common/Image";
import Box from "../common/Box";
import Button from "../common/Button";
import ContactBg from "../../assets/images/contact.png";
import Bg7 from "../../assets/images/Ellipse_50.png";
import ContactBg1 from "../../assets/images/contact_bg.png";
import ReactSelect from "../common/Select";
import { BUDGETS, SERVICES } from "../../constants";
import Modal from "../common/Dialog";
import Schedule from "./Schedule";

const ContactForm = () => {
  const [scheduleModal, setScheduleModal] = useState<boolean>(false);

  const setBudgetSelected = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <div id="contact" className="section position-relative">
        <Image src={Bg7} cssClasses={["background-10"]} />

        <div className="container">
          <Box
            cssClasses={[
              "py-md-4",
              "position-relative",
              "contact-section",
              "border-r-20",
            ]}
          >
            <Image src={ContactBg} cssClasses={["contact-bg"]} />
            <Box cssClasses={["px-md-4", "py-4"]}>
              <Flex direction={"row"} justifyContent="center">
                <Box cssClasses={["col-lg-7", "col-11"]}>
                  <p className="section-title2 text-center">Contact Us</p>
                  <div>
                    <Box
                      cssClasses={[
                        "border-gradient contact-form",
                        "p-4",
                        "mt-4",
                        "w-100",
                        "border-r-20",
                      ]}
                    >
                      <Flex
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box
                          cssClasses={[
                            "col-md-6",
                            "col-12",
                            "pe-xxl-3",
                            "pe-md-2",
                          ]}
                        >
                          <Box>
                            <label className="font-size-md-4">Name</label>
                            <input
                              placeholder="Enter your name here"
                              type="text"
                              className="custom-input mt-3 font-size-sm-2"
                            />
                          </Box>
                          <Box cssClasses={["mt-4"]}>
                            <label className="font-size-md-4">
                              What service you need?
                            </label>
                            <ReactSelect
                              options={SERVICES}
                              isMulti={true}
                              closeMenuOnSelect={false}
                              selectClassName="mt-3 font-size-sm-2"
                              classNamePrefix="select"
                              id="react-select"
                              name="react-select"
                              placeholder="Please select service from here"
                              defaultOption=""
                              handleChange={(event: { value: string }) =>
                                setBudgetSelected(event.value)
                              }
                            />
                          </Box>
                          <Box cssClasses={["mt-4"]}>
                            <label className="font-size-md-4">
                              Social Media Account
                            </label>
                            <input
                              type="text"
                              placeholder="Enter your social media link here"
                              className="custom-input mt-3 font-size-sm-2"
                            />
                          </Box>
                        </Box>
                        <Box
                          cssClasses={[
                            "col-md-6",
                            "col-12",
                            "ps-xxl-3",
                            "ps-md-2",
                            "pt-4",
                            "pt-md-0",
                          ]}
                        >
                          <Box>
                            <label className="font-size-md-4">Email</label>
                            <input
                              placeholder="Enter your email here"
                              type="email"
                              className="custom-input mt-3 font-size-sm-2"
                            />
                          </Box>
                          <Box cssClasses={["mt-4"]}>
                            <label className="font-size-md-4">
                              Monthly Budget
                            </label>
                            <ReactSelect
                              options={BUDGETS}
                              selectClassName="mt-3 font-size-sm-2"
                              classNamePrefix="select"
                              id="react-select"
                              name="react-select"
                              placeholder="Please choose your budget"
                              defaultOption=""
                              handleChange={(event: { value: string }) =>
                                setBudgetSelected(event.value)
                              }
                            />
                          </Box>
                          <Box cssClasses={["mt-4"]}>
                            <label className="font-size-md-4">Website</label>
                            <input
                              type="text"
                              placeholder="Type your website link here"
                              className="custom-input mt-3 font-size-sm-2"
                            />
                          </Box>
                        </Box>
                      </Flex>
                      <Flex
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        cssClasses={["mt-4"]}
                      >
                        <Button text="Submit" cssClasses={["font-size-sm-1"]} />
                        <Button
                          outline
                          text="Or Schedule a call"
                          cssClasses={[
                            "font-size-sm-1",
                            "schedule-btn",
                            "ms-xxl-4",
                            "ms-3",
                          ]}
                          onClick={() => setScheduleModal(true)}
                        />
                      </Flex>
                    </Box>
                  </div>
                </Box>
              </Flex>
            </Box>
          </Box>
        </div>
      </div>
      <div id="email" className="container position-relative">
        <Box cssClasses={["contact-bg1"]}>
          <Box cssClasses={["contact-bg1-overlay"]} />
          <Image src={ContactBg1} width="100%" />
        </Box>
        <Box cssClasses={["email-section", "col-md-10", "m-auto"]}>
          <p className="section-title2 text-center">
            Get routine tips about growth and marketing!
          </p>
          <p
            className="font-size-md-3 text-center mt-xxl-4 mt-3 pb-2 opacity-color"
            data-aos-delay="100"
          >
            Subscribe to our newsletter to get emails whenever we publish a new
            article, news post, or service!
          </p>
          <div>
            <Flex
              cssClasses={[
                "col-md-5",
                "mt-xxl-4",
                "mt-3",
                "m-auto",
                "border-r-10",
                "email-form",
                "p-1",
              ]}
              direction="row"
              justifyContent="space-between"
            >
              <form className="d-flex w-100">
                <input
                  placeholder="Enter your email here"
                  type="email"
                  className="w-100 text-start border-0 font-size-sm-2 ps-2"
                />
                <Button text="Subscribe" cssClasses={["font-size-sm-2"]} />
              </form>
            </Flex>
          </div>
        </Box>
      </div>
      <Modal
        open={scheduleModal}
        content={<Schedule />}
        title="Let’s discuss about your project"
        onClose={() => setScheduleModal(false)}
      />
    </>
  );
};

export default ContactForm;
