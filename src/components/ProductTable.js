import React from 'react'

import ProductRow from './ProductRow'

class ProductTable extends React.Component{

    render(){
        return(
            <div>
                <table className="product-table">
                    <thead>
                        <tr>
                            <th>Name Sporting</th>
                            <th>Price Goods</th>
                        </tr>
                    </thead>
                    <ProductRow 
                    products={this.props.products}
                    />
                </table>
            </div>
        )
    }
}

export default ProductTable
