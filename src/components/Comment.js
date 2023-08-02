import React, { Component } from 'react'

export default class Comment extends Component {
	render() {
		const { id, postId, name, email, body } = this.props.data
		console.log(id, postId, name, email, body)
		return (
			<div style={{ border: '1px solid black', width: '45vw', margin: '7px' }}>
				<h2>Id: {id}</h2>
				<h2>PostId: {postId}</h2>
				<h2>Name: {name}</h2>
				<h2>Email: {email}</h2>
				<h2>Body: {body}</h2>
			</div>
		)
	}
}
