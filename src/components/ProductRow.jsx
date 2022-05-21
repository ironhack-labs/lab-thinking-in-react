function ProductRow(props) {
    const { category, name, price, inStock } = props.product;
    //console.log(props)
  
    return (
      <tr>
        {inStock ? <td>{name}</td> : <td style={{ color: 'red' }}>{name}</td>}
        {inStock ? <td>{price}</td> : <td style={{ color: 'red' }}>{price}</td>}
      </tr>
    );
  }
  
  export default ProductRow;