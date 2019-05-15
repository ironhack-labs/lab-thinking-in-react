import React from 'react';
import './list-products.css'
const ListProducts = (props) => {
// console.log(props.list.data)
console.log(props.nameListProduct)
  const filteredArray = props.list.data.filter((e) => {
    return e.name.toLowerCase().includes(props.nameListProduct.nameList.toLowerCase());
  });
  console.log(filteredArray)

 const productList = filteredArray.map((e) =>{
 console.log(e)
      return (
        <table className="tableProd">
          <tr>
            <td className="table">{e.name}</td>
            <td className="table">{e.price}</td>
          </tr>
        </table>

      )
 }
 );
 console.log(productList)

  return (
    <div>
      {productList}
    </div>
  )
}

export default ListProducts;
