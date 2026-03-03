import ProductRow from "./ProductRow";

const ProductTable = ({ products }) => {
  return (
    <div>
      <ProductRow products={products} />
    </div>
  );
};
export default ProductTable;
