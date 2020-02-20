import React, { Component } from 'react';

// const ProductRow = props => {
//   return (
//     <React.Fragment>
//       {props.products.data
//         .filter(product => {
//           return product.name.toLowerCase().includes(props.search);
//         })
//         .map(product => {
//           return (
//             <tr>
//               {product.stocked ? (
//                 <td>{product.name}</td>
//               ) : (
//                 <td className="sold-out">{product.name}</td>
//               )}
//               <td>{product.price}</td>
//             </tr>
//           );
//         })}
//     </React.Fragment>
//   );
// };

const ProductRow = props => {
  return (
    <React.Fragment>
      {props.products.data
        .filter(product => {
          return product.name.toLowerCase().includes(props.search);
        })
        .map(product => {
          return (
            <React.Fragment>
              {!props.inStock && (
                <tr>
                  {product.stocked ? (
                    <td>{product.name}</td>
                  ) : (
                    <td className="sold-out">{product.name}</td>
                  )}
                  <td>{product.price}</td>
                </tr>
              )}

              {props.inStock && product.stocked && (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                </tr>
              )}
            </React.Fragment>
          );
        })}
    </React.Fragment>
  );
};

// if checkbox is TRUE, return products.stocked
// if checkbox is FALSE, return products

export default ProductRow;
