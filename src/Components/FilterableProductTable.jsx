// import React, { Component } from 'react';
// import data from '../data.json';
// import SearchBar from './SearchBar';
// import ProductTable from './ProductTable';

// export class FilterableProductTable extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filtro: '',
//     };

//     //bind
//     this.filtrar = this.filtrar.bind(this);
//   }

//   //1- como utilizar la propr filtro dentro del componente

//   //2- El search bar al renderizar quedará vacío

//   //this.props.productos >>>> Datos

//   filtrar(filtro) {
//     console.log('filtrar', filtro);
//     this.setState({ filtro: filtro });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Iron store</h1>
//         <SearchBar callbackFunction={this.filtrar} />
//         <ProductTable filtro={this.state.filtro} />
//       </div>
//     );
//   }
// }

// export default FilterableProductTable;

import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: '',
      checked: false,
    };
    this.filter = this.filter.bind(this);
  }

  stocked() {
    this.setState({
      //...this.state,
      checked: !this.state.checked,
    });
  }

  filter(query) {
    this.setState({ filtered: query });
  }

  render() {
    console.log('ESTAS SON LAS PROPS', this.props.products);
    return (
      <div>
        <div className="table">
          <h1>IronStore</h1>
          <SearchBar
            products={this.props.products}
            functionToFilter={this.filter}
          />
          <div>
            <ProductTable
              products={this.props.products}
              filtro={this.state.filtered}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FilterableProductTable;
