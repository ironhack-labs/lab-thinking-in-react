import React, { Component } from "react";
import './App.css';

class ProductTable extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
               {this.props.children}
            </div>
        )
    }
}

export default ProductTable ;