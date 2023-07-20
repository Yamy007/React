import React, { useEffect, useState } from 'react';

const Comments = () => {
    const [comments, setComments] = useState([])
    const [post, setPost] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then(value => value.json())
            .then(value => setComments(value))
    },[])

    const onClick = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(value => value.json())
            .then(value => setPost(value))
    }
    console.log(post)
    return (
        <div className='main'>

                {post && <div className='com'>
                    <h2>ID: {post.id}</h2>
                    <h2>Title: {post.title}</h2>
                    <h2>Body: {post.body}</h2></div>}
      
                <div className='container'>
                    {comments?.map(value => (
                      
                        <div key = {value.id} className='box'>
                            <h2>Id: {value.id}</h2>
                            <h2>PostId: {value.postId}</h2>
                            <h2>Name: {value.name}</h2>
                            <h2>Email: {value.email}</h2>
                            <h2>Body: {value.body}</h2>
                            <button onClick={()=>onClick(value.postId)}>Show current post</button>
                        </div>
                    ))}
                 </div>

                    
        
        
        </div>
    );
}

export default Comments;


// comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
