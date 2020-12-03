import React, { Component } from 'react'
import ProductRow from '../ProductRow/ProductRow.js';

export default class ProductTable extends Component {
    render() {
        
        console.log(this.props.inStock)
        let filtered = this.props.products.data
        if(this.props.inStock){
            filtered = this.props.products.data.filter(
                product => product.stocked
            )
        }
        filtered = filtered.filter(
            product => product.name.toLowerCase().includes(this.props.query.toLowerCase())
        )

        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <table>
                    <thead>
                    <tr>
                    <th>Name</th>
                        <th>Price</th>
                        <th>in Stock?</th>
                    </tr>
                    </thead>
                    <tbody>
                        {filtered.map(item => {
                        return <ProductRow sku={item} key={item.id}/>
                    }
                    )}
                    </tbody>
                </table>

                
            </div>
        )
    }
}
