import ProductRow from "../ProductRow/ProductRow";
import './ProductTable.css'

function ProductTable({products}) {
  return (

    <table className="table table table-striped " >
        <thead >
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        </thead>
      <tbody>
     
        {products.map((product)=>
            <ProductRow key={product.id} product={product}/>
        )}
      </tbody>
    </table>
  );
}

export default ProductTable;
