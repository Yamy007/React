import { DevTool } from '@hookform/devtools'
import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
    const form = useForm()
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = form

    const onSubmit = data => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                data: data,
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <br />
                <input
                    type="text"
                    placeholder="Enter your Name"
                    {...register('name', {
                        required: 'Form is required',
                        pattern: {
                            value: /^.{4,25}$/,
                            message: 'Invalid name',
                        },
                    })}
                />
                <p>{errors.name?.message}</p>
                <br />
                <input
                    type="text"
                    placeholder="Email address"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Invalid Email',
                        },
                    })}
                />
                <p>{errors.email?.message}</p>
                <br />
                <input
                    type="text"
                    placeholder="Enter you comment"
                    {...register('body', {
                        required: 'Body is required',
                        pattern: {
                            value: /^.{3,255}/,
                            message: 'Message must have more 3 characters and less 255',
                        },
                    })}
                />
                <p>{errors.body?.message}</p>
                <br />
                <button type="submit">Submit</button>
                <br />
            </form>
            <DevTool control={control} />
        </div>
    )
}

export default Form
