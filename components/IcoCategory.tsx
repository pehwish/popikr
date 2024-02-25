interface IcoCategory {
  categories: string[];
}

export default function IcoCategory({ categories = [] }: IcoCategory) {
  return (
    <>
      {categories.map((cate) => (
        <i key={cate} className={`ico ico_${cate}`}>
          <span className="hidden">{cate}</span>
        </i>
      ))}
    </>
  );
}
