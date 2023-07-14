import React, { useContext } from 'react'
import { AppData } from '../../App'
const SubChild22 = () => {
    const [value, setValue] = useContext(AppData)
    setValue('newValue')
    return <div></div>
}

export default SubChild22
