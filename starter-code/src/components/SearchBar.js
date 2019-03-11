import React  from 'react';

export default ({ onSearch, onCheck }) => (
  <div className="container">
  <label>Search</label>
    <div className="input-group flex-nowrap"> 
    <input className="form-control" type="text" placeholder="Search" onChange={(event) => onSearch(event.target.value)}/>
    </div>

    <div className="custom-control custom-checkbox">
      <input type="checkbox" className="custom-control-input" id="customCheck1" onChange={(event) => onCheck(event.target.checked)}/>
      <label className="custom-control-label" htmlFor="customCheck1">Only show products on stock</label>
    </div>
  </div>
  
  ) 

