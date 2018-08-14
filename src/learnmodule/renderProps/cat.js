import React, { Component } from 'react'

export default class Cat extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		const left = this.props.mouse.x
		const top = this.props.mouse.y
		return (
			<div className="cat" style={{ top, left }}>
				this is a cat!
			</div>
		)
	}
}