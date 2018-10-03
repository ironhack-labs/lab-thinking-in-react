import React,{Component} from 'react'

class SearchBar extends Component {
  render(){
    return (
      <div>
        <form>
          <input onChange={this.props.onChange} type="text" placeholder="Search..."/>
          <br/>
          <input onChange={this.props.onCheck} type="checkbox"/> Only Show Products that are in Stock
        </form>
      </div>
    )
  }
}

export default SearchBar