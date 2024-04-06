"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Image from "next/image";
import IcoCategory from "./IcoCategory";

interface PopoupCarousel {
  type: string;
  title: string;
  address: string;
  images: { imgSrc: string }[];
}

export default function PopupCarousel({
  type,
  title,
  address,
  images = [],
}: PopoupCarousel) {
  return (
    <>
      <div className="relative overflow-hidden rounded-sm ">
        <Carousel
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          swipeable
          showThumbs={false}
        >
          {images?.map(({ imgSrc }, index) => (
            <div className="h-[220px] w-full" key={index}>
              <Image fill src={imgSrc || ""} alt="" className="object-cover" />
            </div>
          ))}
        </Carousel>
        <div className="absolute right-2 top-2 space-x-1.5">
          <IcoCategory categories={[type]} />
        </div>
      </div>

      <div
        className={`mt-[5px] flex flex-col justify-center overflow-hidden rounded px-[24px] py-[13px] bg-${type} ${type === "character" ? "text-living" : "text-white"}`}
      >
        <h3 className="text-ellipsis-2 mb-px text-h3 font-bold">{title}</h3>
        <p className="flex items-center truncate text-h5">
          <Image
            src={
              type === "character"
                ? "/icon/ico_location--blue.svg"
                : "/icon/ico_location.svg"
            }
            className="mr-1"
            alt="지역"
            width={6}
            height={10}
          />

          {address}
        </p>
      </div>
    </>
  );
}
