"use client";

import clsx from "clsx";
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
}

export default function Header({ type, actions, title }: HeaderProps) {
  const router = useRouter();

  const handleGoBack = useCallback(() => {
    router.back();
  }, []);

  return (
    <header id="header" className="flex items-center justify-between">
      <SwitchCase
        tests={[
          {
            test: type === "home",
            component: (
              <Link href={"/"}>
                <h1 className="header__logo">POPIKR</h1>
              </Link>
            ),
          },
          {
            test: type === "detail",
            component: (
              <button onClick={handleGoBack} className="header__back">
                <span className="hidden">뒤로가기</span>
              </button>
            ),
          },
        ]}
        defaultComponent={<></>}
      />

      <Maybe test={!!title}>
        <h1
          className={clsx(
            "header__title text-h3 font-bold mr-auto",
            type === "filter" && "mx-auto",
          )}
        >
          {title}
        </h1>
      </Maybe>

      <div className="header-actions space-x-[15px] flex">
        <Maybe test={Boolean(actions?.includes("calendar"))}>
          <Link href={"/calendar"} className="header-actions__calendar">
            <span>calendar</span>
          </Link>
        </Maybe>
        <Maybe test={Boolean(actions?.includes("notice"))}>
          <Link href={"/notice"} className="header-actions__notice">
            <span>notice</span>
          </Link>
        </Maybe>
        <Maybe test={Boolean(actions?.includes("share"))}>
          <button className="header-actions__share">
            <span>share</span>
          </button>
        </Maybe>
        <Maybe test={Boolean(actions?.includes("exit"))}>
          <button onClick={handleGoBack} className="header-actions__exit">
            <span>exit</span>
          </button>
        </Maybe>
      </div>
    </header>
  );
}
