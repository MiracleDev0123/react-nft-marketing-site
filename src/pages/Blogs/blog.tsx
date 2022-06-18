import BlogHeader from "../../assets/images/blogs/blog-detail-header.png";
import BlogService from "../../assets/images/blogs/blog-detail-service.png";
import BlogDetailImg from "../../assets/images/blogs/blog-detail.png";
import Image from "../../components/common/Image";
import Box from "../../components/common/Box";
import Flex from "../../components/common/Flex";
import { Link } from "react-router-dom";
import PlayIcon from "../../assets/images/play-circle.png";
import Instagram from "../../assets/images/Instagram.png";
import Twitter from "../../assets/images/Twitter.png";
import FaceBook from "../../assets/images/Facebook.png";
import LinkedIN from "../../assets/images/LinkedIN.png";
import SocialIcon, {
  SocialIconProps,
} from "../../components/common/SocialIcon";
import BlogImg1 from "../../assets/images/blogs/blog1.png";
import BlogImg2 from "../../assets/images/blogs/blog2.png";
import BlogImg3 from "../../assets/images/blogs/blog3.png";
import Slider from "react-slick";
import SliderArrow from "../../components/common/SliderArrow";
import Blog from "../../components/Blog";

interface BlogBreadCrumbProps {
  title: string;
}

const BlogBreadCrumb: React.FC<BlogBreadCrumbProps> = ({ title }) => (
  <Flex direction="row" justifyContent="start" alignItems="center">
    <Link to="/blogs">
      <p className="font-size-md-4 opacity-color">Blogs</p>
    </Link>
    <i className="bi bi-chevron-right mx-2"></i>
    <p className="font-size-md-4">{title}</p>
  </Flex>
);

const BlogDetail = () => {
  const socials: SocialIconProps[] = [
    { icon: FaceBook },
    { icon: LinkedIN },
    { icon: Instagram },
    { icon: Twitter },
  ];

  const relatedBlogs = [
    {
      image: BlogImg1,
      title: "Business with Bitcoin",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the.",
      link: "",
    },
    {
      image: BlogImg2,
      title: "Business with Bitcoin",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the.",
      link: "",
    },
    {
      image: BlogImg3,
      title: "Business with Bitcoin",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the.",
      link: "",
    },
    {
      image: BlogImg1,
      title: "Business with Bitcoin",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the.",
      link: "",
    },
    {
      image: BlogImg2,
      title: "Business with Bitcoin",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the.",
      link: "",
    },
    {
      image: BlogImg3,
      title: "Business with Bitcoin",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the.",
      link: "",
    },
  ];

  return (
    <>
      <Box cssClasses={["container"]}>
        <Box cssClasses={["position-relative"]}>
          <Image src={BlogHeader} width="100%" />
          <Box cssClasses={["blog-header"]}>
            <Box cssClasses={["blog-header-title"]}>
              <p className="font-size-lg-2 fw-700">
                Strategy about social media
              </p>
              <p className="font-size-sm-1 opacity-color mt-2">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators on the.
              </p>
            </Box>
          </Box>
        </Box>
        <Box cssClasses={["mt-4", "pt-xxl-3"]}>
          <BlogBreadCrumb title="Strategy about social media" />
        </Box>
        <Box cssClasses={["mt-4", "pt-xxl-3", "font-size-md-2 opacity-color"]}>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
          <br></br>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
            <br /> <br /> There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words which don't look even
            slightly believable. If you are going to use a passage of Lorem
            Ipsum, you need to be sure there isn't anything embarrassing hidden
            in the middle of text. All the Lorem Ipsum generators on the
            Internet tend to repeat predefined chunks as necessary, making this
            the first true generator on the Internet. It uses a dictionary of
            over 200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable. The
            generated Lorem Ipsum is therefore always free from repetition,
            injected humour, or non-characteristic words etc.
          </p>
          <br />
          <br />
          <Image src={BlogService} width="100%" />
          <br />
          <br />
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
          <br></br>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
            <br /> <br /> There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words which don't look even
            slightly believable. If you are going to use a passage of Lorem
            Ipsum, you need to be sure there isn't anything embarrassing hidden
            in the middle of text. All the Lorem Ipsum generators on the
            Internet tend to repeat predefined chunks as necessary, making this
            the first true generator on the Internet. It uses a dictionary of
            over 200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable. The
            generated Lorem Ipsum is therefore always free from repetition,
            injected humour, or non-characteristic words etc.
          </p>
          <br />
          <br />
          <div>
            <Box
              cssClasses={[
                "float-end",
                "ps-md-4",
                "blog-detail-img",
                "position-relative",
                "mb-4",
              ]}
            >
              <Image src={BlogDetailImg} cssClasses={["w-100"]} />
              <Box cssClasses={["blog-img-overlay"]} />
              <Image src={PlayIcon} cssClasses={["blog-play-icon"]} />
            </Box>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
              <br />
              <br />
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
              <br />
              <br /> There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered.
            </p>
            <br />
            <br />
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
              <br />
              <br />
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour.
              <br />
              <br />
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary.
              <br />
              <br />
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore.
            </p>
          </div>
        </Box>
        <Box cssClasses={["mt-4", "pt-xxl-3"]}>
          <p className="font-size-md-1">Share this blog</p>
          <Flex
            direction={"row"}
            justifyContent="start"
            alignItems="center"
            cssClasses={["mt-xxl-3", "mt-2"]}
          >
            {socials.map((social, index) => (
              <Box key={index} cssClasses={["me-xxl-4", "me-3"]}>
                <SocialIcon icon={social.icon} />
              </Box>
            ))}
          </Flex>
        </Box>
        <Box cssClasses={["section-1"]}>
          <p className="font-size-lg-2">Related blogs</p>
          <Box
            cssClasses={["mt-4", "pt-xxl-2", "m-auto", "col-10", "col-md-12"]}
          >
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
              {relatedBlogs.map((blog, index) => (
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
        </Box>
      </Box>
    </>
  );
};

export default BlogDetail;
