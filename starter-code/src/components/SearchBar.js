import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: ''
    }
   
  }

handleChange(e) {
  
  // this.setState({
  //   search: e.target.value
  // }, () => {
  //       // console.log('temp input in component state: ', this.state)
  //     });
  this.props.filterProduct(e.target.value)
  }

render() {
  const search = this.props.products
  
  
  return (
    <fieldset>
      <legend>Enter search</legend>
      <br/>
      <input value={search} onChange= {e => this.handleChange(e)} placeholder='I want to buy...' />
      <br/><br/>
      <input type="checkbox"/> <label>Only show products on stock</label>
    </fieldset>
  )
  }
}

export default SearchBar