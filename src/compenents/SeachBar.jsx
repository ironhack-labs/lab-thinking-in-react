import { useState } from 'react';

export default function SeachBar(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [inputSearch, setInputSearch] = useState('');

  const handleCheckbox = (event) => {
    setIsChecked(event.target.checked);
    console.log(inputSearch);
    props.handleChange(inputSearch, isChecked);
  };

  return (
    <div>
      <p>Search</p>
      <input
        onChange={(event) => {
          setInputSearch(event.target.value);
          console.log(inputSearch);
          props.handleChange(inputSearch, isChecked);
        }}
      />
      <input type="checkbox" onChange={handleCheckbox} checked={isChecked} />
      <label>Only show product in stock</label>
    </div>
  );
}
