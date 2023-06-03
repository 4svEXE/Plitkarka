import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import video1 from "public/video/1.mp4";

import poster1 from "/img/posters/1.png";
import poster2 from "/img/posters/2.png";
import poster3 from "/img/posters/3.png";
import poster4 from "/img/posters/4.png";
import poster5 from "/img/posters/5.png";

import Video from "./components/VideoRevievsItem";

function VideoReviews() {
  //responcive swiper
  const breakpoints = {
    640: {
      width: 640,
      slidesPerView: 1,
    },
    1024: {
      width: 1024,
      slidesPerView: 2,
    },
    1400: {
      width: 1400,
      slidesPerView: 2,
    },
  };

  return (
    <div className="container p-6 flex flex-col mt-20" id="VideoReviews">
      <h2 className="mb-10">
        Відео відгуки про моє навчання в школі інтернет-маркетингу
      </h2>

      <div className="container flex">
        <Swiper breakpoints={breakpoints} spaceBetween={50}>
          <SwiperSlide>
            <Video source={video1} poster={poster1} />
          </SwiperSlide>
          <SwiperSlide>
            <Video source={video1} poster={poster2} />
          </SwiperSlide>
          <SwiperSlide>
            <Video source={video1} poster={poster3} />
          </SwiperSlide>
          <SwiperSlide>
            <Video source={video1} poster={poster4} />
          </SwiperSlide>
          <SwiperSlide>
            <Video source={video1} poster={poster5} />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className=" flex-col hidden lg:flex">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <Video source={video1} poster={poster3} />
          <Video source={video1} poster={poster4} />
          <Video source={video1} poster={poster5} />
        </div>
      </div>
    </div>
  );
}

export default VideoReviews;
