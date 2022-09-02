import ProductRow from '../components/ProductRow';

function ProductTable({ products }) {

  return (
    <>
      <div className="p-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => {
              return (
                <ProductRow
                  name={product.name}
                  price={product.price}
                  inStock={product.inStock}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProductTable;
