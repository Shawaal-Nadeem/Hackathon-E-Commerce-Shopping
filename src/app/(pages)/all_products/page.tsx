import React from 'react'
import { urlForImage } from '../../../../sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { sanityClient } from '@/app/lib/sanityClient';
const AllProducts = async () => {
    const allProductsData = await sanityClient.fetch(`*[_type=='Products'] {
      name,
      slug,
      category,
      price,
      cloth_Type,
      image
    }`)
    console.log(allProductsData);
    // return data;
    
    
  function allData(data:any)
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
      {allProductsData.map(allData)}
      </div>
      </div>
    </div>
  )
}
export default AllProducts;
