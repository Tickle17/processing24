import './App.css';
import Header from "./Components/Header";
import HeaderMenu from "./Components/HeaderMenu";
import FuelDelivery from "./Components/FuelDelivery";
import FuelCost from "./Components/FuelCost";
import FuelDeliveryPrice from "./Components/FuelDeliveryPrice";
import OurWork from "./Components/OurWork";
import OurAdvantages from "./Components/OurAdvantages";
import PartnersSlider from "./Components/PartnersSlider";
import SertificateSlider from "./Components/SertificateSlider";
import Reviews from "./Components/Reviews";
import ForAnswers from "./Components/ForAnswers";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeaderMenu></HeaderMenu>
      <FuelDelivery></FuelDelivery>
      <FuelCost></FuelCost>
      <FuelDeliveryPrice></FuelDeliveryPrice>
      <OurWork></OurWork>
      <OurAdvantages></OurAdvantages>
      <SertificateSlider></SertificateSlider>
      <PartnersSlider></PartnersSlider>
      <Reviews></Reviews>
      <ForAnswers></ForAnswers>
      <Footer></Footer>
    </div>
  );
}

export default App;
