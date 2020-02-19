import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faBan } from '@fortawesome/free-solid-svg-icons'


export default function Availability({inStock}) {

    return (
        <>
            {inStock ? <FontAwesomeIcon icon={faCheckCircle}/> : <FontAwesomeIcon icon={faBan}/>}
        </>
    )
}
