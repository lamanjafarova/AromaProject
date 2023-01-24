import React from 'react'
import Blog1 from "../../images/blog1.png.webp"
import Blog2 from "../../images/blog2.png.webp"
import Blog3 from "../../images/blog3.png.webp"
import "./index.scss"
const AboutPage = () => {
  return (
    <div id='about'>
      <div className="container">
            <p className='about-p'>Popular Item in the market</p>
            <h2 className='about-h2'>Latest News</h2>
            <div className="aboutImgandText">
             <div className='text'>
             <img src={Blog1} alt="" />
                <p className='txt-p'>The Richland Center Shooping News and weekly shooper</p>
                <p className='txt-p-2'>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                <button className='btn-txt'>Read More <i className="fa-solid fa-arrow-right"></i></button>
             </div>
             <div className='text'>
             <img src={Blog2} alt="" />
                <p className='txt-p'>The Richland Center Shooping News and weekly shooper</p>
                <p className='txt-p-2'>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                <button className='btn-txt'>Read More <i className="fa-solid fa-arrow-right"></i></button>
             </div>
             <div className='text'>
             <img src={Blog3} alt="" />
                <p className='txt-p'>The Richland Center Shooping News and weekly shooper</p>
                <p className='txt-p-2'>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                <button className='btn-txt'>Read More <i className="fa-solid fa-arrow-right"></i></button>
             </div>
         </div>
     </div>
 </div>
  )
}

export default AboutPage
