import React from 'react';


import Product from '../product/product'

export default class ProductsGrid extends React.Component {
    render() {
        return (


            <Product name={this.props.name} price={this.props.price} stocked={this.props.stocked}></Product>

        )
    }
}


