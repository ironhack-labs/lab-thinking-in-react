import { useState } from 'react';

const ProductTable = ({ products }) => {
  const [searchName, setSearchName] = useState('');
  return (
    <div>
      <input
        placeholder="Search..."
        type="text"
        onChange={(e) => {
          setSearchName(e.target.value);
        }}
      />
      <br />
      <input type="checkbox" /> Only Show Products in Stock
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((value) => {
              if (searchName === '') {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchName.toLowerCase())
              ) {
                return value;
              }
            })
            .map((product) => (
              <tr key={product.id}>
                <td
                  style={
                    product.inStock ? { color: 'black' } : { color: 'red' }
                  }
                >
                  {' '}
                  {product.name}{' '}
                </td>
                <td> {product.price} </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
