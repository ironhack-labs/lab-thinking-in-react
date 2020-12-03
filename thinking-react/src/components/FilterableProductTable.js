import ProductTable from './ProductTable/ProductTable'

import React, { Component } from 'react'

class FilterableProd extends Component {

    constructor(props) {
        super(props)

        this.state = {

            products: this.props.products.data,
            filter: ''

        }
    }

    changeHandler = e => {

        const { name ,value } = e.target

        this.setState({ [name]: value })

        const filteredProducts = this.state.products.filter(elm => elm.name.includes(value))

        if (filteredProducts.length >= 1) {

            this.setState({ products: filteredProducts })
            

        } else {

            this.setState({ products: this.props.products.data })

            console.log(this.props.products.data)

        }
        
    }

    render() {


        return (

            <section>
                <form>
                    <label>Búsqueda</label>
                    <input name="filter" value={this.state.filter} onChange={this.changeHandler}></input>
                </form>
                <ProductTable products={this.state.products} />
            </section>

        )
    }
}

export default FilterableProd