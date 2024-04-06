"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Tab = {
  key: String;
  value: String;
};

interface TabProps {
  tabs: Tab[];
  activeIndex: Number;
  onClick: (key: String, active: Number) => void;
  children?: ReactNode;
}

export default function Tab({
  tabs = [],
  activeIndex,
  onClick,
  children,
}: TabProps) {
  return (
    <div className="mx-23 mt-5 flex justify-between border-b border-[#eee]">
      <div className="tab space-x-15 ">
        {tabs?.map(({ key, value }, index) => (
          <button
            className={cn(
              "tab__item relative mb-[-1px] inline-flex items-center pb-1.5 text-h2 transition-all",
              { "font-bold": index === activeIndex },
            )}
            onClick={() => onClick(key, index)}
            key={`tab_${value}`}
          >
            {value}

            <span
              className={cn(
                "absolute bottom-[.5px] left-[50%] inline-block h-[2px] origin-center translate-x-[-50%] bg-etc transition-all",
                index === activeIndex ? "w-full" : "w-0",
              )}
            ></span>
          </button>
        ))}
      </div>
      {children}
    </div>
  );
}
