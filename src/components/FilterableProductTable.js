import React, {Component} from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {

    state = {
        products:this.props.products.data,
        productsCopy: this.props.products.data
       // filterProducts: this.props.products,
     }

     filterArr = (e) => {
        // const filter = this.state.products.data.filter(function(product){
        //     return product.name.includes(e)
        // })
         const filter = this.state.productsCopy.filter(function(product){
            if(product.name.toUpperCase().includes(e.toUpperCase())){
                return product
            }
        })
        // this.setState({
        //     filterProducts:filter
        //   })    
       this.setState({
         products:filter  
       }) 
    }

    render(){ 
        return(
            <div>
              <SearchBar filterArray={this.filterArr}/> 
              {/* <ProductTable products={this.state.filterProducts}/>  */}
              <ProductTable products={this.state.products}/> 
            </div>
        )
    }
}


export default FilterableProductTable