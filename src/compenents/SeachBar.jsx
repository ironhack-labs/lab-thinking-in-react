import { useState } from 'react';

export default function SeachBar(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = (event) => {
    setIsChecked(event.target.checked);
    props.handleChangeCheckbox(event.target.checked);
  };

  return (
    <div>
      <p>Search</p>
      <input
        onChange={(event) => {
          props.handleChangeSearchBar(event.target.value);
        }}
      />
      <input type="checkbox" onChange={handleCheckbox} checked={isChecked} />
      <label>Only show product in stock</label>
    </div>
  );
}
