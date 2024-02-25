import Header from "@/components/Header";
import NoticeListItem from "@/components/NoticeListItem";

export default function NoticePage() {
  return (
    <>
      <Header type="detail" title="POPIKR 소식" />
      <div className="notice-list mx-23 mt-[25px]">
        <NoticeListItem id={1} imgSrc="" createdAt={new Date()} />
      </div>
    </>
  );
}
