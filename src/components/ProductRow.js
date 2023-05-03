function ProductRow({ products }) {
  return (
    <div>
      {products.map((product) => {
        return (
          <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        );
      })}
    </div>
  );
}

export default ProductRow;
