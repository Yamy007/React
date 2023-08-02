import { Component } from 'react'

class Car extends Component {
	render() {
		const { id, brand, price, year } = this.props.data
		return (
			<div>
				<div>id: {id}</div>
				<div>brand: {brand}</div>
				<div>price: {price}</div>
				<div>year: {year}</div>
			</div>
		)
	}
}

export default Car
