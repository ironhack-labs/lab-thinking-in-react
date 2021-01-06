import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {
        state = {
                listProducts: [...this.props.products],
                isOnStock: false,
                searchedProd: ''
        }

        onChangeSearch = (event) => {
                event.preventDefault();
                let newList = [];
                const searchedProduct = event.target.value;

                //show product that is on stock 
                if (!this.state.isOnStock) {
                        newList = [...this.props.products].filter(product => {
                                return product.name.toLowerCase().includes(searchedProduct.toLowerCase())
                        });
                } else {
                        newList = [...this.props.products].filter(product => {
                                return product.name.toLowerCase().includes(searchedProduct.toLowerCase()) && product.stocked === true
                        });
                }

                this.setState({
                        listProducts: newList,
                        searchedProd: searchedProduct
                })
        }

        onChangeCheckBox = (event) => {
                let newList = [];
                if (event.target.checked === true) {
                        this.setState({ isOnStock: true });
                        newList = [...this.state.listProducts].filter(product => product.stocked === true);

                } else {
                        this.setState({ isOnStock: false });
                        newList = [...this.props.products].filter(product => {
                                return product.name.toLowerCase().includes((this.state.searchedProd).toLocaleLowerCase())
                        });
                }
                this.setState({ listProducts: newList });
        }


        render() {
                return (
                        <div>
                                <h1>IronStore</h1>
                                <SearchBar
                                        onChangeSearch={this.onChangeSearch}
                                        onChangeCheckBox={this.onChangeCheckBox}
                                        inputSearch={this.state.inputSearch}
                                />
                                <ProductTable products={this.state.listProducts} handleSearch={this.search} />
                        </div>
                );
        }
}
