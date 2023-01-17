function ProductRow(props) {
  const { products } = props;
  const newProductsArray = [...products];
  return newProductsArray.map((item) => {
    return (
      <tr key={item.id}>
        {item.inStock ? (
          <td className="inStock">{item.name}</td>
        ) : (
          <td className="outStock">{item.name}</td>
        )}
        <td>{item.price}</td>
      </tr>
    );
  });
}

export default ProductRow;
