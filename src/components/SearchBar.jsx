import { useState } from 'react';

function search(original, query, check){
    const nameSearch = original.filter((product)=> 
         product.name.toUpperCase().includes(query.toUpperCase()))

    if(!check){
        return nameSearch
    }else{
        return nameSearch.filter((product)=> product.inStock)
    }
}


function SearchBar(props){
    const {setProducts, originalProducts} = props
    const [query, setQuery] = useState("")
    const [checked, setCheck] = useState(false)

    return(
        <div className="card">
            <div className="cardBody">
                <p>Search</p>
                <input type="text"
                    onChange={(e)=>{
                        setQuery(e.target.value)
                        const result = search(originalProducts, e.target.value, checked)
                        setProducts(result)
                    }
                }/>
                <div>
                    <label> Only show elements in stock</label>
                    <input type="checkbox" onChange={(e) => {
                        setCheck(e.target.checked)
                        const result = search(originalProducts, query, e.target.checked)
                        setProducts(result)
                    }
                    }
                    />
                </div>
            </div>
        </div>
        
    )
}

export default SearchBar