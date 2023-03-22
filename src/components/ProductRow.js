import "./../App.css"

function ProductRow({products}) {

  return (
    <table className="products-row">
      <thead>
        <th>Name</th>
        <th>Price</th>
      </thead>
      <tbody>
        {products.map((product) => {
            const tdId = product.inStock ? '' : "product-name-red";

          return (
            <tr>
              <td id ={tdId}> {product.name}</td>
              <td> {product.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ProductRow;
