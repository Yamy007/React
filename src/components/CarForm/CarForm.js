import { useForm } from 'react-hook-form'
const CarForm = ({ onSave }) => {
    const form = useForm()
    const { register, handleSubmit } = form

    const onSubmit = data => {
        console.log(data)
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars`, {
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            body: {
                data: JSON.stringify(data),
            },
        })
            .then(value => value.json())
            .then(() => onSave(prev => !prev))
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">
                    Brand
                    <input type="text" {...register('brand')} />
                </label>
                <label htmlFor="">
                    Price
                    <input type="text" {...register('price')} />
                </label>
                <label htmlFor="">
                    Year
                    <input type="text" {...register('year')} />
                </label>
                <button type="submit">Save</button>
            </form>
        </>
    )
}

export default CarForm
