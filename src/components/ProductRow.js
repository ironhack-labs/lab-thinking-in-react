import React, { Component } from "react";


export default class ProductRow extends Component {
    render() {
        return (
            <>
                <p>{this.props.name}</p>
                <p>{this.props.price}</p>
            </>
        )
    }
}