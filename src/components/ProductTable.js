import ProductRow from './ProductRow';

const ProductTable = (props) => {
  const products = props.products;
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
          {products.map((product) => (
            <ProductRow product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
