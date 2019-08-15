import React, {Component} from "react"
import data from '../data.json'

class CheckBox extends Component {
    constructor(props){
        super(props)
        this.state= {
            theData: data.data,
            allData: data.data,
           
        }
    }

    toggleCheck = (e) => {
        console.log(e.target.checked, "HOLI")
        this.props.isInStock(e.target.checked)
    }

    render() {
        
        
        return (

        <input type="checkbox" onClick={(e)=>this.toggleCheck(e)} >
            
        </input>

        )

    }
}

export default CheckBox
  