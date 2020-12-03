import data from './../data.json'
import React, { Component } from 'react'
import Product from './ProductRow'


class Table extends Component {

    constructor() {
        super()
        this.state = {
            items: data,
            text: ''
        }
    }

    render() {
console.log(this.props)
        return (<>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>

                    {this.props.data.map(elm => < Product key={elm.id} name={elm.name} price={elm.price} />)}

                </tbody>

            </table>
        </>
        )
    }
}
export default Table