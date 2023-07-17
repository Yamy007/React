import React from 'react'

const Cars = ({ car }) => {
    const { id, brand, price, year } = car
    return (
        <div>
            <h2>Id: {id}</h2>
            <h2>Brand: {brand}</h2>
            <h2>Price: {price}</h2>
            <h2>Year: {year}</h2>
        </div>
    )
}

export default Cars
