import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./index.scss"

const DetailPage = () => {
    const { _id } = useParams()
    const [detailData, setDetailData] = useState([]);
    const getData = async() => {
        let response = await axios.get(`http://localhost:8000/product/${_id}`)
        setDetailData(response.data)
    }
    useEffect(() => {
   getData()
    }, []);
    const navigate = useNavigate()
    const handleDelete = (_id) => {
        axios.delete(`http://localhost:8000/product${_id}`)
        navigate("/")
    }
  return (
    <div className='container'>
     <div className="details">
        <img src={detailData.imgUrl} alt="" />
        <p className='detail-p'>{detailData.title}</p>
        <h1 className='detail-h1'>{detailData.name}</h1>
        <p className='detail-price'>{detailData.price}</p>
        <div className="buttons">
        <button className='backBtn' onClick={() => navigate("/")}>Go Back</button>
        <button className='delBtn' onClick={() => handleDelete(detailData._id)}>Delete</button>
        </div>
     </div>
    </div>
  )
}

export default DetailPage
