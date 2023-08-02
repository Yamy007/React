import axios from 'axios'

export const api = axios.create({
	baseURL: 'http://owu.linkpc.net/carsAPI/v1/',
})
