function ProductRow(props) {
    const { product } = props;
  
    return (
      <tr className={!product.inStock ? "red-text" : ""}>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
  
  export default ProductRow;
  