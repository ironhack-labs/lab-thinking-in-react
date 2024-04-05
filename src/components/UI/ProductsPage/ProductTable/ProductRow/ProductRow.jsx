import './ProductRow.css';

function ProductRow({ name, price, inStock }) {

  return (
    <tr className="text-center producttable-row">
      <td style={{ color: inStock ? '' : 'red' }}>{name}</td>
      <td style={{ color: inStock ? '' : 'orange' }}>{price}</td>
    </tr>
  );
}

export default ProductRow;
