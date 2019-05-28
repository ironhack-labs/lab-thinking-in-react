import React from 'react'

class SearchBar extends React.Component{
  state = {
    checked:false
  }

  handleChange = (event) => {
    this.props.filterBy(event.target.value)
  }

  handleCheckBox = (event) => {
    this.props.inStock(event.target)
  }

  handleOnOff = () => {
    this.checkFunction(!this.state.checked)
  }

  checkFunction = (e) => {
    this.setState({
      checked: e
    })
    this.props.inStock(this.state.checked)
  }
  render(){
    console.log(this.state.checked)

    return (
      <form>
          <label>Search</label>
            <input value={this.props.text} onChange={(e) => this.handleChange(e)} className="form-control" type="text" aria-label="Search" />
          <label>Only show products on stock</label>
            <input type="checkbox" name="inStock" checked={this.state.checked} onChange={this.handleOnOff}/>
      </form>
    )
  }
}

export default SearchBar