import React, { useEffect, useState } from 'react'
import style from './Space.module.css'
const Space = () => {
    const [space, setSpace] = useState(null)
    useEffect(() => {
        fetch(`https://api.spacexdata.com/v3/launches/`)
            .then(value => value.json())
            .then(value => setSpace(value))
    }, [])
    return (
        <>
            {space
                ?.filter(value => value.launch_year !== '2020')
                .map(value => (
                    <div className={style.wrapper} key={value.mission_name}>
                        <h2>Mission Name: {value.mission_name}</h2>
                        <h2>
                            Launch Year: <span className={style.span}>{value.launch_year}</span>
                        </h2>
                        <img src={value.links.mission_patch_small} />
                    </div>
                ))}
        </>
    )
}

export default Space
