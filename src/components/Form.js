import React, { useRef } from 'react'

const Form = () => {
    const name = useRef(null)
    const email = useRef(null)
    const body = useRef(null)

    const handelClick = e => {
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                data: {
                    name: name.current.value,
                    email: email.current.value,
                    body: body.current.value,
                },
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }

    return (
        <div>
            <form onSubmit={handelClick}>
                <br />
                <input type="text" placeholder="comment" ref={name} />
                <br />
                <input type="text" placeholder="info" ref={email} />
                <br />
                <input type="text" placeholder="info" ref={body} />
                <br />
                <button type="submit">Submit</button>
                <br />
            </form>
        </div>
    )
}

export default Form
