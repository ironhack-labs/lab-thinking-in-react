import ProductsRow from './ProductRow';

const ProductTable = ({ products, word, inStockOnly }) => {
  return (
    <div className='table-products'>
      <table >
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((productFound) =>
              productFound.name.toLowerCase().includes(word.toLowerCase()) &&
              inStockOnly
                ? productFound.inStock
                :  productFound.name.toLowerCase().includes(word.toLowerCase())
            )
            .map((product) => (
              <ProductsRow {...product} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
