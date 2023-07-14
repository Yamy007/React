import { createContext, useState } from 'react'
import './App.css'
import Child1 from './components/Child/Child1'
import Child2 from './components/Child/Child2'

export const AppData = createContext(null)
function App() {
    const [value, setValue] = useState('defaultValue')
    return (
        <AppData.Provider value={[value, setValue]}>
            <div className="App">
                <Child1 />
                <Child2 />
            </div>
        </AppData.Provider>
    )
}

export default App

//todo
// context
// Зробити структуру компонентів -
//                               App
//           Child1                              Child2
// SubChild1_1    SubChild1_2          SubChild2_1    SubChild2_2

// Тепер завдання:
// З SubChild2_2 передати данні (будь-які) в SubChild1_1
