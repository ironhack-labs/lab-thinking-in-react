import React from 'react';
import 'bulma/css/bulma.css';
import ProductRow from './ProductRow'

const ProductTable = ({ itemList }) => {


  return (
    <div className="ProductTable">
      <table className="table is-hoverable">
          <thead>
          <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Category</th>

          <th>In Stock</th>
        </tr>
          </thead>
          <tbody>

        {itemList.map((item) => {
          return (
                 <ProductRow {...item}/>

            // <tr>
            //   <td>{item.name}</td>
            //   <td>{item.price}</td>
            //   <td>{item.category}</td>

            //   {item.inStock ? <td>in Stock</td> : <td>not available</td>}
            // </tr>

            
          );
        })}
                    </tbody>

      </table>
    </div>
  );
};

export default ProductTable;
