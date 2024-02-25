import Datail from "@/components/Datail";
import Header from "@/components/Header";

export default function PopikrDetail({ params }: { params: { id: string } }) {
  return (
    <>
      <Header type="detail" title="팝업 상세 정보" actions={["share"]} />
      <Datail />
    </>
  );
}
