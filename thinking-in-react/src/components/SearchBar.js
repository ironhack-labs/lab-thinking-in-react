import React, {Component} from 'react'

export default class SearchBar extends Component{

  constructor(){
    super()

    this.onFilterTextChange =   this.onFilterTextChange.bind(this)

  }
  
  onFilterTextChange(e){
    this.props.onFilterTextChange(e.target.value)
  }

  render(){
    return(
      <div>
        <form>
          <input type='text' 
            placeholder='search'
            value={this.props.filterText}
            defaultValue=''
            onChange={this.handleFilterTextChange}
          ></input>
          <p>
            <input type='checkbox' ></input>
            {''}
            Only show products in the stock
          </p>
        </form>
      </div>
    );
  }

}