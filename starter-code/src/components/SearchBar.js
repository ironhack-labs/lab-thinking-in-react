import React, { Component } from "react"


class SearchBar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      product: ''
    }
  }

  handleChange = e => {
    let { name, value } = e.target
    this.setState({ [name]: value }, () => {
      this.props.filter(this.state.product)
    })

  }


  render() {
    return (
      <form>
        <label> Search <br></br>
          <input type="text" name="product" value={this.state.product} onChange={(e) => this.handleChange(e)} />
        </label>
      </form>
    )
  }
}


export default SearchBar