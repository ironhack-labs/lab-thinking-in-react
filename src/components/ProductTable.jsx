/* eslint-disable react/prop-types */
import ProductRow from "./ProductRow";

function ProductTable(props) {
    const products = props.products

    return (
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {products.map(product => (
                <ProductRow key={product.id} product={product} />
            ))}
        </tbody>
      </table>
    );
}

export default ProductTable