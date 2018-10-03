import React, { Component } from "react";
import FormDisplay from "./FormDisplay";

class SearchBar extends Component {
  state = {
    form: {},
    products: this.props.info,
    clase: null
  };
  onChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const { form } = this.state;
    const { category } = this.state;
    form[field] = value;

    for (var i = 0; i < this.props.info.length; i++) {
      if (this.props.info[i].name.indexOf(value) !== -1) {
        console.log('hola')
        // 
      } else {
        console.log('No se encuentra')
        // 
      }
    }

    // if (!category.includes(form[field])) {
    //   this.setState({ clase: "hidden" })
    // } else {
    //   this.setState({ clase: null })
    // }
    // this.setState({ form });
  };
  // los que no coincden desaprecen
  // los que no coinceden 
  render() {

    return (
      <div>
        <FormDisplay onChange={this.onChange} onSubmit={this.onSubmit} />
      </div>
    );
  }
}
export default SearchBar;
