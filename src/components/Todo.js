import React, { useEffect, useState } from 'react';
const Todo = () => {
    const [todo, setTodo] = useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(value=>value.json())
            .then(value=>setTodo(value))
    },[])

    return (
        <div  className='grid'>
            {todo?.map(value =>
                <div key = {value.id}   className="wrapper">
                    <h2>Id: {value.id}</h2>
                    <h2>Title: {value.title}</h2>
                    <h2>Complete: {(value.completed).toString()}</h2>
                </div>
                )}
        </div>
    );
}

export default Todo;


// todos - при переході на який тягнуться всі todo з https://jsonplaceholder.typicode.com/todos
