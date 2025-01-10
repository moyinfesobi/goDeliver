import "primeicons/primeicons.css";
import MyHeader from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Perks from "./components/Perks";
import TrustedBrands from "./components/TrustedBrands";
import Faq from "./components/Faq";
import Partnership from "./components/Partnership";
import Footer from "./components/Footer";
import { Element } from "react-scroll";

const App = () => {
  return (
    <div className=" w-[100vw] min-h-[100vh] ">
      <MyHeader />
      <HeroSection />
      <Services />
      <Perks />
      <TrustedBrands />
      <Element name="faq">
        <Faq />
      </Element>
      <Partnership />
      <Element name="footer">
        <Footer />
      </Element>
    </div>
  );
};

export default App;
