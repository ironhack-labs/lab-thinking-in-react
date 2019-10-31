import React from 'react'

function InputField(props) {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input name={props.name} onChange= {props.onChange} className="input" type={props.type} placeholder={props.placeholder}  />
      </div>
    </div>
  )
}

export default InputField;
