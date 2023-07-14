import React from 'react'
import Company from './UserComponent/Company'
import UserAddress from './UserComponent/UserAddress'
import UserDetails from './UserComponent/UserDetails'
const Users = ({ user }) => {
    return (
        <>
            {user?.map(value => (
                <div key={value.id}>
                    <UserDetails user={value} />
                    <UserAddress address={value.address} />
                    <Company company={value.company} />
                </div>
            ))}
        </>
    )
}

export default Users
