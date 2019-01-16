import React, { Component } from "react";
import { StyledFormField } from '../styledComponents/StyledFormField';

export default class FormField extends Component {
  render() {
    const {label, type, placeholder, onChange, value, name, children} = this.props;
    return (
      <StyledFormField>
        <label className="label">{label}</label>
        <div className="control">
          <input className={"input " + type} name={name} type={type} placeholder={placeholder} onChange={onChange} value={value}/>
          <span className="tagName">{children}</span>
        </div>
      </StyledFormField>
    );
  }
}
