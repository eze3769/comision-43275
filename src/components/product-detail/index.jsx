import React from 'react'
import ItemCount from '../item-count'

const ProductDetail = ({data, addToCarrito}) => {
  return (
    <div style={{ padding: '10px 40px' }}>      
        <img src={data?.pictures?.[0].url} alt={data?.title} />
        <h2>{data?.title}</h2>
        <h3>{data?.description}</h3>
        <ItemCount stock={data?.available_quantity || 0} addToCarrito={addToCarrito} />
    </div>
  )
}

export default ProductDetail