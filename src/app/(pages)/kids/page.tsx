import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { sanityClient } from '@/app/lib/sanityClient';
import { urlForImage } from '../../../../sanity/lib/image';
 const Kids = async() => {
   const kidsProducts = await sanityClient.fetch(`*[_type=="Products" && category=="kids"]`);
function kidsData(data:any)
{
  return(
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
        {kidsProducts.map(kidsData)}
</div>
      </div>
    </div>
  )
}
export default Kids;
