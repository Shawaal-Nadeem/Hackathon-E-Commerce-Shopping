import products from "../../utils/mock";

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
return (
    <div>Hello from {params.slug}</div>
)
}