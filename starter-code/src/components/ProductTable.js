import React, { Component } from 'react';

import './ProductTable.css';

class ProductTable extends Component {
  render() {
      console.log(this.props.dataArray)
    return (
        <section className="ProductTable">
            
            <div className="panel-body">
            <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                        
              {this.props.dataArray.map (oneProduct =>{
                    return(
                          <tr>
                            <th scope="col">{oneProduct.name}</th>
                            <td scope="col">{oneProduct.price}</td>
                          </tr>
                     )
                    })}
                    </tbody>
                </table>
              </div>
              

            
        </section>
        );
    }
  }
export default ProductTable;