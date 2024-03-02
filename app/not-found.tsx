import { NextPage } from "next";
import Image from "next/image";

const NotFound: NextPage = () => {
  return (
    <div className="fixed inset-0 flex h-svh items-end justify-center bg-[#000]">
      <Image
        src="/404.png"
        alt="not-found"
        width={0}
        height={0}
        sizes="100vh"
        style={{ width: "100%", height: "100%" }}
        className="object-contain"
      />
    </div>
  );
};

export default NotFound;
