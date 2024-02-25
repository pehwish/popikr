"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Faker, ko } from "@faker-js/faker";
import IcoCategory from "./IcoCategory";

export const faker = new Faker({
  locale: [ko],
});

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
            <div className="h-[220px] object-cover" key={index}>
              <img src={imgSrc || ""} alt="" />
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
        <p className="mt-1 flex text-h5">
          <i
            className={`mt-1 ${
              type === "character" ? "ico_location--blue" : "ico_location"
            }`}
          ></i>
          <span className="ml-1 flex-1">{address}</span>
        </p>
      </div>
    </>
  );
}
