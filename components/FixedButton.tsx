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
    <div className="mx-23 mt-auto pb-12">
      <button
        onClick={handleClick}
        disabled={isDisabled}
        className={clsx(
          "text-h3 rounded h-12 flex items-center justify-center font-bold w-full",
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
