import React from 'react';
import Products from '../Products/Products'

const search = {
    border: "1px solid blue"
  }
  const products = {
    border: "1px solid green"
  }
  // datos de tabla
  const list = {
    border: "1px solid red",
    textAlign: "left"
  }

function Main({data,data:[{category,price,stocked,name,id}]}){
    console.log("DATA:",data)
    return(
        <div>
        <Products {...data} />
        </div>
    )
}
// <Search category={category} price={price} stocked={stocked} name={name} id={id}/>
export default Main