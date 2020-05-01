import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component{

    
    constructor(props) {
        super(props);
        //console.log(allProducts);
        
        // this.state = {
        //     products: props.products,
        // }


    }

    render() {

        const {name, price, stocked} = this.props;
        //const { products } = this.state;
        //console.log("PRODUCT TABLE", products);
        return(
                
                        
           //products.data.map((elem, idx) => (
            <ProductRow name={name} price={price} stocked={stocked}/>
           //))
  
       
        );
    }
}

export default ProductTable; 