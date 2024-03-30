"use client";

import Header from "@/components/Header";
import { useEffect } from "react";
import ButtonGroup from "./ButtonGroup";
import FixedButton from "./FixedButton";
import NoticeItem from "./NoticeItem";

const operateFilter = [
  { key: "pre", value: "오픈 예정" },
  { key: "ing", value: "오픈 중" },
  { key: "end", value: "종료" },
];

const categoriesFilter = [
  { key: "fashion", value: "패션" },
  { key: "music", value: "음악" },
  { key: "character", value: "캐릭터" },
  { key: "food", value: "식품" },
  { key: "movie", value: "영화" },
  { key: "living", value: "리빙" },
  { key: "etc", value: "기타" },
];

export default function Filter() {
  const handleSubmit = () => {
    console.log("handleSubmit");
  };

  useEffect(() => {
    let main = document.querySelector("#main");
    if (main) {
      main.classList.add("open");
    }

    return () => {
      if (main) {
        main.classList.remove("open");
      }
    };
  }, []);

  return (
    <div className="relative flex min-h-dvh flex-col overflow-y-auto">
      <Header type="filter" title="필터" actions={["exit"]} />
      <div className="mx-22 mb-44 mt-[25px]">
        <h2 className="mb-[32px] text-h1">
          어떤 팝업 스토어를 <br />
          <strong className="font-bold">찾고 계신가요?</strong>
        </h2>

        <div className="filter__group">
          <ButtonGroup label="운영 여부" buttons={operateFilter} isAll />
          <ButtonGroup
            label="카테고리"
            buttons={categoriesFilter}
            isAll
            isCate
          />
          <ButtonGroup
            label="지역"
            buttons={[{ key: "seoul", value: "서울" }]}
          />
        </div>
        <NoticeItem>
          <p>
            지금은 <strong>서울 지역의 팝업 정보만</strong> 알려드리고 있어요.
            <br />
            추후 다른 지역도 서비스 할 예정이니 조금만 기다려 주세요!
          </p>
        </NoticeItem>
      </div>
      <FixedButton text="필터적용" value={"필터적용"} onClick={handleSubmit} />
    </div>
  );
}
