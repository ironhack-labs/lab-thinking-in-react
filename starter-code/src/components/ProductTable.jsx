import React, { Component } from 'react';
import ProductRow from './ProductRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAlphaUp } from '@fortawesome/free-solid-svg-icons'
import { faSortAlphaDown } from '@fortawesome/free-solid-svg-icons'
import { faSortAmountUpAlt } from '@fortawesome/free-solid-svg-icons'
import { faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons'


export default class ProductTable extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name {' '}<span onClick={this.props.clbkSortName}>{this.props.sortByName>0 ? <FontAwesomeIcon icon={faSortAlphaUp}/> : <FontAwesomeIcon icon={faSortAlphaDown}/>}</span></th>
              <th>Price{' '}<span onClick={this.props.clbkSortPrice}>{this.props.sortByPrice>0 ? <FontAwesomeIcon icon={faSortAmountUpAlt}/> : <FontAwesomeIcon icon={faSortAmountDownAlt}/>}</span></th>
            </tr>
          </thead>
          <tbody>
            <ProductRow products={this.props.products}/>
          </tbody>
        </table>
      </div>
    );
  }
}
