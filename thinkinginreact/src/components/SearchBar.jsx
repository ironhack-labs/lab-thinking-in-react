import React from 'react'


const SearchBar = ({onChange}) => {
        return (
            <div>
                <form >
                <input onChange={onChange} name="buscar" type="text" placeholder="Buscar..." />
                </form>
            </div>
        )
}

export default SearchBar