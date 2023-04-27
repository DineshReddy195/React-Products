import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'

function ProductDetails() {
    const {id}=useParams();
    const [item,setItem]=useState({
        image:'',
        title:'',
        category:'',
        price:'',
        description:''
    })
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`).then((res)=>res.json()).then((data)=>{console.log(data)
        setItem(data)})
    },[])
  return (
    <div>
           <h1>Product Details</h1>
           <div className='product'>
        <img src={item.image} alt={item.title} className='image'/>
        <h2>{item.title}</h2>
        <h5>Category: {item.category}</h5>
        <h3>Price: ${item.price}</h3>
        <h3>About the product:</h3>
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default ProductDetails
