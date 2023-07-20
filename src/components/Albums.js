import React, { useEffect, useState } from 'react';

const Albums = () => {
    const [album, setAlbum] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/albums`)
            .then(value => value.json())
            .then(value => setAlbum(value))
    },[])
    return (
        <div className='grid'>
            {album?.map(value => (
                <div key = {value.id} className='wrapper'>
                    <h1>ID: {value.id}</h1>
                    <h2>Title: {value.title}</h2>
                </div>
            ))}
        </div>
    );
}

export default Albums;


// albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums