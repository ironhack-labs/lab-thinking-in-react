import React from 'react'
import 'bulma/css/bulma.css';

const SearchBar = (props) => {
  const handleCheckboxChange = () => {
    props.handleCheckbox()
  }

  return (
    <div className="searchbar has-text-centered mb-5">
      <div className="field">
        <label className="label is-size-4">Search</label>
        <div className="control">
          <input 
            className='input is-primary mb-4' 
            type='text'
            name='search' 
            value={props.search} 
            placeholder='search for products' 
            onChange={props.onChange} 
          />
        </div>
        <div className="field">
          <div className="control">
            <label className="checkbox is-size-5">
              <input 
                type="checkbox" 
                name="onStock" 
                value={props.checkbox}
                onChange={handleCheckboxChange}
              />
              Only show products on stock
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;