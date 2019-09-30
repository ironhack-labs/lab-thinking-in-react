import React, { Component } from 'react'
import ProductRaw from '../components/ProductRaw.js'

export default class ProductTable extends Component {

  getCategories=() =>{
    let categories =[];
    this.props.products.forEach(product =>{
      if(!categories.includes(product.category)){
        categories.push(product.category);  
      }
    })
    return categories;
  }

  printCategory=(category)=>{
    return this.props.products.map((product,index)=>{
      if(product.category === category){
        return <ProductRaw  key={index} product={product}/>
      }
    })
  }

  render() {  
    return (
      <div style={style} >
        <div style={styleHeader}> 
          <p>Name</p>
          <p>Price</p>
        </div>
      {this.getCategories().map(category=>{ 
              return <div>
                <div style={{backgroundColor:'#ddd', height:'40px' ,lineHeight:'40px'}}>
                    {category}
                </div>
                        
                    {this.printCategory(category)}
                </div>
        })}
      </div>
    )
  }
}

const styleHeader ={
  marginBottom:'5px', 
  height:'50px', 
  backgroundColor:'#bbb', 
  display:'flex',
  justifyContent:'space-around'
}

const style ={
  padding:'15px',
  position: 'relative',
}