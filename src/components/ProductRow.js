import React from 'react'

export default function ProductRow({search}) {
    
    console.log('product row', search)

    return (
        <div className='border border-secondary rounded mx-4 mb-4 bg-white modal-scrollable-area'>
        {
            search.map(e => {
                return(
                    <div className={!e.stocked?'text-danger':''}>
                        <div className='d-flex justify-content-around border-bottom'>
                            <div className='d-flex justify-content-start' style={{width: '100px'}}>
                                <p>{e.name}</p>
                            </div>
                            <div className='d-flex justify-content-start' style={{width: '100px'}}>
                            <p>{e.price}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
            

        </div>
    )
}
