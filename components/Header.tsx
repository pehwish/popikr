"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import Maybe from "./Maybe";
import SwitchCase from "./SwitchCase";

type Action = "calendar" | "notice" | "share" | "exit";
type HeaderType = "home" | "detail" | "filter";

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

  const handleGoBack = useCallback(() => {
    if (onClickBack) {
      onClickBack();
      return;
    }
    router.back();
  }, [onClickBack]);

  return (
    <header
      id="header"
      className="ml-[23px] mr-[14px] flex h-[60px] items-center justify-between"
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
              <button onClick={handleGoBack} className="header__back">
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
          className={clsx(
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
          <button>
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
