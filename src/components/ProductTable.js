import ProductRow from './ProductRow';

function ProductTable(props) {
  const { products } = props;

  return (
    <div
       style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <table>
        <thead>
          <tr>
            <td style={{backgroundColor: "lightgrey"}}>Name</td>
            <td style={{backgroundColor: "lightgrey"}}>Price</td>
          </tr>
        </thead>
        <tbody>
          {products.map((eachProduct) => {
            return (
              <ProductRow
                name={eachProduct.name}
                price={eachProduct.price}
                inStock={eachProduct.inStock}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
