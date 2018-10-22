import React, { Component } from "react";
import './App.css';


class ProductRow extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>

                {
                    this.props.Color === false ? <span> <span className="red">{this.props.name}</span> {this.props.price}</span> : <span> {this.props.name} {this.props.price} </span>
                }

            </div>
        )
    }
}

export default ProductRow;