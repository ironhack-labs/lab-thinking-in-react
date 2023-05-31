function ProductRow({ products }) {
  return (
    <div className="product-row">
      <table>
        <tr>
          <th>CATEGORY</th>
          <th>NAME</th>
          <th>PRICE</th>
        </tr>
        <tbody>
            {products.map((product) => {
             <tr>
                return (
                <td>{product.category}</td>
                <td>{product.name} </td>
                <td>{product.price} </td>
                )
                </tr>
            })}
       
        </tbody>
      </table>
    </div>
  );
}

export default ProductRow;
