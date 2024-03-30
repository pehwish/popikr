"use client";

import clsx from "clsx";

interface FixedButton {
  text: string;
  value: string;
  isDisabled?: boolean;
  onClick: (value: string) => void;
}

export default function FixedButton({
  text,
  value,
  isDisabled = false,
  onClick,
}: FixedButton) {
  const handleClick = () => {
    onClick(value);
  };
  return (
    <div className="mx-23 mt-auto pb-8">
      <button
        onClick={handleClick}
        disabled={isDisabled}
        className={clsx(
          "flex h-12 w-full items-center justify-center rounded text-h3 font-bold",
          {
            "bg-gray-light text-gray": isDisabled,
            "bg-living text-white": !isDisabled,
          },
        )}
      >
        {text}
      </button>
    </div>
  );
}
