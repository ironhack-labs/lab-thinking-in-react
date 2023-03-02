import { useState } from "react"

const Checkbox = ({ handleCheckbox, showStock }) => {



    return (
        <form>
            <label>Only products in Stock </label>
            <input
                type="checkbox"
                name="hasOscars"
                checked={showStock}
                onChange={handleCheckbox}
            />
        </form>
    )
}

export default Checkbox