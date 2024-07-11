function ProductRow({ product }) {
    const rowStyle = {
        color: product.inStock ? "black" : "red",
    };
  return (
    <div>
        <tr>
            <td style={rowStyle}>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.inStock ? "Yes" : "No"}</td>
        </tr>
    </div>
  );
}

export default ProductRow;