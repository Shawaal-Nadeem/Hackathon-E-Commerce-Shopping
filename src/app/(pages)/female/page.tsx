import React from 'react'
import products from '@/app/utils/mock';
import Image from 'next/image';

 const Female = () => {
  const femaleProducts = products.filter(function(check){return check.category=='female'});
function femaleData(data:any)
{
return(
  <div key={data.id}>
    <Image src={data.image} width={270} height={270} alt={data.name}/>
    <h1>{data.name}</h1>
    <h3>{data.cloth_Type}</h3>
    <p>{data.price}</p>
  </div>
)
}
  return (
    <div>
      <div className='productCards'>
        {femaleProducts.map(femaleData)}
      </div>
    </div>
  )
}
export default Female;