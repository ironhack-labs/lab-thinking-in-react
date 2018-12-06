import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'
import data from './data.json'

class ProductTable extends Component {

  state = {
    listOfAllGoods: data.data,
  }


  render() {
    return (
      <div className="greenBox"> {/* green box */}
        <form className="searchBox"> 
          <label className="nameLabelFilter">Name</label>
          <label className="priceLabelFilter">Price</label>
          < ProductCategoryRow />
          < ProductRow data={this.state.listOfAllGoods}/>
        </form>  
      </div>
    );
  }
}


export default ProductTable;