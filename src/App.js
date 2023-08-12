import { TestUseMemo } from './components/TestUseMemo'
import './App.css'
import { useState } from 'react'

function App() {
	const [data, setData] = useState('innit')
	return (
		<div className='App'>
			<TestUseMemo data={data} />
		</div>
	)
}

export default App

//todo
