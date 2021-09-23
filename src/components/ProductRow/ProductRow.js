import React from 'react'
import { Table } from 'react-bootstrap';

export default class ProductRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: this.props.products
        }
    }


    displayProducts = () => {
        return this.props.products.map(product => {
            const { name, price, id } = product

            return (
                <tr key={`${id}`}>
                    <td>
                        <h4>
                            {name}
                        </h4>
                    </td>
                    <td>
                        <h4>
                            {price}
                        </h4>
                    </td>
                </tr>
            )
        })
    }


    render() {
        return (

            this.state.products
                ?
                <div>

                    <Table striped border hover>

                        <thead>
                            <tr>
                                <th>
                                    <h2>Name</h2>
                                </th>
                                <th>
                                    <h2>Price</h2>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.displayProducts()}
                        </tbody>

                    </Table>
                </div>
                :
                <h3>Loading...</h3>
        )
    }
}
