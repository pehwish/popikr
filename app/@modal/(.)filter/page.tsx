import Filter from "@/components/Filter";

export default function page() {
  return (
    <div className="absolute inset-y-0 left-[50%] z-10 min-h-fit w-full max-w-screen-sm translate-x-[-50%] bg-white">
      <Filter />
    </div>
  );
}
