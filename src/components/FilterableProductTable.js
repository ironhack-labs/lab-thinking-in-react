import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        products: this.props.products,
        query: '',
        showCheckBox: false
      };
      this.inputHandler = this.inputHandler.bind(this);
    }

    inputHandler(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        console.log(value);
        this.setState(() => ({
          [name]: value,
        }));
    }
    filterProducts() {
        return this.props.products.filter((product) => {
          return (
            (this.state.showCheckBox ? product.stocked : true) &&
            product.name.toLowerCase().includes(this.state.query.toLowerCase()) 
          );
        });
      }
      render() {
          const products = this.filterProducts()
          return (
            <div className="container flex flex-col mx-auto w-full items-center justify-center">
                <div className="px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                        IronStore
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
                        Thinking in React
                        </p>
                </div>
                <SearchBar inputHandler={this.inputHandler} query={this.state.query} showCheckBox={this.state.showCheckBox}/>
                <ProductTable products={products} />
            </div>
        )
      }

    
}
