import React from 'react'
import Image from "../../images/sectionImg.webp"
import "./index.scss"

const SectionTwo = () => {
  return (
    <div id='section'>
      <div className="section-two">
      <img src={Image} alt="" />
      <div className="text">
        <h3 className='section-text-h3'>Up To 50% Off</h3>
        <h4 className='section-text-h4'>Winter Sale</h4>
        <p className='section-text-p'>Him she'd let them sixth saw light</p>
        <button className='shop-btn'>Shop Now</button>
      </div>
      </div>
    </div>
  )
}

export default SectionTwo
