import products from "@/app/utils/mock";
import Style from './productDetail.module.css';
import Image from "next/image";
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

export default function productDetails({params}:productDetails)
{
    const data_Product=products.find(function search(slugVal){return slugVal.slug==params.slug}) as any
return (
    <div className={Style.main}>
        <div className={Style.subMain}>
        <div className={Style.section1}>
            <Image src={data_Product.image} alt="Loading..." width={120} height={120}/>
        </div>
        <div className={Style.section2}>
            <div>
        <Image src={data_Product.image} alt="Loading..." width={550} height={520} className={Style.largePic}/>
        </div>
        <div className={Style.content}>
        <h4>{data_Product.name}</h4>
        <h6>{data_Product.cloth_Type}</h6>
        <p>SELECT SIZE</p>
        </div>
        </div>
        </div>
    </div>
)
}
