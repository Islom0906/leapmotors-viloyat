import Image from "next/image";

const SaleList = ( {title , subtitle ,src}) => {
  return (
    <>
      <div className="flex items-center p-2 bg-[rgba(51,51,51,.06)] border rounded gap-x-3">
        <div className="w-[50px] h-[50px] relative">
          <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${src}`} alt={title} fill />
        </div>
        <div className="text-[#333] space-y-1">
          <h5 className="text-xs font-semibold">
            {
              title
            }
            </h5>
          <p className="text-xs font-thin">
            {
              subtitle == null ? 
              'Цена включена':
              subtitle
            }
           </p>
        </div>
      </div>
    </>
  );
};

export default SaleList;
