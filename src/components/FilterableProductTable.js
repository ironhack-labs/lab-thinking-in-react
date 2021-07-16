import React, {Component} from 'react'
import ProductTable from "./ProductTable";
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {
    state= {
        products: this.props.products,
        query: ''
    }

    setQuery = query => {
        this.setState({
          query: query
        })
      }
      
    render() {
        return (
            <>
                <h4>Search</h4>
                <SearchBar 
                    query={this.state.query}
                    setQuery={this.setQuery}
                />
                <ProductTable 
                    products= {this.state.products}
                    query= {this.state.query}
                />
            </>
        )
    }
} 