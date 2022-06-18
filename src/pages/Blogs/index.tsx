import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import HeroImg from "../../assets/images/blogs/blog-bg.png";
import Blog from "../../components/Blog";
import Box from "../../components/common/Box";
import Button from "../../components/common/Button";
import Flex from "../../components/common/Flex";
import Image from "../../components/common/Image";
import { BLOGS, IBlog } from "../../constants";

const items = BLOGS;

const Items = ({ currentItems }: { currentItems: IBlog[] }) => (
  <Flex direction={"row"} justifyContent="space-between" alignItems="center">
    {currentItems.map((blog, index) => (
      <Blog
        key={index}
        img={blog.image}
        title={blog.title}
        desc={blog.desc}
        link={blog.link}
        index={index}
        cssClasses="col-md-4 col-12"
      />
    ))}
  </Flex>
);

const PaginatedItems = ({ itemsPerPage }: { itemsPerPage: number }) => {
  const [currentItems, setCurrentItems] = useState<IBlog[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <Box cssClasses={["mt-4"]}>
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={() => null}
        />
      </Box>
    </>
  );
};

const Blogs = () => {
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
              <p className="section-title">Our latest realesed Blogs</p>
              <Box cssClasses={["col-md-7", "m-auto"]}>
                <Flex
                  cssClasses={[
                    "mt-4",
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
                      placeholder="Search for blogs"
                      type="email"
                      className="w-100 text-start border-0 font-size-sm-2 ps-2 search-input"
                    />
                    <Button text="Search" cssClasses={["font-size-sm-2"]} />
                  </form>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </div>
      <div className="container section-1">
        <PaginatedItems itemsPerPage={15} />
      </div>
    </>
  );
};

export default Blogs;
