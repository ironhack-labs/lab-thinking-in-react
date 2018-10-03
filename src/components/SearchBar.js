import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: false
    };
  }
  
  handleSubmit(event){
    this.props.sendSearch(event)
  }

  handleStock = () => {
    this.setState({isChecked: !this.state.isChecked})
    this.props.sendCheck(this.state.isChecked)
  }

  render() {
    return (
      <div className="field section">
        <div className="control">
          <input className="input" placeholder="Search..." onChange={e => this.handleSubmit(e.target.value)} />
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
