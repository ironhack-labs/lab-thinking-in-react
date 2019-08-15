import React from 'react'

const ProductRow = ({name,price }) =>
<div className="container">
    <div className="row">
<div className="col-md-6">
<h5>{name}</h5>
</div>

<div className="col-md-6">
<h5>{price}</h5>
</div>
<hr/>
    </div>
    </div>


export default ProductRow

