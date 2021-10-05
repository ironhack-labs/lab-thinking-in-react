import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';



class FilterableProductTable extends React.Component {

    state = {
        products: this.props.products,
        searchTerm:""
    }

    setSearchField =(search)=>{
        this.setState({
            searchTerm: search
        })

    }
    
    render(){
        console.log("state",this.state.products)


       let filterProducts = this.state.products.filter(product=>{
            return product.name.includes(this.state.searchTerm)
        })
    return(
        <div>
        <SearchBar setSearchField={this.setSearchField}></SearchBar>
        <ProductTable  products={filterProducts}></ProductTable>
        </div>
    )
}

}






export default FilterableProductTable