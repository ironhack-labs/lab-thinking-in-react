import { Container, Row, Col } from 'react-bootstrap'
import jsonData from './../../data.json'
import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import './../ProductTable/ProductTable.css'



const ProductsTable = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(jsonData)
    }, [])





    return (

        <Table striped>
            <thead>
                <tr>
                    <th className='namehead'>Name</th>
                    <th className='namehead'>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => {
                    const inStock = product.inStock ? { color: 'inherit' } : { color: 'red' }

                    return (
                        <tr key={product.id}>
                            <td colSpan={6} style={inStock} >{product.name}</td>
                            <td colSpan={6} className='namehead'>{product.price}</td>
                        </tr>

                    )
                })}



            </tbody>
        </Table>



    )
}

export default ProductsTable