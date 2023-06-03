import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/css/scrollbar";

import img1 from "/img/reviews/1.png";
import img2 from "/img/reviews/2.png";
import img3 from "/img/reviews/3.png";
import img4 from "/img/reviews/4.png";
import img5 from "/img/reviews/5.png";

function PhotoReviews() {
  //responcive swiper
  const breakpoints = {
    640: {
      width: 640,
      slidesPerView: 1,
    },
    1024: {
      width: 1024,
      slidesPerView: 3,
    },
    1400: {
      width: 1400,
      slidesPerView: 4,
    },
  };

  return (
    <div className="container flex flex-col p06 mt-10">
      <h2 className="px-6">
        Відгуки про моє навчання в школі інтернет-маркетингу
      </h2>

      <div className="container flex mt-10">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          breakpoints={breakpoints}
          spaceBetween={50}
          navigation
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="flex w-full justify-center items-center ">
              <img src={img2} className="w-[90%]" alt="plitkarka reviews" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex w-full justify-center items-center ">
              <img src={img1} className="w-[90%]" alt="plitkarka reviews" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex w-full justify-center items-center ">
              <img src={img3} className="w-[90%]" alt="plitkarka reviews" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex w-full justify-center items-center ">
              <img src={img4} className="w-[90%]" alt="plitkarka reviews" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex w-full justify-center items-center ">
              <img src={img5} className="w-[90%]" alt="plitkarka reviews" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default PhotoReviews;
