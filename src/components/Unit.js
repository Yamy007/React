import React from 'react'
import style from './Unit.module.css'
const Unit = ({ id, name, status, species, gender, image }) => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h2>ID: {id}</h2>
                <h2>Name: {name}</h2>
                <h2>Status: {status}</h2>
                <h2>Species: {species}</h2>
                <h2>Gender: {gender}</h2>
            </div>

            <img src={image} alt={name} className={style.image} />
        </div>
    )
}

export default Unit
