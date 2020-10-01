import React, { Component } from 'react';

import SearchBar from './../searchBar/SearchBar'
import ProductTable from './../productTable/ProductTable'

class MainComponents extends Component {

    constructor() {

        super()
        this.state = {
            products: [],
        }
    }

    componentDidMount() {

        this.setState({ products: this.props.products.data })
    }

    filterProducts = (stringValue, checkedValue) => {

        const stringToCheck = new RegExp(stringValue, 'i')

        if (checkedValue) {

            this.setState({ products: this.props.products.data.filter(elm => elm.name.match(stringToCheck) && elm.stocked === checkedValue) })
        } else {

            this.setState({ products: this.props.products.data.filter(elm => elm.name.match(stringToCheck)) })
        }

    }

    render() {

        return (

            <main>

                <h1>IronStore</h1>

                <SearchBar filterMethod={this.filterProducts} />

                <ProductTable products={this.state.products} />

            </main >

        )
    }
}

export default MainComponents;