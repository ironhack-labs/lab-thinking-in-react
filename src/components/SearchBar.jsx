import React from 'react'

class SearchBar extends React.Component {

    handleChange = (event) => {
        
        let inputText = event.target.value;
        this.props.searchText(inputText)
    }

    handleChangeBox = (event) => {
        let isChecked = event.target.checked
        this.props.toggleStock(isChecked)
    }

    render() {
      return (
        <form>
          <input 
           onChange={this.handleChange}
           type="text" 
           placeholder="Search..." />
          <p>
            <input type="checkbox" 
            onChange={this.handleChangeBox}/>
            {' '}
            Only show products in stock
          </p>
        </form>
      );
    }
  }

export default SearchBar
