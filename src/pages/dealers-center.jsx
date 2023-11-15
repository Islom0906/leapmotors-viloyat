import {GoogleMap, StoreBox} from "@/components";
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {useSelector} from "react-redux";
import SEO from 'src/layout/seo/seo';
const DealersCenter = ({filial,filialInner,map}) => {
    const {lang}=useSelector(state => state.lang)
    return (
        <>
        <SEO title={'Leapmotorca Dealers Center'} og_title={'Leapmotorca uz DealersCenter, Leapmotor uzbekistan DealersCenter,Leapmotorca DealersCenter'}
        keywords={'DealersCenter , Leapmotors ,Dealers-Center , DealersCenter , Leapmotorca uz, Leapmotors uz, Leapmotorauto uz'}  description={'Мы являемся ведущей компанией по производству интеллектуальных электромобилей, которая стремится предоставить всем потребителям наилучшие возможности инновационной мобильности'}
        >
            
        </SEO>
         
            <div className={'bg-black store'}>
                <div className={'h-auto md:min-h-screen w-full relative bg-[#f5f5f5] '}>
                    <GoogleMap mapData={map}/>
                </div>
                <header className="bg-black lg:pt-[60px] h-[100vh] ">
                    <div className="grid w-full h-full gap-4 overflow-x-hidden overflow-y-hidden lg:grid-cols-2">
                        {
                            filial?.map(item=>(
                        <StoreBox key={item?._id} text={lang==='ru' ? item?.titleRu: item?.titleUz} bg={`${process.env.NEXT_PUBLIC_API_URL}/${item?.image?.path}`}/>

                            ))
                        }
                    </div>
                </header>

                <div className="grid grid-cols-2 lg:grid-cols-4">
                    {
                        filialInner?.map(item=>(
                            <StoreBox key={item?._id} bg={item?.images}/>

                        ))
                    }

                </div>

            </div>
        </>

    );
};


export async function getServerSideProps({req, res}) {

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    // Fetch data from external API
    const [filial, filialInner,map] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/filial`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/filialInner`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/map`),
    ])

    // Pass data to the page via props
    return {
        props: {
            filial: filial.data,
            filialInner: filialInner.data,
            map: map.data,
        }
    };
}


export default DealersCenter;
