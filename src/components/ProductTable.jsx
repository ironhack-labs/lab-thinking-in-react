import ProductRow from "./ProductRow";

function ProductTable({ products, searchNombre, isInStock }) {
  return (
    <div>
      <h3>ProductTable</h3>

      <div className="flex justify-center mt-10">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b bg-gray-100">Name</th>
              <th className="px-4 py-2 border-b bg-gray-100">Price</th>
            </tr>
          </thead>
          <tbody>
            {products
              .filter((product) => {
                if (searchNombre === "") {
                  return product;
                } else {
                  return product.name
                    .toLowerCase()
                    .includes(searchNombre.toLowerCase());
                }
              })
              .filter((product) => {
                if (isInStock === false) {
                  return product;
                } else {
                  return product.inStock === true;
                }
              })
              .map((eachProduct, index) => {
                return (
                    <tr key={index}>
                      <ProductRow product={eachProduct} />
                    </tr>
                  
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTable;
