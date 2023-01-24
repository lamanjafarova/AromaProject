import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./index.scss"

const ProductsList = ({wishList, setWishList}) => {
    const [products, setProducts] = useState([]);
    const getData = async() => {
        let response = await axios.get("http://localhost:8000/product")
        setProducts(response.data)
    }
    useEffect(() => {
      getData()
    }, []);
    
    const handleDelete = (_id) => {
      axios.delete(`http://localhost:8000/product/${_id}`)
      const deletedData = products.filter((elem) => elem._id !== _id)
      setProducts(deletedData)
    }
const handleSort = (obj) => {
  let sortedPrice = obj.sort((a, b) => a.price - b.price)
  setProducts([...sortedPrice])
}
   const handleSearch = (e) => {
    axios.get("http://localhost:8000/product")
    .then((response) => {
      let searchProduct = response.data.filter((element) => element.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
      setProducts(searchProduct)
    })
   }
   const addWishListFunction = (obj) => {
      if(!wishList.find((element) => element._id === obj._id)){
        setWishList([...wishList, obj])
      }
      else{
        window.alert("Add Already")
      }
   }
  return (
    <div id='product'>
            <div className="products-list">
      <div className="searchSort">
      <button className='sortBtn' onClick={() => handleSort(products)}>Sort by Price</button>
            <input className='search' type="text" placeholder='Search' onChange={(e) => handleSearch(e)} />
      </div>
           <div className="card">
           {products.map((element) => {
                        return <div className='card-detail'>
                        <Link to={`/home/${element._id}`}><img src={element.imgUrl} alt="" /></Link>
                        <p className='card-p'>{element.title}</p>
                        <h5 className='card-h5'>{element.name}</h5>
                        <p className='card-price'>${element.price}.00</p>
                        <button className='delBtn' onClick={() => handleDelete(element._id)}><i className="fa-solid fa-trash"></i></button>
                        <button className={wishList.filter((el) => el._id === element._id ? "add" : "not-add")} onClick={() => addWishListFunction(element)}><i className="fa-solid fa-heart"></i></button>
                        </div>
                    })} 
           </div>
            </div>
        </div>
  )
}

export default ProductsList
