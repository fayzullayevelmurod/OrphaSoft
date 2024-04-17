import { Header } from "./Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import "swiper/css";
import React from "react";
import { Navigation } from "swiper/modules";
import assets from "../assets";
export const SliderBanner = (props) => {
  // eslint-disable-next-line react/prop-types
  const { darkColor, title, desc, breadcrumb, breadcrumbName, bannerBg } =
    props;
  const swiperRef = React.useRef(null);
  const goPrev = () => {
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div
      className={`${
        darkColor ? "bg-[#232323]" : "bg-teal"
      } banner m-[30px] pt-10 rounded-[10px] text-white ${
        bannerBg ? "img-bg" : ""
      }`}
    >
      <div className="container relative">
        <Header darkColor={darkColor} />
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".button-prev",
          }}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
        >
          <SwiperSlide>
            <div className="lg:mt-[197px] mt-[100px]">
              {breadcrumb ? (
                <div className="py-[10px] w-fit mb-[27px] bg-teal px-4 rounded-[10px] flex gap-2">
                  <a href="/">Главная /</a>
                  <span className="text-white text-[15px] font-normal">
                    {breadcrumbName}
                  </span>
                </div>
              ) : null}
              {desc ? (
                <p className="md:text-lg text-sm leading-[22px] mb-[18px]">
                  {desc}
                </p>
              ) : null}
              {bannerBg ? (
                <div className="flex rounded-[6px] mb-6 overflow-hidden h-[35px]">
                  <div className="bg-teal py-[11px] px-4 h-full flex justify-center items-center">
                    <span>Новости</span>
                  </div>
                  <div className="bg-white text-teal py-[11px] h-full flex justify-center rounded-r-[6px] items-center px-4">
                    <span>14 июля 2022</span>
                  </div>
                </div>
              ) : null}
              <h1 className="font-normal lg:text-[52px] sm:text-3xl text-2xl lg:leading-[62px] md:pb-[98px] pb-[50px] max-w-[904px]">
                {title}
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:mt-[197px] mt-[100px]">
              {breadcrumb ? (
                <div className="py-[10px] w-fit mb-[27px] bg-teal px-4 rounded-[10px] flex gap-2">
                  <a href="/">Главная /</a>
                  <span className="text-white text-[15px] font-normal">
                    {breadcrumbName}
                  </span>
                </div>
              ) : null}
              {desc ? (
                <p className="md:text-lg text-sm leading-[22px] mb-[18px]">
                  {desc}
                </p>
              ) : null}
              {bannerBg ? (
                <div className="flex rounded-[6px] mb-6 overflow-hidden h-[35px]">
                  <div className="bg-teal py-[11px] px-4 h-full flex justify-center items-center">
                    <span>Новости</span>
                  </div>
                  <div className="bg-white text-teal py-[11px] h-full flex justify-center rounded-r-[6px] items-center px-4">
                    <span>14 июля 2022</span>
                  </div>
                </div>
              ) : null}
              <h1 className="font-normal lg:text-[52px] sm:text-3xl text-2xl lg:leading-[62px] md:pb-[98px] pb-[50px] max-w-[904px]">
                {title}
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:mt-[197px] mt-[100px]">
              {breadcrumb ? (
                <div className="py-[10px] w-fit mb-[27px] bg-teal px-4 rounded-[10px] flex gap-2">
                  <a href="/">Главная /</a>
                  <span className="text-white text-[15px] font-normal">
                    {breadcrumbName}
                  </span>
                </div>
              ) : null}
              {desc ? (
                <p className="md:text-lg text-sm leading-[22px] mb-[18px]">
                  {desc}
                </p>
              ) : null}
              {bannerBg ? (
                <div className="flex rounded-[6px] mb-6 overflow-hidden h-[35px]">
                  <div className="bg-teal py-[11px] px-4 h-full flex justify-center items-center">
                    <span>Новости</span>
                  </div>
                  <div className="bg-white text-teal py-[11px] h-full flex justify-center rounded-r-[6px] items-center px-4">
                    <span>14 июля 2022</span>
                  </div>
                </div>
              ) : null}
              <h1 className="font-normal lg:text-[52px] sm:text-3xl text-2xl lg:leading-[62px] md:pb-[98px] pb-[50px] max-w-[904px]">
                {title}
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
        <button className="button-prev" onClick={goPrev}>
          <img src={assets.nextBtn} alt="" />
        </button>
      </div>
    </div>
  );
};
