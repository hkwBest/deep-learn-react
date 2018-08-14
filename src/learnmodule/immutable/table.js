import React, { Component, PureComponent } from 'react'
import Tr from './tr'

export default class Table extends PureComponent {
	constructor(props) {
		super(props)
	}

	render() {
		const $$tableData = this.props.$$data
		return (
			<div className="zent-table ">
				<div className="thead">
					<div className="stickrow tr">
						<div className="cell">
							<div className="cell__child-container">商品</div>
						</div>
						<div className="cell">
							<div className="cell__child-container">
								<a>访问量</a>
							</div>
						</div>
						<div className="cell cell--money cell--center">
							<div className="cell__child-container">
								<a>
									库存<span className="desc" />
								</a>
							</div>
						</div>
						<div className="cell">
							<div className="cell__child-container">
								<a>总销量</a>
							</div>
						</div>
						<div className="cell">
							<div className="cell__child-container">
								<a>操作</a>
							</div>
						</div>
					</div>
				</div>
				<div className="tbody">
					{$$tableData.map(($$item) => {
						return <Tr onChange={this.props.onChange} $$data={$$item} key={$$item.get('item_id')} />
					})}
				</div>
			</div>
		)
	}
}
