import './blob.css';

const BlobImage = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Text Column */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4 font-danching">Celebrate Every Moment</h2>
          <p className="text-lg text-gray-600 font-fustat">
            Bring your family and friends together and capture beautiful memories.
            Our services are perfect for any celebration that deserves to be remembered.
          </p>
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
