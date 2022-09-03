function ProductRow({ item }) {
  return (
    <tr>
      <th
        scope="col-6"
        className={`fw-normal ${item.inStock ? '' : 'text-danger'}`}
      >
        {item.name}
      </th>
      <th scope="col-6" className="fw-light">
        {item.price}
      </th>
    </tr>
  );
}

export default ProductRow;
