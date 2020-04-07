import React, { Component } from 'react'
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
	render() {
		return (
			<>
				<Input
					placeholder="Todos.."
					value={this.props.inputValue}
					style={{ width: 300 }}
					onChange={this.props.handleInputChange}
				/>
				<Button
					type="primary"
					onClick={this.props.handleButtonClick}
				>提交</Button>
				<List
					style={{ width: "300px" }}
					bordered
					dataSource={this.props.list}
					renderItem={(item, index) => (
						<List.Item
							onClick={() => this.props.handleItemClick(index)}
						>
							{item}
						</List.Item>
					)}
				/>
			</>
		)
	}
}

export default TodoListUI