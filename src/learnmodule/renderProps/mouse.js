import React, { Component } from 'react'

export default class Mouse extends Component {
	constructor(props) {
		super(props)
		this.state = {
			x: 0,
			y: 0
		}
	}
    handleMOuseOver=(e)=>{
        console.log(e.clientX,e.clientY);
        this.setState({
            x: e.clientX,
            y: e.clientY,
        })
    }
	render() {
		return (
			<div style={{ width: '100%', height: '100%' }} onMouseOver={this.handleMOuseOver}>
				{this.props.content(this.state)}
				{/* {this.props.render(this.state)} */}
			</div>
		)
	}
}
