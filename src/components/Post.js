import React, { Component } from 'react'

export default class Post extends Component {
	render() {
		const { id, userId, title, body } = this.props.data
		console.log()
		return (
			<div>
				<h2>{id}</h2>
				<h2>{userId}</h2>
				<h2>{title}</h2>
				<h2>{body}</h2>
			</div>
		)
	}
}
