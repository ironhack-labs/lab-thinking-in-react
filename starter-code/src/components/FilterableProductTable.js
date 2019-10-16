import React, { Component } from 'react';

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.products.data,
            queryString: "",
            onStock: false
        }
        this.inputHandler = this.inputHandler.bind(this)
        this.getProducts = this.getProducts.bind(this)
    }

    inputHandler(e) {
        let { name, value, type, checked } = e.target;
        value = (type==="checkbox")?checked:value;
        this.setState({ [name]: value})
    }

    getProducts(){
        if(this.state.onStock){
            return this.state.products.filter(elem => (RegExp(this.state.queryString, "i").test(elem.name) && elem.stocked));
        } else {
            return this.state.products.filter(elem => (RegExp(this.state.queryString, "i").test(elem.name)));
        }
    }

    render() {
        return(
            <div>
                <SearchBar queryString={this.state.queryString} onStock={this.state.onStock} inputHandler={e => this.inputHandler(e)}/>
                <ProductTable products={this.getProducts()} />
            </div>
        )
    }
}

export default FilterableProductTable;