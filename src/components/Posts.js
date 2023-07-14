import React, { useEffect, useState } from 'react'
import style from './Posts.module.css'
const Post = () => {
    const [show, setShow] = useState(null)
    const [post, setPost] = useState(null)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(value => value.json())
            .then(value => setPost(value))
    }, [])

    return (
        <div>
            {post?.map(value => (
                <div className={style.wrapper} key={value.id}>
                    <h2>Id: {value.id}</h2>
                    <h3>Title: {value.title}</h3>
                    {show === value && (
                        <div className="description">
                            <h2>User ID: {value.userId}</h2>
                            <h3>Body: {value.body}</h3>
                        </div>
                    )}
                    <button onClick={() => (show ? setShow(null) : setShow(value))}>
                        Show more post
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Post
