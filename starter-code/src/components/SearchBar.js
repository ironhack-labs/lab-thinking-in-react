import React from "react";

export default function SearchBar(props) {
  return (
    <div className="uk-flex uk-flex-center">
      <div className="uk-flex uk-flex-column">
        <input
          type="text"
          value={props.value}
          onChange={e => props.onSearch(e.target.value)}
          className="uk-input uk-form-small uk-width-xlarge"
        />
        <br />
        <div className="uk-margin-remove-top uk-grid-small uk-child-width-auto uk-grid uk-align-center">
          <label htmlFor="stock">
            <input
              className="uk-checkbox"
              type="checkbox"
              name="stock"
              onChange={e => props.onTick(e.target.checked)}
            />{" "}
            only show products in stock
          </label>
        </div>
      </div>
    </div>
  );
}
