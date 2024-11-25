function ProductRow({ className, products }) {
  const  isNotStock=(product)=>{
  return  !product.inStock ? "text-danger" : ""
  }
  return (
    <>
      {products.map((product) => (
        <tr key={product.id}>
          <td className={isNotStock(product)}>
            {product.name}
          </td>
          <td>{product.price}</td>
        </tr>
      ))}
    </>
  );
}
export default ProductRow;
