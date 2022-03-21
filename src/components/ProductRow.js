function ProductRow(props) {
    const getColor = (stock) => {
      if (stock) return 'white';
      if (!stock) return 'red';
    };
  
    return (
      <tr style={{ backgroundColor: getColor(props.product.inStock) }}>
        <td>{props.product.name}</td>
        <td>{props.product.price}</td>
        <td>{props.product.category}</td>
        <td>{props.product.inStock ? 'In Stock' : 'Not In Stock'}</td>
      </tr>
    );
  }
  
  export default ProductRow;