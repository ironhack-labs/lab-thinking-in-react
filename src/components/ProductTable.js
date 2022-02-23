import ProductRow from './ProductRow';

function ProductTable(props) {
  const allProducts = props.allProducts;

  return (
    <div>
      <h3>All products</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((eachProduct) => {
            return <ProductRow product={eachProduct} key={eachProduct.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
