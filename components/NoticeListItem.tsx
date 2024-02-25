import { date } from "@/lib/date";

import Link from "next/link";

interface NoticeListItem {
  imgSrc: string;
  createdAt: Date;
  id: number;
}

export default function NoticeListItem({
  id,
  imgSrc,
  createdAt,
}: NoticeListItem) {
  return (
    <Link href={`/notice/${id}`}>
      <img src={imgSrc} alt="" className="h-[93px] w-full" />
      <span className="mt-1 text-h6 text-gray">{date(createdAt)}</span>
    </Link>
  );
}
