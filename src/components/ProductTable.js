import ProductRow from './ProductRow';

function ProductTable({ products, searchInput, checkedInput }) {
  return (
    <div className='tablediv'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        {products
          .filter((oneProduct) => {
            if (
              oneProduct.name.toLowerCase().includes(searchInput.toLowerCase())
            ) {
              return true;
            }
          })
          .filter((stockedProduct) =>
            checkedInput ? stockedProduct.inStock : true
          )
          .map((product) => {
            return <ProductRow oneProduct={product} key={product.name} />;
          })}
      </table>
    </div>
  );
}

export default ProductTable;
