"use client";

import clsx from "clsx";
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
  tabs,
  activeIndex,
  onClick,
  children,
}: TabProps) {
  return (
    <div className="flex mx-23 border-b border-[#eee] mt-5 justify-between">
      <div className="tab space-x-15 ">
        {tabs.map(({ key, value }, index) => (
          <button
            className={clsx(
              "inline-flex items-center tab__item text-h2 pb-1.5 border-b-2 mb-[-1px]",
              {
                "border-black font-bold": index === activeIndex,
                "border-transparent": index !== activeIndex,
              },
            )}
            onClick={() => onClick(key, index)}
            key={`tab_${value}`}
          >
            {value}
          </button>
        ))}
      </div>
      {children}
    </div>
  );
}
