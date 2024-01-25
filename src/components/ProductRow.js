function ProductRow(props) {
  console.log(props.productName);
  return (
    <>
      {props.productName.map((product) => {
        return (
          <tr key={product.id}>
            <td className={product.inStock ? 'inStock' : 'notInStock'}>
              {product.name}
            </td>
            <td>{product.price}</td>
          </tr>
        );
      })}
    </>
  );
}

export default ProductRow;
