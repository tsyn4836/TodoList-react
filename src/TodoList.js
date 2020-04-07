import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store/'
import {
	getChangeInputValueAction,
	getAddTodoItemAction,
	getDeleteTodoItemAction
} from './store/actionCreator'
import TodoListUI from './TodoListUI';

class TodoList extends Component {

	constructor(props) {
		super(props)
		this.state = store.getState()

		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleStoreChange = this.handleStoreChange.bind(this)
		this.handleButtonClick = this.handleButtonClick.bind(this)
		this.handleItemClick = this.handleItemClick.bind(this)

		store.subscribe(this.handleStoreChange)

	}

	render() {
		return (
			<TodoListUI
				inputValue={this.state.inputValue}
				list = {this.state.list}
				handleInputChange={this.handleInputChange}
				handleButtonClick={this.handleButtonClick}
				handleItemClick={this.handleItemClick}
			/>
		)
	}

	handleInputChange(e) {
		const action = getChangeInputValueAction(e.target.value)
		store.dispatch(action)
	}

	handleStoreChange() {
		this.setState(store.getState())
	}

	handleButtonClick(e) {
		const action = getAddTodoItemAction()
		store.dispatch(action)
	}
	handleItemClick(index) {
		const action = getDeleteTodoItemAction(index)
		store.dispatch(action)
	}
}

export default TodoList