function ProductRow({ products, search, showInStock }) {
  const filteredItems = products.filter((oneProduct) => {
    const searchCheck = oneProduct.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const inStockCheck = showInStock ? oneProduct.inStock === true : true;
    return searchCheck && inStockCheck;
  });

  const mappedItems = filteredItems.map((product) => {
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
  });

  return (
    <div className="d-flex justify-content-center">
      <table style={{ width: '800px' }}>
        <thead>
          <tr>
            <td className="fs-5 fw-bold">Name</td>
            <td className="fs-5 fw-bold">Price</td>
          </tr>
        </thead>
        <tbody>{mappedItems}</tbody>
      </table>
    </div>
  );
}

export default ProductRow;
