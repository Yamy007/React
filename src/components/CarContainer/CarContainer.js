import axios from 'axios'

import React, { useEffect, useState } from 'react'
import CarForm from '../CarForm/CarForm'
import Cars from '../Cars/Cars'
const CarContainer = () => {
    const [car, setCar] = useState()
    const [save, setSave] = useState(null)
    const [innit, setInnit] = useState({
        brand: '',
        price: '',
        year: '',
    })
    useEffect(() => {
        axios.get(`http://owu.linkpc.net/carsAPI/v1/cars`).then(res => {
            setCar(res.data)
        })
    }, [save])

    const carDelete = id => {
        axios.delete(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`).then(res => {
            console.log(res)
            console.log(res.data)
            setSave(prev => !prev)
        })
    }

    const carUpdate = (id, brand, price, year) => {
        setInnit({ brand: 'brand', price: 'price', year: 'year' })
    }
    return (
        <div>
            <CarForm setSave={setSave} setInnit={setInnit} innit={innit} />
            {car?.map(value => (
                <div key={value.id}>
                    <Cars car={value} />
                    <button onClick={() => carDelete(value.id)}>Delete</button>
                    <button
                        onClick={() => carUpdate(value.id, value.brand, value.price, value.year)}
                    >
                        Update
                    </button>
                </div>
            ))}
        </div>
    )
}

export default CarContainer
