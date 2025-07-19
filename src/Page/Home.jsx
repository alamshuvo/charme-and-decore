import OfferBanner from "../components/Offer";
import Slider from "../components/Banner";
import BlobImage from "../components/Blob";
import Service from "../components/Service";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Top section with gradient */}
      <div className="bg-gradient-to-r from-[#8d7acb] to-[#a894e9]">
       
        <OfferBanner />
      </div>

      {/* Middle section */}
      <div className="space-y-12 md:space-y-16 lg:space-y-20">
  <Slider />
  <BlobImage />
  <Service />
</div>

    </div>
  );
}
