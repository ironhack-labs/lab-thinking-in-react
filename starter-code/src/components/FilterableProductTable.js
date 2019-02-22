import React, {Component} from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";


class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product.data
    };
  }

  handleSearch(event) {
    const {value} = event.target;
    // console.log(" input value : " + value);
    const data = this.props.product.data;
    // console.log(data);
    const filtered = data.filter(oneData => {
      // console.log(oneData);
      return oneData.name.indexOf(value) > -1;
    });
    // console.log(" filtered data : " + filtered);

    this.setState({product: filtered});
  }

  handleToggle(event) {
    const {checked} = event.target;
    // contructor.name gives the HTML class name of the element
    // this helps finds the available element properties online
    console.log(event.target.constructor.name);
    const data = this.props.product.data;
    const filtered = data.filter(oneData => {
      if (checked === true) {
        return oneData.stocked === checked;
      } else {
        return oneData;
      }
    });
    this.setState({product: filtered});
  }

  render() {
    return (
      <div className="section">
        <div className="columns">
          <div className="column is-primary">
            <SearchBar
              SearchWord={word => {
                this.handleSearch(word);
              }}
              FilterProducts={toggle => {
                this.handleToggle(toggle);
              }}
              search={this.state.search}
            />
            <ProductTable product={this.state.product} />
          </div>
        </div>
      </div>
      // components
    );
  }
}

export default FilterableProductTable;
