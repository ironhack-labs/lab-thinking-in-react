import ProductRow from "./ProductRow";

function ProductTable (props) {

    const { products } = props;

    return(
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            {products.map((product) => <ProductRow key={product.id} product={product} /> )}
        </table>
    )
  }
  
  export default ProductTable