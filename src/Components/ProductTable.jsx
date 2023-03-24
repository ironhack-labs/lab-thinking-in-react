import ProductRow from "./ProductRow";

function ProductTable( {productsData} ) {
  return (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {productsData.map((product) => (
        <ProductRow key={product.id} product={product}/>
      ))}
    </tbody>
  </table>

  )
}

export default ProductTable;