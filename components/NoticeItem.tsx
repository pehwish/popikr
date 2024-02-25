import { ReactNode } from "react";

interface NoticeItem {
  message?: string;
  children?: ReactNode;
}
export default function NoticeItem({ message, children }: NoticeItem) {
  return (
    <div className="bg-gray-light h-[90px] justify-center rounded flex items-center content-center text-h5 text-gray text-center">
      {message}
      {children}
    </div>
  );
}
