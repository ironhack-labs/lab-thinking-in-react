
import React, { Component } from "react";
import products from './../../data.json'
import ProductRow from "./ProductRow";

class ProductTable extends Component {

    constructor() {
        super()
        this.state = { productscopy: products.data }

    }



    render() {
        return (<>
        
            {
                this.state.productscopy.map(elm => <ProductRow key={elm._id} category={elm.category} price={elm.price} stocked={elm.stocked} name={elm.name} />)
            }
        </>
        )
    }
}


export default ProductTable