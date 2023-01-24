import React from 'react'
import AboutPage from '../../components/about'
import Carusel from '../../components/carusel'
import ProductsList from '../../components/products-list'
import SectionTwo from '../../components/section-two'
import HomeImg from "../../images/hero-banner.png.webp"
import "./index.scss"

const HomePage = ({wishList, setWishList}) => {
  return (
    <div id='home'>
        <div className="section">
       <div className="text">
       <div className="section-one">
            </div>
            <div className="section-two">
                <h4 className='text-h4'>Shop is fun</h4>
                <h1 className='text-h1'>Browse Our <br /> Premium Product</h1>
                <p className='text-p'>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</p>
                <button className='text-btn'>Browse Now</button>
            </div>
       </div>
            <img src={HomeImg} alt="" />
        </div>

        <div className="container">
            <div className="productsList">
                <p className='p_text'>Popular Item in the market</p>
                <h2 className='h2_text'>Trending</h2>
                <ProductsList  wishList={wishList} setWishList={setWishList}/>
            </div>
        </div>
        <div className="sectionTwo">
                <SectionTwo />
            </div>
            <div className="caruselProductList">
                <Carusel />
            </div>
            <div className="aboutPage">
                <AboutPage />
            </div>
      </div>
  )
}

export default HomePage
