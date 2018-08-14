import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Portal from './learnmodule/portal/index'
import NewCom from './learnmodule/HOC/index'
import RenderProps from './learnmodule/renderProps/index'
import Immutable from './learnmodule/immutable/index'

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <Portal /> */}
				{/* <NewCom name='tom' /> */}
				{/* <RenderProps /> */}
				{/* <SetState /> */}
				<Immutable />
			</div>
		)
	}
}

export default App
