import { date } from "@/lib/date";
import Image from "next/image";

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
      <div className="relative h-[93px] w-full">
        <Image fill src={imgSrc} alt="" className="object-cover" />
      </div>

      <span className="mt-1 text-h6 text-gray">{date(createdAt)}</span>
    </Link>
  );
}
