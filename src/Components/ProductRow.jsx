function ProductRow(props) {

    return (

        <>
            {props.inStock ?
                <><td ><strong>{props.name}</strong></td><td>{props.price}</td></>
                : <><td className="red"><strong>{props.name}</strong></td><td>{props.price}</td></>}

        </>
    )
}

export default ProductRow