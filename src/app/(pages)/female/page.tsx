import React from 'react'
import products from '@/app/utils/mock';
import Image from 'next/image';
 const Female = () => {
  const femaleProducts = products.filter(function(check){return check.category=='female'});
function femaleData(data:any)
{
return(
  <div key={data.id}>
    <h1>{data.name}</h1>
    <p>{data.price}</p>
    <Image src={data.image} width={200} height={200} alt={data.name}/>
  </div>
)
}
  return (
    <div>Female
      <div>
        {femaleProducts.map(femaleData)}
      </div>
    </div>
  )
}
export default Female;