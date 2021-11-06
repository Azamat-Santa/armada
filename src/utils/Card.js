import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
        <div className="homeCardImg">
            <img src={props.cardImg} alt="" />
        </div>
        <div className="homeCardText">{props.text}</div>
        <div className="homeCardPrice">{props.textTwo}</div>
    </div>
    )
}
