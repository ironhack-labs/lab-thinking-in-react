import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends Component {
  render() {
    return (
      <div class="greenBox"> {/* green box */}
        <form className="searchBox"> 
          <label class="nameLabelFilter">Name</label>
          <label class="priceLabelFilter">Price</label>
          < ProductCategoryRow />
          < ProductRow />
        </form>  
      </div>
    );
  }
}





export default ProductTable;