import React from 'react'
import Data from '../data.json';
//componentes
import Category from './CategoryRow';
import Row from './Row';



const Table = () =>{
let data = Data;
let category =[];
data.forEach(element => {
  if(!category.includes(element.category)){
    category.push(element.category);
  }
});

  return (
          <div>
            <table>
              <th>Name Price</th><br/>
              {category.map((element, index) => {
                return <Category  key={index} category ={element} data={data}/>
              })}
            </table>
          </div>
         )
}
  export default Table
