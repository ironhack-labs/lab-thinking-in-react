import React from "react";
import data from "../../data.json";
import Search from "./Search";
import FilteredTable from "./FilteredTable";

class ProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: data.data,
      search: {
        name: ""
      }
    };
    this._searchItems = this._searchItems.bind(this);
    this._handleSearchChange = this._handleSearchChange.bind(this);
  }

  render() {
    let list = this.state.items;
    let tableCats = [];
    list.forEach(el => {
      if (!tableCats.includes(el.category)) tableCats.push(el.category);
    });
    console.log(`Categories: `, tableCats);
    console.log(`list`, typeof list, list);

    return (
      <div>
        <Search
          search={this.state.search}
          handleSearchChange={this._handleSearchChange}
          searchItems={this._searchItems}
        />
        <FilteredTable list={list} cats={tableCats} />
      </div>
    );
  }
  _searchItems(event) {
    console.log("what?------");
    let query = this.state.search;
    event.preventDefault();
    console.log("search", query.name);
    // REGEX
    let queryList = data.data.filter(el =>
      el.name.match(new RegExp(`.*${this.state.search.name}.*`, "i"))
    )
    console.log(queryList);
    this.setState({
      items: queryList
    });
  }
  _handleSearchChange(key, value) {
      const newSearch = { ...this.state.search.name };
      console.log(newSearch, "newsearch");
      newSearch[key] = value;
      this.setState({
        search: newSearch
      });
  }
}

export default ProductTable;
