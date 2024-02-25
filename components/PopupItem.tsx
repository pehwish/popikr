"use client";

import Link from "next/link";

import { date, dateDiff, now } from "@/lib/date";
import { useEffect, useState } from "react";
import IcoCategory from "./IcoCategory";
import Maybe from "./Maybe";

interface PopupItem {
  id: number;
  imgSrc: string;
  categories: string[];
  startDt: Date;
  endDt: Date;
  title: string;
  address: string;
  isShort?: boolean;
}

export default function PopupItem({
  id,
  imgSrc = "",
  categories = [],
  startDt,
  endDt,
  title,
  address,
  isShort = false,
}: PopupItem) {
  const [last, setLast] = useState("");
  const [dDay, setDday] = useState(0);

  useEffect(() => {
    if (startDt) {
      let day = dateDiff(startDt, now, "day");
      setDday(day);
    }
  }, [startDt]);

  useEffect(() => {
    if (categories.length) {
      let l = categories[categories.length - 1];
      setLast(l);
    }
  }, [categories]);
  return (
    <Link href={`/popikr/${id}`}>
      <div className={`popup-item overflow-hidden rounded-sm`}>
        <figure>
          <Maybe test={!isShort}>
            <div className="relative">
              <img
                src={imgSrc}
                alt=""
                className="h-[162px] w-full object-cover"
              />

              <div className="popup-item__categories absolute right-2 top-2 space-x-1.5">
                <IcoCategory categories={categories} />
              </div>
              {dDay > 0 && (
                <span
                  className={`popup-item__opening absolute bottom-3 left-2 flex h-4 w-[64px] items-center justify-center rounded-lg text-h6 bg-${last} ${last === "character" ? "text-living" : "text-white"}`}
                >
                  OPEN D-{dDay}
                </span>
              )}
            </div>
          </Maybe>
          <figcaption
            className={`flex py-2.5 pr-2.5 bg-${last} ${last === "character" ? "text-living" : "text-white"}`}
          >
            <div className="flex w-14 flex-col border-r py-[5px] text-center text-h4 font-bold">
              <span>{date(startDt, "MM.DD")}</span>
              <span>|</span>
              <span>{date(endDt, "MM.DD")}</span>
            </div>
            <div className="flex flex-1 flex-col justify-center overflow-hidden pl-2.5">
              <h3 className="mb-px truncate text-h3 font-bold">{title}</h3>
              <p className="flex items-center truncate text-h5">
                <i
                  className={`mr-1 ${
                    last === "character" ? "ico_location--blue" : "ico_location"
                  }`}
                ></i>
                {address}
              </p>
            </div>
          </figcaption>
        </figure>
      </div>
    </Link>
  );
}
