import React, { Component, Fragment } from 'react';

class ProductRow extends Component {
  render() {
    return (
    
      <Fragment>
        {
          this.props.item.stocked ?
            <Fragment>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.price}</td>
            </Fragment> 
              :
            <Fragment>
              <td style={{color:"red"}}>{this.props.item.name}</td>
              <td style={{color:"red"}}>{this.props.item.price}</td>
            </Fragment>
        }
      </Fragment>
    );
  }
}

export default ProductRow;