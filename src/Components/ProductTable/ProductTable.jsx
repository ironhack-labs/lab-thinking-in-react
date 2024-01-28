

function ProductTable ({ products }) {
    return (
      <div>
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th className="bg-light">Name</th>
              <th className="bg-light">Price</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product.id}>
                  <td style={{ color: product.inStock ? "green" : "red" }}>
                    {product.name}
                  </td>
                  <td>{product.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ProductTable;