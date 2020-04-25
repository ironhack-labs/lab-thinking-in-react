import React, {Component} from "react"


export default class SearchBar extends Component{

render(     { handleChange} = this.props) {

    return(
        <div className="uk.margin">
            <div className="uk-inline">
                
                <span className="uk-form-icon" uk-icon="icon:user">          </span>
                <input className="uk-input" type="text" onChange={handleChange} />
            </div>
        </div>
    )
}
}


