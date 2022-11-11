function ProductRow({ products }) {
  return (
    <div>
      {products.map((product) => {
        return (
          <tr>
            <td style={{ color: product.inStock ? 'black' : 'red' }}>
              {product.name}
            </td>
            <td>{product.price}</td>
          </tr>
        );
      })}
    </div>
  );
}

export default ProductRow;
