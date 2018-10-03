import React, { Component } from 'react';
import data from '../data.json'

class ProductCategoryRow extends Component {
    constructor(props){
        super(props)
        this.state={}

    }
    render() {
        return(
                <p>{this.props.name}</p>
        )
    }
}

export default ProductCategoryRow;