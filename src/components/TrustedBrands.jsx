import Glouse from "../assets/glouse.svg";
import Konga from "../assets/konga.svg";
import Zashadu from "../assets/zashadu.svg";
import Chowdeck from "../assets/chowdeck.svg";
import HeyFood from "../assets/heyfood.svg";
import EnG from "../assets/eng.svg";
import Dominos from "../assets/dominos.svg";
import MedPlus from "../assets/medplus.svg";
import Slot from "../assets/slot.svg";
import Glovo from "../assets/glovo.svg";

const TrustedBrands = () => {
  return (
    <section className="p-10 md:p-16 lg:p-20 text-center">
      {" "}
      <p className="text-godeliver-secondary-black font-semibold text-2xl md:text-3xl lg:text-4xl">
        {" "}
        Trusted by Industry Leaders{" "}
      </p>{" "}
      <p className="font-inter text-godeliver-grey text-sm md:text-lg mt-4 mb-8">
        {" "}
        As an ambitious fictional company, we have partnered with many leading{" "}
        <br className="hidden md:block" /> brands across different industries.{" "}
      </p>{" "}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {" "}
        <div className="h-[250px] md:h-[430px] w-full">
          {" "}
          <div className="h-1/2 md:h-[40%] bg-white rounded-3xl mb-2 border-2 border-[#EEEEF0] flex justify-center items-center">
            {" "}
            <img
              src={Glouse}
              alt="glouse"
              className="w-[120px] md:w-[150px]"
            />{" "}
          </div>{" "}
          <div className="h-1/2 md:h-[60%] bg-[#EBEBF3] rounded-3xl border-2 border-[#E4E4E7] flex justify-center items-center">
            {" "}
            <img
              src={Konga}
              alt="konga"
              className="w-[120px] md:w-[150px]"
            />{" "}
          </div>{" "}
        </div>{" "}
        <div className="hidden md:block h-[250px] md:h-[430px] w-full ">
          <div className="h-1/2 md:h-[60%] bg-[#EBEBF3] rounded-3xl mb-2 border-[2px] border-[#E4E4E7] flex justify-center content-center">
            <img src={Zashadu} alt="Zashadu" width="171px" height="47px" />
          </div>
          <div className="h-1/2 md:h-[40%] bg-white rounded-3xl mb-2 border-[2px] border-[#EEEEF0] flex justify-center content-center">
            <img src={Chowdeck} alt="chowdeck" width="121px" height="127px" />
          </div>
        </div>
        <div className="hidden md:block h-[250px] md:h-[430px] w-full ">
          <div className="h-1/2 md:h-[40%] bg-white rounded-3xl mb-2 border-[2px] border-[#EEEEF0] flex justify-center content-center">
            <img src={HeyFood} alt="HeyFood" width="171px" height="44px" />
          </div>
          <div className="h-1/2 md:h-[60%] bg-[#EBEBF3] rounded-3xl mb-2 border-[2px] border-[#E4E4E7] flex justify-center content-center">
            <img src={EnG} alt="EatAndGo" width="171px" height="47px" />
          </div>
        </div>
        <div className="h-[250px] md:h-[430px] w-full">
          <div className="h-1/2 md:h-[60%] bg-[#EBEBF3] rounded-3xl mb-2 border-[2px] border-[#E4E4E7] flex justify-center content-center">
            <img src={Dominos} alt="Dominos" width="171px" height="47px" />
          </div>
          <div className="h-1/2 md:h-[40%] bg-white rounded-3xl mb-2 border-[2px] border-[#EEEEF0] flex justify-center content-center">
            <img src={Glovo} alt="glovo" width="171px" height="44px" />
          </div>
        </div>
        <div className="hidden md:block h-[250px] md:h-[430px] w-full ">
          <div className="h-1/2 md:h-[40%] bg-white rounded-3xl mb-2 border-[2px] border-[#EEEEF0] flex justify-center content-center">
            <img src={MedPlus} alt="MedPlus" width="171px" height="44px" />
          </div>
          <div className="h-1/2 md:h-[60%] bg-[#EBEBF3] rounded-3xl mb-2 border-[2px] border-[#E4E4E7] flex justify-center content-center">
            <img src={Slot} alt="slot" width="171px" height="44px" />
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default TrustedBrands;
