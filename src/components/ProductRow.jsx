 
 function ProductRow(props){
    const { products, setProducts } = props
    const copyOfArray = [...products]


    return(
        
        copyOfArray.map((product, index)=>{
            return <tr className={index%2===0? "blue" : "gray"} key={product.id}>
            {product.inStock 
                ? <td >{product.name}</td>
                : <td className="red">{product.name}</td>
            }
                
                <td>{product.price}</td>
            </tr>
        })
    )
 }

 export default ProductRow