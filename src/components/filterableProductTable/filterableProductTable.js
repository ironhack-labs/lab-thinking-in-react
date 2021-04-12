import React, {Component} from 'react' ;
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';


class FilterableProductTable extends Component {

    state = {
        searchProduct:""
    }

    handleSearchProduct = (e) => {
        this.setState({searchProduct: e})
    }

    search = () => {
        return this.props.products.filter(product => product.name.toLowerCase()
        .includes(this.state.searchProduct.toLowerCase()))
    }

    render(){

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar value={this.state.searchProduct} onChange={this.handleSearchProduct} />
            <ProductTable products={this.search()} />
        </div>
    )
    }
}

export default FilterableProductTable