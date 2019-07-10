import React from 'react'

//export default class CheckBox extends Component {
export default function CheckBox(props) {

    return (
        <div className="column check-box">
            <label>  
            <input type="checkbox" name="checkbox"                 
                    onChange={(event) => {
                        console.log("event.target.checked----", event.target.checked)
                        props.HandleCheckbox(event.currentTarget.checked)}
                    }
                />
                Only show products on stock.
            </label>

        </div>
    )

}
