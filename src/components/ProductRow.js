const ProductRow = ({ products }) => {
  const productList = products.map((product) => {
    const stock = product.inStock ? 'black' : 'red';

    return (
      <tr>
        <td className={stock}>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  });
  return <tbody>{productList}</tbody>;
};

export default ProductRow;
