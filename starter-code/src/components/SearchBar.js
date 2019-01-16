import React from "react"

export const SearchBar = ({children,func}) =>{
    return(
        <div>
            <input value={children} onChange={(e)=>func[0](e)}/>
            <input type="checkbox" onClick={(e)=>{func[1](e)}}/>
        </div>
    )
}