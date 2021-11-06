import React from 'react'

export default function Title(props) {
    return (
        <div  className='titleWrapper'>
            <h1 className='serviseTitle'>
                {props.title}
            </h1>
        </div>

    )
}
