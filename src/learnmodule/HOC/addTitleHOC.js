import React, { Component } from 'react'

function getComName(com) {
	return com.displayName || com.name || 'HOCCom'
}

export default function costumTitle(title) {
	return function addTitle(OriginCom) {
		class NewCom extends Component {
			constructor(props) {
				super(props)
			}
			render() {
				const newProps = { type: 'HOC' }
				return (
					<div className="hoc-test">
						<p>{title}</p>
						<OriginCom {...this.props} newProps={newProps} />
					</div>
				)
			}
		}
		NewCom.displayName = `addTitle(${getComName(NewCom)})`
		return NewCom
	}
}
