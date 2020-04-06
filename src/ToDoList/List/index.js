import React, { Component } from 'react'
import PropTypes from 'prop-types'

class List extends Component {

	// shouldComponentUpdate(nextProps) {
	// 	// console.log("before", this.props.list.length)
	// 	// console.log("after", nextProps.list.length)
	// 	// console.log(nextProps.list.length !== this.props.list.length)
	// 	if (nextProps.list.length !== this.props.list.length) {
	// 		return true
	// 	}
	// 	return false
	// }

	render() {
		const { handelItemClick, list } = this.props
		return (
			<ul>{
				list.map((item, index) => {
					return (
						<li
							key={item.id}
							onClick={() => handelItemClick(index)}
						>
							{item.item}
						</li>
					)
				})}
			</ul>
		)
	}

	// handelItemClick(index) {
	// 	return this.props.handelItemClick(index)
	// }
}
List.propTypes = {
	list: PropTypes.array,
	handelItemClick: PropTypes.func
}

export default List