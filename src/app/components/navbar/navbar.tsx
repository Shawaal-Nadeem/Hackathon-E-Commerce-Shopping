'use client'
import Link from "next/link"
import Style from './navbar.module.css';
import { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi'
import {RxHamburgerMenu} from 'react-icons/rx'
export default function Navbar()
{
  const [now,update]=useState('now');
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
<AiOutlineSearch/>
<input placeholder="What are you looking for" className=" border-solid border-2 border-lime-700"/>
          </div>
         <Link href={'/shopping-cart'}><button className="cart"><FiShoppingCart size={25}/></button></Link>
        </nav>
      </header>
  );
  const after=(
    <div className={Style.mobileview}>
      <div>
      <ul>
      <Link href={'/'}><li onClick={()=>update('now')}>Home</li></Link>
      <Link href={'/about'}><li onClick={()=>update('now')}>About</li></Link>
      <Link href={'/contact'}><li onClick={()=>update('now')}>Contact</li></Link>
      </ul>
      </div>
 

      
      </div>
  )
 
    return (
      <div>
        <button className={Style.p} type="button" onClick={()=>update(now === 'now' ? 'mobile' : 'now')}>
          {/* <RxHamburgerMenu size={21}/> */}
          button
        </button>
      {now==='now' ?before:after}
      </div>
    )
}