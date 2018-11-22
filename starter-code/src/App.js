import React, { Component } from 'react';
import inventory    from './data.json'
import SearchBar    from './components/SearchBar';
import ProductTable from './components/ProductTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stock:  [],
      search: '',
      check:  false
    }
  }

  componentWillMount() {
    let [...stock] = inventory.data;
    this.setState({stock});
  }

  handleSearch = e => {
    let {search} = this.state;
    search = e.target.value;
    this.setState({search});
  }

  handleCheck = e => {
    let check = this.state;
    check = e.target.checked;
    this.setState({check});
    
  }

  render() {
    const {stock, search, check} = this.state;
    return (
      <main>
        <SearchBar holder="Search..." nameSearch="search" nameStock="check" onChange={this.handleSearch} onCheck={this.handleCheck} />
        <ProductTable stock={stock} search={search} check={check} />
      </main>
    );
  }
}

export default App;