import Button from "./Button";
import Helmet from "../assets/helmet.svg";
import Bus from "../assets/ibus.svg";
import Bike from "../assets/ibike.svg";
import CircleImage from "./CircleImage";

const Services = () => {
  return (
    <section className="p-6 md:p-20">
      {" "}
      <div className="flex flex-col md:flex-row justify-between mb-10">
        {" "}
        <p className="text-godeliver-secondary-black text-2xl md:text-4xl font-semibold mb-6 md:mb-0">
          {" "}
          Our Fleet, Your Advantage{" "}
        </p>{" "}
        <Button
          text="Get Started"
          icon={<i className="pi pi-arrow-right"> </i>}
          height="h-[50px] md:h-[60px]"
          width="w-[160px] md:w-[219px]"
        />{" "}
      </div>{" "}
      <div className="flex flex-col md:flex-row font-inter">
        {" "}
        <div className="bg-[#D8F678] w-full md:w-1/3 rounded-t-[32px] md:rounded-l-[32px] md:rounded-none p-6 md:p-10">
          {" "}
          <CircleImage src={Helmet} alt="Helmet" />{" "}
          <p className="mt-6 text-[#101A21] font-semibold text-xl md:text-2xl">
            {" "}
            BIKE DELIVERIES{" "}
          </p>{" "}
          <p className="text-[#0F2A3B] text-sm md:text-lg mt-3">
            {" "}
            Perfect for small, urgent packages.{" "}
          </p>{" "}
        </div>{" "}
        <div className="bg-godeliver-blue w-full md:w-2/3 rounded-b-[32px] md:rounded-none flex flex-col md:flex-row">
          {" "}
          <div className="w-full md:w-1/2 p-6 md:p-10">
            {" "}
            <CircleImage src={Bus} alt="Bus" />{" "}
            <p className="mt-6 text-[#101A21] font-semibold text-xl md:text-2xl">
              {" "}
              BUSES FOR BULK ITEMS{" "}
            </p>{" "}
            <p className="text-[#0F2A3B] text-sm md:text-lg mt-3">
              {" "}
              Ideal for larger deliveries and business logistics.{" "}
            </p>{" "}
          </div>{" "}
          <div className="bg-[#F5D2FF] w-full md:w-1/2 rounded-b-[32px] md:rounded-none p-6 md:p-10">
            {" "}
            <CircleImage src={Bike} alt="Bike" />{" "}
            <p className="mt-6 text-[#101A21] font-semibold text-xl md:text-2xl">
              {" "}
              Bicycle Deliveries{" "}
            </p>{" "}
            <p className="text-[#0F2A3B] text-sm md:text-lg mt-3">
              {" "}
              Sustainable eco-friendly solutions for light deliveries.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default Services;
