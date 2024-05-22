import ProductRow from "../ProductRow/ProductRow";

const ProductTable = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 bg-secondary text-light text-center p-3 fw-bold">
          Nombre
        </div>
        <div className="col-4 bg-secondary text-light text-center p-3 fw-bold">
          Price
        </div>
      </div>
      {products.map((product) => {
        return (
          <ProductRow
            name={product.name}
            price={product.price}
            color={product.inStock ? "" : "danger"}
            key={product.id}
          />
        );
      })}
    </div>
  );
};

export default ProductTable;
