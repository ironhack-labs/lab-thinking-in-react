import React from 'react';

function SearchBar(props) {



    return (
        <div className="searchbar has-text-centered mb-5">
            <div className="field">
                <label className="label is-size-4">Search</label>
                <div className="control">
                    <input
                        className='input is-primary mb-4'
                        type='text'
                        name='search'
                        value={props.value}
                        placeholder='search for products'
                        onChange={props.onChange}
                    />
                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input
                                    type="checkbox"
                                    name="onStock"
                                    value={props.checkbox}
                                    onClick={props.onClick}
                                />
              Only show products on stock
            </label>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default SearchBar;