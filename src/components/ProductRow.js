function ProductRow (props) {

    // const [productData, setProductData] = useState(dataJson)
    // const productDataCopy = [...dataJson]
    // console.log(productDataCopy[0])

    // if (productDataCopy[0].inStock){
    // productDataCopy.forEach((i) => {
    //     productDataCopy[i].name.style={color:"red"}
    // })}

    // if (productDataCopy[0].inStock){
    //     console.log('OOOOOOOOOOOOKKKKKKKKKKKKKKKKKKKKK')
    // }


    // console.log(props.product.inStock)
    // {!props.product.inStock && props.product.name.style={color:red}}
    return(
        
        <div>           
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>                
        </div>
        
    )
}

export default ProductRow;