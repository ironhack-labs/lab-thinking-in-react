import React, { Component } from 'react';
import ProductRow from './ProductRow'

class ProductTable extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        this.setState({items: this.props.products})
    }

    render() {
        return(
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>

                { this.state.items.map(item => (
                    <ProductRow name={item.name} price={item.price} stock={item.stocked ? null : "outOfStock"} />
                )) }
            </table>
        )
    }
}

export default ProductTable;