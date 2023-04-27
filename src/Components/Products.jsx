import React, { useEffect, useState } from 'react'
import './Products.css'
import { NavLink, useNavigate } from 'react-router-dom'

function Products() {
    const [details,setDetails]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data)=>{console.log(data)
            setDetails(data)})
    },[])
    const handleDetails=()=>{
        navigate('/productdetails')
    }
  return (
    <div>
        <h1>Products</h1>
        {details.length>0?<div className='details'>
            {details.map((items,index)=>{
                return <div className='products'>
                    <div className='items'>
      <img src={items.image} className='image'/>
      <h2>Title: {items.title}</h2>
      <h4>Price: ${items.price}</h4>
      <NavLink to={`/productdetails/${items.id}`}><button className='btn' onClick={handleDetails}>Product Details</button></NavLink>
      </div>
                </div>
            })}
        </div>:<h2 style={{color:'red',textAlign:'center'}}>No Products To Display</h2>}
    </div>
  )
}

export default Products
