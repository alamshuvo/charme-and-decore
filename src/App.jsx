import Slider from "./components/Banner";
import BlobImage from "./components/Blob";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import OfferBanner from "./components/Offer";
import Service from "./components/Service";
import TopBanner from "./components/TopBanner";

function App() {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#8d7acb] to-[#a894e9]">
        <TopBanner />
        <Nav />
        <OfferBanner></OfferBanner>
      </div>
      <div className="space-y-20 overflow-x-hidden">
        <Slider />
        
        <BlobImage />
        <Service></Service>
        <div>
        <Footer></Footer>
      </div>
      </div>
      
    </div>
  );
}

export default App;
