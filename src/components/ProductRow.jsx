function ProductRow({ products }) {
  return (
    <div className="d-flex justify-content-center">
      <table style={{ width: '800px' }}>
        <thead>
          <tr>
            <td className="fs-5 fw-bold">Name</td>
            <td className="fs-5 fw-bold">Price</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr className="border border-dark" key={product.id}>
                <td
                  className="fw-bold fs-5"
                  style={{ color: product.inStock ? 'black' : 'red' }}
                >
                  {product.name}
                </td>
                <td className="fw-bold fs-5">{product.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductRow;
