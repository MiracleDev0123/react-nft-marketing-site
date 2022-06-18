import Box from "./Box";
import Image from "./Image";

export interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface Props {
  service: ServiceProps;
}

const Service: React.FC<Props> = ({ service }) => {
  return (
    <Box cssClasses={["col-lg-3", "col-md-6", "col-12", "p-xxl-3", "p-2"]}>
      <Box
        cssClasses={[
          "p-4",
          "border-gradient",
          "w-100",
          "bg-gradient-2",
          "border-r-20",
        ]}
      >
        <Image src={service.icon} />
        <p className="fw-700 font-size-lg-3 mt-2">{service.title}</p>
        <p className="font-size-md-4 opacity-color mt-2">{service.desc}</p>
      </Box>
    </Box>
  );
};

export default Service;
