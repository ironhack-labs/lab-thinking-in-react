import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import ProductRow from './ProductRow/ProductRow'


export default class ProductTable extends Component {

  
   
    displayProducts() {
    
        return (
            this.props.products.map((data, idx) => {
                return (
                    <ProductRow
                        {...data}
                        key={`${idx}-${data.name}-${data.price}`}
                    />
                )
            })
        )
    }


    render() {
        return (
            <div>
                 <Table striped bordered hover>
                 
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.displayProducts()}
                </tbody>
            </Table>
            </div>
        )
    }
}

