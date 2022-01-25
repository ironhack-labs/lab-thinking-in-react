import React from 'react';

const CheckBox = ({onCheckBoxHandler}) => {
  //state to check false or true 
  // at first the checked property is 'false'
  // whenever the user click on the checkbox, it will be 'true' -> controlled by onChange event listener
  const [isChecked, setIsChecked] = React.useState(false); //boolean is not a string
  
  const onChangeHandler = (event) => {
    // whenever the onChange is triggered, this event listener attached the Event OBJECT
    // so we received the 'event' object --> event.target.checked
    //target: input
    //checked: false
    setIsChecked(!isChecked)
    // LIFT STATE UP 
    // pass the state up to the parent using props
    onCheckBoxHandler(event.target.checked); // parent function
  }
  
  return (
    <div>
      <label htmlFor="inStock">Only show products in stock</label>
      <input 
      type="checkbox" 
      name="inStock" 
      id=""
      // property -> checked, it could be 'false' or 'true'
      checked={isChecked} //start with false or not checked
      onChange={onChangeHandler}
      />
    </div>
  )
}

export default CheckBox;