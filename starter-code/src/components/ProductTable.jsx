import React from 'react';

const ProductTable = (props) =>{
  console.log("table",props)
  return (
    <div>
      <table>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Price</th>
              </tr>
          </thead>
          <tbody>
            {
              props.data.map(e =>{
                return <tr><td>{e.name}</td><td>{e.price}</td></tr>
              })    
            }           
          </tbody>
      </table>
    </div>
  )
}
export default ProductTable ;
