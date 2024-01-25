import './ProductTable.css';

export default function ProductTable() {
  return (
    <section className="ProductTable" id="products">
      <table id="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Abc</td>
            <td>$12.12</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
