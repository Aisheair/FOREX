
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import FinancialDashboard from "./components/FinancialDashboard/FinancialDashboard";
import FooterHub from "./components/Footer/Footer";
import HeroSection from "./components/Hero/HeroSection";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import InfoCards from "./components/InfoCards/InfoCards";
import MouseFollower from "./components/Mouse/ MouseFollower";
import Navbar from "./components/navbar/navbar";




const App = () => {
  return (
    <div className="Main">
      <Navbar/>
      <MouseFollower/>
      <HeroSection/>
      <InfoCards/>
      <Features/>
      <HowItWorks/>
      <FinancialDashboard></FinancialDashboard>
      <Contact></Contact>
      <FooterHub/>
    </div>
  );
};

export default App;
