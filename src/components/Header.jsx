import Logo from "../assets/logo.svg";
import Button from "./Button";
import { useState } from "react";
import { Link } from "react-scroll";

const MyHeader = () => {
  const [loading, setLoading] = useState(false);
  //simulate loading
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <header className="bg-godeliver-blue px-6 md:px-20 py-5 flex justify-between items-center">
      {" "}
      <div>
        {" "}
        <img src={Logo} alt="GoDeliver Logo" className="h-6 md:h-auto" />{" "}
      </div>{" "}
      <nav className="flex gap-4 md:gap-6 font-semibold items-center">
        {" "}
        <Link to="faq" smooth={true} duration={500} className="cursor-pointer">
          <p className="hidden md:flex text-godeliver-black hover:text-godeliver-button cursor-pointer text-sm md:text-base">
            FAQ
          </p>{" "}
        </Link>
        <Link
          to="footer"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <p className="hidden md:flex text-godeliver-black hover:text-godeliver-button cursor-pointer text-sm md:text-base">
            Contact Us
          </p>{" "}
        </Link>
        <Button
          text="Sign In"
          loading={loading}
          onClick={handleClick}
          height="h-[40px]"
          width="w-[100px] md:w-[117px]"
        />{" "}
      </nav>{" "}
    </header>
  );
};

export default MyHeader;
