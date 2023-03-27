function ProductRow({ product }) {
  return (
    <>
      <tr className={!product.inStock ? 'text-danger' : 'text-black'}>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    </>
  );
}

export default ProductRow;
