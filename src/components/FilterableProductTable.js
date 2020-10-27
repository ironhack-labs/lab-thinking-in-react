import React, {Component} from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {

    state ={
       products:this.props.products,
       filterProducts: this.props.products,
    }

    filterArr = (value) => {
        this.setState((product) => ({
            products: this.state.filterProducts.filter(item => 
               item.name.toLowerCase().includes(product.toLowerCase()))
        })
        )    
    }



    render(){ 
        return(
            <div>
              <SearchBar filterArray={this.filterArr}/>
              <ProductTable products={this.state.products}/> 
            </div>
        )
    }
    
}

export default FilterableProductTable