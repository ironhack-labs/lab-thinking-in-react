import ProductRow from "./ProductRow";

function ProductTable({ products, searchText, inStockOnly }) {
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .filter((product) => (inStockOnly ? product.inStock : true));

  return (
    <div>
      {filteredProducts.map((product) => (
        <ProductRow key={product.name} product={product} />
      ))}
    </div>
  );
}

export default ProductTable;

