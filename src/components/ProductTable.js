import ProductRow from './ProductRow';

function ProductTable(products) {
  return (
    <div className="productTable">
      <table>
        <tr className="thead">
          <td>Name</td>
          <td>Price</td>
        </tr>
        <ProductRow products={products} />
      </table>
    </div>
  );
}

export default ProductTable;
