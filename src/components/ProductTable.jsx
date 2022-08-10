function ProductTable(props) {
  const { data } = props;
  console.log('si llego, ', data);
  return (
    <div>
      <h1>Available products</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default ProductTable;


