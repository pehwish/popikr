import clsx from "clsx";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";

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
        <div>
          {[...new Array(5)].map((_, i) => (
            <i
              key={i}
              className={clsx(
                `ico_star--sm`,
                i < rating && "ico_star--sm--active",
              )}
            ></i>
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
