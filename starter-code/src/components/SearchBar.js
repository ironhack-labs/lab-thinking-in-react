import React, {Component} from 'react'


class SearchBar extends Component {
    constructor(props) {
      super(props)
      this.state = {
        value: ''
      }
    }

    handleOnChange = e => {
      this.props.searchItem(e.target.value)
    }

    render() {
      return (
        <input onChange={this.handleOnChange} type="text" placeholder="Search"/>
      )
    }
   
  }
  export default SearchBar