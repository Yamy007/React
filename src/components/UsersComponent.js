import React, { useEffect, useState } from 'react'

const UsersComponent = ({ setPost }) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(value => value.json())
            .then(value => setUser(value))
    }, [])

    const handleClick = id => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(value => value.json())
            .then(value => setPost(value))
    }
    return (
        <div>
            {user?.map(value => (
                <div key={value.id}>
                    <h2>Name: {value.name}</h2>
                    <h2>Username: {value.username}</h2>
                    <h2>Email: {value.email}</h2>
                    <button onClick={() => handleClick(value.id)}>Show post</button>
                </div>
            ))}
        </div>
    )
}

export default UsersComponent
