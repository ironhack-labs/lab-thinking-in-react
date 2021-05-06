import React, { Component } from 'react'
import ProductRow from './ProductRow'

export default class ProductTable extends Component {
    render() {
        
        const filteredProducts = this.props.products.filter(product => {
           
            return (this.props.stocked ? product.stocked : true) && product.name.toLowerCase().includes(this.props.query.toLowerCase()) 
          
        });


        const mappedProducts = filteredProducts.map(product =>  <ProductRow product={product}/>)

        return (
            
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mappedProducts}
                    </tbody>
                </table>
            </div>
                
        )
    }
}

