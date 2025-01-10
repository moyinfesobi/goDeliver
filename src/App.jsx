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
import { motion } from "framer-motion";

const App = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className=" w-[100vw] min-h-[100vh] ">
      <MyHeader />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        {" "}
        <HeroSection />{" "}
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        {" "}
        <Services />{" "}
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        {" "}
        <Perks />{" "}
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        {" "}
        <TrustedBrands />{" "}
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        {" "}
        <Element name="faq">
          <Faq />
        </Element>{" "}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        {" "}
        <Partnership />{" "}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        {" "}
        <Element name="footer">
          <Footer />
        </Element>
      </motion.div>
    </div>
  );
};

export default App;
