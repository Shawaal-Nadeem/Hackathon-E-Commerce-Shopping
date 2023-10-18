'use client'
import Style from '@/app/(pages)/home/home.module.css'
import { useState } from 'react';
export const Email = () => {
    const [mail,setMail]=useState('Email');
    function alertMessage(){
      if(mail!='Email'){
        setTimeout(()=>{
          alert(`Your Email: ${mail} is successfully sent!`);
        },2000)
    }
  }
    return (
        <div className={Style.email}>
            <input placeholder={mail} type='email' size={25} maxLength={30} onChange={(e:any)=>{setMail(e.target.value)}}></input>
            <button onClick={alertMessage}>Get Started</button>
          </div>
    )
}