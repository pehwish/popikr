"use client";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import isTodayPlugin from "dayjs/plugin/isToday";
import objectPlugin from "dayjs/plugin/toObject";
import updateLocale from "dayjs/plugin/updateLocale";
import weekdayPlugin from "dayjs/plugin/weekday";

import { ReactNode, useEffect, useState } from "react";
dayjs.extend(updateLocale);
dayjs.extend(weekdayPlugin);
dayjs.extend(objectPlugin);
dayjs.extend(isTodayPlugin);
dayjs.locale("ko");
dayjs.updateLocale("ko", {
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  weekdays: ["일", "월", "화", "수", "목", "금", "토"],
});

interface formateDate {
  day: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  isCurrentDay: boolean;
}

export default function Calendar() {
  const [now, setNow] = useState<dayjs.Dayjs | undefined>();
  const [arrayOfDays, setArrayOfDays] = useState<{ dates: formateDate[] }[]>(
    [],
  );

  const [selected, setSelected] = useState<number | null>(null);

  const handleClickDate = (day: number) => {
    console.log("handleClickDate", day);
    if (day === selected) {
      setSelected(null);
    } else {
      setSelected(day);
    }
  };

  const renderHeader = () => {
    return (
      <div className="mb-[27px] flex justify-between text-h2 font-bold">
        <span>{now?.format("MMMM")}</span>
        <span>{now?.format("YYYY")}</span>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = "dddd";
    const days = [];

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-center text-h3 font-bold text-gray" key={i}>
          {now?.weekday(i).format(dateFormat)}
        </div>,
      );
    }
    return (
      <div className="days mb-22 grid h-[34px] grid-cols-7 items-center gap-0">
        {days}
      </div>
    );
  };
  useEffect(() => {
    const today = dayjs();

    setNow(today);
  }, []);

  const getAllDays = () => {
    let currentDate = now?.startOf("month").weekday(0);
    const nextMonth = now?.add(1, "month").month();

    let allDates: { dates: formateDate[] }[] = [];
    let weekDates = [];

    let weekCounter = 1;
    if (currentDate) {
      while (currentDate.weekday(0).toObject().months !== nextMonth) {
        const formated: formateDate = formateDateObject(currentDate);

        weekDates.push(formated);

        if (weekCounter === 7) {
          allDates.push({ dates: weekDates });
          weekDates = [];
          weekCounter = 0;
        }

        weekCounter++;
        currentDate = currentDate?.add(1, "day");
      }

      setArrayOfDays(allDates);
    }
  };

  useEffect(() => {
    getAllDays();
  }, [now]);

  const renderCells = () => {
    const rows: ReactNode[] = [];
    let days: ReactNode[] = [];

    arrayOfDays.forEach((week, index) => {
      week.dates.forEach((d: formateDate, i: number) => {
        days.push(
          <button
            className={`relative flex h-9 items-center justify-center text-center text-h3 font-bold ${
              !d.isCurrentMonth && "pointer-events-none  text-gray"
            } ${i === 0 && "text-gray"} ${selected && d.day !== selected && !d.isCurrentDay && "text-gray"}`}
            key={i}
            onClick={() => handleClickDate(d.day)}
          >
            {d.isCurrentDay && (
              <span className="absolute top-[-5px] inline-flex h-2.5 w-2.5 rounded-full bg-food"></span>
            )}

            <span
              className={`inline-flex h-9 w-9 items-center justify-center rounded border ${d.isCurrentMonth && d.day === selected ? "border-food" : "border-transparent"}`}
            >
              {d.day}
            </span>
          </button>,
        );
      });
      rows.push(
        <div className="grid grid-cols-7 gap-2.5" key={index}>
          {days}
        </div>,
      );
      days = [];
    });

    return <div className="body grid gap-y-2.5">{rows}</div>;
  };

  const formateDateObject = (date: dayjs.Dayjs) => {
    const clonedObject = { ...date.toObject() };

    const formatedObject = {
      day: clonedObject.date,
      month: clonedObject.months,
      year: clonedObject.years,
      isCurrentMonth: clonedObject.months === now?.month(),
      isCurrentDay: date.isToday(),
    };

    return formatedObject;
  };

  return (
    <div>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
}
