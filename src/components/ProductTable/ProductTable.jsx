{ useState } from 'react'
import { Table } from 'react-bootstrap'
// import jsonData from './../../data.json'



function ProductTable ({ jsonData }) {

    const[products, setProducts] = useState(jsonData)

    return (
    <div>
        {products.map((product) => {

            return(
                <div>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            )
        })}
    </div>  
)
}

export default ProductTable