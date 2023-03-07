function ProductRow(props) {
  //   const [productRow, setProductRow] = useState(jsonData);

  return (
    <div className="row">
      <div className="cell" style={!props.inStock ? {color:'red'} : {color:'unset'}}>{props.product.name}</div>
      <div className="cell">{props.product.price}</div>
    </div>
  );
}
export default ProductRow;
