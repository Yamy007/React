import { useEffect, useState } from 'react'
import './App.css'
import Users from './components/Users'

function App() {
    const [user, setUser] = useState(null)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(value => value.json())
            .then(value => setUser(value))
    }, [])
    return (
        <div className="App">
            <Users user={user} />
        </div>
    )
}

export default App

//todo

// property drill

// Структура:
// Головна компонента App. App робить запит на https://jsonplaceholder.typicode.com/users
// В середині Апп лежить компонента Users яка відображає всіх отриманих в апп юзерів з плейсхолдеру
// Кожен юзер - це компонента User, в якій є інші комоненти, а саме
// UserDetails - яка відображає інформацію id,name,username,email,phone,website,
// UserAddress - яка відображає інформацію street suite city,
// Company - яка відображає name,catchPhrase,bs
