import ProductRow from './ProductRow';

function ProductTable(props) {
  const allProducts = props.allProducts;

  return (
    <div className="col-7">
      <table className="table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Category</td>
            <td>In Stock</td>
          </tr>
          </thead>
          <tbody>
          {!allProducts && <h3>No product found!</h3>}

          {allProducts &&
            allProducts.map((oneProduct) => {
              return <ProductRow product={oneProduct} key={oneProduct.id}/>;
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
