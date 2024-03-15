export const ProductRow = (props) => {
    const { product } = props;
    return (
      <tr className="row">
        {product.inStock ? <td >{product.name}</td> : <td style ={{color :"red"}}>{product.name}</td>}
        <td>{product.price}</td>
      </tr>
    );
  };