function ProductRow(props) {
  return (
    <div>
      <table>
        {props.products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td
              style={product.inStock ? { color: 'black' } : { color: 'red' }}
            ></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ProductRow;
