import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: false,
      searchValue: ""
    };
  }
  
  pushValue(value){
    this.setState({searchValue: value});
    // this.handleSubmit();
  }

  handleStock = () => {
    this.setState({isChecked: !this.state.isChecked})
    // this.handleSubmit();
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState !== this.state){
      let check = this.state.isChecked
      let value = this.state.searchValue
      this.props.sendSearch({value, check})
    }
  }

  handleSubmit(){
  }


  render() {
    return (
      <div className="field section">
        <div className="control">
          <input className="input" placeholder="Search..." onChange={e => this.pushValue(e.target.value)} />
        </div>
        <div className="control">
          <label className="checkbox">
            <input type="checkbox" onChange={this.handleStock}/> Only show products in stock
          </label>
        </div>
      </div>
    );
  }
}
