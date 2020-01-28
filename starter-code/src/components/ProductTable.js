import React, { Component } from 'react'
import ProductRow from './ProductRow';

class ProductTable extends Component {

    
    render() {
        const filteredProducts = this.props.productArray.filter(oneProduct => oneProduct.name.toLowerCase().includes(this.props.searchInputData.toLowerCase()))
        //console.log(filteredProducts)

        const filteredProductsUI = filteredProducts.map((oneProduct, index) => {
            return <ProductRow key = {index} {...oneProduct}/>;})
            
        return (
            <div>
                <table>
                <thead>
                    <tr>
                        <th>Name:</th>
                        <th>Price:</th>                        
                    </tr>
                </thead>
            <tbody>          
                
            {filteredProductsUI}

            </tbody>
            </table>

            </div>
        )
    }
}

export default ProductTable;