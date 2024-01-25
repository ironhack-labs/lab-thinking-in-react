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
        <tr id="product-table-head-row">
          <th className="product-table-head-data">Name</th>
          <th className="product-table-head-data">Price</th>
        </tr>
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
      </table>
    </>
  );
}
export default ProductTable;
