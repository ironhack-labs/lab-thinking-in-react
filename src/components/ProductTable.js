import ProductRow from "./ProductRow";
import SearchBar from "./SearchBar";

function ProductTable({ products }) {
  return (
    <div className="productTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((eachProduct) => {
            return (
              <ProductRow
                name={eachProduct.name}
                price={eachProduct.price}
                inStock={eachProduct.inStock}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
