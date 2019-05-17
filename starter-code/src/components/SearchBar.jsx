import React, {Component} from 'react';

const SearchBar = () => {
  const css = {
    type: text,
  };
  const checkbox = {
    type: checkbox,
  };

  return (
    <div>
      <h3>Search</h3>
      <form>
        <div className="form-group">
          <input
            className="form-control"
            style={css}
            onChange={e => this.handleChange (e)}
          />
        </div>

        //checkbox functionality:
        <div className="form-check">
          <input style={checkbox} class="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>

      </form>
    </div>
  );
};

export default SearchBar;
