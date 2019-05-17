import React, {Component} from 'react';

class SearchBar extends Component {
  state = {
    account: {search: '', check: ''},
  };

  handleChange = e => {
    const account = {...this.state.account};
    account.search = e.currentTarget.value;
    this.setState ({account});
  };

  render () {
    return (
      <React.Fragment>
        <form>
          <div className="form-group">
            <label htmlFor="search">Search</label>
            <input
              value={this.state.account.search}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="search"
            />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="check" />
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
