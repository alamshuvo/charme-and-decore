import Slider from "./components/Banner";
import BlobImage from "./components/Blob";
import Nav from "./components/Nav";
import TopBanner from "./components/TopBanner";

function App() {
  return (
    <div>
      <div className="">
        <TopBanner />
        <Nav />
      </div>
      <div className="space-y-16 overflow-x-hidden">
        <Slider />
        <BlobImage />
      </div>
    </div>
  );
}

export default App;
