import React, { Component } from 'react'

export default class ProductRow extends Component {
  

  
  render() {
    var sporting=[]
    var electronics=[]
    const listProducts=[...this.props.data];
    for (var i=0;i<listProducts.length;i++){
    if (listProducts[i].category==="Sporting Goods"){
      sporting.push(listProducts[i].name)
    }else{
      electronics.push(listProducts[i].name)
    }
   

    }

    console.log(listProducts[0].category)
    console.log(sporting)
    console.log(electronics)

 
    // selectCategory = (category =>{
    //   if (category === "Sporting Goods"){
    //     cat={listProducts}
    //     console.log(cat)
    //   }
    // });
    
    return (
      <div>
        <h1>{listProducts[0].category}</h1>
        {sporting.map((product,index)=>{
          return(
            <div key={index}>
            
            <p>{product}</p>
            </div>
          )
        })}
        <h1>{listProducts[5].category}</h1>
          {electronics.map((product,index)=>{
            return(
              <div key={index}>
              
              <p>{product}</p>
              
              </div>
              
            )
        })}
        
        
      </div>
    )
  }
}
