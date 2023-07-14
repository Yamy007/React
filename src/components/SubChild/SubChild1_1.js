import React, { useContext } from 'react'
import { AppData } from '../../App'
const SubChild11 = () => {
    const [value, setValue] = useContext(AppData)

    return (
        <div>
            <h2>{value}</h2>
        </div>
    )
}

export default SubChild11
