import React, {Component} from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {

    state = {
       products:this.props.products,
       filterProducts: this.props.products,
    }

    filterArr = (e) => {
    //console.log(this.state.products)
        const filter = this.state.products.data.filter(function(product){
            return product.name.includes(e)
        })
       
       this.setState({
         filterProducts:filter
       }) 
    }
    

    render(){ 
        return(
            <div>
              <SearchBar filterArray={this.filterArr}/> 
              <ProductTable products={this.state.filterProducts}/> 
            </div>
        )
    }
}


export default FilterableProductTable