import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function OfferBanner() {
  const [show, setShow] = useState(true);
  const bannerRef = useRef(null);

  // ✅ Register GSAP plugin
  gsap.registerPlugin(useGSAP);

  // ✅ Animate when banner shows
  useGSAP(() => {
    if (bannerRef.current) {
      gsap.fromTo(
        bannerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [show]); // re-run animation when show changes

  // ✅ Handle closing animation
  const handleClose = () => {
    gsap.to(bannerRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.6,
      ease: "power3.in",
      onComplete: () => setShow(false),
    });
  };

  return (
    <>
      {show && (
        <div
          ref={bannerRef}
          className="font-fustat bg-gradient-to-r from-[#943cb4] to-[#FFC107]"
        >
          <div className="max-w-[1440px] px-5 lg:px-20 mx-auto py-2 flex flex-col lg:flex-row justify-between items-center gap-y-2">
            {/* Offer Text */}
            <p className="text-white text-sm font-semibold text-center lg:text-left">
              🎉{" "}
              <span className="font-bold underline font-fustat">
                Limited Time Offer:
              </span>{" "}
              Book a Baby Shower, Birthday, or Anniversary decoration now & get{" "}
              <span className="text-black font-bold">15% OFF</span> — valid till{" "}
              <span className="text-black font-semibold">Sept 28</span>! 💐
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <Link to="https://www.facebook.com/profile.php?id=61577920499599">
                <button
                  className="bg-white font-fustat text-[#943cb4] text-xs font-bold py-1 px-3 rounded-full shadow-sm hover:bg-[#f5e8ff] transition-all"
                  aria-label="Grab Offer"
                >
                  Grab Offer
                </button>
              </Link>

              <button
                onClick={handleClose}
                className="text-white text-xl font-bold hover:text-gray-200 transition"
                aria-label="Close offer banner"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
