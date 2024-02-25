import Header from "@/components/Header";
import { date } from "@/lib/date";

export default function NoticeDetail() {
  return (
    <>
      <Header type="detail" title="POPIKR 소식" />
      <div className="notice-detail mx-23 mt-[25px]">
        <div className="notice-detail__header">
          <h3 className="text-h3 font-bold">
            팝업 방문 후기 남기면 최대 10만원 당첨의 행운이 찾아옵니다.
          </h3>

          <h5 className="mb-[7px] mt-2 text-h5">{date(new Date())}</h5>
        </div>
        <div className="notice-detail__body my-2 border-y border-[#eee]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          voluptate alias, earum, provident sequi reiciendis natus laboriosam
          nobis numquam a doloribus facilis veniam iste neque. Distinctio neque
          minus quaerat nesciunt!
        </div>
      </div>
    </>
  );
}
