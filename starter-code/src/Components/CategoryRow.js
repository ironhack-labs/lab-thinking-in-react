import React from 'react'
//components
import Row from './Row'

const Category = ({category,data}) => {
const rows=[];
data.forEach(element => {
  if(element.category === category){
    rows.push(element);
  }
});

  return(
    <div>
      <div >
            <td className = "category">{category}</td><br/>
            {rows.map(row => {
            return <Row row={row}/>
            })}
      </div>
      <div>

      </div>
    </div>

  )
}

export default Category;
