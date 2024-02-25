"use client";

import clsx from "clsx";
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
      <div className="mx-auto flex w-[257px] justify-between">
        {[...new Array(5)].map((_, i) => (
          <i
            key={i}
            className={clsx(
              `ico_rating__star`,
              i < isActive && "ico_rating__star--active",
            )}
            onClick={() => handleClick(i)}
          ></i>
        ))}
      </div>
    </div>
  );
}
