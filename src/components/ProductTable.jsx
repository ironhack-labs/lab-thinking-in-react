/* eslint-disable react/prop-types */
import ProductRow from "./ProductRow";

function ProductTable({ products, search }) {

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products
                    .filter((product) => {
                        return product.name.toLowerCase().includes(search.toLowerCase());
                    })
                    .map((allProduct) => {
                        return <ProductRow allProduct={allProduct} key={allProduct.id} />;
                    })}
            </tbody>
        </table>
    );
}

export default ProductTable;