import React, { Component } from 'react';


class FilterableProductTable extends Component {




showList =() =>{

  console.log(this)
  let list = this.props.data.map((eachList,i)=>{

    return(
     
       
        <tr key={i}>
          <th>{eachList.name}</th>
          <th></th>
          <th>{eachList.price}</th>
        </tr>
    
        
      
    )
  })
  return list
}


  render(){
    return(
      <div className="FilterableProductTable">
       
         <table>
         <tr>
        <th></th>
        <th>Iron Store</th>
         <th></th>
          </tr>

          <tr>
       <th>Name</th>
        <th></th>
        <th>Price</th>
          </tr>
          {this.showList()}
         </table>

      </div>
    
    )
  }
}


export default FilterableProductTable;


