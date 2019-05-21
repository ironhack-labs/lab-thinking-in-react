import React, {Component} from 'react';

class SearchBar extends Component {
  render () {
    return (
      <React.Fragment>
        <form>
          <div className="form-group">
            <label htmlFor="search">Search</label>
            <input
              onChange={e => this.props.handleSearch (e)}
              type="text"
              className="form-control"
              id="search"
              name="search"
            />
          </div>
          <div className="form-check">
            <input
              // onChange={this.handleCheckBox}
              type="checkbox"
              className="form-check-input"
              id="check"
              name="check"
            />
            <label htmlFor="check" className="form-check-label">
              Only products on stock
            </label><br />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default SearchBar;
