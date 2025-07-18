import { useState } from 'react';

export default function TopBanner() {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && (
        <div className="font-fustat animate-slideDown bg-gradient-to-r from-[#8d7acb] to-[#a894e9] lg:h-[30px]">
          <div className="max-w-[1440px] lg:px-20 px-5 mx-auto lg:flex justify-between items-center h-full">
            <p className="text-white text-sm font-semibold">
              Welcome to Charme! Make Your Day Perfect With Us.
            </p>
            <div className="flex items-center justify-between gap-2">
              <p className="text-white text-sm font-semibold">
                Contact us at: +33753606495
              </p>
              <button
                onClick={() => setShow(false)}
                className="text-white text-xl font-bold hover:text-gray-200 transition "
                aria-label="Close banner"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
