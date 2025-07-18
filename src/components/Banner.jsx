import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const images = [
  'https://i.ibb.co/DJ4nWLW/F58-F9810-EE75-413-D-887-E-F86-E00-F7-E82-A.jpg',
  'https://i.ibb.co/xqpYWRq5/55-A368-E6-961-D-4406-9-B17-EF82-D472548-C.jpg',
  'https://i.ibb.co/84dXdDCw/520-B4-E73-3-ECD-42-E9-A545-00-AE88-E4-F931.jpg',
  'https://i.ibb.co/prhHw2RV/01308005-35-DD-4808-B07-D-9-A1-E982180-D8.jpg',
  'https://i.ibb.co/p6kXtQL4/2-F42-A54-F-9-A19-4-F9-C-96-BF-92-E4-BC07-B8-B4.jpg',
  'https://i.ibb.co/m50Sn6Fc/6-FC5-F436-0-EBC-412-C-A0-DE-95-C2-BDA44747.jpg'


];

export default function DualImageSlider() {
  return (
    <div className="w-screen h-[70vh] overflow-hidden px-4">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {images.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full overflow-hidden rounded-xl group">
              <img
                src={imgSrc}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
