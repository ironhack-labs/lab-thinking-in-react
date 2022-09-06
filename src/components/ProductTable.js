import ProductRow from './ProductRow';

function ProductTable(props) {

  return (
    <div id="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((el) => {
            return <ProductRow key={el._id} name={el.name} price={el.price} inStock={el.inStock} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
