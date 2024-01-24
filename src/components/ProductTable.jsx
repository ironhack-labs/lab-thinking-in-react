import ProductRow from './ProductRow';

//{"category": "Sporting Goods",
// "price": "$9.99",
// "inStock": true,
// "name": "Baseball",
//"id": "4522f16e-3f55-4863-ae36-e935ec9cb4ef"}

function ProductTable(props) {
  const { products, setProducts } = props;

  return (
    <>
      <table id="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <ProductRow
                productName={product.name}
                productPrice={product.price}
                inStock={product.inStock}
                key={product.id}
              ></ProductRow>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default ProductTable;
