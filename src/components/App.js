import './App.css';
import ProductTable from './ProductTable'
import Container from 'react-bootstrap/Container'
import { Component, React } from 'react'
import products from '../data.json'
import Searchbar from './Searchbar';

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchField: '',
      products: products.data
    }
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {

    const searchField = this.state.searchField
    const newList = this.state.products
    const filteredList = newList.filter(elm => elm.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <>
        <Container className="container">
          <h1>IronStore</h1>
          <Searchbar handleChange={this.handleChange}/>
          <ProductTable products={filteredList}/>
        </Container>
      </>
    )
  }
}

export default App;
