import React, {Component} from 'react'


class SearchBar extends Component {
   
    
    render(){
        const {onChange} = this.props
        return(
            <div>
                <div className="field columns ">
                    <div className="control column is-half is-offset-one-quarter">
                        <input onChange={onChange} className="input is-primary" type="text" placeholder="Search"/>
                        <div className="column is-half is-two-thirds">
                            <label className="checkbox">
                                <input type="checkbox"/>Only Show products in stock
                            </label>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default SearchBar