import React, { Component } from 'react'

export default class SearchBar extends Component {

    handleChange = event => {
        console.log('rodger rodger')
        this.props.setSearch (event.target.value)
    }   

    handleStockCheckBox = event => {
        console.log(`handle event result: ${event.target.checked}`)
        this.props.setShowOnlyInStock (event.target.checked)
        
    }

    render() {
        return (
            <div>
                <label htmlFor="search">
                <input 
                    type ="text" 
                    name ="search" 
                    id= "search" 
                    placeholder= "Search for a product.." 
                    value= {this.props.search}
                    onChange= {this.handleChange} 
                    class="searchBar"
                />
            </label> 
            <br/> <br/>
            <label htmlFor="stockIn"> Show only items in-stock? 
                <input 
                    type="checkbox"
                    name="stockIn"
                    id="stockIn"
                    checked={this.props.onlyInStock}
                    onChange={this.handleStockCheckBox}
                />
            </label>

            </div>
        )
    }
}


// label htmlFor="student">Student</label>
//             <input
//               type="checkbox"
//               name="student"
//               id="student"
//               checked={this.state.student}
//               onChange={this.handleStudents}
//             // onChange={this.handleCheckboxChange}
//             />