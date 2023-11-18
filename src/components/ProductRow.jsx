function ProductRow({ products }) {
  return (
    <div>
      <table>
        <tbody>
          <tr style={{ color: products.inStock ? "orange" : "red" }}>
            <td className="productName">{products.name}</td>
            <td className="productPrice">{products.price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductRow;
