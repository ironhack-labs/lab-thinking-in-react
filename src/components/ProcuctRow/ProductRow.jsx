import { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import './ProductRow.css'
import productsData from '../../data.json'

const ProductRow = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(productsData)
    }, [])

    return (
        <div className='ProductRow'>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
            </Table>

            {products.map((product) => {

                return (
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td key={product.id}>{product.name}</td>
                                <td key={product.id}>{product.price}</td>
                            </tr>
                        </tbody>
                    </Table>
                )
            })}

        </div>
    )
}

export default ProductRow