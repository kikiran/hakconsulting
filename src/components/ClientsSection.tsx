import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Testimonials from "../utils/testimonals";


const ClientsSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
      >
        {Testimonials?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <p className="text-gray-700 text-lg italic mb-6">
                “{item.message}”
              </p>
              <h4 className="text-xl font-semibold text-gray-900">
                {item.name}
              </h4>
              <span className="text-sm text-gray-500">{item.role}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientsSection;
