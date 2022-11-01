function ProductRow(props) {
  console.log('ProductRow Props: ', props.productList);
  const productList = props.productList;
  return (
    <>
      {productList.map((elem) => {
        return (
          <tr
            key={elem.id}
            style={{ color: elem.inStock ? 'black' : 'red' }}
          >
            <td>{elem.name}</td>
            <td>{elem.price}</td>
          </tr>
        );
      })}
    </>
  );
}

export default ProductRow;
