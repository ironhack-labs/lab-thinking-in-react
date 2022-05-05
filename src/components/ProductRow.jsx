const ProductsRow = ({ name, price }) => {
    return (
        <div className="table" >
            <p>{name}</p>
            <p>{price}</p>
        </div>



    )
}

export default ProductsRow