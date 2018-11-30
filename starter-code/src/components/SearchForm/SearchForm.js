import React from "react";
import { Form } from "react-bulma-components/full";
import Switch from 'react-bulma-switch/full';
import {connect} from "react-redux";

import "./SearchForm.css";
import {action__filterOnSearchInput, action__toggleOnlyOnStock} from "../../stateManagement/actions";

class SearchForm extends React.Component{

  constructor(props){
    super(props);
    this.state={
      searchValue: "",
      switchValue: false,
    }
  }

  onChangeSearchInput = (event) => {
    const searchValue = event.target.value;
    this.setState({searchValue});
    this.props.dispatch(action__filterOnSearchInput(searchValue));
  };

  onChangeCheck = event => {
    const switchValue = event.target.checked;
    this.setState({switchValue});
    this.props.dispatch(action__toggleOnlyOnStock(switchValue));
  };

  render(){
    return (
      <div className={"SearchForm"}>
        <Form.Input
          placeholder={"search.."}
          className={"search-input"}
          id={"search-input"}
          onChange={this.onChangeSearchInput}
          value={this.state.searchValue}
        />
        <Switch value rtl id={"switch-input"} onChange={this.onChangeCheck} checked={this.state.switchValue}>Only on stock</Switch>
      </div>
    )
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(SearchForm);