import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.products.data,
            filteredProducts: this.props.products.data,
            inputFilter: '',
            onlyOnStock: false,
            onlyStocked: this.props.products.data.filter(p => p.stocked === true),
        }
    }

    filterProducts = event => {
        this.setState({inputFilter: event.target.value}, () => {
            if (this.state.onlyOnStock) {
                const filtered = this.state.onlyStocked.filter(p => p.name.toLowerCase().includes(this.state.inputFilter.toLowerCase()));
                this.setState({filteredProducts: filtered});
            } else {
                const filtered = this.state.products.filter(p => p.name.toLowerCase().includes(this.state.inputFilter.toLowerCase()));
                this.setState({filteredProducts: filtered}, console.log(this.state.onlyStocked))
            }
        })
    }

    onlyStockedProducts = event => {
        this.setState({onlyOnStock: !this.state.onlyOnStock}, () => {
            if (this.state.onlyOnStock && this.state.inputFilter.length < 1) {this.setState({filteredProducts: this.state.onlyStocked})}
            else if (this.state.onlyOnStock && this.state.inputFilter.length > 0) {
                const filtered = this.state.onlyStocked.filter(p => p.name.toLowerCase().includes(this.state.inputFilter.toLowerCase()));
                this.setState({filteredProducts: filtered})
            } else if (!this.state.onlyOnStock && this.state.inputFilter.length > 0) {
                const filtered = this.state.products.filter(p => p.name.toLowerCase().includes(this.state.inputFilter.toLowerCase()));
                this.setState({filteredProducts: filtered})
            } else this.setState({filteredProducts: this.state.products})
        });
    }

    render() {return(
        <div>
            <h1 className='title is-1'>IronStore</h1>
            <SearchBar
            filter={this.filterProducts}
            data={this.state.inputFilter}
            onlyStocked={this.onlyStockedProducts}
            />
            <ProductTable products={this.state.filteredProducts} />
        </div>
    )}
}

export default FilterableProductTable;