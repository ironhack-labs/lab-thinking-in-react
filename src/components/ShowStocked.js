import React from 'react'

export default function ShowStocked(props) {
    console.log('show',props.productStock)
    return (
        <div className=' p-1 bg-light-gray'>
            <input 
            type='checkbox'
            value='clicked'
            onChange={() => props.onChange(!props.productStock)}
            />
            <label className='ml-2'>Only show products in stock</label>
        </div>
    )
}
