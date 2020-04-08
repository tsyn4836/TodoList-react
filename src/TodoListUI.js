import React from 'react'
import { Input, Button, List } from 'antd';

function TodoListUI(props) {
	return (
		<>
			<form onSubmit={props.handleFormSubmit}>
				<Input
					placeholder="Todos.."
					value={props.inputValue}
					style={{ width: 300 }}
					onChange={props.handleInputChange}
					ref={props.inputRef}
				/>
				<Button
					type="primary"
					htmlType="submit"
				>提交</Button>
			</form>
			<List
				style={{ width: "300px" }}
				bordered
				dataSource={props.list}
				renderItem={(item, index) => (
					<List.Item
						onClick={() => props.handleItemClick(index)}
					>
						{item}
					</List.Item>
				)}
			/>
		</>
	)
}

export default TodoListUI