import 'primeicons/primeicons.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Perks from './components/Perks';
import TrustedBrands from './components/TrustedBrands';
import Faq from './components/Faq';
import Partnership from './components/Partnership';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className=' w-[100vw] min-h-[100vh] '>
      <Header />
      <HeroSection />
      <Services />
      <Perks />
      <TrustedBrands />
      <Faq />
      <Partnership />
      <Footer />
      

      
      
      
      </div>
  )
}

export default App