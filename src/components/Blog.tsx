import Box from "./common/Box";
import Button from "./common/Button";
import Image from "./common/Image";
import PlayIcon from "../assets/images/play-circle.png";
import { Link } from "react-router-dom";

const Blog = ({
  img,
  title,
  desc,
  link,
  index,
  cssClasses,
}: {
  img: any;
  title: string;
  desc: string;
  link: string;
  index: number;
  cssClasses?: string;
}) => {
  return (
    <Box cssClasses={["p-xxl-3", "p-2", cssClasses ? cssClasses : ""]}>
      <div data-aos="fade-up">
        <Box
          cssClasses={[
            "p-xxl-4",
            "p-3",
            "border-gradient",
            "blog",
            "bg-2",
            "border-r-20",
          ]}
        >
          <Box
            cssClasses={["position-relative", "border-r-10", "overflow-hidden"]}
          >
            <Image src={img} cssClasses={["w-100"]} />
            <Box cssClasses={["blog-img-overlay"]} />
            <Image src={PlayIcon} cssClasses={["blog-play-icon"]} />
          </Box>
          <p className="font-size-md-1 fw-bold mt-4">{title}</p>
          <p className="font-size-sm-1 opacity-color">{desc}</p>
          <Link to="/blog">
            <Button
              text="Read More"
              cssClasses={["mt-4", "font-size-sm-2"]}
              outline
            />
          </Link>
        </Box>
      </div>
    </Box>
  );
};

export default Blog;
