import React, { Component } from 'react'

import ProductTable from './ProductTable';
import  SearchBar from './SearchBar.jsx';


class FilterableProductTable extends Component {
   
    state = {
        products: this.props.products,
    }

    render() {
      
        return (
            <div>
                <h1>IronStore</h1>
                {/* <div className="monBOule"> toto {this.props.data.price}</div> */}
                {/* {arrProduct} */}




                <SearchBar />
                <ProductTable products={this.state.products} />
            </div>
        )
    }
}


export default  FilterableProductTable;