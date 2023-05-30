function ProductTable({ products, input, setInput, checkbox }) {
  return (
    <div>
      <p>Checkbox {checkbox}</p>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>

        {checkbox
          ? products
              .filter((each) => {
                if (each.inStock === true) {
                  return true;
                }
              })
              .filter((each) => {
                if (each.name.toLowerCase().includes(input.toLowerCase())) {
                  return true;
                }
              })
              .map((each) => {
                return (
                  <tr>
                    <td>{each.name}</td>
                    <td>{each.price}</td>
                  </tr>
                );
              })
          : products
              .filter((each) => {
                if (each.name.toLowerCase().includes(input.toLowerCase())) {
                  return true;
                }
              })
              .map((each) => {
                return (
                  <tr>
                    <td style={{ color: each.inStock ? 'none' : 'red' }}>
                      {each.name}
                    </td>
                    <td>{each.price}</td>
                  </tr>
                );
              })}
      </table>
    </div>
  );
}

export default ProductTable;
