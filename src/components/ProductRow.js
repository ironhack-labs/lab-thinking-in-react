function ProductRow (props) {
    return(
        <div>
            {props.inStock ? <span>{props.name}</span> : <span style={{color:'red'}}>{props.name}</span>}
            <span>{props.price}</span>
        </div>
    );
};

export default ProductRow;