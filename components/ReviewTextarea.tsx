"use client";

import { ChangeEvent, useState } from "react";

interface ReviewTextarea {
  onReview: (value: string) => void;
}

export default function ReviewTextarea({ onReview }: ReviewTextarea) {
  const [review, setReview] = useState("");

  const handleReview = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
    onReview(e.target.value);
  };

  return (
    <div className="mx-23 mt-[34px] pt-1.5">
      <h3 className="text-h2 font-bold">후기</h3>
      <div className="relative mt-1.5 h-[171px] w-full rounded-sm border border-[#eee] px-[8px] py-[15px]">
        <textarea
          name="review"
          id="review"
          className="h-full w-full resize-none outline-0"
          value={review}
          onChange={handleReview}
          placeholder="최대 500자까지 입력할 수 있어요."
        ></textarea>
        <span className="absolute bottom-[12px] right-[13px] text-h5 text-gray">
          {review.length}/500
        </span>
      </div>
      <span className="mt-[15px] flex items-center text-h5 text-gray">
        <i className="ico_info mr-1"></i>
        부적절한 후기는 운영자에 의해 삭제될 수 있습니다.
      </span>
    </div>
  );
}
