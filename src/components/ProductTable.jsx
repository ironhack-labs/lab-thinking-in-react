import ProductRow from "./ProductRow";

const ProductsTable = ({ products }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => {
                    return (
                        <ProductRow key={product.id} product={product} />
                    )
                })}
            </tbody>
        </table>
    );
}

export default ProductsTable;