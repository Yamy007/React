import React, { Component } from 'react'
import Comment from './Comment'
import { api } from '../api/api'
export default class Comments extends Component {
	constructor(props) {
		super(props)
		this.state = {
			comments: [],
		}
	}

	componentDidMount() {
		const fetchData = async () => {
			try {
				const response = await api.get('comments')
				console.log(response.data)
				this.setState({ comments: response.data })
			} catch (err) {
				console.log(err)
			}
		}
		fetchData()
	}

	render() {
		return (
			<>
				{this.state.comments.map(elem => (
					<Comment key={elem.id} data={elem} />
				))}
			</>
		)
	}
}
