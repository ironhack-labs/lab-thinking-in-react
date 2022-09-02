function ProductRow({ product }) {
  return (
    <tr>
      <th
        scope="col-6"
        className={`fw-light ${product.inStock ? '' : 'text-danger'}`}
      >
        {product.name}
      </th>
      <th scope="col-6" className="fw-light">
        {product.price}
      </th>
    </tr>
  );
}

export default ProductRow;
