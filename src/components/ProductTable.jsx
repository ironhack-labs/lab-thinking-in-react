import React, { Component } from 'react'
import ProductRow from './ProductRow'
import dataJson from './../data.json'

const datas = dataJson.data

export default class ProductTable extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            datas
                                .filter(data => data.name.toLowerCase().match("^"+this.props.renderValue.toLowerCase()+".*"))
                                .map((prod,index) => <ProductRow name ={prod.name} price={prod.price} key={index}/> )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
