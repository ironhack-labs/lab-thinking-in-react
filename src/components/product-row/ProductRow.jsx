import './ProductRow.css';

function ProductRow({ product }) {
  const { name, price, inStock } = product;

  return (
    <div className="m-3">
      <tr className="productsColumn">
        <td>{name}</td>
        <td>{price}</td>
        <td>{inStock ? 'Sí' : 'No'}</td>
      </tr>
    </div>
  );
}

export default ProductRow;