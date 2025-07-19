import React from 'react';


const services = [
  {
   
    title: 'Web Development',
    description: 'Building responsive, high-performance websites with modern technologies.',
  },
  {
   
    title: 'UI/UX Design',
    description: 'Creating user-friendly interfaces with smooth interactions and beautiful layouts.',
  },
  {
 
    title: 'Customer Support',
    description: '24/7 technical support with a dedicated team for your digital needs.',
  },
];

const Service = () => {
  return (
    <div className="max-w-[1440px] lg:px-20 px-5 py-2 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-danching font-bold text-[#943cb4] mb-2 animate-bounce">
          Our Awesome Services
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
        At Charme & Decoration, we specialize in turning ordinary spaces into extraordinary experiences. Whether you're planning a dreamy wedding, a classy corporate event, or a cozy birthday celebration, our team crafts every detail with elegance, creativity, and care.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out group border-t-4 border-[#FFC107]"
          >
           
            <h3 className="text-xl font-semibold mb-2 group-hover:text-[#943cb4] transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
