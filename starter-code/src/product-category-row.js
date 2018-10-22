import React, { Component } from "react";
import './App.css';

class ProductCategoryRow extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div>
               <strong> {this.props.label} </strong>
                {this.props.children}
            </div>
        )
    }
}

export default ProductCategoryRow;