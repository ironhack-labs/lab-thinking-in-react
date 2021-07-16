import React from 'react'

class SearchBar extends React.Component {

    handleChange = event => {
      //  console.log (event)
        this.props.setQuery(event.target.value);
    }

    handleChecked = event => {
        //console.log('what is in event target value:',event.target.value)
        this.props.setChecked(event.target.checked);
    }

    render() {

        return (
            <>
                <p>Search</p>
                <input
                    type="text"
                    value={this.props.query}
                    onChange={this.handleChange}
                />
                <input
                    type="checkbox"
                    name="inStockProducts"
                    id="inStockProducts"
                    checked={this.props.inStockProducts}
                    onChange={this.handleChecked}
                />
            </>
        );
    }
}

export default SearchBar;