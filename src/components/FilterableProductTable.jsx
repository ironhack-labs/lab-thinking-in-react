import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: this.props.products.data,
            search: '',
            checkbox: false,

        }
    }

    handleChange(e) {
        console.log(e.target.value)
        this.setState({
            search: e.target.value,
        });
    }

    handleCheckbox() {
        this.setState({
            checkbox: !this.state.checkbox
        });
    };

    render() {
        const filteredItems = [...this.state.products].filter(product => {
            if (!this.state.checkbox) {
                if(product.name.toLowerCase().includes(this.state.search.toLowerCase()) && product.stocked) {
                    return product
                } else if (product.name.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return product
                }
            }
            if(this.state.checkbox) {
                if(product.name.toLowerCase().includes(this.state.search.toLowerCase()) && product.stocked) {
                    return product.stocked
                } else if (product.name.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return product.stocked
                }
            }
        })
        return (
            <div>
                <h1 className='jumbotron'>Iron Store</h1>
                <SearchBar
                    name='search'
                    value={this.state.search}
                    onChange={this.handleChange.bind(this)}
                    onClick={this.handleCheckbox.bind(this)}

                />
                <ProductTable
                    data={filteredItems}
                />
            </div>
        );
    }
}

export default FilterableProductTable;