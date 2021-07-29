import React from 'react';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';

class FilterableProductTable extends React.Component {
    state = {
        search: ""
    }

    handleSearch(text){
        this.setState({search: text })
    }

    handleSearch(text){
        this.setState({search: text })
    }

    render(){
        const products = this.props.products.filter((product)=> {
            return product.name.toLowerCase().includes(this.state.search.toLowerCase())
        })

        return (
            <>
            <SearchBar onSearch={(text) => this.handleSearch(text)}/>
            <ProductTable products={products}/>
            </>
        )        
    }
}

export default FilterableProductTable