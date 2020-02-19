import React from 'react'

export default function SearchBar({inputHandler}) {
    return (
        <div>
            <form onChange={(e)=>inputHandler(e)}>
            <input name="search" className="input is-rounded is-hovered" type='text' placeholder="yo yo yo"></input>
            <div>
            <label>Only items in stock</label>
            <input className="checkbox" name="checkbox" type="checkbox"></input>
            </div>
            </form>
        </div>
    )
}
