import React, { Component } from 'react';
import ProductRow from './ProductRow';


class ProductTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrProducts: this.props.products.data
        }
    }
    componentDidUpdate(){
        console.log(this.props, this.state.filteredProducts)
    }
    render() {
        
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.filtered.length !== 0 ? this.props.filtered.map(elm => <ProductRow {...elm}/>) : this.props.products.data.map(elm => <ProductRow {...elm}/>)}
                </tbody>
            </table>
            
        )
    }
}

export default ProductTable