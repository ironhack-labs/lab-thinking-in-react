import React from 'react';


const Checkbox = (props) => {
  return (
    <div className="checkbox">

      <label>Only show Products on Stock</label>
      <input
        type="checkbox"
        checked={props.state.outOfStock}
        onChange={props.checkboxHandler}
      />

    </div>
  )
}

export default Checkbox