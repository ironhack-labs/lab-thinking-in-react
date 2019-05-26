import React,{Component} from 'react'

class SearchBar extends Component  {
  state = {
    searchText:'',
  
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value,
    }, () => this.props.onSearch(this.state.searchText))
  }

  render () {
    return (
      <div className='container'>
        <form className='form-group'>
          <label className='align-middle mb-3'>Search</label>
          <input className='form-control mb-3' 
            name='searchText' 
            onChange={this.handleChange} 
            value={this.state.searchText}
            autoComplete='off'/>
          <div className="form-check">
            <input className="form-check-input" 
              type="checkbox" 
              value= {this.state.inStock}
              name='inStock'
              onClick = {() => this.props.onHandleCheckbox()}/>
            <label className="form-check-label mb-5">
              Only Show Products on Stock
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar