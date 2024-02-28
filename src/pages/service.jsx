import SEO from "@/SEO/SEO";
import {serviceSEO} from "@/SEO/SEOconfig";
import {useSelector} from "react-redux";

const Service = () => {
    const {lang}=useSelector(state => state.lang)

    return (

        <>
            <SEO title={serviceSEO[lang].title} description={serviceSEO[lang].description} ogTitle={serviceSEO[lang].ogTitle} ogDescription={serviceSEO[lang].ogDescription} />

            <div>

            </div>
        </>
    );
};

export default Service;