import React from 'react';
import ProductRow from "./ProductRow"

const ProductTable = props => {


    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
            {props.items.filter(item => {
              return item.name.toLowerCase().includes(props.search)
            }).map((item,i ) => {
                return(
                  <ProductRow item={item} />
                    
                )
            })}
            
        </tbody>
      </table>
    );
  }

export default ProductTable;