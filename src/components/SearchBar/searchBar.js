import React, {Component} from 'react'

class SearchBar extends Component {
    constructor (){
        super ()
        this.state = {
            name: '',
        }
    }

    handleFormSubmit = e => {
        //e.preventDefault()
        console.log('termino busqueda', this.state.name)

    }

    handleInputChange = e => {
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value
        this.setState({ [name]: value })
        this.props.search(this.state.name)
        // this.setState({
        //    name: '',
        // })
        console.log('termino ', name)


    }

    render () {
        return (
            <>
                <form onSubmit={this.handleInputChange}>
                    <input type="text" name='name' value={this.state.name} onChange={this.handleInputChange}/>
                </form>
            </>
        )
    }
}

export default SearchBar