import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export default class FilterableProductTable extends Component {

    state = {
        products : this.props.products,
    }

    handleFilter = (searchValue) => {
        

        const filteredProducts = this.state.products.filter((product) => {
        return product.name.toLowerCase().includes(searchValue.toLowerCase()) // formatte tout de la même manière + ne retient que la recherche
        });
        // console.log("this.state.products >>>", this.state.products); // affiche bien tous les produits
        console.log("searchValue", searchValue); // le e.target.value de searchbar est bien passé
        console.log("filteredproducts", filteredProducts);

        // est sensé updater les produits qui seront passés dans ProductTable
        this.setState({
        products: filteredProducts,
    });
    }

    render() {
        // console.log(this.state.products); ici ça s'affiche bien
        return (
            <div>
                <SearchBar handleFilter={this.handleFilter} />
                <ProductTable products={ this.state.products }> </ProductTable>
            </div>
        )
    }
}
