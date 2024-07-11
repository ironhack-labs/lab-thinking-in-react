import ProductRow from "./ProductRow";

function ProductTable({ products }) {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>In Stock</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <ProductRow key={product.id} product={product} />
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default ProductTable;