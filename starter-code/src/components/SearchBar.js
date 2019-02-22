import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
        <section className="SearchBar">
            <div class="active-pink-3 active-pink-4 mb-4">
                <input class="form-control" type="text" placeholder="Search" aria-label="Search"
                        onChange={event => {this.props.nameSearch(event)}} />
            </div>
            <div class="form-check">
                <input class="form-check-input" 
                onChange={event => {this.props.stateCheckBox(event)}}
                type="checkbox" 
                name="elementSearched" 
                id="defaultCheck2" disabled />
                <label class="form-check-label" for="defaultCheck2">
                    Disabled checkbox
                </label>
            </div>
        </section>
        );
    }
  }
export default SearchBar;