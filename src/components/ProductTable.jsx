import ProductRow from "./ProductRow";

function ProductTable(props) {
  const products = props.products;

  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((eachProduct) => {
            return(
                <ProductRow key={eachProduct.id} eachProduct={eachProduct}/>
            )
        })}
      </tbody>
    </table>
  );
}

export default ProductTable;
