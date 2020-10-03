import React, { Component } from 'react'
import ProductTable from '../ProductTable/ProductTable'
import SearchBar from '../SearchBar/SearchBar'

export default class FilterableProductTable extends Component {
    state = {
        products: this.props.products.data,
        showProducts: this.props.products.data,
        checked: false,
    }

    onChange = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value,
          
        });
      };

    handleSearch = (event) => {
        const { value } = event.target;
        this.onChange(event);
        const filteredItems = this.state.products?.filter((item) =>
        this.state.checked ? item.name.toLowerCase().includes(value.toLowerCase()) && item.stocked : item.name.toLowerCase().includes(value.toLowerCase())
        );
        this.setState({
          showProducts: filteredItems,
        });
      };

      handleCheckbox = () => {
        this.setState({
          checked: !this.state.checked
        });
      };

    render() {
        return (
            <div>
                <h1 className="title is-1">IronStore</h1>
                <SearchBar handleSearch={this.handleSearch} handleCheckbox={this.handleCheckbox}/>
                <ProductTable products={this.state.showProducts} />
            </div>
        )
    }
}
