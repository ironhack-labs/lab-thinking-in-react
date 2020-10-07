import React from 'react';

import Searchbar from '../SearchBar';
import ProductTable from '../ProductTable';

const data = require('../../data.json');
const products = data.data.map((product) => product);

class FilterableProductTable extends React.Component {

  state = {
    products: products,
  };

  search = (value) => {
      console.log("search in table", value);
      let donotmutate = [...products];
      let newarray = donotmutate.filter((product)=> product.name.toLowerCase().includes(value.toLowerCase()) )
        console.log(newarray)
        this.setState({
            products: newarray
        })
  }

  showStocked = (ischecked) => {
    //console.log("search in table", value);
    if (ischecked) {
    let donotmutate = [...products];
    let newarray = donotmutate.filter((product)=> product.stocked )
      console.log(newarray)
      this.setState({
          products: newarray
      })
    } else {
        this.setState({
            products: products
        })
    }
  }

  render() {
    return (
      <div className="filterable-product-table">
        <h1> Iron Store </h1> <Searchbar search={this.search} showStocked={this.showStocked} />{' '}
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
