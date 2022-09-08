import ProductRow from '../../ProductRow';

function ProductTable({ products, search, stock }) {
  <div className="table-container">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        {stock &&
          products
            .filter((product) => {
              return product.inStock === stock;
            })
            .filter((product) => {
              return (
                product.name.toLowerCase().includes(search.toLowerCase()) ||
                product.price.includes(search.toLowerCase())
              );
            })
            .map((product) => {
              return <ProductRow key={product.name} product={product} />;
            })}

        {!stock &&
          products
            .filter((product) => {
              return (
                product.name.toLowerCase().includes(search.toLowerCase()) ||
                product.price.includes(search.toLowerCase())
              );
            })
            .map((product) => {
              return <ProductRow key={product.name} product={product} />;
            })}
      </tbody>
    </table>
  </div>;
}

export default ProductTable;
