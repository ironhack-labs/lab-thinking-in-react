const ProductRow = ({ name, category, inStock, price }) => {

    return (
        <>
            <hr />
            <div className="col-md-6">
                <p>{name}</p>
            </div>
            <div className="col-md-6">
                <p>{price}</p>
            </div>
        </>
    )
}

export default ProductRow