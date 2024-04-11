import React from 'react';
import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSearch, onCheck }) {

  const [state, setState] = useState({name: '',})

   const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setState({
      ...state,
      [name]: value
    });
    onSearch({ ...state, [name]: value });
  }

  const handleCheck = (event) => {
    const { checked } = event.currentTarget;
    setState({
      ...state, checked
    });
    onSearch({...state, checked});
 

  }




  return (
    <div className='SearchBar'>
      <input onChange={handleChange} type='text' name='name' value={state.name}/>

      <div className='show-only'>
      <span>Only show products in stock</span><input type="checkbox" name='filterStock' onChange={handleCheck}  checked= {state.checked}/>
      </div>
    </div>
  )
}

export default SearchBar