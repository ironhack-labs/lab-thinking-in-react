import { Table, Typography } from 'react-bootstrap'
import { useState } from 'react'
import jsonData from './../data.json'
import App from '../App.css'


function ProductTable() {
    const [data, setData] = useState(jsonData)

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {data.map((data) => {

                    return (
                        <tr key={data.id} className={data.inStock ? '' : 'red'}>
                            <td>{data.name}</td>
                            <td>{data.price}</td>
                        </tr>
                    )
                })
                }
            </tbody>
        </Table >
    )
}

export default ProductTable









