import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Clock from './Clock/'
import Input from './Input/'
import List from './List/'
import Login from './Login/'

class ToDoList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			list: [],
			inputValue: '',
		}

		this.handelFormSubmit = this.handelFormSubmit.bind(this)
		this.handelInputChange = this.handelInputChange.bind(this)
		this.handelItemClick = this.handelItemClick.bind(this)
	}

	render() {
		return (
			<Fragment>
				<Login />
				<Clock />
				<Input
					inputValue={this.state.inputValue}
					handelInputChange={this.handelInputChange}
					handelFormSubmit={this.handelFormSubmit}
				/>
				<List
					list={this.state.list}
					handelItemClick={this.handelItemClick}
				/>
			</Fragment>
		)
	}

	// ajax请求服务器数据
	componentDidMount() {
		axios.get('http://localhost:9999/api/todolist')
			.then((res) => {
				this.setState(() => ({
					list: res.data
				}))
			})
			.catch(() => console.log("获取远程数据失败"))
	}

	handelInputChange(e) {
		let inputValue = e.target.value
		this.setState(() => ({
			inputValue
		}))
	}

	handelFormSubmit(e) {
		e.preventDefault()
		if (!this.state.inputValue) return
		let newItem = { id: Date.now(), item: this.state.inputValue }
		this.setState((prevState) => ({
			list: [...prevState.list, newItem],
			inputValue: ""
		}))
		e.target.focus()
	}

	handelItemClick(index) {
		this.setState((prevState) => {
			let list = prevState.list
			list.splice(index, 1)
			return { list }
		})
	}
}

export default ToDoList