function ProductRow({ product }) {
    const productNameStyle = product.inStock
      ? {}
      : { color: "red", fontStyle: "italic" };
  
    return (
      <tr>
        <td style={productNameStyle}>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
  
  export default ProductRow;