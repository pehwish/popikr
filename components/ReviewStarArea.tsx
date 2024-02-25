"use client";
import RoundBtn from "./RoundBtn";

import { useParams, useRouter } from "next/navigation";

export default function ReviewStarArea() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const handleRegist = () => {
    router.push(`/popikr/${params.id}/review`);
  };

  return (
    <div className="mt-[5px] rounded bg-gray-light px-14 pb-5 pt-[15px] text-center">
      <h4 className="text-h4 font-bold">이 팝업 스토어를 재밌게 즐기셨나요?</h4>
      <div className="mb-[20px] mt-[15px] flex justify-between">
        <img src="/icon/ico_start-gray.svg" alt="" />
        <img src="/icon/ico_start-gray.svg" alt="" />
        <img src="/icon/ico_start-gray.svg" alt="" />
        <img src="/icon/ico_start-gray.svg" alt="" />
        <img src="/icon/ico_start-gray.svg" alt="" />
      </div>

      <RoundBtn text="후기 등록하기" isDisabled onClick={handleRegist} />
    </div>
  );
}
