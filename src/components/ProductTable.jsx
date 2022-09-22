// import Table from 'react-bootstrap/Table';
import ProductRow from './ProductRow';

function ProductTable({ products }) {
    console.log(products)
    return (

        <table className="table table-striped">
            <thead>
                <ProductRow />
            </thead>
            <tbody>
                {products.map((product) => {
                    return (
                        <tr key={product.id}>
                            <td style={{ color: product.inStock ? 'black' : 'red' }}>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );

}

export default ProductTable;