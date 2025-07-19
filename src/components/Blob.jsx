import "./blob.css";
import Button from "./Button";

const BlobImage = () => {
  return (
    <div className="relative w-full max-w-[1440px] lg:px-20 px-5 py-2 mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Text Column */}
        <div className="w-full lg:w-1/2 text-center lg:text-left ">
          <h2 className="text-4xl font-danching font-bold text-[#943cb4] mb-2 animate-bounce">
            Celebrate Every Moment
          </h2>
          <p className="text-lg text-gray-600 font-fustat lg:mb-6">
            Bring your family and friends together and capture beautiful
            memories. Our services are perfect for any celebration that deserves
            to be remembered.
          </p>
         <Button text={"Get Started"}></Button>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="blob-shape overflow-x-hidden w-full  h-[500px] md:h-[600px]">
            <img
              src="https://i.ibb.co/B56zHL0Z/7-F960-F19-CBBD-43-CD-B537-AB0-BC4-E819-D4.jpg"
              alt="Celebration Family"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlobImage;
