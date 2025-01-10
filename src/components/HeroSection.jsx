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
    <section className=" p-6 md:p-20 bg-godeliver-blue grid grid-cols-1 md:grid-cols-6 gap-6">
      <div className="col-span-1 md:col-span-4">
        <p className="font-bold text-3xl md:text-5xl  text-godeliver-secondary-black">
          Reliable Deliveries, <br /> Anytime, Anywhere <br /> in Lagos.
        </p>
        <p className="text-[#101A21] text-sm md:text-lg font-inter my-6">
          Fast, affordable, and secure logistics solutions tailored for{" "}
          <br className="hidden md:block" /> businesses and individuals.
        </p>
        <Button
          text="Get Started"
          height="h-[50px] md:h-[60px]"
          width="w-[160px] md:w-[219px]"
        />
        <div className=" mt-8 md:mt-16 w-full md:w-[65%] flex justify-between text-godeliver-grey font-inter">
          <div className="w-1/3 md:w-auto text-center">
            <p className="text-3xl md:text-5xl font-bold">2.5x</p>
            <p className="text-xs md:text-base">Faster deliveries</p>
          </div>
          <div className="w-1/3 md:w-auto text-center">
            <p className="text-3xl md:text-5xl font-bold">40%</p>
            <p className="text-xs md:text-base">Cheaper costs</p>
          </div>
          <div className="w-1/3 md:w-auto text-center">
            <p className="text-3xl md:text-5xl font-bold">12+</p>
            <p className="text-xs md:text-base">Yrs experience</p>
          </div>
        </div>
      </div>

      <div className="hidden md:block col-span-1 md:col-span-2">
        <div className="relative ">
          <img src={MapBg} alt="Map" />
        </div>

        <div
          className={`absolute top-[50px] transform ${images[currentImage].translateX} ${images[currentImage].translateY} `}
        >
          <img
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            className="w-20 md:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
