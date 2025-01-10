import Button from "./Button";
import Helmet from "../assets/helmet.svg";
import Bus from "../assets/ibus.svg";
import Bike from "../assets/ibike.svg";
import CircleImage from "./CircleImage";

const Services = () => {
  return (
    <div className="p-20">
      <div className="flex justify-between mb-10">
        <p className="text-godeliver-secondary-black text-4xl font-semibold">
          Our Fleet, Your Advantage
        </p>
        <Button
          text="Get Started"
          icon={<i className="pi pi-arrow-right"> </i>}
          height="h-[60px]"
          width="w-[219px]"
        />
      </div>

      <div className=" flex font-inter ">
        <div className="bg-[#D8F678] w-[100%] flex rounded-l-[32px]">
          <div className="w-[33%] p-10">
            <CircleImage src={Helmet} alt="Helmet" />
            <p className="mt-6 text-[#101A21] font-semibold text-2xl">
              BIKE DELIVERIES
            </p>
            <p className="text-[#0F2A3B] text-lg mt-3">
              Perfect for small, urgent <br /> packages.
            </p>
          </div>

          <div className="bg-godeliver-blue  w-[67%] rounded-l-[32px] flex">
            <div className=" w-[50%] p-10">
              <CircleImage src={Bus} alt="Bus" />

              <p className="mt-6 text-[#101A21] font-semibold text-2xl">
                BUSES FOR BULK ITEMS
              </p>
              <p className="text-[#0F2A3B] text-lg mt-3">
                Ideal for larger deliveries and <br /> business logistics.
              </p>
            </div>

            <div className="bg-[#F5D2FF]  w-[50%] rounded-l-[32px] p-10">
              <CircleImage src={Bike} alt="Bike" />

              <p className="mt-6 text-[#101A21] font-semibold text-2xl">
                Bicycle Deliveries
              </p>
              <p className="text-[#0F2A3B] text-lg mt-3">
                Sustainable eco-friendly solutions <br /> for light deliveries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
