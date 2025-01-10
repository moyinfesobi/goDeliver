import Logo from "../assets/logo.svg";
import Button from "./Button";
import { useState } from "react";

const Header = () => {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false, 7000));
  };

  return (
    <div className="bg-godeliver-blue px-20 py-5 flex justify-between ">
      <div className="">
        <img src={Logo} />
      </div>
      <div className="flex gap-6 font-semibold items-center">
        <p className="text-godeliver-black cursor-pointer"> FAQ</p>
        <p className="text-godeliver-black cursor-pointer">Contact Us</p>
        <Button text="Sign In" loading={loading} onClick={handleClick} height="h-[40px]" width="w-[117px]" />
      </div>
    </div>
  );
};

export default Header;
