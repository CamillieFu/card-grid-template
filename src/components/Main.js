import React from 'react'
import Card from './Card'
import data from '../data.js'

export default function Main() {
    const cardComponents = data.map((animal) => {
        return <Card
            key={data.indexOf(animal)}
            name={animal.name}
            age={animal.age}
            src={`https://source.unsplash.com/random/?${animal.src}`}
        />
    })

    return (
        <div className="card-container">
            {cardComponents}
        </div>
    )
}
