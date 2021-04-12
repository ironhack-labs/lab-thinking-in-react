import React, {Component} from 'react' ;
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';


class FilterableProductTable extends Component {

    render(){

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar />
            <ProductTable products={this.props.products} />
        </div>
    )
    }
}

export default FilterableProductTable