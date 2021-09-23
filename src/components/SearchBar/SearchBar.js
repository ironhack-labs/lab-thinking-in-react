import React from "react"
import { FormControl, InputGroup } from "react-bootstrap"

class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchValue: '',
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })

        this.props.displayTable(this.state.searchValue)
    }


    render() {
        return (
            <nav>
                <InputGroup className='mb-3 mt-4'>
                    <FormControl
                        onChange={this.handleChange}
                        name="searchValue"
                        value={this.state.searchValue}
                        placeholder="Buscar por nombre..."
                        aria-label="buscar"
                    />
                </InputGroup>
            </nav>
        )
    }
}

export default SearchBar