"use client";

import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import Maybe from "./Maybe";
import RoundBtn from "./RoundBtn";

interface Popup {
  title: string;
  desc?: string;
  caution?: string;
  size?: "default" | "lg";
  useBtnExit?: boolean;
  setPopup: Dispatch<SetStateAction<boolean>>;
  onClick?: () => void;
}

export default function Popup({
  title,
  desc,
  caution,
  size = "default",
  useBtnExit = false,
  onClick,
  setPopup,
}: Popup) {
  const handleClick = () => {
    setPopup(false);
    if (onClick) {
      onClick();
    }
  };

  const handleClickBack = () => {
    setPopup(false);
  };

  return (
    <div
      className={clsx(
        `fixed  bottom-0 left-0 right-0 top-0 z-10 flex items-end bg-etc/[.7]`,
      )}
      onClick={handleClickBack}
    >
      <div
        className={clsx(
          "animate-a relative w-full rounded-t bg-white px-23 pb-[32px] pt-[45px] text-center",
        )}
      >
        <h3
          className={clsx(
            "font-bold",
            size === "default" ? "mb-[40px] text-h3" : "mb-[18px] text-h2",
          )}
        >
          {title}
        </h3>
        <Maybe test={Boolean(desc)}>
          <p
            className={clsx(
              "whitespace-break-spaces",
              !!caution ? "mb-[38px]" : "mb-14",
              size === "default" ? "text-h4" : "text-h2",
            )}
          >
            {desc}
          </p>
        </Maybe>
        <Maybe test={Boolean(caution)}>
          <span className="text-h5 text-gray">{caution}</span>
        </Maybe>

        <div className="mt-10">
          <RoundBtn text="확인" onClick={handleClick} />
        </div>

        <Maybe test={useBtnExit}>
          <button
            onClick={handleClickBack}
            className="absolute right-[22px] top-[13px]"
          >
            <img src="/icon/ico_popup_exit.svg" alt="" />
          </button>
        </Maybe>
      </div>
    </div>
  );
}
