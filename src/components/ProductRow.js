function ProductRow(props) {

    const nameClass = props.product.inStock ? "in-stock" : "out-of-stock";
  
    return (
      <tr>
        <td className={nameClass}>{props.product.name}</td>
        <td key={props.product._id}>{props.product.price}</td>
      </tr>
    );
  }

export default ProductRow