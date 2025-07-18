import { useState } from 'react';

export default function TopBanner() {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && (
        <div className="animate-slideDown bg-gradient-to-r from-[#8d7acb] to-[#a894e9] h-[30px]">
          <div className="max-w-[1440px] lg:px-20 px-5 mx-auto flex justify-between items-center h-full">
            <p className="text-white text-sm font-semibold">
              Welcome to Charme! Make Your Day Perfect With Us.
            </p>
            <div className="flex items-center gap-2">
              <p className="text-white text-sm font-semibold">
                Contact us at: +33753606495
              </p>
              <button
                onClick={() => setShow(false)}
                className="text-white text-xl font-bold hover:text-gray-200 transition"
                aria-label="Close banner"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
