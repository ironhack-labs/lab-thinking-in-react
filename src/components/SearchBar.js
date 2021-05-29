import React from 'react'

export default function SearchBar(props) {

    console.log('search bar props:',props)
    console.log('props.onChange', props.onChange)
   
    return (
        <div className='border-0 bg-light-gray p-4 '>
        
            <input 
                className='searchbar pl-4 w-25'
                type='text'
                placeholder='Search Product..'
                onChange={(event) => props.onChange(event.target.value)}
            />
        </div>
    )
}
