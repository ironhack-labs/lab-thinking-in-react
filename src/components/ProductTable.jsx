import ProductRow from "./ProductRow";

function ProductTable( { products }) {

    if (!Array.isArray(products)) {
        return <div>Error: products must be an array</div>;
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {products.map( product => (
                <ProductRow key = { product.id } product = { product }/>
            ))}
            </tbody>
        </table>
    );
}

export default ProductTable;