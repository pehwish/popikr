"use client";

import Tab from "@/components/Tab";
import { useCallback, useState } from "react";
import PopupDetailInfo from "./PopupDetailInfo";
import PopupDetailReview from "./PopupDetailReview";

import { faker } from "@/lib/faker";

const TabData = [
  {
    key: "info",
    value: "정보",
  },
  {
    key: "review",
    value: "후기",
  },
];

export default function Datail() {
  const [activeIndex, setActiveIndex] = useState<Number>(0);

  const dummyImages = [
    {
      imgSrc: faker.image.urlLoremFlickr() || "",
    },
    {
      imgSrc: faker.image.urlLoremFlickr() || "",
    },
    {
      imgSrc: faker.image.urlLoremFlickr() || "",
    },
    {
      imgSrc: faker.image.urlLoremFlickr() || "",
    },
  ];

  const handleClick = useCallback(
    (key: String, index: Number): void => {
      setActiveIndex(index);
    },
    [activeIndex],
  );

  const renderTabContent = useCallback(() => {
    if (activeIndex === 0) {
      return (
        <PopupDetailInfo
          images={dummyImages}
          title="젠틀고등학교: 젠틀몬스터 팝업스토어 젠틀고등학교: 젠틀몬스터 팝업스토어 젠틀고등학교: 젠틀몬스터 팝업스토어"
          type="movie"
          address="누디트 성수2호점 (서울 성동구 아차산로 6동"
        />
      );
    }
    return (
      <PopupDetailReview
        images={dummyImages}
        title="젠틀고등학교: 젠틀몬스터 팝업스토어 젠틀고등학교: 젠틀몬스터 팝업스토어 젠틀고등학교: 젠틀몬스터 팝업스토어"
        type="movie"
        address="누디트 성수2호점 (서울 성동구 아차산로 6동"
      />
    );
  }, [activeIndex]);

  return (
    <>
      <Tab tabs={TabData} activeIndex={activeIndex} onClick={handleClick} />

      {renderTabContent()}
    </>
  );
}
