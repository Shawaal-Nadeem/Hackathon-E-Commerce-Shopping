'use client'
import products from "@/app/utils/mock";
import Style from './productDetail.module.css';
import Image from "next/image";
import { LuShoppingCart } from 'react-icons/lu';
import { useReducer } from "react";
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


const [state,dispatch]=useReducer(descisionFun,{size:'XS'})
function descisionFun(state:any,action:any){
if(action.type==='XS'){
    return{
    size:'XS',
    }
}
else if(action.type==='S'){
    return{
        size:'S',
    }
}
else if(action.type==='M'){
    return{
        size:'M',
    }
}
else if(action.type==='L'){
    return{
        size:'L',
    }
}
else if(action.type==='XL'){
    return{
        size:'XL',
    }
}
}

const [state1,dispatch1]=useReducer(logicFun,{count:1,price:data_Product.price});
function logicFun(state1:any,action:any){
if(action.type==='inc'){
    return{
count:state1.count+1,
price:(state1.count+1)*data_Product.price
    }
}
else if(action.type==='dec'){
    if(state1.count>1){
        return{
            count:state1.count-1,
            price:(state1.count-1)*data_Product.price
        }
    }
    else{
        return{
            count:state1.count,
            price:state1.count*(data_Product.price)
        }
    }
}
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
        <button onClick={()=>dispatch({type:"XS"})} className={state.size==='XS'?Style.changeColor:Style.button}>XS</button>
        <button onClick={()=>dispatch({type:"S"})} className={state.size==='S'?Style.changeColor:Style.button}>S</button>
        <button onClick={()=>dispatch({type:"M"})} className={state.size==='M'?Style.changeColor:Style.button}>M</button>
        <button onClick={()=>dispatch({type:"L"})} className={state.size==='L'?Style.changeColor:Style.button}>L</button>
        <button onClick={()=>dispatch({type:"XL"})} className={state.size==='XL'?Style.changeColor:Style.button}>XL</button>
        </div>
        <div className={Style.quantitySection}>
            <p>Quantity</p>
            <button onClick={()=>{dispatch1({type:'inc'})}} className={Style.button}>+</button>
            <p>{state1.count}</p>
            <button onClick={()=>{dispatch1({type:'dec'})}} className={Style.button}>-</button>
        </div>
        <div className={Style.totalSection}>
            <p>Total:</p>
            <h5>${state1.price}<span>.00</span></h5>
        </div>
        <div className={Style.cartBtn}>
        <button className={Style.shopingBtn} onClick={()=>{setTimeout(()=>{alert(`${data_Product.name} added to cart successfully`)},500)}}>
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
