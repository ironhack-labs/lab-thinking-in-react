import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      checkBoxStatus: false,
    };
  }

  render() {
    const { searchInput, checkBoxStatus } = this.state;
    let filteredProducts;

    filteredProducts =
      checkBoxStatus === true
        ? this.props.products
            .filter((productObj) =>
              productObj.name.toLowerCase().includes(searchInput.toLowerCase())
            )
            .filter((productObj) => {
              return productObj.stocked === true;
            })
        : (filteredProducts = this.props.products.filter((productObj) =>
            productObj.name.toLowerCase().includes(searchInput.toLowerCase())
          ));

    return (
      <div className="header">
        <h1>IronStore</h1>
        <SearchBar
          handleSearchInput={(e) =>
            this.setState({ searchInput: e.target.value })
          }
          handleCheckBox={(e) =>
            this.setState({ checkBoxStatus: !checkBoxStatus })
          }
        />
        <ProductTable products={filteredProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;
