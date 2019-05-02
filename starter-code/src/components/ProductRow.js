import React, { Component, Fragment } from 'react'

class ProductRow extends Component {
    render() {
        const { searchInput } = this.props
        let productsArr = this.props.products.data
        if (!searchInput == '') {
            productsArr = productsArr.filter(el => {
                return el.name.toUpperCase().includes(searchInput.toUpperCase())
            })
        }
        return (
            <Fragment>

                {productsArr.map((el, i) => {
                    return (
                        <tr key={i}>
                            <td style={!el.stocked ? { color: "red" } : { color: "black" }}>
                                {el.name}
                            </td>
                            <td>{el.price}</td>
                        </tr>
                    )
                })}

            </Fragment>
        )
    }
}

export default ProductRow
