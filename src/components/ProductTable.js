import ProductRow from "./ProductRow";
import product from "./../data.json"

function ProductTable(props) {

    return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {product.map((product) => (
              <ProductRow key={product._id} product={product} />
            ))}
          </tbody>
        </table>
      );

}



export default ProductTable