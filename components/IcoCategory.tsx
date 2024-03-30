import Image from "next/image";
interface IcoCategory {
  categories: string[];
}

export default function IcoCategory({ categories = [] }: IcoCategory) {
  return (
    <>
      {categories.map((cate) => (
        <Image
          src={`/icon/ico_${cate}.svg`}
          alt={cate}
          width={26}
          height={26}
          key={cate}
        />
      ))}
    </>
  );
}
