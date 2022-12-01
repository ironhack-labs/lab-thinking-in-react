import { useState } from "react"
import jsonData from './../../data.json';
import SearchBar from "../SearchBar/SearchBar"

const ThinkingList = () => {

    const [thinkingData, setThinkingData] = useState(jsonData)
    const [product, setThinking] = useState(jsonData)

    
    const FilterProduct = initialString => {
   
        if (initialString === 'All') {
            setThinking(thinkingData)
        } else {
            const filteredProduct = thinkingData.filter(elm => elm.name.startsWith(initialString))
           
            setThinking(filteredProduct)
        }
    }


    return (
        <section>
            <h2>Listado de Productos</h2>

            <hr />

            <SearchBar FilterProduct={FilterProduct} />
            {product.map((product) => {
                return (
           
                    <table>
                    <tr  key={product._id} className="product">
                        <td>{product.name}</td>
                        <td> {product.price}</td>
                        
                    </tr>
                    </table>
            
                );
            })}

           
                 
        </section>
    )
}

export default ThinkingList

