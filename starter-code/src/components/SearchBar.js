import React from 'react'

class SearchBar extends React.Component {
  state = {
    query:'',  
    stock: false
  }

  hanndleInput = e => {
    this.setState({[e.target.name]:e.target.value})
    this.props.search(this.state.query)
  }
  handleCheckboxChange = e => {
    this.setState({ stock: e.target.checked })
    this.props.stock(this.state.checked)
  }

  render () {
    return (
      <form onSubmit={(e)=>e.preventDefault()}>
        <input value={this.state.query} onChange={this.hanndleInput} type='text' name='query' />
        <input type="checkbox" name="stock" checked={this.state.stock} onChange={this.handleCheckboxChange}/> Only show products on stock
      </form>
    )
  }
}

export default SearchBar