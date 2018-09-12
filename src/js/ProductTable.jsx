import React from "react";
import data from "../../data.json";
import DataBox from "./DataBox";
import Search from "./Search";


class ProductTable extends React.Component {

constructor(props) {
    super(props);

    this.state = {
      items: []
      // search: {name: ''}
    };
   
  }
  componentDidMount() {
    this.setState({ items: data.data });
  }

  render() {
    console.log(this.state.items);
    console.log(typeof this.state.items);
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
        {/* <Search
                     search={this.state.search}
                     handleSearchChange={this._handleSearchChange}
                     searchPokemon={this._searchFoods}
                 /> */}

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
}

export default ProductTable;
