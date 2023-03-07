import ProductRow from './ProductRow';

function ProductTable(props) {
  
  return (
    <div className="productsTableContainer">
      <div className="row header-row">
        <div className="cell">Name</div>
        <div className="cell">Price</div>
      </div>
      {props.products.map((product) => {
        return <ProductRow key={product.id} product={product} inStock={product.inStock} />;
      })}
    </div>
  );
}

export default ProductTable;
