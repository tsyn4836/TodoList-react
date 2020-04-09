import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store/'
import TodoListUI from './TodoListUI';
import {
	getTodoList,
	getChangeInputValueAction,
	getAddTodoItemAction,
	getDeleteTodoItemAction
} from './store/actionCreator'

class TodoList extends Component {

	constructor(props) {
		super(props)
		this.state = store.getState()

		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleStoreChange = this.handleStoreChange.bind(this)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
		this.handleItemClick = this.handleItemClick.bind(this)

		this.inputRef = React.createRef()

		store.subscribe(this.handleStoreChange)
	}

	render() {
		return (
			<TodoListUI
				inputValue={this.state.inputValue}
				list={this.state.list}
				handleInputChange={this.handleInputChange}
				handleFormSubmit={this.handleFormSubmit}
				handleItemClick={this.handleItemClick}
				inputRef={this.inputRef}
			/>
		)
	}

	componentDidMount() {
		// axios.get("http://localhost:9999/api/todolist2")
		// 	.then(res => {
		// 		const data = res.data
		// 		console.log(data)
		// 		const action = getInitListAction(data)
		// 		store.dispatch(action)
		// 	})

		const action = getTodoList()
		store.dispatch(action)
	}

	handleInputChange(e) {
		const action = getChangeInputValueAction(e.target.value)
		store.dispatch(action)
	}

	handleStoreChange() {
		this.setState(store.getState())
	}

	handleFormSubmit(e) {
		e.preventDefault()
		if (!this.state.inputValue) return
		const action = getAddTodoItemAction(e)
		store.dispatch(action)
		this.inputRef.current.focus()
	}
	handleItemClick(index) {
		const action = getDeleteTodoItemAction(index)
		store.dispatch(action)
	}
}

export default TodoList