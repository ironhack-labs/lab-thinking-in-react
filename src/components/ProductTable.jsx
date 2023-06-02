import React from 'react';

const ProductTable = ({ products }) => {
  return (
    <div  className='ProductTable'>
      <table>
        <thead>
         <tr>      
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;


