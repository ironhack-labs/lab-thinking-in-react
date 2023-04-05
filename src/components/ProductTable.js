import ProductRow from './ProductRow';

const ProductTable = ({ products }) => {
  return (
    <table className="table">
      <thead>
        <tr className="headrow">
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <ProductRow products={products} />
      </tbody>
    </table>
  );
};

export default ProductTable;
