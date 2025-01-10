import NgLag from "../assets/nglag.svg";

const Perks = () => {
  return (
    <section className="p-6 md:p-20 grid grid-cols-1 md:grid-cols-6 gap-10">
      {" "}
      <div className="md:col-span-3">
        {" "}
        <img
          src={NgLag}
          alt="Why Lagosians Trust Us"
          className="w-full h-auto"
        />{" "}
      </div>{" "}
      <div className="md:col-span-3">
        {" "}
        <div className="text-center md:text-right">
          {" "}
          <p className="text-godeliver-secondary-black font-semibold text-3xl md:text-5xl">
            {" "}
            Why Lagosians Trust Us{" "}
          </p>{" "}
          <p className="font-inter text-sm md:text-lg mt-2 mb-6">
            {" "}
            And why you should use GoDeliver today.{" "}
          </p>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 font-inter">
          {" "}
          <div className="bg-[#C5E6FE] p-4 rounded-2xl">
            {" "}
            <p className="h-12 w-12 bg-[#75C0F4] rounded-full flex items-center justify-center">
              {" "}
              <i className="pi pi-clock text-[#75C0F4] bg-[#0035CF] rounded-full text-[25px] "></i>{" "}
            </p>{" "}
            <p className="text-[#0035CF] font-semibold text-lg mb-3 mt-8">
              {" "}
              Fast Turnaround Times{" "}
            </p>{" "}
            <p className="text-[#0F2A3B] text-sm md:text-base">
              {" "}
              Same-day deliveries with speed and precision.{" "}
            </p>{" "}
          </div>{" "}
          <div className="bg-[#F5D2FF] p-4 rounded-2xl">
            {" "}
            <p className="h-12 w-12 bg-[#EC8AFFB2] rounded-full flex items-center justify-center">
              {" "}
              <i className="pi pi-dollar text-[#EC8AFFB2] bg-[#602871] rounded-full text-[25px]"></i>{" "}
            </p>{" "}
            <p className="text-[#602871] font-semibold text-lg mb-3 mt-8">
              {" "}
              Affordable Rates{" "}
            </p>{" "}
            <p className="text-[#0F2A3B] text-sm md:text-base">
              {" "}
              Get the best value for every delivery.{" "}
            </p>{" "}
          </div>{" "}
          <div className="bg-[#F9EBB6] p-4 rounded-2xl">
            {" "}
            <p className="h-12 w-12 bg-[#FAD844CC] rounded-full flex items-center justify-center">
              {" "}
              <i className="pi pi-map-marker text-[#63551D] rounded-full text-[25px] "></i>{" "}
            </p>{" "}
            <p className="text-[#50430A] font-semibold text-lg mb-3 mt-8">
              {" "}
              Real-Time Tracking{" "}
            </p>{" "}
            <p className="text-[#0F2A3B] text-sm md:text-base">
              {" "}
              Track your package every step of the way.{" "}
            </p>{" "}
          </div>{" "}
          <div className="bg-[#BEF4CB] p-4 rounded-2xl">
            {" "}
            <p className="h-12 w-12 bg-[#4FB94880] rounded-full flex items-center justify-center">
              {" "}
              <i className="pi pi-globe text-[#0C7C04] rounded-full text-[25px]"></i>{" "}
            </p>{" "}
            <p className="text-[#0C7C04] font-semibold text-lg mb-3 mt-8">
              {" "}
              Eco-Friendly Option{" "}
            </p>{" "}
            <p className="text-[#0F2A3B] text-sm md:text-base">
              {" "}
              Deliver sustainably with our bicycle fleet.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default Perks;
