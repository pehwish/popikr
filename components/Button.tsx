"use client";

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
      className={`flex h-[27px] items-center justify-center rounded-lg border border-gray text-h5 
      ${isActive ? `font-bold ${!isCate ? "border-living text-living" : `text-${value} border-${value}`}` : "text-gray"}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
