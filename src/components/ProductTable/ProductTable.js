import React from 'react'
import { Row, Table } from 'react-bootstrap'
import ProductRow from '../ProductRow/ProductRow'

export default function ProductTable(props) {
    return (
        <div>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            props.products.map((product) => {
                                return (<ProductRow key={product.id} product={product} />)
                            })
                        }

                    </tbody>
                </Table>
            </Row>
        </div>
    )
}
