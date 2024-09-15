import ProductRow from './ProductRow/ProductRow';

function ProductTable ({ products, message }) {

    return (
        <table className="table table-hover mt-4">
            <thead className="table-dark">
                <tr>
                    <th >Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">

                {products.map(product => (
                    <ProductRow key={product.id} product={product} />
                ))}

                {!products.length && (<tr><td colSpan={2}>{message}</td></tr>)}

            </tbody>
        </table>
    );
}

export default ProductTable;