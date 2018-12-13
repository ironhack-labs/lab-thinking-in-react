import React, {Component} from 'react'
import itemsFull from './data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableTable extends Component{

  state = {
    items:itemsFull,
    arrCategory:[],
    drawCat:true,
    search:''
   }
   
  drawCategory = (categoryToDraw) =>{
    console.log(categoryToDraw)
    var arr = this.state.arrCategory
    if(arr.indexOf(categoryToDraw)===-1){
      arr.push(categoryToDraw)
      return true
    }else {
      return false
    }
  }

  searchInput = e => {
    const text = e.target.value
    console.log(this.state.search)
    const regEx = RegExp(text, "i")
    const filtered = this.state.items.filter(f => regEx.test(f.name))
    this.setState({ items: filtered , arrCategory:[], search:text})
  }

  filterStocked = e =>{
    const check = e.target.checked
    if(check===true){
    const filtered = this.state.items.filter(f => f.stocked===true)
      this.setState({ items: filtered, arrCategory:[]})
    }else{
      this.setState({ items: itemsFull, arrCategory:[]} )
    }
  }

  render(){

    return(
    <div>
      <h1>Thinking in React</h1>
      <SearchBar searchFunc={()=>this.searchInput} onlyInStock={()=>this.filterStocked}/>
      <tbody className='tabla'>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {this.state.items.map((item,index)=><ProductTable key={index}  {...item}  drawCat={this.drawCategory(item.category)}/>)}
      </tbody>
    </div>
    )
  }
}

export default FilterableTable