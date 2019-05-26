import React,{Component} from 'react'

class SearchBar extends Component  {
  state = {
    searchText:''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSearch(this.state.searchText)
  }

  render () {
    return(
      <div className='row'>
        <form className='form-group' onSubmit={this.handleSubmit}>
          <label className='row col-12'>Search</label>
          <input className='row col-12 form-control' name='searchText' onChange={this.handleChange} value={this.state.searchText}/>
          <div></div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value=""/>
            <label className="form-check-label" for="defaultCheck1">
              Only Show Products on Stock
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar