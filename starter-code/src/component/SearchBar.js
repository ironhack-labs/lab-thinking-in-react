import React from 'react';

class SearchBar extends React.Component {

  state = {
    searchText: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSearch(this.state.searchText)
  }

  handleChange = e => {
    const ischecked = document.getElementById('checkbox').checked
    this.setState({searchText: e.target.value}, ()=>this.props.onSearch(this.state.searchText, ischecked))
  }

  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Search</label>
          <input type="Search" className="form-control" placeholder="Search it..." onChange={this.handleChange}/>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="checkbox" />
          <label className="form-check-label"> Only show products on Stock</label>
        </div>
      </form>

    )
  }
}

export default SearchBar