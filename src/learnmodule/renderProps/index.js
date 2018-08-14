import React, { Component } from 'react'
import Mouse from './mouse'
import Cat from './cat'

import './index.css'

export default class RenderProps extends Component {
	constructor(props) {
		super(props)
	}
	renderContent = (mouse) => {
		return <Cat mouse={mouse} />
	}
	render() {
        /* 
            记住仅仅是因为这一模式被称为 “render props” 而你不必为使用该模式而用一个名为 render 的 prop。
            实际上，组件能够知道什么需要渲染的任何函数 prop 在技术上都是 “render prop” 。
        */
		return <Mouse content={this.renderContent} />
		// return <Mouse render={this.renderContent} />
	}
}
