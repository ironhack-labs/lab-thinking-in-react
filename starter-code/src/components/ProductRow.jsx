import React from 'react';

const ProductRow= ({data}) => {

return (
      <>
        {data.map((e, index)=>

        <tbody  key={index}>
          <tr>
            <td>{e.name}</td>
            <td>{e.price}</td>
          </tr>
        </tbody>
        )}
      </>
    );
  }


export default ProductRow;
