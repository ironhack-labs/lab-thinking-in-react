import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  constructor(props){
    super(props)
    this.state = {data: props.products}
  }

  render() {
    console.log(this.state)

    return (
      <div className="Table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            
            {this.state.data.map((item) => {
              return <ProductRow key= {item.name} name={item.name} price ={item.price} stocked ={item.stocked}/>
            })}
            
          </tbody>

        </table>
        
      </div>
    );
  }
}

export default ProductTable;