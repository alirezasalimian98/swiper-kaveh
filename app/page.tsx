"use client";
import dynamic from "next/dynamic";
const CustomSwiper = dynamic(
  () => import("./components/swiper").then((mod) => mod.CustomSwiper),
  {
    ssr: false,
  }
);

import { mockSwiperData } from "./components/swiper/constants";

export default function Home() {
  return (
    <>
      <CustomSwiper data={mockSwiperData} />
    </>
  );
}
