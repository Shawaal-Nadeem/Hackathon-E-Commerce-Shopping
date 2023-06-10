import Style from './home.module.css'
import { LuShoppingCart } from 'react-icons/lu'
import Link from 'next/link'
 const Home = () => {
  return (
    <div className={Style.home}>
      <div className={Style.content1}>
      <div className={Style.col1}>
      <button className={Style.saleBtn}>Sale 70%</button>
      <h1>An Industrial Take on Streetwear</h1>
      <p>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
      <Link href={'/all_products'}><button className={Style.shopingBtn}>
<LuShoppingCart size={20}/>
        Start Shopping
        </button></Link>
        <div className={Style.logoPics}>
          <img src='https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero1.66abddd4.png&w=96&q=75' alt='Loading...'></img>
          <img src='https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero2.247cd605.png&w=96&q=75' alt='Loading...'></img>
          <img src='https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero3.6076521d.png&w=96&q=75' alt='Loading...'></img>
          <img src='https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero4.0489f1fc.png&w=96&q=75' alt='Loading...'></img>
        </div>
      </div>
    <div className={Style.col2}><img src='/assets/images/homepic.png' alt='Loading...'></img></div>
      </div>
    </div>
  )
}
export default Home;