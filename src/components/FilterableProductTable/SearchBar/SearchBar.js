import React, { Component } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap';


export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        }
       
    }


    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        }, () => this.props.filter(this.state.searchValue))

        
      }

    render() {
        return (
            <div>
               <InputGroup className='mb-3 mt-4'>
            <FormControl
              onChange={e => this.handleChange(e)}
              type='text'
              name='searchValue'
              value={this.state.searchValue}
              placeholder='Buscar por producto...'
              aria-label='buscar'
            />
          </InputGroup>
                
            </div>
        )
    }
}
