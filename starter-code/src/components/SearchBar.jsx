import React from 'react';

export default function SearchBar({ filter }) {
  return (
    <form onChange={evt => filter(evt)}>
      <h1 className="is-size-2">Product Search</h1>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label has-text-left">Search</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                type="text"
                className="input"
                id="filter-name"
                name="name"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label has-text-left">Show</label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" id="filter-stock" name="stocked" />
                Only products in stock
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
