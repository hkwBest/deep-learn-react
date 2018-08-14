import React, { Component } from 'react'
import { fromJS, Map } from 'immutable'
import Perf from 'react-addons-perf'
import { datasets, dataGenerate } from './data'
import Table from './table'

import './index.css'

window.Perf = Perf
class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			$$data: fromJS(datasets) //immutabble对象特殊的命名规则 用于区分普通对象和immutable对象
			/*  
                实验过程中遇到最大的问题就是: 
                    1、很难区分出普通对象和immutable对象
                    2、获取和设置属性值必须要用get/set方法，和原生的 . 操作有很大不同，操作起来比较麻烦
             */
		}
	}

	add = () => {
		let { $$data } = this.state
		let $$newData = $$data.push(Map(dataGenerate()))
		this.setState({ $$data: $$newData })
	}

	delete = () => {
		let { $$data } = this.state
		let $$newData = $$data.pop()
		this.setState({ $$data: $$newData })
	}

	onChange = (item_id, sold_num) => {
		let { $$data } = this.state
		let $$newData = $$data.map(($$item) => {
			if ($$item.get('item_id') == item_id) {
				return $$item.set('sold_num', sold_num)
			}
			return $$item
		})
		this.setState({ $$data: $$newData })
	}
	render() {
		let { $$data } = this.state
		return (
			<div className="App">
				<Table onChange={this.onChange} $$data={$$data} />
				<button onClick={this.add}>add</button>
				<button onClick={this.delete}>delete</button>
				<p className="tip">
					实验过程中遇到最大的问题就是: 1、很难区分出普通对象和immutable对象 2、获取和设置属性值必须要用get/set方法，和原生的 . 操作有很大不同，操作起来比较麻烦
				</p>
			</div>
		)
	}
}

export default App
