import React, { Component } from 'react'
import costumTitle from './addTitleHOC'

class HOCTTest extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		console.log(this.props)
		let { newProps } = this.props
		return (
			<div>
				<div>新的属性是：‘type:{newProps.type}’</div>
				<div>this is content area!</div>
			</div>
		)
	}
}

const NewCom = costumTitle('costum title')(HOCTTest)
export default NewCom
