import ProductRow from "../product-row/product-row";

function ProductTable({ listProducts }) {
  return (
    <>
      <div>
        Produc Table{" "}
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {listProducts.map((product, index) => (
                <tr key={index}>
                  <td
                    className={product.inStock === false ? "text-danger" : ""}
                  >
                    {product.name}
                  </td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ProductRow listProducts={listProducts} />
        </div>
      </div>
    </>
  );
}

export default ProductTable;
