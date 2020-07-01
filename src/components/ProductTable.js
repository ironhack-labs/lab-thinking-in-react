import React, {Component} from 'react';
import ProductRow from './ProductRow';



class ProductTable extends Component {

  render(){
    return (
      <div>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>

              {this.props.result.map( (product, i) => {
                
                  return (
                    <ProductRow key={i} product={product}/>
                  )
                  
                }
              )}
            </tbody>
          </table>
      </div>
    )
  }
}

export default ProductTable;