import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";

dayjs.locale("ko");
dayjs.extend(relativeTime);

interface ReviewItem {
  rating: number;
  review: string;
  createdAt: Date;
}

export default function ReviewItem({ rating, review, createdAt }: ReviewItem) {
  return (
    <div className="mb-[10px] border-t border-[#eee]">
      <div className="mb-[15px] mt-[5px] flex justify-between">
        <div className="flex">
          {[...new Array(5)].map((_, i) => (
            <Image
              src={
                i < rating
                  ? "/icon/ico_star-yellow.svg"
                  : "/icon/ico_star-gray.svg"
              }
              width={11.98}
              height={13.98}
              alt=""
              key={i}
            />
          ))}
        </div>
        <span className="text-h6 text-gray">
          {dayjs(createdAt).fromNow(true)}전
        </span>
      </div>
      <p className="text-h5">{review}</p>
    </div>
  );
}
