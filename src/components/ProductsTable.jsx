import ProductRow from "./ProductRow";

const ProductsTable = ({ products }) => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductRow products={products} />
        </tbody>
      </table>
      ;
    </div>
  );
};

export default ProductsTable;
