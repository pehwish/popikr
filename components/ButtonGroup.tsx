"use client";
import { useState } from "react";
import Button from "./Button";
import Maybe from "./Maybe";

interface ButtonGroup {
  buttons: { key: string; value: string }[];
  label: string;
  isAll?: boolean;
  isCate?: boolean;
}

export default function ButtonGroup({
  buttons,
  label,
  isAll = false,
  isCate = false,
}: ButtonGroup) {
  const [selected, setSelected] = useState<string[]>([]);
  const [all, setAll] = useState<boolean>(false);

  const handleClick = (value: string) => {
    console.log("handleClick");

    if (selected.includes(value)) {
      let newSelected = selected.filter((sel) => sel !== value);
      setSelected(newSelected);
      setAll(false);
    } else {
      let newSelected = [...selected, value];
      if (newSelected.length === buttons.length) {
        setAll(true);
      }
      setSelected(newSelected);
    }
  };

  const handleClickAll = () => {
    console.log("click all");
    if (all) {
      setSelected([]);
    } else {
      let newSelected = buttons.map(({ key }) => key);
      setSelected(newSelected);
    }

    setAll((prev) => !prev);
  };

  return (
    <div className="border-t border-gray-light">
      <h4 className="flex h-[40px] items-center text-h4 font-bold">{label}</h4>
      <div className="mb-5 grid grid-cols-4 gap-x-1 gap-y-1.5">
        <Maybe test={isAll}>
          <Button
            text="전체"
            value="all"
            onClick={handleClickAll}
            isActive={all}
          />
        </Maybe>
        {buttons.map((btn) => (
          <Button
            key={btn.key}
            text={btn.value}
            value={btn.key}
            onClick={handleClick}
            isCate={isCate}
            isActive={selected.includes(btn.key)}
          />
        ))}
      </div>
    </div>
  );
}
