import ProductRow from './ProductRow';

function ProductTable(props) {
    
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((e) => {
            return <ProductRow key={e.id} product={e} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;