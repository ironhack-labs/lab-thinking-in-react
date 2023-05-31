function ProductRow(singleProduct) {
  return (
    <tr key={singleProduct.id} data-instock={singleProduct.inStock}>
      <td>{singleProduct.category}</td>

      <td>{singleProduct.price}</td>
      <td>{singleProduct.name}</td>
    </tr>
  );
}

export default ProductRow;
