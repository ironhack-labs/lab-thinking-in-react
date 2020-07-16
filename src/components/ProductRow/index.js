import React, { Component } from 'react'

class ProductRow extends Component  {
    constructor(){
        super()
        this.state = {}
    }

    render() { 
        let color
        this.props.stocked ? (color = 'black') : (color = 'red')
    
        return (
            <>
                <tr>
                    <td style={{ color : color}}>{this.props.name}</td>
                    <td>{this.props.price}</td>
                </tr>

            </>
                    )
    }
}

export default ProductRow