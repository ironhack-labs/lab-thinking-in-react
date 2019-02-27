import React, { Component } from "react"
import data from "./data.json"
import FilterableProductTable from "./components/FilterableProductTable"

class App extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    this.setState({ products: data.data })
  }

  onChangeSearch = e => {
    let search = e.target.value.toLowerCase()
    if (search === "") return this.setState({ products: data.data })
    let arr = this.state.products.filter(p =>
      p.name.toLowerCase().includes(search)
    )
    this.setState({ products: arr })
  }

  onChangeStock = e => {
    let { products } = this.state
    if (e.target.checked) {
      products = products.filter(p => p.stocked === true)
      this.setState({ products: products })
    } else {
      this.setState({ products: data.data })
    }
  }

  render() {
    let { products } = this.state
    return (
      <div className="App">
        <FilterableProductTable
          products={products}
          onChangeSearch={this.onChangeSearch}
          onChangeStock={this.onChangeStock}
        />
      </div>
    )
  }
}

export default App
