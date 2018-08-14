import React, { Component } from 'react'
import { createPortal } from 'react-dom'
const container = document.getElementById('portal-container')

export default class Modal extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return createPortal(this.props.children, container)
	}
}
