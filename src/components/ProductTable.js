import React, {Component} from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render(){
    return (
      <div>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
              {this.props.rendered.map( (product, i) => {return (<ProductRow key={i} product={product} /> ) })}
            </tbody>
          </table>
      </div>
    )
  }
}