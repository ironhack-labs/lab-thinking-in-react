import React, { Component } from 'react'
import ProductRow from './ProductRow'

export default class ProductTable extends Component {
    
    displayRows = () => {
        return (
            this.props.goodsList.map(forSaleGood => {
                return (
                    <ProductRow 
                        name= {forSaleGood.name}
                        price= {forSaleGood.price}
                        idKey= {forSaleGood.idKey}
                        stocked= {forSaleGood.stocked}
                        category= {forSaleGood.category}
                    />
                )
            })
        )
    }

    render() {

        return (
            <div>
                <table>
    
                    <thead>
                        <tr>
                            <th>Name </th>
                            <th>Price </th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        { this.displayRows() }
                    </tbody>
                </table>

                
            </div>
        )
    }
}
