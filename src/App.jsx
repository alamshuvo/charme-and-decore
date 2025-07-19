import Slider from "./components/Banner";
import BlobImage from "./components/Blob";
import Nav from "./components/Nav";
import Service from "./components/Service";
import TopBanner from "./components/TopBanner";

function App() {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#8d7acb] to-[#a894e9]">
        <TopBanner />
        <Nav />
      </div>
      <div className="space-y-16 overflow-x-hidden">
        <Slider />
        <BlobImage />
        <Service></Service>
      </div>
    </div>
  );
}

export default App;
