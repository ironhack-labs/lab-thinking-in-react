
import { useState } from "react"




function SearchBar({ filter, checkBox }) {
    //const [products, setProducts] = useState(jsonData);

    function handleInput(e) {
        filter(e.target.value)

    }

    function handleTick(e) {
        checkBox(e.target.checked)

    }


    return (


        <form>
            <div>
                <input type={"search"} placeholder={"PopiBusqueda"} onChange={handleInput}></input>
                <br />
                <span>in PopiSock</span><input type={"checkbox"} onClick={handleTick}></input>
            </div>





        </form>
    )
}

export default SearchBar