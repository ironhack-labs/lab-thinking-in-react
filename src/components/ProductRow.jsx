function ProductRow(props) {
  const { productName, productPrice, inStock } = props;
  //   console.log(inStock);

  const inStockColor = (isInStock) => {
    if (!isInStock) {
      return { backgroundColor: 'red', color: 'white' };
    } else {
      return { backgroundColor: 'white', color: 'black' };
    }
  };

  return (
    <>
      <tr className="product-table-body-row">
        <td className="product-table-body-data" style={inStockColor(inStock)}>
          {productName}
        </td>
        <td className="product-table-body-data" style={inStockColor(inStock)}>
          {productPrice}
        </td>
      </tr>
    </>
  );
}
export default ProductRow;
