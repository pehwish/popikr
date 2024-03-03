"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

interface RatingStart {
  onRating: (rating: number) => void;
}

export default function RatingStart({ onRating }: RatingStart) {
  const [isActive, setIsActive] = useState(-1);

  const handleClick = useCallback(
    (i: number) => {
      if (i + 1 === isActive) {
        setIsActive(-1);
        onRating(0);
      } else {
        setIsActive(i + 1);
        onRating(i + 1);
      }
    },
    [isActive],
  );

  return (
    <div className="mx-23 mt-4 border-t border-[#eee] pt-1.5">
      <h3 className="text-h2 font-bold">별점</h3>
      <div className="mx-auto flex justify-between px-[44px]">
        {[...new Array(5)].map((_, i) => (
          <button key={i} onClick={() => handleClick(i)}>
            {i < isActive ? (
              <Image
                src="/icon/ico_start-yellow.svg"
                width={49.5}
                height={49.5}
                alt=""
              />
            ) : (
              <Image
                src="/icon/ico_start-light-gray.svg"
                width={49.5}
                height={49.5}
                alt=""
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
