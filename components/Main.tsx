"use client";

import Header from "@/components/Header";
import Tab from "@/components/Tab";
import { Faker, ko } from "@faker-js/faker";
import Link from "next/link";
import { useEffect, useState } from "react";
import NoticeItem from "./NoticeItem";
import PopupItem from "./PopupItem";
import SwitchCase from "./SwitchCase";

interface PopupItem {
  id: number;
  imgSrc: string;
  categories: string[];
  startDt: Date;
  endDt: Date;
  title: string;
  address: string;
}

export const faker = new Faker({
  locale: [ko],
});

const TabData = [
  {
    key: "all",
    value: "전체",
  },
  {
    key: "popup",
    value: "팝업",
  },
  {
    key: "exhibition",
    value: "전시",
  },
];

const dummyData: PopupItem[] = [
  {
    id: 1,
    imgSrc: faker.image.urlLoremFlickr(),
    categories: ["music"],
    startDt: faker.date.past(),
    endDt: faker.date.past(),
    title: "디즈니 팝업 : House of wish (디즈니 애니메이션 어쩌고 저쩌고",
    address: "누디트 성수점 (서울 성동구 아차산로 6)",
  },
  {
    id: 2,
    imgSrc: faker.image.urlLoremFlickr(),
    categories: ["food", "character"],
    startDt: faker.date.soon({ days: 10 }),
    endDt: faker.date.soon({ days: 10 }),
    title: "젠틀고등학교: 젠틀몬스터 팝업스토어",
    address: "누디트 성수점 (서울 성동구 아차산로 6)",
  },
  {
    id: 3,
    imgSrc: faker.image.urlLoremFlickr(),
    categories: ["living"],
    startDt: faker.date.soon(),
    endDt: faker.date.soon(),
    title: "젠틀고등학교: 젠틀몬스터 팝업스토어",
    address: "누디트 성수점 (서울 성동구 아차산로 6)",
  },
];

export default function Main() {
  const [activeIndex, setActiveIndex] = useState<Number>(0);
  const [list, setList] = useState<PopupItem[]>([]);

  const handleClick = (key: String, index: Number): void => {
    console.log("key", key);
    console.log("index", index);
    setActiveIndex(index);
  };

  useEffect(() => {
    setList(dummyData);
  }, [list]);

  return (
    <>
      <Header type="home" actions={["calendar", "notice"]} />
      <Tab tabs={TabData} activeIndex={activeIndex} onClick={handleClick}>
        <Link href="/filter" className="text-gray">
          <span className="text-h5">전체</span>
          <i className="ico_filter ml-1.5"></i>
        </Link>
      </Tab>
      <div className="popup-list mx-23 my-3.5 grid grid-cols-1 gap-y-2.5">
        <SwitchCase
          tests={[
            {
              test: Boolean(list.length),
              component: list?.map((item) => (
                <PopupItem key={item.id} {...item} />
              )),
            },
          ]}
          defaultComponent={
            <NoticeItem message="검색 조건에 맞는 팝업이 없습니다." />
          }
        />
      </div>
    </>
  );
}
