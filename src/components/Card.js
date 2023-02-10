import React from 'react'
import '../assets/card.css'

export default function Card(props) {
    return (
        <div className="card">
            <img
                className="card-img"
                src={props.src}
                alt="animal"
            />
            <p className="animalName bold">{props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}
