import ProductRow from './ProductRow';

function ProductTable(props) {
  const { products } = props;
  console.log(products);
  return (
    <div className="list">
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        <thead></thead>
        <tbody>
          {products.map((product, i) => {
            return <ProductRow key={i} product={product} index={i} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
