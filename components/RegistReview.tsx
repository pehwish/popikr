"use client";
import Header from "@/components/Header";

import { useState } from "react";
import FixedButton from "./FixedButton";
import Maybe from "./Maybe";
import Popup from "./Popup";
import RatingStart from "./RatingStart";
import ReviewTextarea from "./ReviewTextarea";

export default function RegistReview() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [isVisiblePopup, setIsVisiblePopup] = useState(false);

  const handleSubmit = () => {
    console.log("handleSubmit", rating, review);
    if (rating === 0 || review === "") {
      return;
    }

    setIsVisiblePopup(true);
  };

  const registReview = () => {
    console.log("등록~~");
  };

  return (
    <div className="relative flex min-h-dvh flex-col overflow-y-auto">
      <Header type="detail" title="후기 등록하기" />
      <div className="mx-23 mb-4 mt-[25px] h-[207px]">
        <h2 className="text-h1">
          팝업 스토어에서
          <br />
          <span className="bg-food text-white">어떤 즐거움을</span>
          <br /> 경험하셨나요?
          <br /> <span className="font-bold">모두에게 공유해주세요!</span>
        </h2>
      </div>
      <RatingStart onRating={setRating} />
      <ReviewTextarea onReview={setReview} />
      <FixedButton
        text="등록하기"
        value={"등록하기"}
        isDisabled={rating === 0 || review === ""}
        onClick={handleSubmit}
      />

      <Maybe test={isVisiblePopup}>
        <Popup
          setPopup={setIsVisiblePopup}
          title="후기를 등록하시겠습니까?"
          desc={`등록된 후기는 익명으로 공개되며\n삭제 또는 수정이 불가합니다.`}
          caution={`부적절한 후기는 운영자에 의해 삭제될 수 있습니다. `}
          size="lg"
          useBtnExit
          onClick={registReview}
        />
      </Maybe>
    </div>
  );
}
