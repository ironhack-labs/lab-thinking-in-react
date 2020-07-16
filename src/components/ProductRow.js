import React, {Component} from 'react'

export default class ProductRow extends Component {
    render() {
        console.log(this.props)

        const filteredList=this.props.products.filter(product => {
        if (this.props.query === " ") {
            product = this.props.products
        } else {
            return product.name.toLowerCase().includes(this.props.query.toLowerCase())
        }
            
        })
        const tableRow=filteredList.map(product => {
            return (
                <tr>
                    {product.stocked ? <td>{product.name}</td> : <td style={{color:"red"}}>{product.name}</td> }
                    <td>{product.price}</td>
                </tr>
            )
        })
        return (
            <tbody>
                {tableRow}
            </tbody>
        )
    }
}