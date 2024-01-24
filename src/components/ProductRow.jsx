function ProductRow(props) {
  const { productName, productPrice, inStock } = props;
  //   console.log(inStock);

  const inStockColor = (isInStock) => {
    if (!isInStock) {
      return { color: 'red' };
    } else {
      return { color: 'black' };
    }
  };

  return (
    <>
      <tr className="product-table-row">
        <th className="product-table-body-name" style={inStockColor(inStock)}>
          {productName}
        </th>
        <th className="product-table-body-price" style={inStockColor(inStock)}>
          {productPrice}
        </th>
      </tr>
    </>
  );
}
export default ProductRow;
