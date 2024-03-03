"use client";

import clsx from "clsx";

interface Button {
  text: string;
  value: string;
  isActive?: boolean;
  isCate?: boolean;
  onClick: (value: string) => void;
}

export default function Button({
  text,
  value,
  isActive = false,
  isCate = false,
  onClick,
}: Button) {
  const handleClick = () => {
    onClick(value);
  };
  return (
    <button
      className={clsx(
        "btn transition-all",
        isActive
          ? `font-bold ${!isCate ? "border-living text-living" : `text-${value} border-${value}`}`
          : "text-gray",
      )}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
