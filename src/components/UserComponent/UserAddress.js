import React from 'react'

const UserAddress = ({ address }) => {
    return (
        <div>
            <h2>Address</h2>
            <h3>Street: {address.street}</h3>
            <h3>City: {address.city}</h3>
            <h3>Suite: {address.suite}</h3>
            <h3>Zipcode: {address.zipcode}</h3>
        </div>
    )
}

export default UserAddress
