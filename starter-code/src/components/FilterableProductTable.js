import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import products from '../data.json'

class FilterableProductTable extends Component {

    state = {
        productList: products.data,
        filteredProductList: []
    }

    componentWillMount() {
        this.setState({ filteredProductList: this.state.productList })
    }

    filterProducts = () => {
        let filteredProducts = this.state.productList;

        filteredProducts = filteredProducts.filter(product => {
            product.name.includes('ball');
        })
    }

    componentDidUpdate() {
        // change the state here
    }

    render() {
        return(
            <div>
                <SearchBar />
                <ProductTable products={this.state.filteredProductList} />
            </div>
        )
    }
}

export default FilterableProductTable;

