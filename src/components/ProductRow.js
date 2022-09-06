function ProductRow(props) {

  let inStockColor="black"
  if (!props.inStock){
    inStockColor="red"
  }
  const style={color:inStockColor}
  
  return (
    <tr>
      <td style={style}>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
}

//style={props.inStock ? "color:black" : "color:red" }


export default ProductRow;
