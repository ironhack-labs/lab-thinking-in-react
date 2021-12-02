import React, { Component }from 'react'


class ProductRow extends Component{
    render() {
        return (
            <>
                <td style={this.props.stocked ? { color: 'black' } : { color: 'red' }}>{this.props.name}</td>
                <td>{this.props.price}</td>
            </>
        )
    }
}

    export default ProductRow