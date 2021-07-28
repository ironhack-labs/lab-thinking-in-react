import React, { Component } from 'react';
import ProductRow from './ProductRow';
import SearchBar from './SearchBar';
import list from "../data.json"




class ProductTable extends Component {

    state = {
        products: [...list.data],
        filteredProducts: [...list.data],
    }

    filterProducts = (inputSearch) => {

        console.log(inputSearch)

        const filtered = this.state.products.filter((element) => {
            return element.name.toLowerCase().includes(inputSearch.toLowerCase())
        })

        this.setState({

            filteredProducts: filtered
        })
    }



    render() {

        return (<div>
            <div>
                <SearchBar filterProducts={this.filterProducts} />
            </div><div className="name-price">
                <div>
                    <h1>Name</h1>
                </div>
                <div>
                    <h1>Price</h1>
                </div>
            </div>
            {this.state.filteredProducts.map((item) => {
                return <ProductRow key={item.id} name={item.name} price={item.price} />
            })}

        </div>

        )
    }
}

export default ProductTable