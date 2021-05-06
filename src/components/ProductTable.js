import {Component} from 'react'
import React from 'react'
import './ProductTable.css'
import ProductRow from './ProductRow'

class ProductTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: this.props.productData,
            letter: this.props.searchLetter
        }
    }

    render() {

        return(
            <section>
                <article className='article'>
                    <h2>Name</h2>
                    <h2>Price</h2>
                </article>

            {this.state.products.data 
                .filter(elm => (this.props.searchData.search === '' ) ? true : elm.name.toLowerCase().includes(this.props.searchData.search))
                .map(elm => <ProductRow {...elm}/>)
                }
            </section>
        )
    }
}

export default ProductTable