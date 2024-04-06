import Header from "@/components/Header";
import RegistReview from "@/components/RegistReview";

export default function CreateReviewPage() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-y-auto">
      <Header type="detail" title="후기 등록하기" />
      <RegistReview />
    </div>
  );
}
