'use client'
import products from "@/app/utils/mock";
import Style from './productDetail.module.css';
import StyleCart from '@/app/(pages)/shopping-cart/cart.module.css'
import Image from "next/image";
import { LuShoppingCart } from 'react-icons/lu';
import {useReducer, useState } from "react";
import {FiShoppingBag} from 'react-icons/fi'
import {RiDeleteBin6Line} from 'react-icons/ri'


interface information
{
    productName:string,
    productPrice:number,
    productType:string,
    productImage:string
}
const arr:information[]= [];








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
    ...state,
    size:'XS',
    }
}
else if(action.type==='S'){
    return{
        ...state,
        size:'S',
    }
}
else if(action.type==='M'){
    return{
        ...state,
        size:'M',
    }
}
else if(action.type==='L'){
    return{
        ...state,
        size:'L',
    }
}
else if(action.type==='XL'){
    return{
        ...state,
        size:'XL',
    }
}
}

const [state1,dispatch1]=useReducer(logicFun,{count:1,price:data_Product.price});
function logicFun(state1:any,action:any){
if(action.type==='inc'){
    return{
    ...state1,
count:state1.count+1,
price:(state1.count+1)*data_Product.price
    }
}
else if(action.type==='dec'){
    if(state1.count>1){
        return{
            ...state1,
            count:state1.count-1,
            price:(state1.count-1)*data_Product.price
        }
    }
    else{
        return{
            ...state1,
            count:state1.count,
            price:state1.count*(data_Product.price)
        }
    }
}
}


const [run,setRun]=useState(false)
if(run===true){

    arr.push({
        productName:data_Product.name,
        productPrice:state1.price,
        productType:data_Product.cloth_Type,
        productImage:data_Product.image
    })
   
}

function Handle()
{
    setRun(true);
    alert('Added to Cart');
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
        <button className={Style.shopingBtn} onClick={()=>{Handle()}}>
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



export function Card()
{
    return(
    <>
    {arr.length===0?
        <div className={StyleCart.bag}>
      <FiShoppingBag size={150}/>
      <p>Your shopping bag is empty</p>
    </div>:null    
}
    {arr.map((para:any,index:number)=>{
        return(
            <div className=" mt-14  flex justify-center">
         <div className=' pt-2 pb-2 flex justify-between w-5/6 bg-slate-100'>
        <div className=' flex gap-12 ml-4'>
        <div>
        <Image src={para.productImage} width={170} height={170} alt="Loading...." className=' rounded-2xl'></Image>
         </div>
         <div>
        <h3 className=' text-xl font-semibold'>{para.productName}</h3>
        <p className='text-gray-400 font-semibold mt-3'>{para.productType}</p>
        <p className=' font-semibold mt-3'>Delivery Estimation</p>
        <p className=' font-semibold text-amber-400 mt-3'>5 Working Days</p>
        <p className=' font-extrabold mt-3'>${para.productPrice}</p>
        </div>
        </div>
        <div className=' flex self-start mr-2'>
        <RiDeleteBin6Line size={30}/>
        </div> 
        </div>
    </div> 
        )
    })
}
    </>    
    )
}

