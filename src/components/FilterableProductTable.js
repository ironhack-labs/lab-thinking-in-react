import React from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

class FilterableProductTable extends React.Component {

    state = {
        query: '',
        inStockProducts: false, 
        products: this.props.products
    };

    setQuery = query => { 
        this.setState({
          query: query
        })
    };

    setChecked = () => {

        const filtered = this.props.products.filter(product => {
            let result = '';

            if (this.state.inStockProducts === false){
                result = product.stocked === true
            } else {
                result = product;
            }
            return result
        })
        

        this.setState(state => ({
            inStockProducts: !state.inStockProducts,
            products: filtered
        }));
    };

    render() {
        return (
            <>
                <h1>Iron Store</h1>
                <SearchBar 
                    query={this.state.query}
                    setQuery={this.setQuery}
                    setChecked={this.setChecked}
                    inStockProducts={this.state.inStockProducts}
                />
                <ProductTable 
                    products= {this.state.products}
                    query={this.state.query}
                />
            </>
        );
    }
}

export default FilterableProductTable;