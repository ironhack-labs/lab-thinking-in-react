import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


export default class FilterableProductTable extends Component {

    state = {
        products: this.props.products.data,
        showAllProducts: true,
        filteredString: ""
    }

    render() {

        const filterStock = () => {
            this.setState({showAllProducts: !this.state.showAllProducts})
        }

        const filterProducts = (filterString) => {
            this.setState({filteredString: filterString})
        }

        var copy=[...this.state.products];

        var copy2=[];
        if (this.state.filteredString!=="") {
            copy2 = copy.filter(product=> product.name.includes(this.state.filteredString))
        }
        else {
            copy2 = copy
        }

        var copy3=[]
        if (!this.state.showAllProducts) {
            copy3 = copy2.filter(product => product.stocked)
        }
        else {
            copy3 = copy2
        }

        return (
            <div>
                <SearchBar clbkSearch={filterProducts} clbkStock={filterStock}/>
                <ProductTable products={copy3}/>
            </div>
        )
    }
}
