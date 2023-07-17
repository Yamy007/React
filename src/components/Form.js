import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
const Form = () => {
    const form = useForm()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = form

    const onSubmit = data => {
        console.log(data)
        axios.post(`https://jsonplaceholder.typicode.com/users`, data).then(res => {
            console.log(res)
            console.log(res.data)
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Name
                    <input
                        type="text"
                        {...register('name', {
                            required: 'Name is required',
                            pattern: {
                                value: /^.{4,}$/,
                                message: 'Invalid name',
                            },
                        })}
                    />
                </label>
                <p>{errors.name?.message}</p>
                <label>
                    Email
                    <input
                        type="text"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+.[a-z]{2,3}/,
                                message: 'Invalid email',
                            },
                        })}
                    />
                </label>
                <p>{errors.email?.message}</p>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default Form
