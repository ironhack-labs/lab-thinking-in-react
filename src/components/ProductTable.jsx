import React from 'react';

function ProductTable(props) {
  console.log(props);
  const { productsToShow } = props;
  return (
    <div 
    style={{display:"flex", justifyContent:"center"}}>
      <table>
        <thead>
          <tr >
            <th  style={{padding:"2vh 10vh"}}>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {productsToShow.map((eachProduct) => {
            return (
              <tr key={eachProduct.id}>
                <td>{eachProduct.name}</td>
                <td>{eachProduct.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;

{
  /* <table>
<tr>
  <th>Company</th>
  <th>Contact</th>
</tr>
<tr>
  <td>1</td>
  <td>2</td> 
</tr>
</table> */
}
