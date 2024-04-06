"use client";

import Link from "next/link";

import { date, dateDiff, now } from "@/lib/date";
import { cn } from "@/lib/utils";
import IPopupItem from "@/model/popup";
import Image from "next/image";
import { useEffect, useState } from "react";
import IcoCategory from "./IcoCategory";
import Maybe from "./Maybe";

export default function PopupItem({
  id,
  imgSrc = "",
  categories = [],
  startDt,
  endDt,
  title,
  address,
  isShort = false,
  last = "",
}: IPopupItem) {
  const [dDay, setDday] = useState(0);

  const colorVariants = {
    food: "bg-food text-white",
    movie: "bg-movie text-white",
    character: "bg-character text-living",
    fashion: "bg-fashion text-white",
    music: "bg-music text-white",
    living: "bg-living text-white",
    etc: "bg-etc text-white",
  };

  useEffect(() => {
    if (startDt) {
      let day = dateDiff(startDt, now, "day");
      setDday(day);
    }
  }, [startDt]);

  return (
    <Link href={`/popikr/${id}`}>
      <div className="popup-item overflow-hidden rounded-sm empty:animate-pulse">
        <figure className="empty:bg-slate-200">
          <Maybe test={!isShort}>
            <div className="relative h-[162px] w-full">
              <Image src={imgSrc} fill alt={title} className="object-cover" />

              <div className="popup-item__categories absolute right-2 top-2 flex space-x-1.5">
                <IcoCategory categories={categories} />
              </div>

              {dDay > 0 && (
                <span
                  className={cn(
                    "popup-item__opening absolute bottom-3 left-2 flex h-4 w-[64px] items-center justify-center rounded-lg text-[10px] text-h6",
                    colorVariants[last],
                  )}
                >
                  OPEN D-{dDay}
                </span>
              )}
            </div>
          </Maybe>
          <figcaption className={cn("flex p-2.5", colorVariants[last])}>
            <div className="flex w-14 flex-col border-r py-[5px] text-center text-h4 font-bold">
              <span>{date(startDt, "MM.DD")}</span>
              <span>|</span>
              <span>{date(endDt, "MM.DD")}</span>
            </div>
            <div className="mt-3 flex flex-1 flex-col overflow-hidden pl-2.5">
              <h3 className="mb-px truncate text-h3 font-bold">{title}</h3>
              <p className="flex items-center truncate text-h5">
                <Image
                  src={
                    last === "character"
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
          </figcaption>
        </figure>
      </div>
    </Link>
  );
}
