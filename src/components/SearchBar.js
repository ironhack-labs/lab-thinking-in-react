import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
        <>
            <div className="input-group mb-3">
            <span className="input-group-text" id="query">
                Item Search
            </span>
            <input
                type="text"
                name="query"
                className="form-control"
                aria-label="query"
                aria-describedby="basic-addon1"
                value={this.props.query}
                onChange={(event) => this.props.inputHandler(event)}
            />
            </div>
            <div className="d-flex justify-content-center">
            <div className="form-check m-2 mx-3">
                <label className="form-check-label" htmlFor="showCheckBox">
                Only show products on stock
                </label>
                <input
                className="form-check-input"
                name="showCheckBox"
                checked={this.props.showCheckBox}
                type="checkbox"
                id="showCheckBox"
                onChange={(event) => this.props.inputHandler(event)}
                />
            </div>
            </div>
        </>
        );
  }
}

export default SearchBar;
