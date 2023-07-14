import React from 'react'

const UserDetails = ({ user }) => {
    return (
        <div>
            <h2>Info</h2>
            <h3>Id: {user.id}</h3>
            <h3>Name: {user.name}</h3>
            <h3>Username: {user.username}</h3>
            <h3>Email: {user.email}</h3>
            <h3>Phone: {user.phone}</h3>
        </div>
    )
}

export default UserDetails
