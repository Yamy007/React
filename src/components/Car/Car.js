import React from 'react'

const Car = ({ car }) => {
    const { id, brand, price, year } = car
    return (
        <div>
            <div className="cart">
                <h2>ID: {id}</h2>
                <h3>Name: {brand}</h3>
                <h3>Price: {price}</h3>
                <h4>Year: {year}</h4>
            </div>
        </div>
    )
}

export default Car
