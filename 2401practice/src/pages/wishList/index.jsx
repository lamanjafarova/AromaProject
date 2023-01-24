import React from 'react'
import "./index.scss"

const WishList = ({wishList, setWishList}) => {
    const handleRemove = (_id) => {
        let newWishList = wishList.filter((el) => el._id !== _id)
        setWishList(newWishList)
    }
  return (
    <div className='container'>
     <div className="wish">
     {wishList.map((product) => {
       return <div className="wishcard">
       <img src={product.imgUrl} alt="" />
        <p className='product-p'>{product.title}</p>
        <h1 className='product-h1'>{product.name}</h1>
        <p className='product-price'>{product.price}</p>
        <button className='remove' onClick={() => handleRemove(product._id)}>Remove</button>
       </div>
 
      })}
     </div>
    </div>
  )
}

export default WishList
