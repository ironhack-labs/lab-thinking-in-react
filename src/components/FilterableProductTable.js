import React from 'react';
import listOfProducts from "../data.json"
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
// import ProductRow from './ProductRow';

class FilterableProductTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          totalProducts : listOfProducts.data,
          searchInputField : "",
          
        };
    }

    setInputField = (searchInput) => {
        this.setState({searchInputField : searchInput})
    }

    render() {
        const productsFiltered = this.state.totalProducts.filter((product)=>{
            return product.name.toLowerCase().includes(this.state.searchInputField.toLowerCase())
        })
     
        return (
            <>
                <h1>IronStore</h1>
                <SearchBar productsList = {productsFiltered} setInputField = {this.setInputField} /> 
                <ProductTable productsList = {productsFiltered}/>

            </>
        )

    }
    
}

export default FilterableProductTable;