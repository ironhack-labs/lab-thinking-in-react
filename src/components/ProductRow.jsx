import { useState } from 'react';
import productInfo from '../data.json';

function ProductRow() {
  const [products, setProducts] = useState(productInfo);
  return (
    <div className="product-row">
      <table>
        <caption>IronStore</caption>
        {/* <button onClick={addRandomContact}>Add random contact</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortByPopularity}>Sort by popularity</button> */}
        <tr>
          <th>CATEGORY</th>
          <th>NAME</th>
          <th>PRICE</th>
        </tr>
        <tbody>
          {products.map((product) => {
            return (
              <tr>
              <td>{product.category}</td>
              <td>{product.name} </td>
              <td>{product.price} </td>
              {/* <td>{product.inStock ? style={ backgroundColor: "white"} : style={backgroundColor: "red"} }</td> */}
           
            </tr>
          )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductRow;
