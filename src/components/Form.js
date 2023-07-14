import React, { useEffect, useState } from 'react'
import style from './Form.module.css'
const Form = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    useEffect(() => {
        console.log('email :', email)
        console.log('password :', password)
    }, [email, password])

    const handleClick = e => {
        e.preventDefault()
        fetch(`http://jsonplaceholder.typicode.com/users`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                data: { email: email, password: password },
            }),
        })
            .then(value => value.json())
            .then(value => console.log(value))
    }
    return (
        <div>
            <form onSubmit={handleClick} className={style.wrapper}>
                <input
                    type="text"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
