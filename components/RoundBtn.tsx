"use client";
import clsx from "clsx";

interface RoundBtn {
  text: string;
  isDisabled?: boolean;
  onClick: () => void;
}

export default function RoundBtn({
  text,
  isDisabled = false,
  onClick,
}: RoundBtn) {
  const handleClick = () => {
    onClick();
  };
  return (
    <button
      onClick={handleClick}
      className={clsx(
        "h-[27px] w-[122px] rounded text-h5 font-bold text-white",
        isDisabled ? "bg-gray" : "bg-living",
      )}
    >
      {text}
    </button>
  );
}
