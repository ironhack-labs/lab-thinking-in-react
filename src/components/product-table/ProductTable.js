import ProductRow from "../product-row/ProductRow";

function ProductTable({ randomData }){
  return (
    <div className="product-table mt-3">
      <ProductRow random={{name: 'Name', price: 'Price', inStock: true}} className="fw-bold fs-3 py-2 bg-secondary" />
      {randomData.map( random => <ProductRow random={random} key={random.id} className="border border-dark border-end-0 border-start-0 py-3"/>)}
    </div>
  );
}

export default ProductTable;