
import React from 'react';
import FilterableProductTable from "../components/FilterableProductTable"

class SearchBar extends React.Component {
state = {
    search:"" 
}

// handleChange = (event) => {
//     this.setState({
//         search: event.target.value})
// }

// handleChangeINSEARCHBAR(event) {
//     this.props.handleChange(event.target.value);
//   }

render() {
return (<div><h2>Search</h2>
    <input name="searchBar" value={this.state.search} onChange={(event) => this.props.handleChange(event.target.value)}/>
</div>
)}}

export default SearchBar