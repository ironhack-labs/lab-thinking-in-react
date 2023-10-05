import React from 'react'

function SearchBar( {onSearch, onCheck}  ) {

  const handleSearchChange = (event) => {
    const { value } = event.target;
   
    onSearch(value);
  }

  const handleCheckBox = (event) => {
    const {checked} = event.target; 
    onCheck(checked);
  }
  

  return (
    <div className='input-group d-flex flex-column justify-content-center align-items-center'>
      <div className="d-flex">
        <span className="input-group-text"><i className='fa fa-search'></i></span>
        <input 
          type="text" 
          name="search"
          className="form-control" 
          placeholder="Task name"
          onChange={handleSearchChange} 
        />
      </div>
      <input 
        type="checkbox"
        onChange={handleCheckBox}
        style={{ marginTop: '10px' }}  
      />
    </div>
  )
  

}

export default SearchBar;