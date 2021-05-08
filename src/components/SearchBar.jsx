import React from 'react';

function SearchBar({ valueSearch, onChange, valueCheck, onChecked }) {
  return (
    <div className="SearchBar container mb-3 mt-3">
      <form>
        <div className="row g-3">
          <label htmlFor="search" className="form-label">Search</label>
          <input type="text" className="form-control" id="search" value={valueSearch} onChange={onChange} />
        </div>
        <div className="row g-3">
          <div className="form-check checkbox">
            <input className="form-check-input" type="checkbox" id="gridCheck" value={valueCheck} onChange={onChecked} />
            <label className="form-check-label" htmlFor="gridCheck">
              Only show products on stock
                        </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;