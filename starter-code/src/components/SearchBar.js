import React from "react";

class SearchBar extends React.Component {
  state = {
    search: "",
    checkbox: false
  };

  handleChange = e => {
    // met à jour le state côté searchbar
    this.setState({ search: e.target.value });
    // communiquer au parent le contenu de la searchbar pour qu'il puisse modifier la liste de produits qu'il affiche
    this.props.updateInput(e.target.value);
  };

  handleCheckbox = e => {
    this.setState({
      checkbox: e.target.checked
    });
    this.props.updateStockCheck(e.target.checked);
  };

  render() {
    return (
      <div>
        <h3> Search </h3>
        <input
          type="text"
          name="search"
          value={this.state.search}
          onChange={e => this.handleChange(e)}
        />
        <div>
          <input
            type="checkbox"
            name="stock"
            id="stockid"
            checked={this.state.checkbox}
            onChange={e => this.handleCheckbox(e)}
          />
          <label htmlFor="stockid">Only Show Products on Stock</label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
