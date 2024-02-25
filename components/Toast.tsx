"use client";

import { Dispatch, SetStateAction, useEffect } from "react";

interface Toast {
  message: string;
  setToast: Dispatch<SetStateAction<boolean>>;
}

export default function Toast({ message, setToast }: Toast) {
  // 3초 뒤 toast를 false로 변경합니다.
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <div className="absolute left-[50%] top-[50%] flex h-[35px] w-[260px] translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded bg-etc text-h5 font-bold text-white">
      {message}
    </div>
  );
}
