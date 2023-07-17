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
        axios.post(`https://jsonplaceholder.typicode.com/comments`, data).then(res => {
            console.log(res)
            console.log(res.data)
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">
                    name
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
                <label htmlFor="email">
                    email
                    <input
                        type="text"
                        {...register('email', {
                            required: 'Name is required',
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+.[a-z]{2,3}/,
                                message: 'Invalid email',
                            },
                        })}
                    />
                </label>
                <label htmlFor="body">
                    body
                    <input
                        type="text"
                        {...register('body', {
                            required: 'Body is required',
                            pattern: {
                                value: /^.{3,255}$/,
                                message: 'Invalid Body',
                            },
                        })}
                    />
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default Form
