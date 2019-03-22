import React from 'react'

export default function ProductRow(props) {
  return (
    <section className="product">
      <p className="name">{props.name} {props.price}</p>
    </section>
  )
}
