import React, { useEffect, useState } from 'react'
import Car from '../Car/Car'
import CarForm from '../CarForm/CarForm'

const CarsContainer = () => {
    const [cars, setCars] = useState()
    const [save, onSave] = useState(null)
    const [init, setInit] = useState({
        brand: '',
        price: '',
        year: '',
    })
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

    const update = (id, brand, price, year) => {
        setInit({ brand: brand, price: price, year: year })
        fetch(``)
    }
    return (
        <div>
            <CarForm onSave={onSave} init={init} />
            {cars?.map(value => (
                <div key={value.id}>
                    <Car car={value} />
                    <button onClick={() => carDelete(value.id)}>Delete</button>
                    <button
                        onClick={() => carDelete(value.id, value.brand, value.price, value.year)}
                    >
                        Update
                    </button>
                </div>
            ))}
        </div>
    )
}

export default CarsContainer
