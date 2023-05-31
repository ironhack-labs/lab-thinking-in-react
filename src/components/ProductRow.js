function ProductRow({ oneProduct }) {
  const coloredProducts = {
    color: oneProduct.inStock ? 'black' : 'red',
  };
  return (
    <>
      <tr style={coloredProducts}>
        <td>{oneProduct.name}</td>
        <td>{oneProduct.price}</td>
      </tr>
    </>
  );
}

export default ProductRow;
