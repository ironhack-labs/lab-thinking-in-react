import React from "react";

const CheckboxFilter = (props) => {
    let handleClick = props.handleClick;

    return (
        <form className="uk-search">
            <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                <label><input className="uk-checkbox uk-margin-small-right" type="checkbox" onClick={handleClick}/>Only show products on stock</label>
            </div>

        </form>
    )
}

export default CheckboxFilter;


