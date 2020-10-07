import React from 'react';
import data from '../data.json';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
  state = {
      products: data,
      
  };
  render() {
      console.log(this.state.products)
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
              <div>
              {this.state.products.data.map((product,i)=>(
                <ProductRow 
                name ={product.name}
                price={product.price}
                stocked={product.stocked}/>   
              ))}
           </div>
          </tbody>
        </table>
      </div>
    );
  }
}
export default ProductTable;
