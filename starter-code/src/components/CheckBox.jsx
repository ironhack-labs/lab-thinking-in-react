import React from 'react'

function CheckBox(props) {
  return (
    <label className="checkbox">
      <input type="checkbox" name={props.name} onChange={props.onChange} />
      {props.text}
    </label>
  )
}

export default CheckBox
