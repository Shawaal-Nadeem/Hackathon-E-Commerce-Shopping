import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { sanityClient } from '@/app/lib/sanityClient';
import { urlForImage } from '../../../../sanity/lib/image';
 const Male = async() => {
  const maleProducts=await sanityClient.fetch(`*[_type=="Products" && category=="male"]`)
  function maleData(data:any)
  {
    return (
    <div key={data.name} className='eachCard'>
            <Link href={`/products/${data.slug}`}>
    <Image src={urlForImage(data.image.asset).url()} width={270} height={270} alt={data.name}/>
    <h1 className='cardName'>{data.name}</h1>
    <h3 className='clothType'>{data.cloth_Type}</h3>
    <p className='priceCard'>${data.price}</p>
    </Link>
  </div>
    )
  }
  return (
    <div className='productsMain'>
      <div className='content'>
      <div className='productCards'>
      {maleProducts.map(maleData)}
      </div>
      </div>
    </div>
  )
}
export default Male;