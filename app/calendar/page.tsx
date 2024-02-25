import Calendar from "@/components/Calendar";
import Header from "@/components/Header";
import PopupItem from "@/components/PopupItem";

import { Faker, ko } from "@faker-js/faker";

export const faker = new Faker({
  locale: [ko],
});

export default function CalendarPage() {
  return (
    <>
      <Header type="detail" title="팝업 캘린더" />
      <div className="mx-23 mt-[17px]">
        <Calendar />

        <div className="mt-[50px]">
          <div className="flex justify-between mb-[5px] items-end">
            <h4 className="text-h2 ml-[13px] font-bold">TODAY</h4>
            <span className="text-h5 text-gray">2개</span>
          </div>
          <PopupItem
            id={1}
            imgSrc={faker.image.urlLoremFlickr()}
            categories={["music"]}
            startDt={faker.date.past()}
            endDt={faker.date.past()}
            title={
              "디즈니 팝업 : House of wish (디즈니 애니메이션 어쩌고 저쩌고"
            }
            address={"누디트 성수점 (서울 성동구 아차산로 6)"}
            isShort
          />
        </div>
      </div>
    </>
  );
}
