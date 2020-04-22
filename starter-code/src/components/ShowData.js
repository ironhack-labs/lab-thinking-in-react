import React, {Component} from 'react';


class ShowData extends Component {

  render(){
    const {data} = this.props

    return (
      <div>
        {data.map((product, index)=>{
          return (<div key={product.name}>
                    {product.name} - {product.price}
                  </div>
                )  
        })
        }
      </div>
    )
  }
}

export default ShowData