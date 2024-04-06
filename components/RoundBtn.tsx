"use client";
import { cn } from "@/lib/utils";

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
      className={cn("btn-rounded", isDisabled ? "bg-gray" : "bg-living")}
    >
      {text}
    </button>
  );
}
