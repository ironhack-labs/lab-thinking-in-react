import classes from './ProductRow.module.css';
const ProductRow = (props) => {
  return (
    <tr>
      <td className={!props.inStock ? classes.noStock : ''}>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
};

export default ProductRow;
