import React from 'react';

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
      <tr>
        <td>{e.name}</td>
        <td>{e.price}</td>
      </tr>
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
