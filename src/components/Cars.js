import React, { Component } from 'react'
import { api } from '../api/api'
import Car from './Car'
export default class Cars extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cars: [],
		}
	}
	componentDidMount() {
		const fetchData = async () => {
			try {
				const response = await api.get('cars')
				this.setState({ cars: response.data })
			} catch (err) {
				console.log(err)
			}
		}
		fetchData()
	}
	render() {
		return (
			<div>
				{this.state.cars.map(elem => (
					<Car key={elem.id} data={elem} />
				))}
			</div>
		)
	}
}
