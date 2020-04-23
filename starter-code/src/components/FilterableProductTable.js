import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import data from '../data.json'


class FiltrableProductTable extends Component {
    state = {
        products: data.data,
        newListProducts: data.data,
    }
    searchProduct = (product) => {
        let listProducts = [...this.state.newListProducts]
        let listFiltred = listProducts.filter(function(item){

            if(item.name.toUpperCase().includes(product.toUpperCase())){
                return true;
              }else{
                return false;
              }
        })
        this.setState({products: listFiltred})
    }

    render(){

        return(
            <div>
                <SearchBar searchProduct={this.searchProduct}></SearchBar>
                <ProductTable products={this.state.products} />
            </div>
        )
    }
}

export default FiltrableProductTable;