"use client";

import share from "@/lib/share";
import { cn } from "@/lib/utils";
import { Action, HeaderType } from "@/model";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import Maybe from "./Maybe";
import SwitchCase from "./SwitchCase";

interface HeaderProps {
  type: HeaderType;
  actions?: Action[];
  title?: string;
  onClickBack?: () => void;
}

export default function Header({
  type,
  actions,
  title,
  onClickBack,
}: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleGoBack = useCallback(() => {
    if (onClickBack) {
      onClickBack();
      return;
    }
    router.back();
  }, [onClickBack]);

  const handleShare = async () => {
    let dataToShare = {
      url: pathname,
      title: title,
      text: "",
    };
    const result = await share(dataToShare);
    if (result === "copiedToClipboard") {
      alert("링크를 클립보드에 복사했습니다.");
    } else if (result === "failed") {
      alert("공유하기가 지원되지 않는 환경입니다.");
    }
  };

  return (
    <header
      id="header"
      className="ml-22 mr-[15px] flex h-[60px] items-center justify-between"
    >
      <SwitchCase
        tests={[
          {
            test: type === "home",
            component: (
              <Link href={"/"}>
                <Image
                  src="/icon/logo.svg"
                  width={81}
                  height={27}
                  alt="POPIKR"
                />
              </Link>
            ),
          },
          {
            test: type === "detail",
            component: (
              <button onClick={handleGoBack} className="header__back mr-2.5">
                <Image
                  src="/icon/ico_arrow.svg"
                  width={28}
                  height={28}
                  alt="뒤로가기"
                />
              </button>
            ),
          },
        ]}
        defaultComponent={<></>}
      />

      <Maybe test={!!title}>
        <h1
          className={cn(
            "header__title mr-auto text-h3 font-bold",
            type === "filter" && "mx-auto",
          )}
        >
          {title}
        </h1>
      </Maybe>

      <div className="flex space-x-[15px]">
        <Maybe test={Boolean(actions?.includes("calendar"))}>
          <Link href={"/calendar"}>
            <Image
              src="/icon/ico_calendar.svg"
              width={29}
              height={23}
              alt="calendar"
            />
          </Link>
        </Maybe>
        <Maybe test={Boolean(actions?.includes("notice"))}>
          <Link href={"/notice"}>
            <Image
              src="/icon/ico_noti.svg"
              width={28}
              height={25}
              alt="notice"
            />
          </Link>
        </Maybe>
        <Maybe test={Boolean(actions?.includes("share"))}>
          <button onClick={handleShare}>
            <Image
              src="/icon/ico_flight.svg"
              width={26}
              height={28}
              alt="share"
            />
          </button>
        </Maybe>
        <Maybe test={Boolean(actions?.includes("exit"))}>
          <button onClick={handleGoBack}>
            <Image src="/icon/ico_exit.svg" width={15} height={15} alt="닫기" />
          </button>
        </Maybe>
      </div>
    </header>
  );
}
