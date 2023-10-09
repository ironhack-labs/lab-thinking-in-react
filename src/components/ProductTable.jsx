import ProductRow from "./ProductRow";

function ProductTable ({products}) {
  
  return(
    <div>
      <table className="table table-secondary mt-4">
        <thead>
          <tr>
          <th style={{ fontSize: '20px' }}>Name</th>
          <th style={{ fontSize: '20px' }}>Price</th>
          </tr>
        </thead>
        <tbody className="table mt-4"> 

          {products.map((product) => (
            <ProductRow key={product.id} product = {product} />
          ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;