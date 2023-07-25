const ProductTable = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* TableRow */}
          <tr> 
            <td>Product row</td>
            <td>Football</td>
            <td>$49.99</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable