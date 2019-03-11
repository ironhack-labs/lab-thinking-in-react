import React, { Component } from 'react';

export default class Search extends Component {

  state= {
    search: '',
    stock: false
  }

  onChangeSearch = (e) => {
    this.setState({
      search: e.target.value
    }, () => this.props.filterName(this.state.search))
  }

  onChangeCheck = () =>{
    this.setState({
      stock: this.state.stock ? false : true
    }, () =>  this.props.onStock(this.state.stock))
   
  }

  render = ()=> {
 
      return (
      <div className='container'>
        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search" value={this.state.value} onChange={this.onChangeSearch } />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.onChangeCheck}/>
          <label className="form-check-label" for="exampleCheck1">Filter by stocked</label>
        </div>
      </div>
      );
    }
}