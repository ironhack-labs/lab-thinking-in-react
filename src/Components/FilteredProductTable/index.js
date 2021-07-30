import React from 'react'
import SearchBar from '../SearchBar'
import TableHead from '../TableHead'
import TableRow from '../TableRow'


class FilterableProductTable extends React.Component{
    state = {
        myItens: [...this.props.products],
        text:'',
        filteredArray : this.myItens
    }
    handleFilter = (filter)=>{
        const filtered = this.state.myItens.filter((text)=>{
            return text.name.toLowerCase().includes(filter.toLowerCase())
        })
        this.setState({
            myItens: filtered
        })
    }
    render(){
        return(
            <div>
              <SearchBar value = {this.state.text} handleFilter = {this.handleFilter}/>
              <table>
              <TableHead/>
              {
                  this.state.myItens.map((item)=>{
                      return <TableRow name = {item.name} price= {item.price} />
                  })
              }
              </table>
              
            </div>
        )
    }
}

export default FilterableProductTable