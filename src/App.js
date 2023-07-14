import { useState } from 'react'
import './App.css'
import UsersComponent from './components/UsersComponent'

function App() {
    const [post, setPost] = useState([])
    console.log(post)
    return (
        <div className="App">
            <UsersComponent setPost={setPost} />
            <div>
                {post &&
                    post?.map(value => (
                        <div key={value.id}>
                            <h2>User id: {value.id}</h2>
                            <h2>Title: {value.title}</h2>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default App

//todo

// state lifting
// Є компонента Арр. В середині неї є UsersComponent, який отримує наданні з https://jsonplaceholder.typicode.com/users
// Кожен юзер - окрема компонента UserComponent,в якій є кнопка show posts, при натисканні на яку робиться state lifting, а саме - в компоненті App відображаються пости того юзера, на кнопку якого клікнули.
