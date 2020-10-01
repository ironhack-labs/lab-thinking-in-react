import React, { Component } from 'react'
import ProductRow from '../productRow/ProductRow'
import SearchBar from '../searchBar/SearchBar'
import data from '../../data.json'


class ProductTable extends Component {

    constructor(props) {
        super()
        this.state = {
            data: props.product.products.data
        }
    }


    searchProduct = (text) => {

        let searchedProduct = data.data.filter(elm => elm.name.toLowerCase().includes(text.text.toLowerCase()))
        console.log(searchedProduct)
        this.setState({ data: searchedProduct })

    }




    render() {
        let stockColor = ''
        console.log("----", this.props.product.products.data);
        return (
            <>
                <SearchBar searchProduct={this.searchProduct} />
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Price</th>

                    </thead>
                    <tbody>
                        {this.state.data.map(elm => {
                            elm.stocked ? stockColor = '' : stockColor = 'red';
                            return <ProductRow className={stockColor} key={elm.id} {...elm} />
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}

export default ProductTable