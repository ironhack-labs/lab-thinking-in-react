import React, { Component } from 'react'

export default class ProductRow extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    
    render() {
        return (
            <div className='component product'>
                <p style={this.props.stocked === false ? { color: "red" } : { color: "black" }}>{this.props.name}</p>
                <p>{this.props.price}</p>
            </div>
        )
    }
}
