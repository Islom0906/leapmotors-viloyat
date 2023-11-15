import Image from "next/image";

const StoreBox = ({text, bg}) => {
    return (
        <>
            {text ? (
                <div className="h-[50vh] lg:h-[100vh] relative   overflow-hidden group">
                    <div className="w-full h-full transition duration-1000 hover:scale-105 relative">
            {/*<span className="absolute bottom-16 left-16 lg:bottom-44 lg:left-28 text-white font-bold text-[24px] z-20">*/}
            {/*{text}*/}
            {/*</span>*/}

                        <Image src={bg} fill className="object-cover w-full h-full" alt={text}/>
                    </div>
                </div>
            ) : (
                <div className=" col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 ">
                    {
                        bg?.map(image => (
                    <div  key={image?._id}  className={' h-[242px] lg:h-[485px] w-full relative'}>

                                    <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${image?.path}`} fill
                                           className="object-cover w-full h-full" alt={'filial inner'}/>

                    </div>
                            )
                        )
                    }
                </div>
            )}
        </>
    );
};

export default StoreBox;
