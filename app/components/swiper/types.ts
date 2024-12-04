export type SwiperData = {
  src: string;
  type: "video" | "image";
  mainText: string;
  subText: string;
};
export interface ICustomSwiper {
  data: SwiperData[];
}
