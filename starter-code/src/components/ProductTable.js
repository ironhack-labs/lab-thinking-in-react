import React, { Component } from "react";
import Table from "react-bootstrap/Table"
import ProductRow from "./ProductRow"

class ProductTable extends Component {

    render(){
        console.log(this.props.products);
        return(
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Name</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {
                this.props.products.map((product, index) => {
                    return <ProductRow {...product} key={index}/>
                })
            }
            </tbody>
            </Table>
        )
    }
}

export default ProductTable