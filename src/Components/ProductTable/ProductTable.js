import React from 'react'
import ProductRow from './ProductRow/ProductRow'
import './ProductTable.css'


class ProductTable extends React.Component {
    constructor() {
        super()
        
        this.state = {

        }
    }


    render() {
        return(
            <>
                <div className="container-producttable">
                    {this.props.products.map((product) => 
                    <ProductRow product = {product}/>
                
                    )}
                </div>
            </>
        )
    }
}


export default ProductTable