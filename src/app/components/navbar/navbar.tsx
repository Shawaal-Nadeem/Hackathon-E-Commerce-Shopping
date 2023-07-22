'use client'
import Link from "next/link"
import Style from './navbar.module.css';
import { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { LuShoppingCart } from 'react-icons/lu'
import {RxHamburgerMenu} from 'react-icons/rx'
import {IoCloseOutline} from 'react-icons/io5'
import {useRouter} from 'next/navigation'

export default function Navbar()
{
  let a='hjdbdbn';
  
  const [now,update]=useState('now');
  const router=useRouter();
  const [value,setValue]=useState('What are you looking for');

if(value.toLowerCase()==='home')
{
router.push('/home');
}
else if(value.toLowerCase()==='female'){
  router.push('/female');
}
else if(value.toLowerCase()==='male'){
  router.push('/male');
}
else if(value.toLowerCase()==='kids'){
  router.push('/kids');
}
else if(value.toLowerCase()==='shopping cart'){
router.push('/shopping-cart');
}
else if(value.toLowerCase()==='all products')
{
  router.push('/all_products');
}

  const before=(
    <header className={Style.header}>
        <nav>
       <Link href={'/'}><img src="https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.83c5fd82.png&w=256&q=75" alt="logo"></img></Link>
          <ul>
           <Link href={'/female'}><li>Female</li></Link>
           <Link href={'/male'}><li>Male</li></Link>
           <Link href={'/kids'}><li>Kids</li></Link>
           <Link href={'/all_products'}><li>All Products</li></Link>
          </ul>
          <div className={Style.input}>
<AiOutlineSearch className={Style.searchIcon}/>
<input placeholder={value} maxLength={25} onChange={(e)=>{setValue(e.target.value)}} />
          </div>
         <Link href={'/shopping-cart'}><button className={Style.cart}><LuShoppingCart size={25}/></button></Link>
         <button className={Style.p} type="button" onClick={()=>update(now === 'now' ? 'mobile' : 'now')}>
          <RxHamburgerMenu size={21}/>
        </button>
        </nav>
      </header>
  );
  const after=(
    <div className={Style.mobileview}>
      <div className={Style.main}>
        <div className={Style.subMain}>
        <button type="button" onClick={()=>update(now === 'now' ? 'mobile' : 'now')}>
          <IoCloseOutline size={27}/>
          </button>
        </div>
      </div>
      <div className={Style.navBtns}>
        <div className={Style.icon}>
      <Link href={'/shopping-cart'}><button className={Style.cart}><LuShoppingCart size={25}/></button></Link>
      </div>
      <ul>
      <Link href={'/female'}><li onClick={()=>update('now')}>Female</li></Link>
      <Link href={'/male'}><li onClick={()=>update('now')}>Male</li></Link>
      <Link href={'/kids'}><li onClick={()=>update('now')}>Kids</li></Link>
      <Link href={'/all_products'}><li onClick={()=>update('now')}>All Products</li></Link>
      </ul>
      </div>
 

      
      </div>
  )
 
    return (
      <div>
      {now==='now' ?before:after}
      </div>
    )
}