import React from 'react'

const Company = ({ company }) => {
    return (
        <div className="company">
            <h2>Company</h2>
            <h3>Name: {company.name}</h3>
            <h3>catchPhrase: {company.catchPhrase}</h3>
            <h3>BS: {company.bs}</h3>
        </div>
    )
}

export default Company
