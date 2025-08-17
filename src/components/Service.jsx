import React, { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "yellow function decorations",
    description:
      "Add a burst of sunshine to your special day with vibrant yellow-themed decor, balloons, custom table setups, and cheerful floral arrangements. Perfect for birthdays, baby showers, or mehendi functions — our yellow concept brings warmth, joy, and elegance to any event! 🌼✨",
    img: "https://i.ibb.co/RTgR0yyb/BEEF4814-96-D1-4304-87-CB-25261-C12-E939.jpg",
    prize: "120 Euro",
    time: "1.2 hours",
  },
  {
    title: "Hello Kitty Birthday Decorations",
    description:
      "Create a magical Hello Kitty-themed birthday party with customized decor, balloons, and table settings that kids will love. We offer themed props, character cutouts, and vibrant pink and white designs to make your little one’s day extra special!",
    img: "https://i.ibb.co/mrhpQnnL/5-C8-BB23-D-31-A9-46-C1-831-E-DEB6-C640-CA70.jpg",
    prize: "70 Euro",
    time: "1.5 hours",
  },
  {
    title: "Baby Gender Reveal Party",
    description:
      "Celebrate the joyous moment with elegant and creative gender reveal decorations that surprise and delight your guests. Our service includes themed backdrops, balloon boxes, smoke bombs, and table setups tailored to your unique reveal style.",
    img: "https://i.ibb.co/YFB64Bbv/55-ACEAFE-70-CC-4894-A18-B-99-D95-A94764-F.jpg",
    prize: "85 Euro",
    time: "1.5 hours",
  },
  {
    title: "Wedding Reception Decor",
    description:
      "Transform your wedding reception into a dreamy setting with floral arrangements, lighting, and elegant table setups. Our design includes centerpieces, arches, fabric draping, and mood lighting that elevate your celebration.",
    img: "https://i.ibb.co/rRWSxcVn/87-D626-F7-94-A8-4162-97-F4-6-CF3669852-EE.jpg",
    prize: "250 Euro",
    time: "4 hours",
  },
  {
    title: "Corporate Event Styling",
    description:
      "Professional and sleek decor solutions tailored to corporate branding and event themes for conferences or galas. Includes logo-themed elements, modern centerpieces, and smart lighting for a sophisticated vibe.",
    img: "https://i.ibb.co/k2trZL4D/9-AE60-DAB-D2-D0-4779-8895-8-DFB44826-E3-A.jpg",
    prize: "300 Euro",
    time: "5 hours",
  },
  {
    title: "Anniversary Party Setup",
    description:
      "Celebrate your milestones with romantic and classy anniversary party decorations customized for you. We create candlelit centerpieces, gold and red themes, photo zones, and message boards.",
    img: "https://i.ibb.co/DPBsq973/54-A94-CDD-F29-A-46-BD-B56-E-AC90-A542-DB19.jpg",
    prize: "120 Euro",
    time: "2 hours",
  },
  {
    title: "Baby Shower Decoration",
    description:
      "Celebrate the joy of motherhood with our elegant and heartwarming baby shower setups. We create dreamy themes with balloons, flowers, banners, and more—perfect for unforgettable memories. Let your guests feel the warmth of this special occasion.",
    img: "https://i.ibb.co/jPkFg7wS/69634572-687-A-4-C26-B73-C-77-F6-AC77932-A.jpg",
    prize: "90 Euro",
    time: "2 hours setup",
  },
  {
    title: "birthday set up",
    description:
      "Celebrate the joy of bitrhday with our elegant . We create dreamy themes with balloons, flowers, banners, and more—perfect for unforgettable memories. Let your guests feel the warmth of this special occasion.",
    img: "https://i.ibb.co.com/8nmv1gNJ/Whats-App-Image-2025-08-07-at-03-22-51.jpg",
    prize: "130 Euro",
    time: "2 hours setup",
  },
  {
    title: "weeding set up",
    description:
      "Celebrate the joy of weeding with our elegant . We create dreamy themes with balloons, flowers, banners, and more—perfect for unforgettable memories. Let your guests feel the warmth of this special occasion.",
    img: "https://i.ibb.co.com/kgqsFSRP/Whats-App-Image-2025-08-07-at-03-22-01.jpg",
    prize: "250 Euro",
    time: "2 hours setup",
  },
  {
    title: "Engagement ceremony",
    description:
      "Celebrate the joy of weeding with our elegant . We create dreamy themes with balloons, flowers, banners, and more—perfect for unforgettable memories. Let your guests feel the warmth of this special occasion.",
    img: "https://i.ibb.co.com/VcwzXDbn/Whats-App-Image-2025-08-07-at-03-21-24.jpg",
    prize: "200 Euro",
    time: "3 hours setup",
  },
];
// for text purpose some code added 
const Service = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleReadMore = (idx) => {
    setExpanded(expanded === idx ? null : idx);
  };

  return (
    <div className="max-w-[1440px] lg:px-20 px-5 py-2 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-danching font-bold text-[#943cb4] mb-2 animate-bounce">
          Our Awesome Services
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          At Charme & Decoration, we specialize in turning ordinary spaces into
          extraordinary experiences. Whether you're planning a dreamy wedding, a
          classy corporate event, or a cozy birthday celebration, our team
          crafts every detail with elegance, creativity, and care.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {services.map((service, idx) => {
          const isExpanded = expanded === idx;
          const shortText = service.description.slice(0, 100);
          return (
            <div
              key={idx}
              className="relative bg-white rounded-3xl shadow-lg border-t-8 border-[#FFC107] 
        p-6 cursor-pointer overflow-hidden group perspective transition-all duration-500"
              style={{ perspective: "1000px" }}
            >
              {/* Accent Circle */}
              <span className="absolute top-6 left-6 w-6 h-6 bg-gradient-to-r from-[#FFC107] to-[#943cb4] rounded-full shadow-lg z-20"></span>

              {/* Image */}
              {service.img && (
                <div className="overflow-hidden rounded-xl mb-6">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
                  />
                </div>
              )}

              {/* Content */}
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-1">
                <h3 className="text-2xl font-danching font-extrabold mb-3 text-[#1a1a1a] group-hover:text-[#943cb4] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 min-h-[4.5rem]">
                  {isExpanded ? service.description : shortText + "..."}
                </p>

                {/* Read More */}
                {service.description.length > 100 && (
                  <button
                    onClick={() => toggleReadMore(idx)}
                    className="mt-2 text-sm font-semibold text-[#943cb4] hover:underline focus:outline-none"
                  >
                    {isExpanded ? "Show less" : "Read more"}
                  </button>
                )}

                {/* Price & Time */}
                <div className="mt-6 flex justify-between items-center">
                  {service.prize && (
                    <div className="px-3 py-1 bg-[#fceebd] text-[#7c5800] font-semibold rounded-md border border-[#FFC107] text-sm shadow-sm">
                      {service.prize}
                    </div>
                  )}
                  {service.time && (
                    <span className="text-sm font-medium text-gray-500 italic">
                      {service.time}
                    </span>
                  )}
                </div>

                {/* Explore Now Button (Always Visible) */}
                <div className="mt-6">
               <Link to={"https://www.facebook.com/profile.php?id=61577920499599"}>
               <button className="w-full py-2 bg-gradient-to-r from-[#FFC107] to-[#943cb4] text-white text-sm font-bold rounded-full shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300  focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:ring-offset-2
  animate-[glow_2s_ease-in-out_infinite]">
                    Explore Now
                  </button>
               </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
