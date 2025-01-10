import { useState, useEffect } from "react";
import Button from "./Button";
import MapBg from "../assets/map.svg";
import Box from "../assets/box.svg";
import Bus from "../assets/bus.svg";
import Bike from "../assets/myBike.svg";

const HeroSection = () => {
  //Images Array
  const images = [
    {
      id: 1,
      src: Bus,
      alt: "Bus",
      translateX: "-translate-x-[120px]",
      translateY: "translate-y-[150px]",
    },
    {
      id: 2,
      src: Box,
      alt: "Box",
      translateX: "-translate-x-[110px]",
      translateY: "translate-y-[80px]",
    },
    {
      id: 3,
      src: Bike,
      alt: "Bike",
      translateX: "-translate-x-[45px]",
      translateY: "translate-y-[100px]",
    },
  ];

  //State to manage the current image
  const [currentImage, setCurrentImage] = useState(0);

  // Cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="p-20 bg-godeliver-blue grid grid-cols-6 ">
      <div className="col-span-4">
        <p className="font-bold text-5xl  text-godeliver-secondary-black">
          Reliable Deliveries, <br /> Anytime, Anywhere <br /> in Lagos.
        </p>
        <p className="text-[#101A21] text-lg font-inter my-6">
          Fast, affordable, and secure logistics solutions tailored for <br />{" "}
          businesses and individuals.
        </p>
        <Button text="Get Started" height="h-[60px]" width="w-[219px]" />
        <div className="mt-16 w-[65%] flex justify-between text-godeliver-grey font-inter">
          <div className="place-items-center">
            <p className="text-5xl font-bold ">2.5x</p>
            <p>Faster deliveries</p>
          </div>
          <div className="place-items-center">
            <p className="text-5xl font-bold">40%</p> <p>Cheaper costs</p>
          </div>
          <div className="place-items-center">
            <p className="text-5xl font-bold">12+</p>
            <p>Yrs experience</p>
          </div>
        </div>
      </div>

      <div className="col-span-2 ">
        <div className="relative ">
          <img src={MapBg} alt="Map" />
        </div>

        <div
          className={`absolute top-[50px] transform ${images[currentImage].translateX} ${images[currentImage].translateY} `}
        >
          <img src={images[currentImage].src} alt={images[currentImage].alt} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
