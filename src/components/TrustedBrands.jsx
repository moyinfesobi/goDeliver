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
    <div className="p-20 text-center">
      <p className="text-godeliver-secondary-black font-semibold text-4xl">
        Trusted by Industry Leaders
      </p>
      <p className="font-inter text-godeliver-grey text-lg mt-4 mb-11">
        As an ambitious fictional company we have partnered with many leading{" "}
        <br /> brands across different industries.
      </p>

      <div className=" grid grid-cols-5 gap-2">
        <div className="h-[430px] w-full ">
          <div className="h-[40%] bg-white rounded-3xl mb-2 border-[2px] border-[#EEEEF0] flex justify-center content-center">
            <img src={Glouse} alt="glouse" width="171px" height="44px" />
          </div>
          <div className="h-[60%] bg-[#EBEBF3] rounded-3xl mb-2 border-[2px] border-[#E4E4E7] flex justify-center content-center">
            <img src={Konga} alt="konga" width="171px" height="47px" />
          </div>
        </div>
        <div className="h-[430px] w-full ">
          <div className="h-[60%] bg-[#EBEBF3] rounded-3xl mb-2 border-[2px] border-[#E4E4E7] flex justify-center content-center">
            <img src={Zashadu} alt="konga" width="171px" height="47px" />
          </div>
          <div className="h-[40%] bg-white rounded-3xl mb-2 border-[2px] border-[#EEEEF0] flex justify-center content-center">
            <img src={Chowdeck} alt="glouse" width="121px" height="127px" />
          </div>
        </div>
        <div className="h-[430px] w-full ">
          <div className="h-[40%] bg-white rounded-3xl mb-2 border-[2px] border-[#EEEEF0] flex justify-center content-center">
            <img src={HeyFood} alt="glouse" width="171px" height="44px" />
          </div>
          <div className="h-[60%] bg-[#EBEBF3] rounded-3xl mb-2 border-[2px] border-[#E4E4E7] flex justify-center content-center">
            <img src={EnG} alt="konga" width="171px" height="47px" />
          </div>
        </div>
        <div className="h-[430px] w-full">
          <div className="h-[60%] bg-[#EBEBF3] rounded-3xl mb-2 border-[2px] border-[#E4E4E7] flex justify-center content-center">
            <img src={Dominos} alt="konga" width="171px" height="47px" />
          </div>
          <div className="h-[40%] bg-white rounded-3xl mb-2 border-[2px] border-[#EEEEF0] flex justify-center content-center">
            <img src={MedPlus} alt="glouse" width="171px" height="44px" />
          </div>
        </div>
        <div className="h-[430px] w-full ">
          <div className="h-[40%] bg-white rounded-3xl mb-2 border-[2px] border-[#EEEEF0] flex justify-center content-center">
            <img src={Slot} alt="glouse" width="171px" height="44px" />
          </div>
          <div className="h-[60%] bg-[#EBEBF3] rounded-3xl mb-2 border-[2px] border-[#E4E4E7] flex justify-center content-center">
            <img src={Glovo} alt="konga" width="171px" height="47px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
