import ProductRow from "./ProductRow";

function ProductTable({ products }) {
  return (
    <div className="productTable">
      {products.map((singleProduct) => (
        <ProductRow key={singleProduct.id} products={singleProduct} />
      ))}
    </div>
  );
}

export default ProductTable;
