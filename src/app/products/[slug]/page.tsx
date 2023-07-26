'use client'
import products from "@/app/utils/mock";
import Style from './productDetail.module.css';
import Image from "next/image";
import { useState } from "react";
import { LuShoppingCart } from 'react-icons/lu';
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

export default function ProductDetails({params}:productDetails)
{
    const data_Product=products.find(function search(slugVal){return slugVal.slug==params.slug}) as any;

   let [old,update]=useState(1);
   function increment(plus:string){
    update(old+1);
    setState(plus);
};
   function decrement(minus:string){
    update(old-1);
if(old<=1)
{
    update(old=1);
}
    setState(minus);
}

const [state,setState]=useState("");
function descision(size:string){
setState(size);
}

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
        <div className={Style.sizeBtns}>
        <button onClick={()=>descision("XS")} className={state==='XS'?Style.changeColor:Style.button}>XS</button>
        <button onClick={()=>descision("S")} className={state==='S'?Style.changeColor:Style.button}>S</button>
        <button onClick={()=>descision("M")} className={state==='M'?Style.changeColor:Style.button}>M</button>
        <button onClick={()=>descision("L")} className={state==='L'?Style.changeColor:Style.button}>L</button>
        <button onClick={()=>descision("XL")} className={state==='XL'?Style.changeColor:Style.button}>XL</button>
        </div>
        <div className={Style.quantitySection}>
            <p>Quantity</p>
            <button onClick={()=>{increment('+')}} className={state==='+'?Style.changeColor:Style.button}>+</button>
            <p>{old}</p>
            <button onClick={()=>{decrement('-')}} className={state==='-'?Style.changeColor:Style.button}>-</button>
        </div>
        <div className={Style.totalSection}>
            <p>Total:</p>
            <h5>{data_Product.price}<span>.00</span></h5>
        </div>
        <div className={Style.cartBtn}>
        <button className={Style.shopingBtn} onClick={()=>{setTimeout(()=>{alert(`Added to Cart`)},1000)}}>
<LuShoppingCart size={20}/>
        Add to Cart
        </button>
        </div>
        </div>
        </div>
        </div>
    </div>
)
}
