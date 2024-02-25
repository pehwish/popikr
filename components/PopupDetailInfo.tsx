import CongestionButton from "./CongestionButton";
import PopupCarousel from "./PopupCarousel";

interface PopupDetailInfo {
  images: { imgSrc: string }[];
  title: string;
  type: string;
  address: string;
}

export default function PopupDetailInfo({
  images,
  title,
  type,
  address,
}: PopupDetailInfo) {
  return (
    <div className="mx-23 mt-4 pb-20">
      <PopupCarousel
        images={images}
        title={title}
        type={type}
        address={address}
      />
      <div className="mt-[5px] flex gap-[5px]">
        <div className="flex-1 rounded bg-gray-light pb-3.5 pt-[11px] text-center">
          <h5 className="text-h5 font-bold">현재 혼잡도</h5>
          <h3 className={`my-[10.5px] text-h2 font-bold text-${type}`}>보통</h3>
          <p className="text-h5 text-gray">
            웨이팅 10팀이하, <br />
            대기시간 30분 이하
          </p>
        </div>
        <dl
          className={`flex flex-1 rounded py-[11px] bg-${type} ${type === "character" ? "text-living" : "text-white"}`}
        >
          <div className="flex flex-1 flex-col text-center">
            <dt className="mb-3 text-h5 font-bold">기간</dt>
            <dd className="flex flex-1 flex-col justify-center border-r border-r-[0.5px] px-3 text-center text-h5 font-bold">
              <span>01.12</span>
              <span>|</span>
              <span>01.25</span>
            </dd>
          </div>
          <div className="flex flex-1 flex-col text-center">
            <dt className="mb-3 text-h5 font-bold">운영시간</dt>
            <dd className="flex flex-1 flex-col justify-center px-3 text-center text-h5 font-bold">
              <span>9:00</span>
              <span>|</span>
              <span>20:00</span>
            </dd>
          </div>
        </dl>
      </div>

      <CongestionButton />

      <div className="mt-[36px] border-t border-gray-light px-[19px] pt-[25px]">
        <dl>
          <dt className="mb-[10px] text-h5 font-bold">소개</dt>
          <dd className="mb-[24px] text-h5">
            이번 '한국의 기하학적 추상미술'전은 1920년대부터 1970년대까지
            추상작가 47명의 작품 150여 점과 아카이브를 통해 그동안 한국
            미술사에서 비교적 소외돼 왔던 기하학적 추상미술을 조명합니다. 40여
            명의 작가의 작품들과 함께 한국의 기하학적 추상미술이 지닌 의미와
            독자성을 경험해 보세요.
          </dd>
        </dl>
      </div>
      <div className="mt-[36px] border-t border-gray-light px-[19px] pt-[25px]">
        <dl>
          <dt className="mb-[10px] text-h5 font-bold">기타</dt>
          <dd className="mb-[24px] text-h5">
            소원 댓글&친구 소환을 남겨주시면 추첨을 통해 LEGO 디즈니 캐슬 등
            다양한 선물 제공
            <br />
            응모 기간 : 2023.12.16.(토) ~ 2023.12.22.(금)
            <br />
            참여방법
            <br /> 1. 디즈니코리아 인스타그램 @disneykorea 계정 팔로우 <br />
            2. &lt;디즈니 100주년 팝업 : House of wish&gt; 게시물에 같이 보러 갈
            친구 태그 <br />
            3. 2024년 이루고 싶은 소원까지 댓글로 달면 참여 끝
          </dd>
        </dl>
      </div>

      <div className="mt-20 text-center">
        <dl className="mx-auto inline-block text-h6">
          <div className="flex">
            <dt className="w-[45px]">대표</dt>
            <dd className="w-[88px] text-center">문다영, 이희준, 전하민</dd>
          </div>
          <div className="flex">
            <dt className="w-[45px]">상호</dt>
            <dd className="w-[88px] text-center">파피커 POPIKR</dd>
          </div>
          <div className="flex">
            <dt className="w-[45px]">E-mail</dt>
            <dd className="w-[88px] text-center">
              <a href="mailto:info@popikr.com">info@popikr.com</a>
            </dd>
          </div>
          <div className="flex">
            <dt className="w-[45px]">address</dt>
            <dd className="w-[88px] text-center">서울 어딘가</dd>
          </div>
        </dl>
        <p className="mt-[16px] text-h6">
          ⓒ 파피커 POPIKR. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
