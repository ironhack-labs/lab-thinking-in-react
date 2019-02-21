import React from "react";

export default function SearchBar({ search, isOnStock, onSearch, onClick }) {
  return (
    <form className="d-flex flex-column align-items-center">
      <div className="form-group">
        <input
          value={search}
          onChange={e => onSearch(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Enter search term"
        />
      </div>
      <div className="form-group form-check">
        <input
          value={isOnStock}
          onClick={() => onClick()}
          type="checkbox"
          className="form-check-input"
          id="isOnStock"
        />
        <label className="form-check-label" for="isOnStock">
          Only show products on stock
        </label>
      </div>
    </form>
  );
}
