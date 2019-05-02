import React, { Component } from 'react';
import './App.css';
import ProductTable from './components/ProductTable/ProductTable';
import data from './data.json';

class App extends Component {
  state = {
    data : [...data.data],
    data2 : [...data.data],
    search : undefined,
    onStock: false,
  }

  searchFunction(e) {
      this.setState({
        ...this.state,
        search : e.target.value
      }, () => {
        this.searchShowFunction(this.state.search, this.state.onStock)
      })
  }

  searchShowFunction(search, onStock) {
    let productsSearch = [...this.state.data2];
    let productFilter = productsSearch.filter((product) => product.name.toUpperCase().includes(search.toUpperCase()));
    let productShowFilter = productFilter;
    if(onStock){
     productShowFilter = productFilter.filter((product) => product.stocked === true);
    }

    this.setState({
      ...this.state,
      data: productShowFilter
    })
  }

  showFunction(e) {
      this.setState({
        ...this.state,
        onStock : e.target.checked
      }, () => {
        this.searchShowFunction(this.state.search, this.state.onStock)
    })
  }
  
  render() {
    const products = this.state.data.map((product, i) => {
      return (
        <React.Fragment key={i}>
          <ProductTable {...product} />
        </React.Fragment>
      )
    });

    return (
      <React.Fragment>
        <div>
          <h1>IronStore</h1>
          <header>
            <form className="formSearch">
               <input placeholder="Search" type="text" value={this.state.search} onChange={e => this.searchFunction(e)} />
               <input type="checkbox" name="checkboxFilter" onChange={e => this.showFunction(e)} /><label name="checkboxFilter">Only show products on stock</label>
            </form>
          </header>
          <section>
            <table>
              <thead>
                <tr>
                  <th>First name</th>
                  <th>Last name</th>
                </tr>
              </thead>
              <tbody>
                {products}
              </tbody>
            </table>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
