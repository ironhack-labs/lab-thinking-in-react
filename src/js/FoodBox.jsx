import React, { Component } from 'react'

const FoodBox = props => {
    return (
        <div className="box" key={props.index}>
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={props.image} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{props.name}</strong> <br />
          <small>{props.cals}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number" 
            value={props.quantity}
          />
        </div>
        <div className="control">
          <button className="button is-info" onClick={props.clickToSubmit}>
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
    )
}

export default FoodBox
