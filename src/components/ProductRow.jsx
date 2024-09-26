function ProductRow({ product }) {
  return (
    <>
      <td style={{color: !product.inStock ? "red" : "black"}} className="px-4 py-2 border-b">{product.name}</td>
      <td className="px-4 py-2 border-b">{product.price}</td>
    </>
  );
}

export default ProductRow;
