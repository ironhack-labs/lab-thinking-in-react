import React from 'react';
import './ProductDetail.css'


export default function ProductDetail(props) {

    console.log('This is props in Product Detail', props)
    const product =props.product

    return (
       
   
          <tr key={product.name} style={!product.stocked ? {'color': 'red'} : {'color': 'black'}}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
         </tr>
   

    )
}
