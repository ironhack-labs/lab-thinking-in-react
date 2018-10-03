import React,{Component} from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import Data from '../data.json'

class FilterableTable extends Component {
  state={
    data:Data.data
  }
  filter=(e)=>{ 
    let data = Data.data
    let filtered = data.filter(val =>{ return val.name.toUpperCase().includes(e.target.value.toUpperCase())})
    console.log(filtered)
    this.setState({data: filtered})
  }

  inStock = (e) => {
    let data = Data.data
    if(!e.target.checked){
      this.setState({data})
      return;
    }
    let filtered = data.filter(val =>{return val.stocked})
    console.log(filtered)
    this.setState({data: filtered})

  }

  render(){
    return (
      <div>
        <SearchBar onChange={this.filter} onCheck={this.inStock}/>
        <ProductTable data={this.state.data} />
      </div>
    )
  }
}

export default FilterableTable