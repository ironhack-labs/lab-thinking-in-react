import { Table } from 'react-bootstrap'
import ProductRow from '../ProductRow/ProductRow'

const ProductTable = ({products}) => {

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => {
                        return (
                            
                                <ProductRow product={product}/>

                            
                            
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default ProductTable