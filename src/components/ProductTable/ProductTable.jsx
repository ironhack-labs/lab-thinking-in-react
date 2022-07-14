import Table from 'react-bootstrap/Table';
import ProductRow from '../ProductRow/ProductRow';

function ProductTable({ products }) {

    return (
        <Table bordered className='table'>
            <thead>
                <tr className='bgGrey'>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => {
                    return (<>
                        <tr key={product.id}>
                            <ProductRow product={product} />
                        </tr>
                    </>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default ProductTable