function ProductRow({ product }) {
  return (
    <>
      <tr>
        <td style={!product.inStock ? { color: 'red' } : { color: 'black' }}>
          {product.name}
        </td>

        <td style={!product.inStock ? { color: 'red' } : { color: 'black' }}>
          {product.price}
        </td>
      </tr>
    </>
  );
}

export default ProductRow;
