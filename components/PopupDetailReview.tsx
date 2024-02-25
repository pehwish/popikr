import NoticeItem from "./NoticeItem";
import PopupCarousel from "./PopupCarousel";
import ReviewItem from "./ReviewItem";
import ReviewStarArea from "./ReviewStarArea";
import SwitchCase from "./SwitchCase";

import { Faker, ko } from "@faker-js/faker";

interface PopupDetailReview {
  images: { imgSrc: string }[];
  title: string;
  type: string;
  address: string;
}

export const faker = new Faker({
  locale: [ko],
});

const dummyData = [
  {
    id: 1,
    rating: 1,
    review:
      "저번 주에 왔었는데 너무 재밌었어요!! 그래서 평일에 친구들이랑 한번더 갔다왔음ㅋㅋㅋㅋ",
    createdAt: new Date(),
  },
  {
    id: 2,
    rating: 5,
    review:
      "젠몬고... 처음에 친구가 젠몬고 가자고 했을 때 이게 무슨 개소리인가 싶었는데 젠틀몬스터고등학교였음ㅋㅋㅋㅋ귀엽고 사진 잘나와서 좋았음 팝업인지 모르고 대충 입고 나갔는데 다음에 또 갈 수 있는 기회가 생기면 그때는 학생 느낌 나는 옷 입고 가서 사진 찍을거임 최근에 갔다온 팝업 중에서 제일 귀엽고 볼 것도 많았다",
    createdAt: faker.date.soon({ days: 10 }),
  },
  {
    id: 3,
    rating: 5,
    review:
      "젠몬고... 처음에 친구가 젠몬고 가자고 했을 때 이게 무슨 개소리인가 싶었는데 젠틀몬스터고등학교였음ㅋㅋㅋㅋ귀엽고 사진 잘나와서 좋았음 팝업인지 모르고 대충 입고 나갔는데 다음에 또 갈 수 있는 기회가 생기면 그때는 학생 느낌 나는 옷 입고 가서 사진 찍을거임 최근에 갔다온 팝업 중에서 제일 귀엽고 볼 것도 많았다",
    createdAt: faker.date.past(),
  },
];

export default function PopupDetailReview({
  images,
  title,
  type,
  address,
}: PopupDetailReview) {
  return (
    <div className="mx-23 mt-4 pb-20">
      <PopupCarousel
        images={images}
        title={title}
        type={type}
        address={address}
      />
      <ReviewStarArea />

      <div className="my-[18px] flex justify-between text-h5 font-bold">
        <span>평점 4.8 / 총 1,234개</span>
        <span>등록순</span>
      </div>

      <SwitchCase
        tests={[
          {
            test: Boolean(dummyData.length),
            component: dummyData?.map((item) => (
              <ReviewItem key={item.id} {...item} />
            )),
          },
        ]}
        defaultComponent={
          <NoticeItem message="검색 조건에 맞는 팝업이 없습니다." />
        }
      />
    </div>
  );
}
