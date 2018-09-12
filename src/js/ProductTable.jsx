import React from "react";
import data from "../../data.json";
import DataBox from "./DataBox";
import Search from "./Search";


class ProductTable extends React.Component {

constructor(props) {
    super(props);

    this.state = {
      items: [],
    //   search: ''
      search: {name: ''}
    };
    this._searchItems = this._searchItems.bind(this);
    this._handleSearchChange = this._handleSearchChange.bind(this)
  }
  componentDidMount() {
    this.setState({ items: data.data });
  }

  render() {
    console.log(this.state.items);
    const mappedData = this.state.items.map((el, index) => (
      <DataBox
        name={el.name}
        quantity={el.quantity}
        index={index}
        key={index}
        stocked={el.stocked}
        cat={el.category}
        price={el.price}
        // clickToSubmit={() => this._submitQty(index)}
      />
    ));

    return (
      <div>
        <Search
                     search={this.state.search}
                     handleSearchChange={this._handleSearchChange}
                     searchItems={this._searchItems}
                 />

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{mappedData}</tbody>
        </table>
      </div>
    );
  }
  _searchItems(event) {
    let query = this.state.search
    event.preventDefault()
    console.log("search",query.name )
    // REGEX
    let queryList = items.filter((el,index)=> el.name.match(new RegExp(`.*${this.state.search.name}.*`,'i')))
    console.log(queryList)
    this.setState({
      items : queryList
    })
}
_handleSearchChange(key, value) {
    const newSearch = { ...this.state.search.name }
    console.log(newSearch,"newsearch")
    newSearch[key] = value
    this.setState({
        search: newSearch,
    })
}
}

export default ProductTable;
