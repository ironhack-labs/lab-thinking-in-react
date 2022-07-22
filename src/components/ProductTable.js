import ProductRow from "./ProductRow";


function ProductTable({ products }) {
  return (
    <div className="productTable">
      <table>
        <thead>
          <tr className= "header">
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
