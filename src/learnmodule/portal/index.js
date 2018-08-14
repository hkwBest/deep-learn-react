import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import Modal from './modal'

export default class Portal extends Component {
	constructor(props) {
		super(props)
	}
	handleClick = () => {
		alert('11')
	}
	render() {
		return (
			<div className="parent" onClick={this.handleClick}>
				<p>hello this is a portal example!</p>
				<Modal>
					<div className="modal-box">
						{/* 类名为 modal-box的元素虽然被‘传送’到了别的DOM节点中
                         但它的行为与定义它时保持一致（相当于仍然在 父元素中-类名为parent的元素）  */}
						<p>I'm a portal in the ele with id of portal-container</p>
						<button>click</button>
                        {/* 由于它的行为与定义它时保持一致 所以按钮的点击事件仍然会冒泡到父元素  */}
					</div>
				</Modal>
			</div>
		)
	}
}
