import React, { Component } from 'react'

const Foodbox = ({foodbox}) => {
    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={foodbox.image} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{foodbox.name}</strong> <br />
                            <small>{foodbox.calories}</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input
                                className="input"
                                type="number"
                                value={foodbox.quantity}
                            />
                        </div>
                        <div className="control">
                            <button className="button is-info">
                                +
          </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Foodbox