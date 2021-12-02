import React, {Component} from 'react'


class SearchBar extends Component {
    constructor() {
        super()
         this.state = {
             product: "",
             instock: false
         }
        
    }

    handleOnChange = (e) => {
        let { name, value } = e.currentTarget

        this.setState({
            [name]: value

        })

        this.props.searchFunction(value)
    }

    checkerino = (e) => {
        let { name, checked } = e.currentTarget

        this.setState({
            [name]: checked
        })
        this.props.checkFunction(checked)
    }


        render() {
            return(
            <>
            <input type="checkbox" name="instock" onChange={this.checkerino} />
            <label>
                <input name="product" value={this.state.product} onChange={this.handleOnChange}></input>
            </label>
            </>
            )
        }

  

}

export default SearchBar