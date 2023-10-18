import products from "@/app/utils/mock";
import Style from './productDetail.module.css';
import Image from "next/image";
import { Cart } from "@/app/components/cart";
import { sanityClient } from "@/app/lib/sanityClient";
import { urlForImage } from "../../../../sanity/lib/image";

function productsData(data:any)
{
   slug:data.slug;
}
export async function generateStaticParams()
{
    return products.map(productsData)
}

type productDetails=
{
    params:
    {
        slug:string;
    }
}

export default async function ProductDetails({params}:productDetails)
{
    
    const data_Product = await sanityClient.fetch(`*[_type=="Products" && slug=="${params.slug}"]`)
    console.log(params.slug);
    console.log(data_Product[0].name);

return (
    <div className={Style.main}>
        <div className={Style.subMain}>
        <div className={Style.section1}>
            <Image src={urlForImage(data_Product[0].image.asset).url()} alt="Loading..." width={120} height={120}/>
        </div>
        <div className={Style.section2}>
            <div>
        <Image src={urlForImage(data_Product[0].image.asset).url()} alt="Loading..." width={550} height={520} className={Style.largePic}/>
        </div>
        <Cart data_Product={data_Product[0]}/>
        </div>
        </div>
    </div>
)
}


