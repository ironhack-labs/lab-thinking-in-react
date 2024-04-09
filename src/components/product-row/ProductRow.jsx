function ProductRow({ product }) {
  return (
    <tr>
      <td className={product.inStock ? "text-primary" : "text-danger"}>
        {product.name}
      </td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
