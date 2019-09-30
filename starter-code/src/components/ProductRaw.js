import React from 'react'

function  ProductRaw (props){

const stockColor=()=>{
    return {
      height:'40px',
      borderBottom:'1px solid #ddd',
      marginTop:'2px',
      display:'flex',
      justifyContent:'space-around',
      color: props.product.stocked ? 'black': 'red'
    }
}

    return (
      <div style={stockColor()}>
        <div>
          {props.product.name} 
        </div>
        <div>
          {props.product.price}
        </div>
      </div>
    )
}


export default ProductRaw;