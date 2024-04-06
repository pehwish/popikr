"use client";

import { CongestionType } from "@/model/congestion";
import Image from "next/image";
import { useCallback, useState } from "react";
import Maybe from "./Maybe";
import Popup from "./Popup";
import RoundBtn from "./RoundBtn";
import SwitchCase from "./SwitchCase";
import Toast from "./Toast";

import { cn } from "@/lib/utils";

export default function CongestionButton() {
  const [isActive, setIsActive] = useState<string>("");

  const [toast, setToast] = useState<boolean>(false);
  const [isVisibleAgree, setIsVisibleAgree] = useState(false);
  const [isVisibleAlready, setIsVisibleAlready] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = useCallback(
    (type: string) => {
      if (type === isActive) {
        setIsActive("");
      } else {
        setIsActive(type);
      }
    },
    [isActive],
  );

  // 가져오기 성공
  const geoSuccess = (position: GeolocationPosition) => {
    console.log(position);
    // 위도
    const lat = position.coords.latitude;
    // 경도
    const lng = position.coords.longitude;
    // 위도 경도 오차(m)
    const accuracy = Math.floor(position.coords.accuracy);
    submit(lat, lng);
  };

  const submit = (lat: number, lng: number) => {
    //api 호출..
    console.log("성공", lat, lng);
    //성공
    // setToast(true);

    // 실패
    setIsVisibleAlready(true);
  };

  // 가지오기 실패(거부)
  const getError = () => {
    console.log("차단!!");
    setIsVisibleAgree(true);
  };

  const handleClickRegist = useCallback(() => {
    if (isActive === "") {
      setIsDisabled(true);
      return;
    }

    if ("geolocation" in navigator) {
      // 현재 위치 가져오기
      navigator.geolocation.getCurrentPosition(geoSuccess, getError);
    } else {
      /* 위치정보 사용 불가능 */
    }
  }, [isActive]);

  return (
    <div className="mt-[30px] text-center">
      <h4 className="text-h4 font-bold">현재 팝업 현장에 계신가요?</h4>
      <p className="mb-[9px] text-h6 leading-[20px] text-gray">
        혼잡도를 공유해주세요.
      </p>
      <div className="congestion-btns mb-[23px] flex gap-6">
        {CongestionType?.map(({ type, text, desc, color }) => (
          <button
            key={type}
            onClick={() => handleClick(type)}
            className={cn(
              `congestion-btn flex flex-1 flex-col items-center rounded border-2 border-gray py-3 transition-all`,
              isActive === type
                ? `border-${color} bg-${color} text-white`
                : "text-gray",
            )}
          >
            <SwitchCase
              tests={[
                {
                  test: isActive === type,
                  component: (
                    <Image
                      src={`/icon/ico_${type}_white.svg`}
                      width={45}
                      height={45}
                      alt={type}
                    />
                  ),
                },
              ]}
              defaultComponent={
                <Image
                  src={`/icon/ico_${type}_gray.svg`}
                  width={45}
                  height={45}
                  alt={type}
                />
              }
            />
            <span className="my-[5px] text-h5 font-bold">{text}</span>
            <span className="whitespace-break-spaces text-h6">{desc}</span>
          </button>
        ))}
      </div>

      <RoundBtn
        text="혼잡도 등록하기"
        isDisabled={isActive === ""}
        onClick={handleClickRegist}
      />

      <Maybe test={toast}>
        <Toast setToast={setToast} message="혼잡도를 공유했어요. 감사합니다!" />
      </Maybe>

      <Maybe test={isVisibleAgree}>
        <Popup
          setPopup={setIsVisibleAgree}
          title="위치정보 공유를 동의해주세요."
          desc={`POPIKR는 보다 정확한 웨이팅 시간을\n알려드리기 위해 현재 팝업 현장에 계신 분들의\n혼잡도 기록만 받고있어요.`}
        />
      </Maybe>
      <Maybe test={isVisibleAlready}>
        <Popup
          setPopup={setIsVisibleAlready}
          title="이미 혼잡도를 기록하셨습니다."
          desc={`POPIKR는 보다 정확한 웨이팅 시간을\n알려드리기 위해 현재 혼잡도는\n30분에 한 번씩만 기록할 수 있어요.`}
        />
      </Maybe>
      <Maybe test={isDisabled}>
        <Popup setPopup={setIsDisabled} title="혼잡도를 선택해 주세요." />
      </Maybe>
    </div>
  );
}
