// import React, { Component } from 'react';

// export class SearchBar extends Component {
//   constructor(props) {
//     super(props);

//     //BINDS

//     this.search = this.search.bind(this);
//   }

//   search(event) {
//     console.log(event.target.value);
//     this.props.callbackFunction(event.target.value);
//   }
//   render() {
//     return (
//       <div>
//         <form>
//           <input type="text" name="search" onChange={this.search}></input>
//         </form>
//       </div>
//     );
//   }
// }

// export default SearchBar;

import React, { Component } from 'react';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.props.functionToFilter(event.target.value);
  }

  handleCheck() {}
  render() {
    return (
      <div className="search">
        <h3>Search</h3>
        <form className="form">
          <input type="text" name="search" onChange={this.handleSearch} />
          <div className="checkDiv">
            <input type="checkbox" name="ckeck" onChange={this.handleCheck} />
            <p>Only show products in stock</p>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
