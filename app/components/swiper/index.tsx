"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// types & styles
import { ICustomSwiper, SwiperData } from "./types";
import "swiper/css";
import "swiper/css/pagination";
import "./swiperStyles.css";
import { ArrowDown } from "@phosphor-icons/react";

export const CustomSwiper = (props: ICustomSwiper) => {
  const { data } = props;
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {data?.map((item: SwiperData, index: number) => (
          <SwiperSlide style={{ height: "100vh" }} key={index}>
            <div className="absolute w-full h-full bg-gradient-to-t-black z-30"></div>
            {item.type === "video" ? (
              <video
                src={item.src}
                width="100%"
                height="100%"
                style={{ pointerEvents: "none" }}
                autoPlay
                loop
                muted
              />
            ) : (
              <Image src={item.src} alt={item.type} fill />
            )}
            <div className="swiper-text-container z-50">
              <div className="flex flex-col items-center justify-center mb-10 gap-3">
                <span className="swiper-main-text">{item.mainText}</span>
                <span className="swiper-subtext">{item.subText}</span>
              </div>

              {/* static button - can be placed in props for dynamic button designs */}
              <button className="swiper-button-container">
                <ArrowDown size={30} weight="bold" cursor={"pointer"} />
                <span className="">بیشتر ببینید</span>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
