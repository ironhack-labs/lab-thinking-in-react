import React from 'react'
import TableItem from "./TableItem"
import Table from 'react-bootstrap/Table'

const DataTable = (props) => {
    return (

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((elm, idx) => <TableItem key={idx} info={elm} />)}
            </tbody>
        </Table>

    )

}

export default DataTable
