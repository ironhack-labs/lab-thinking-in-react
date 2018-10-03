import React,{Component} from 'react'
import Data from '../data.json'
import FindDisplay from './FindDisplay'


class FindContainer extends Component{
  state={
    search:'',
    data:[
      {category: "Sporting Goods",  price: "$49.99",    stocked: true,    name: "Football"},
      {category: "Sporting Goods",  price: "$9.99",     stocked: true,    name: "Baseball"},
      {category: "Sporting Goods",  price: "$29.99",    stocked: false,   name: "Basketball"},
      {category: "Electronics",     price: "$99.99",    stocked: true,    name: "iPod Touch"},
      {category: "Electronics",     price: "$399.99",   stocked: false,   name: "iPhone X"},
      {category: "Electronics",     price: "$199.99",   stocked: true,    name: "iPad Mini"},
      {category: "Sporting Goods",  price: "$199.99",   stocked: true,    name: "Tennis Balls"},
      {category: "Electronics",     price: "$199.99",   stocked: true,    name: "Huawei P10"}
    ],
    stock:false
  }

  changeStock=(e)=>{
    if(e.target.checked){
      this.setState({stock:true})
    }
    else{
      this.setState({stock:false})
    }
  }

  showProductsSports=(p,i)=>{
    if(p.category==="Sporting Goods"){
      return <FindDisplay key={i} {...p}/>
    }
  }

  showProductsTec=(p,i)=>{
    if(p.category==="Electronics"){
      return <FindDisplay key={i} {...p}/>
    }
  }

  onChange=(e)=>{
    this.setState({search:e.target.value})
 }
  render(){
  const {data, search,stock} = this.state
  
  let nData = data.filter(obj=>{
    if(stock){
      return obj.name.includes(search) && obj.stocked===true
    }else{
    return obj.name.includes(search)}
  })
    return(
      <div>
        <form>
          <input onChange={this.onChange} type="text" placeholder='Search'/>
          <br/>
          <input onChange={this.changeStock} type="checkbox"/> Only show products in stock
          </form>
          <table>
            <thead>
              <th>Name</th>
              <th>Price</th> 
            </thead>
            <tbody>
              <tr><b>Sporting Goods</b></tr>
            {nData.map(this.showProductsSports)}
              <tr><b>Electronics</b></tr>
            {nData.map(this.showProductsTec)}
            </tbody>
          </table>
      </div>
    )
  }
}

export default FindContainer