import React from 'react';
import ProductItem from '../product-item/ProductItem'
import './product-list.css'

const ProductList = (props) => {
  
    return(
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>        
        </thead>
        <tbody>
          {
            props.data.map((el, idx) => {
              return <ProductItem name={el.name} idx={idx} price={el.price} stocked={el.stocked} />
            })
          }
        </tbody>
      </table>
    )
  }

export default ProductList;
