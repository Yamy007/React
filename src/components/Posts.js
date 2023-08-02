import React, { Component } from 'react'
import api from '../api/api'
import Post from '../components/Post'
export default class Posts extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
		}
	}
	componentDidMount() {
		this.fetchData()
	}

	fetchData = async () => {
		try {
			const data = await api.get('posts')
			this.setState({ data: data.data })
		} catch (e) {
			console.log(e)
		}
	}

	render() {
		return (
			<div>
				{this.state.data.map(elem => (
					<Post key={elem.id} data={elem} />
				))}
			</div>
		)
	}
}
