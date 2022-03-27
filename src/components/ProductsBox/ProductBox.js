import React from 'react';
import { useState} from 'react'

function ProductBox(props) {

    const { product } = props
    
  
    return (
      <>
      <div className="box">
        <article className="media">
          <div className="media-left">
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{product.name}</strong> <br />
                <small>{product.price} $</small>
              </p>
            </div>
          </div>
        </article>
      </div>
      </>
    );
  }
  
  export default ProductBox;