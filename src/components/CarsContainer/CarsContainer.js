import React, { useEffect, useState } from 'react'
import Car from '../Car/Car'
import CarForm from '../CarForm/CarForm'

const CarsContainer = () => {
    const [cars, setCars] = useState()
    const [save, onSave] = useState(null)
    useEffect(() => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars`)
            .then(value => value.json())
            .then(value => setCars(value))
    }, [save])

    const carDelete = id => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, { method: 'DELETE' }).then(() =>
            onSave(prev => !prev)
        )
    }
    return (
        <div>
            <CarForm onSave={onSave} />
            {cars?.map(value => (
                <div key={value.id}>
                    <Car car={value} />
                    <button onClick={() => carDelete(value.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default CarsContainer
