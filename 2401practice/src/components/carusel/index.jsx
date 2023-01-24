import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./index.scss"
import axios from 'axios';
const Carusel = () => {
    const [caruselData, setCaruselData] = useState([]);
    const getData = async() => {
        let response = await axios.get("http://localhost:8000/product")
        setCaruselData(response.data)
    }
    useEffect(() => {
      getData()
    }, []);
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
  return (
    <div className='carusel'>
     <div className="container">
            <p className='carusel-p'>Popular Item in the market</p>
            <h2 className='carusel-h2'>Best Sellers</h2>
             <Slider {...settings}>
                {caruselData.map((element) => {
                    return <div className="caruselData">
                        <img src={element.imgUrl} alt="" />
                        <p className='card-p'>{element.title}</p>
                        <h5 className='card-h5'>{element.name}</h5>
                        <p className='card-price'>${element.price}.00</p>
                    </div>
                })}
          </Slider>
     
      
     </div>
    </div>
  )
}

export default Carusel
