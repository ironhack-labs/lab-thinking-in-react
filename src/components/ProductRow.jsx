function ProductRow({ product }) {
  return (
        <tbody>
            <tr>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
        </tbody>
  );
}

export default ProductRow;
