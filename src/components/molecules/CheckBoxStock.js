import React from 'react';

// importing styles
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

function CheckBoxStock(props) {

    let stockHandler = (event) => {
        let currentInputValue = event.target.checked

        props.onStockCallback(currentInputValue)
    }

    return (
        <div className="mb-3">
            <form>
                <input name="checkBox" type="checkbox" onChange={stockHandler} className="checkbox"></input> <label>Only show items in stock</label>
            </form>
        </div>
    )
}

export default CheckBoxStock;